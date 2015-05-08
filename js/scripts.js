jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES


//////////////////////////////////////////////////
// FUNCTIONS

// don't forget to call the function in EXECUTION CODE area before running


function showModal1 () {
	// target the planets
	
	// store a reference to the planets
	var $planets = $('section.planet');

	$.each(array/object, function(index, val) {
		 /* iterate through array or object */
	});
}

//click the planet mercury, pop up modal 

function targetMercuryPlanet () {
	// who are we targeting?  we want mercury planet
	// then we store our targeting coordinates into a variable
	
	var $mercuryPlanet = $('.planet.mercury');

	// set planet mercury to do something on click
	$mercuryPlanet.on('click', function() {
		// we need ask mercury planet object to give us the directions to the mercury modal so that we can open it
		// you probably want to store this in a variable
		// var planetName = $mercuryPlanet.attr('id');

		// if you're using on click, then you need to change the targeting to use $(this)
		var planetName = $(this).attr('id');
		// this should return a string called 'mercury'

		console.log('The planet name you are clicking is' + planetName);
		console.log('The planet name you are clicking is',planetName);

		// there are different ways to use .attr() method
		// Getting = .attr('attributeName') by itself finds the attribute and grabs its value
		// Setting = .attr('attributeName','value') sets the attribute to value
		// if you had entered .attr('id','numskull') you would have added/set an id of 'numskull'

		// we need to make section.big.modal layer come from the back to the front so we can actually see our modal entry
		$('section.big.modal').css('z-index','50');
		$('.big.modal').css('display', 'flex');

		// now we have to create the right map to mercury modal
		// we need to change the visibility of the modal so it appears when we click on mercury
		var finalTarget = "." + planetName + "Modal";
		console.log(finalTarget);
		$(finalTarget).css('display','flex');

		// $(finalTarget).css({
		// 	'z-index': '50',
		// 	'display': 'flex'
		// });

		console.log("This is the modal box thing we're making appear",$('.'+planetName+'Modal'));
		// $(planetName) looks like $('mercury')
		// $(planetName +'mercuryModal') = $('mercury' + 'mercuryModal') = $('mercurymercuryModal')
		// $(planetName +'mercuryModal') = $('mercury' + 'Modal') = $('mercuryModal')

		

		// when we click mercury we open its mercury modal
	});
}

function turnMercuryModalOff () {
	// when you click on mercury modal
	$('.mercuryModal').on('click', function(event) {
		event.preventDefault();
		
		// we want mercury modal to disappear
		$('.mercuryModal').css('display','none');

		$('section.big.modal').css('z-index','-50');
		$('.big.modal').hide();
	});
	
}

function targetVenusPlanet () {
	var $venusPlanet = $('.planet.venus');

	$venusPlanet.on('click', function() {
		var planetName = $(this).attr('id');

		$('section.big.modal').css('z-index','50');
		$('.big.modal').css('display','flex');

	var finalTarget = "." + planetName + "Modal";
		console.log(finalTarget);
		$(finalTarget).css('display','flex');

	});
}
function turnVenusModalOff () {
	$('.venusModal').on('click', function(){
		$('.venusModal').css('display','none');

		$('section.big.modal').css('display','none');
		$('.big.modal').hide();
	});
}

function targetEarthPlanet () {
	var $earthPlanet = $('.planet.earth');

	$earthPlanet.on('click', function() {
		var planetName = $(this).attr('id');

		$('section.big.modal').css('z-index','50');
		$('.big.modal').css('display','flex');

	var finalTarget = "." + planetName + "Modal";
		console.log(finalTarget);
		$(finalTarget).css('display','flex');

	});
}
function turnEarthModalOff () {
	$('.earthModal').on('click', function(){
		$('.earthModal').css('display','none');

		$('section.big.modal').css('display','none');
		$('.big.modal').hide();
	});
}

function targetEarthPlanet () {
	var $earthPlanet = $('.planet.earth');

	$earthPlanet.on('click', function() {
		var planetName = $(this).attr('id');

		$('section.big.modal').css('z-index','50');
		$('.big.modal').css('display','flex');

	var finalTarget = "." + planetName + "Modal";
		console.log(finalTarget);
		$(finalTarget).css('display','flex');

	});
}
function turnMarsModalOff () {
	$('.marsModal').on('click', function(){
		$('.marsModal').css('display','none');

		$('section.big.modal').css('display','none');
		$('.big.modal').hide();
	});
}

function targetMarsPlanet () {
	var $marsPlanet = $('.planet.mars');

	$marsPlanet.on('click', function() {
		var planetName = $(this).attr('id');

		$('section.big.modal').css('z-index','50');
		$('.big.modal').css('display','flex');

	var finalTarget = "." + planetName + "Modal";
		console.log(finalTarget);
		$(finalTarget).css('display','flex');

	});
}
function turnMarsModalOff () {
	$('.marsModal').on('click', function(){
		$('.marsModal').css('display','none');

		$('section.big.modal').css('display','none');
		$('.big.modal').hide();
	});
}

function targetJupiterPlanet () {
	var $jupiterPlanet = $('.planet.jupiter');

	$jupiterPlanet.on('click', function() {
		var planetName = $(this).attr('id');

		$('section.big.modal').css('z-index','50');
		$('.big.modal').css('display','flex');

	var finalTarget = "." + planetName + "Modal";
		console.log(finalTarget);
		$(finalTarget).css('display','flex');

	});
}
function turnJupiterModalOff () {
	$('.jupiterModal').on('click', function(){
		$('.jupiterModal').css('display','none');

		$('section.big.modal').css('display','none');
		$('.big.modal').hide();
	});
}

//on click, disappear 


// HELPER FUNCTIONS

function testPlanetClick () {
	$('.small img').on('click', function(event) {
		event.preventDefault();
		console.log('You have clicked a planet.');
	});
}

//////////////////////////////////////////////////
// EXECUTION CODE

targetMercuryPlanet();
turnMercuryModalOff();

// testPlanetClick();
targetVenusPlanet();
turnVenusModalOff();

targetEarthPlanet();
turnEarthModalOff();

targetMarsPlanet();
turnMarsModalOff();

targetJupiterPlanet();
turnJupiterModalOff();

// click a planet and modal/lightbox pops up
// the big modal pops into existence



//////////////////////////////////////////////////

});  //end doc.onready function
