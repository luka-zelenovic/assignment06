var myData;
var astronauts = [];
var choices =[-1,1];
var choices2 = [-1,0,1]
var ita;
var usa;
var rus;
var earth;
var cosmos;
function preload() {
	myData = loadJSON('assets/peopleinspace.json');
	ita =loadImage("assets/ita.png");
	usa =loadImage("assets/usa.png");
	rus =loadImage("assets/rus.png");
	earth =loadImage("assets/earth.png");
	cosmos =loadImage("assets/cosmos.jpg");
}

function setup() {

	createCanvas(500, 500);

	for (var i = 0; i < myData.people.length; i++) {
	  var astroData = myData.people[i];
	  
		var newAstronaut = new Astronaut(astroData.name,astroData.launchdate, astroData.country);
		astronauts.push(newAstronaut);
	}
}

function draw() {
	image(cosmos,0,0);
		stroke(255,0,0);
	noFill();
	ellipse(250,250,575);
	stroke(0);
	fill(255,0,0);
	textSize(25);
	text("Press the mouse to return our astronauts,",250,450 );
	text("before the point of no-return.",250,475 );
  noStroke();
	for (var i = 0; i < astronauts.length; i++) {
	  
		var astro = astronauts[i];
		astro.move(i);
		astro.display();


	}
  image(earth,200,200,100,100);
}

function Astronaut(name,date,country) {

	this.name = name;
	this.launchDate = date;
  this.country = country;
	var daysInSpace = ((Date.now() - Date.parse(this.launchDate)) / 1000/ 60/ 60/ 24);
	this.radius = daysInSpace; 
	
	this.x =250+random(choices)*this.radius;
	this.y =250+random(choices)*this.radius;
	if (random(choices2) == -1) {
	  this.y = 250;
	}


	this.display = function() {
	  stroke(225);
    strokeWeight(4);
    line(this.x,this.y,250,250);
			ellipse(this.x, this.y, this.radius /2);
			var image1;
			switch(this.country)
		{
			case "italy":image1=ita;
					break;
			case "russia":image1=rus;
				break;

			case "usa":image1=usa;
			break;
			default:image1=ita;
		}
		image(image1,this.x-this.radius/4,this.y-this.radius/4,this.radius/2,this.radius/2);
		textAlign(CENTER);
		fill(0);
		textSize(25);
		text(this.name, this.x, this.y + this.radius/2 + 5);

	  
	}
	
	  	this.move = function() {
	  	  	print(this.x);
	  	  if((this.x > 249  && this.x<251)&&(this.y > 249  && this.y<251)){
	  	    noLoop();
	  	    background(0);
	  	    text('Astronauts are safe, mission success.', 250,200);
	  	    
	  	  }
	  	  if(this.x>475 || this.x < 25)
	  	  {
	  	    noLoop();
	  	    background(0);
	  	    text('Astronauts are dead, mission failed.', 250,200);
	  	  }
      if(mouseIsPressed) {
	     if(this.x > 250) {
	     this.x -= 1;
	   } else if (this.x < 250) {
	     this.x += 1;
	   }
	   if(this.y > 250) {
	      this.y -= 1;
	   } else if (this.y < 250) {
	     this.y += 1;
	   }
      } else {
        if(this.x >= 250) {
	     this.x += 1;
	   } else if (this.x < 250) {
	     this.x -= 1;
	   }
	   if(this.y >= 250) {
	      this.y += 1;
	   } else if (this.y < 250) {
	     this.y -= 1;
	   }
        
      }
	}


	 }

