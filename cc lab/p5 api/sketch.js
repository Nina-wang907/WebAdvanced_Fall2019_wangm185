//when type the name of a pokemon, the gif image shows up and the type of pokemon shown
let input, button, question,Pokemon,giphy;

function setup() {
  
  
  // my canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(submit);

  question = createElement('h2', 'Pick up your Pokemon');
  question.position(20, 5);

  textAlign(LEFT);
  textSize(30);
  
}

function submit() {
  const name = input.value();
  question.html(name);
  input.value('');
  
  //load api
  Pokemon = 'https://pokeapi.co/api/v2/pokemon/'+name+ '/';
  giphy = 'https://api.giphy.com/v1/gifs/search?api_key=yoDDEGsANBX6RP9K89G4WjwqXY9t5e4H&q='+name+'&limit=25&offset=0&rating=G&lang=en';
  
  console.log(Pokemon,giphy);
  loadJSON(Pokemon,gotData);
  loadJSON(giphy,gotGif);

  
}
function gotData(pokemons){
  console.log(pokemons.types[0].type.name);
  let pokemonName = pokemons.types[0].type.name;
  fill(0);
  textSize(30);
  text(pokemonName,0, height, width, 30);
}

function gotGif(img){
  console.log(img.data[3].images.original.url);
  createImg(img.data[3].images.original.url);
}