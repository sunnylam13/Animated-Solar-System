jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES

// orbital animation sequence references
// set to {repeat:-1} for continuous infinite animation
var mercuryOrbit = new TimelineMax({repeat:-1});
var venusOrbit = new TimelineMax({repeat:-1});
var earthOrbit = new TimelineMax({repeat:-1});
var marsOrbit = new TimelineMax({repeat:-1});
var jupiterOrbit = new TimelineMax({repeat:-1});

var orbitPauseStatus = false;
var orbitArray1 = [mercuryOrbit,venusOrbit,earthOrbit,marsOrbit,jupiterOrbit];

// orbital speeds
// all planets move at different relative speeds
var earthOrbitSpeed = 8;
var mercuryOrbitSpeed = earthOrbitSpeed*0.243835616;
var venusOrbitSpeed = earthOrbitSpeed*0.615619178;
var marsOrbitSpeed = earthOrbitSpeed*1.88;
var jupiterOrbitSpeed = earthOrbitSpeed*11.86;

// all planets move at same speed
// var earthOrbitSpeed = 35.58;
// var otherPlanetSpeed = 3;
// var mercuryOrbitSpeed = otherPlanetSpeed*11.86;
// var venusOrbitSpeed = otherPlanetSpeed*11.86;
// var marsOrbitSpeed = otherPlanetSpeed*11.86;
// var jupiterOrbitSpeed = otherPlanetSpeed*11.86;

// orbital distances (from the sun)
// distance from sun relatively speaking
// where Mercury is the reference value
// to change how much of a wide circle you want the planet to travel, change mercury's value and it should update everything else
// setting var mercuryDistance to about 150 allows it to circle tightly enough around the Sun
var mercuryDistance = 150;
var venusDistance = mercuryDistance*1.862068966;
var earthDistance = mercuryDistance*2.586206897;
var marsDistance = mercuryDistance*3.931034483;
// if we want to keep Jupiter on screen during entire spin around sun... decrease its distance
// var jupiterDistance = mercuryDistance*13.413793103;
var jupiterDistance = mercuryDistance*6.413793103;

// transformOrigin values
// this is what we actually insert into the animation
var mercury_transform_origin = "50% 50%" + " " + "-" + (mercuryDistance).toString();
var venus_transform_origin = "50% 50%" + " " + "-" + (venusDistance).toString();
var earth_transform_origin = "50% 50%" + " " + "-" + (earthDistance).toString();
var mars_transform_origin = "50% 50%" + " " + "-" + (marsDistance).toString();
var jupiter_transform_origin = "50% 50%" + " " + "-" + (jupiterDistance).toString();

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


// PLANET ORBIT FUNCTIONS  ------------------------------------------------

function pausePlayOrbits () {

	$(window).on('click', function(event) {
		event.preventDefault();
		switch(orbitPauseStatus) {
			case false:
				// pause all orbits when the window is clicked and the var orbitPauseStatus is false
				orbitArray1.forEach(function(element, index){
					element.pause();
				});
				orbitPauseStatus = true;
				break;
			case true:
				// turn on all orbits when the window is clicked and the var orbitPauseStatus is true
				orbitArray1.forEach(function(element, index){
					element.play();
				});
				orbitPauseStatus = false;
				break;
		}
	});

	
}

function mercuryOrbit1 () {
	// target the planet
	var $planetTarget = $('section.rings section#mercury');
	console.log("This is the planet we're targeting %s",$planetTarget);

	mercuryOrbit.to($planetTarget,mercuryOrbitSpeed,{rotationY:360, perspective: 200, transformOrigin:mercury_transform_origin, ease: Linear.easeNone});

	mercuryOrbit.play();
}

function venusOrbit1 () {
	// target the planet
	var $planetTarget = $('section.rings section#venus');
	console.log("This is the planet we're targeting %s",$planetTarget);

	venusOrbit.to($planetTarget,venusOrbitSpeed,{rotationY:360, transformOrigin:venus_transform_origin, ease: Linear.easeNone});

	venusOrbit.play();
}

function earthOrbit1 () {
	// target the planet
	var $planetTarget = $('section.rings section#earth');
	console.log("This is the planet we're targeting %s",$planetTarget);

	earthOrbit.to($planetTarget,earthOrbitSpeed,{rotationY:360, transformOrigin:earth_transform_origin, ease: Linear.easeNone});

	earthOrbit.play();
}

function marsOrbit1 () {
	// target the planet
	var $planetTarget = $('section.rings section#mars');
	console.log("This is the planet we're targeting %s",$planetTarget);

	marsOrbit.to($planetTarget,marsOrbitSpeed,{rotationY:360, transformOrigin:mars_transform_origin, zIndex: 5, ease: Linear.easeNone});

	marsOrbit.play();
}

function jupiterOrbit1 () {
	// target the planet
	var $planetTarget = $('section.rings section#jupiter');
	console.log("This is the planet we're targeting %s",$planetTarget);

	jupiterOrbit.to($planetTarget,jupiterOrbitSpeed,{rotationY:360, transformOrigin:jupiter_transform_origin, zIndex: 5, ease: Linear.easeNone});

	jupiterOrbit.play();
}

// // END PLANET ORBIT FUNCTIONS ------------------------------------------------



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

// orbits
mercuryOrbit1();
venusOrbit1();
earthOrbit1();
marsOrbit1();
jupiterOrbit1();
pausePlayOrbits();

// click a planet and modal/lightbox pops up
// the big modal pops into existence



//////////////////////////////////////////////////

});  //end doc.onready function
