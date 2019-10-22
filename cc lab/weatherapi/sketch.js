//when type the name of a city, the gif image shows up and the temperature
let input, button, question,weatherapi,giphy;
// let weatherKey = 'a2045704d8d3df7142c4ef4767f0ea79';
let temperature;
function setup() {
  
  
  // my canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(submit);

  question = createElement('h2','Type the City');
  question.position(20, 5);

  textAlign(LEFT);
  textSize(30);

  // fill(0);
  // textSize(30);
  // text('temperature',50, 50);
  
}

function submit() {
  const name = input.value();
  question.html(name);
  input.value('');
  
  //load api
  weatherapi = 'http://api.openweathermap.org/data/2.5/weather?q='+ name +'&APPID=abb9f47a6652d704fa7497fa4c1b2fdd';
  giphy = 'https://api.giphy.com/v1/gifs/search?api_key=yoDDEGsANBX6RP9K89G4WjwqXY9t5e4H&q='+name+'&limit=25&offset=0&rating=G&lang=en';
  
  
  console.log(giphy);
  console.log(weatherapi);
  
  loadJSON(giphy,gotGif);
  loadJSON(weatherapi,gotData);

  
}


function gotGif(img){
  console.log(img.data[3].images.original.url);
  createImg(img.data[3].images.original.url);
  
}

function gotData(weather){
  console.log(weather.main.temp);
     temperature = console.log(weather.main.temp);
 

  
}

function draw(){
  fill(0);
  textSize(30);
  text(temperature,300, 50);
}