let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    // Task: Align the text to the center using textAlign
    // Task: set font size to 20 using textSize
    yPos = 100;
}

function draw() {
    textSize(20)
    textAlign(LEFT, TOP)
    background('black')
    for(let i = 0; i < pokemons.length; i++) {
        text(pokemons[i], 50, 80 + i * 30);
    }

    fill("pink");
}