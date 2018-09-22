function generate_colours() {
    var squares_array = [6];
    for (var i = 0; i < 6; i++){
        squares_array[i] = generate_colour();
    }
    return squares_array;
}

function generate_colour() {
    return "rgb(" + Math.floor(Math.random() * 255 + 1) + ", "
        + Math.floor(Math.random() * 255 + 1) + ", "
        + Math.floor(Math.random() * 255 + 1) + ")";
}

var colours = generate_colours();

squares = document.querySelectorAll('div.square');
chosen_colour = colours[Math.floor(Math.random() * 6)];
colour_display = document.querySelector('div.colourDisplay');
colour_display.textContent = chosen_colour;
header = document.querySelector('div.header');
message = document.querySelector('span.message');

squares.forEach( function(elem, i) {
   elem.style.backgroundColor = colours[i];
   elem.addEventListener("click", listener);
});

function listener(){
    curr = this.style.backgroundColor;
    if (curr === chosen_colour) {
        message.textContent = "Correct!";
        change_squares();
    } else {
        message.textContent = "Wrong!";
        this.style.backgroundColor = '#232323';
    }
}

function change_squares(){
    squares.forEach(function(elem){
       elem.style.backgroundColor = chosen_colour;
       elem.removeEventListener("click", listener);
    });
    header.style.backgroundColor = chosen_colour;
}
