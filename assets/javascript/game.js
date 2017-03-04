var randomNum = [Math.floor(Math.random() * 90) + 9];
var counter = 0
var caught = 0
var ranaway = 0


var numOptions = [ 1, 3, 5, 10];
var indexTracker = [];

function Image () {} //class
// new Image() //instance of Image, 

function startUp(){

	var randomPokemon = new Array();

	randomPokemon[0] = new Image(); 
	randomPokemon[0].src = 'assets/images/blastoise.png';

	randomPokemon[1] = new Image();
	randomPokemon[1].src = 'assets/images/charizard.png';

	randomPokemon[2] = new Image();
	randomPokemon[2].src = 'assets/images/gyrados.png';

	randomPokemon[3] = new Image();
	randomPokemon[3].src = 'assets/images/machamp.png';

	randomPokemon[4] = new Image();
	randomPokemon[4].src = 'assets/images/snorlax.png';

	randomPokemon[5] = new Image();
	randomPokemon[5].src = 'assets/images/venasaur.png';

	cleanup();
	
	var imgArray = new Array();

	imgArray[0] = new Image(); 
	imgArray[0].src = 'assets/images/Poke Ball.png';

	imgArray[1] = new Image();
	imgArray[1].src = 'assets/images/Great Ball.png';

	imgArray[2] = new Image();
	imgArray[2].src = 'assets/images/Ultra Ball.png';

	imgArray[3] = new Image();
	imgArray[3].src = 'assets/images/Master Ball.png';

	// function genPokemon() {
		var currentPokemon = Math.floor(Math.random() * (randomPokemon.length));
		var imagePokemon = $("<img>");
		imagePokemon.attr('src', randomPokemon[currentPokemon].src);
		imagePokemon.addClass("ball-image");
		$("#randomPokemon").append(imagePokemon);
	// }


//indexTracker.indexOf(randomIndex) -> -1, 0, 1, 2, 3
	for(var i = 0; i < imgArray.length; i++) {
		//generate a number between index 0 and 3
		var randomIndex = Math.floor(Math.random() * (numOptions.length)); 
		// guaranteed a unique index, checking if a number is inside indextracker
		//for example: generates the 1, which means index of 1 
		// then plugs in 1 into the while loop to see if the indexTracker has it inside
		//if false, push that number into random index, 
		//if true, it will push another number random index into the loop,
		//until it finds one that is not there.

		while (indexTracker.includes(randomIndex)) {
			
			randomIndex = Math.floor(Math.random() * (numOptions.length));
		}

		// add to indexTracker for the next iteration of for loop to track
		indexTracker.push(randomIndex)	
		// imgArray[i].number = numOptions[randomIndex] // where randomIndex ranges from 0 to numberOptions.length - 1
	
		//generate image logic here
		var imageBall = $("<img>");
		 imageBall.attr('src', imgArray[i].src)
		 imageBall.addClass("ball-image ball-button");
		 imageBall.attr("data-ballvalue", numOptions[randomIndex]);
		 $("#imageBall").append(imageBall);

	}


	$(".ball-button").on("click", function() {
	var ballValue = ($(this).attr("data-ballvalue"));
    ballValue = parseInt(ballValue);
    randomNum = parseInt(randomNum)
    counter += ballValue;
    
    $("#counter").text(counter);

    if (counter === randomNum) {
    	caught++;
    	currentPokemon = Math.floor(Math.random() * (randomPokemon.length));
		cleanup();
		startUp();
      
      
     
     
    }

    else if (counter >= randomNum) {
    	ranaway++;
    	currentPokemon = Math.floor(Math.random() * (randomPokemon.length));
   		cleanup();
   		startUp();
      
     
     
     
    }

  });


}


function cleanup () {
	randomNum = [Math.floor(Math.random() * 90) + 9];
	indexTracker = []
	counter = 0
	$("#randomNum").text(randomNum);
	$("#counter").text(counter);
	$("#caught").text(caught);
	$("#ranaway").text(ranaway);
	$("#imageBall").empty();
	$("#randomPokemon").empty();
	
}










