diff = 6
var colours = [];
var chosen_colour;

var squares = document.querySelectorAll('div.square');
var colour_display = document.querySelector('div.colourDisplay');
var header = document.querySelector('div.header');
var message = document.querySelector('span.message');
var resetBtn = document.querySelector("#reset");
var difficulties = document.querySelectorAll('.diff');

function init() {
    for (var i = 0; i < difficulties.length; i++) {
        difficulties[i].addEventListener("click", function () {
            difficulties[0].classList.remove('selected');
            difficulties[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent == "Easy" ? diff = 3 : diff = 6;
            reset();
        });
    }

    resetBtn.addEventListener("click", reset);

    squares.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            curr = this.style.backgroundColor;
            if (curr === chosen_colour) {
                message.textContent = "Correct!";
                winner();
            } else {
                message.textContent = "Wrong!";
                this.style.backgroundColor = '#232323';
            }
        });
    });

    reset();
}

function generate_colours(x) {
    var squares_array = [x];
    for (var i = 0; i < x; i++) {
        squares_array[i] = generate_random_colour();
    }
    return squares_array;
}

function generate_random_colour() {
    return "rgb(" + Math.floor(Math.random() * 256) + ", "
        + Math.floor(Math.random() * 256) + ", "
        + Math.floor(Math.random() * 256) + ")";
}

function pick_colour(colour_arr) {
    return colour_arr[Math.floor(Math.random() * 6)];
}

function reset() {
    colours = generate_colours(diff);
    chosen_colour = pick_colour(colours)

    colour_display.textContent = chosen_colour;
    resetBtn.textContent = 'New Game';
    message.textContent = '';

    squares.forEach(function (elem, i) {
        if (colours[i]) {
            elem.style.backgroundColor = colours[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    });
}

function winner() {
    squares.forEach(function (elem) {
        elem.style.backgroundColor = chosen_colour;
    });
    resetBtn.textContent = "Play again?";
    header.style.backgroundColor = chosen_colour;
}

init();