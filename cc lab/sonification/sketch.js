let synthstar=['C4','C4','G4','G4','A4','A4','G4','F4','F4','E4','E4','D4','D4','C4','G4','G4','F4','F4','E4','E4','D4','G4','G4','F4','F4','E4','E4','D4','C4','C4','G4','G4','A4','A4','G4','F4','F4','E4','E4','D4','D4','C4'];
let time=['8n','8n','8n','8n','8n','8n','4n','8n','8n','8n','8n','8n','8n','4n','8n','8n','8n','8n','8n','8n','4n','8n','8n','8n','8n','8n','8n','4n','8n','8n','8n','8n','8n','8n','4n','8n','8n','8n','8n','8n','8n','4n'];
let index =0;

let synth;
let loop;
let cymbal;
let melody;

var stars = [];
let pm25data;

function setup() {
  createCanvas(600, 600);
  synth = new Tone. Synth().toMaster();
  cymbal = new Tone.MetalSynth().toMaster();
  melody=new Tone.PluckSynth();
  
  // synth.triggerAttackRelease('C4','2n');
  for (var i = 0; i < 1000; i++) {
		stars[i] = new Star();
  }
  loadTable('pm2.5.csv', gotData);
}

function gotData(data){
  console.log(data);
  pm25data = data;

}

function draw() {
  background(30);
	
	for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}
}


// star class //
class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 3);
		this.t = random(TAU);
	}
	
	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}

function mousePressed() {
  // console.log(synthstar);
  // console.log(time);
  var value = pm25data.rows[0][0][index].arr[5];

  console.log(value);

  // let m = map(value,300,405,200,800);
  
  // synth.triggerAttackRelease('c4','4n');
  // index+=1 
}

