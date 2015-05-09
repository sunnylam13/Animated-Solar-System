jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES

var orbitPauseStatus = false;

// ................... ANIMATION SEQUENCES...................
// orbital animation sequence references
// this is where we store the "animation sequence" line ups for each planet
// set to {repeat:-1} for continuous infinite animation
var mercuryOrbit = new TimelineMax({repeat:-1});
var venusOrbit = new TimelineMax({repeat:-1});
var earthOrbit = new TimelineMax({repeat:-1});
var marsOrbit = new TimelineMax({repeat:-1});
var jupiterOrbit = new TimelineMax({repeat:-1});

var orbitArray1 = [mercuryOrbit,venusOrbit,earthOrbit,marsOrbit,jupiterOrbit];
// // ...................END ANIMATION SEQUENCES ...................

// ................... ORBITAL SPEEDS...................
// changing these affects how fast the planets spin around

// all planets move at different relative speeds
// it's less obvious or glaring that the 2D planets sort of turn into lines as the rotate
var earthOrbitSpeed = 8;
var mercuryOrbitSpeed = earthOrbitSpeed*0.243835616;
var venusOrbitSpeed = earthOrbitSpeed*0.615619178;
var marsOrbitSpeed = earthOrbitSpeed*1.88;
var jupiterOrbitSpeed = earthOrbitSpeed*11.86;

// all planets move at same speed
// this is the version where Jen suggested all planets move as slow as Jupiter
// the issue with this was that it was obvious when all the "2D" planets turned sideways at the same time and vanished
// var earthOrbitSpeed = 35.58;
// var otherPlanetSpeed = 3;
// var mercuryOrbitSpeed = otherPlanetSpeed*11.86;
// var venusOrbitSpeed = otherPlanetSpeed*11.86;
// var marsOrbitSpeed = otherPlanetSpeed*11.86;
// var jupiterOrbitSpeed = otherPlanetSpeed*11.86;

// // ...................END ORBITAL SPEEDS ...................


// ................... ORBITAL DISTANCES...................
// this is a kind of rough distance from the sun
// it tells the animation how wide a spin from the central vertical axis to go from... right now that central vertical axis is smack down the through the middle of the sun like a shishkebab

// where Mercury is the reference value... which means that the distance from the vertical axis is a multiple of mercury's distance allowing us to change one value to change them all at the same time...
// and keep everything space out without having to change each planet individually

// to change how much of a wide circle you want the planet to travel, change mercury's value and it should update everything else
// setting var mercuryDistance to about 150 allows it to circle tightly enough around the Sun

var mercuryDistance = 150;
var venusDistance = mercuryDistance*1.862068966;
var earthDistance = mercuryDistance*2.586206897;
var marsDistance = mercuryDistance*3.931034483;
// var jupiterDistance = mercuryDistance*13.413793103;

// if we want to keep Jupiter on screen during entire spin around sun... decrease its distance... by creating a custom value and commenting out the previous one
var jupiterDistance = mercuryDistance*6.413793103;

// // ...................END ORBITAL DISTANCES ...................


// ................... TRANSFORM ORIGIN VALUES...................
// this is subbed into the animation "commands" 
// placed here to make it easy to change the orbital "width" or how far the planets circle away from the Sun

var mercury_transform_origin = "50% 50%" + " " + "-" + (mercuryDistance).toString();
var venus_transform_origin = "50% 50%" + " " + "-" + (venusDistance).toString();
var earth_transform_origin = "50% 50%" + " " + "-" + (earthDistance).toString();
var mars_transform_origin = "50% 50%" + " " + "-" + (marsDistance).toString();
var jupiter_transform_origin = "50% 50%" + " " + "-" + (jupiterDistance).toString();

// // ...................END TRANSFORM ORIGIN VALUES ...................



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

// PLANET MODAL ENTRIES
// click the planet, make the modal entry pop up 
// click the modal entry, and the modal vanishes

// ................... MERCURY...................
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
// // ...................END MERCURY ...................

// ................... VENUS...................
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
// // ...................END VENUS ...................

// ................... EARTH...................
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
// // ...................END EARTH ...................

// ................... MARS...................
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
// // ...................END MARS ...................

// ................... JUPITER...................
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
// // ...................END JUPITER ...................



// PLANET ORBIT FUNCTIONS  ------------------------------------------------

// ................... PAUSE/PLAY PLANET ORBITS...................
// when you click on the window you switch the pause status variable switch from "false" to "true" (or "off" to "on")...  
// when you click the window again you do the reverse

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
// // ...................END PAUSE/PLAY PLANET ORBITS ...................

// ................... ANIMATION NOTES...................
// the animation works by setting up a storage tube like mercuryOrbit and we stick an animation into it...
// rotationY means spin the element 360 degrees
// perspective helps with a 3D look sort of... transformPerspective didn't work well for this project
// transformOrigin was the key to creating the orbital effect of the planet around the Sun... however the planets had to be absolutely positioned so that they were vertically aligned with the centre of the sun to work... and you need to use z-offset as the thing that takes the "distance from the sun" value
// ease is the way the animation stops and starts... does it keep going in a smooth way or start fast end slow?  for this project we wanted a smooth constant motion hence Linear.easeNone


// ........ Issues >

// Saturday, May 9, 2015 5:32 PM
// we didn't have enough knowledge yet of animation construction to be able to get the planets to vanish behind the sun during the rotation
// Milena suggested that one or two of the planets be given a z-index lower than the sun however after playing around we found that we couldn't click them any more... further changes haven't solved the issue and we've left it for later research

// in addition because the images are 2D, eventually the planet rotates to a point it becomes almost a line (because it's flat) before it again becomes visible
// this is why the pause/play function was needed for sure, to stop the animation at any point... users can stick click the div even if it's a thin line when it's stopped

// // ...................END ANIMATION NOTES ...................

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

// testPlanetClick();

// click a planet and modal/lightbox pops up
// the big modal pops into existence

targetMercuryPlanet();
turnMercuryModalOff();

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

//////////////////////////////////////////////////

});  //end doc.onready function
