/*
	Shree Ganesh Enterprises js setup
*/

(function ($) {

	var $window = $(window),
		$body = $('body');


	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			console.log(matchMedia("(max-width: 700px)").matches);

			$body.removeClass('is-preload');
		}, 100);
		if (matchMedia("(max-width: 700px)").matches) {
			$('#svgfile').addClass('mb10')
			$('#svgfile').load('./images/mobileLogo.svg');

			// css changes for mobile view
			$("#svgfile").css("position", "absolute");
			$("#svgfile").css("left", "12%");
			$("#svgfile").css("top", "32%");


			$(".loading").css("position", "absolute");
			$(".loading").css("left", "17%");
			$(".loading").css("top", "15%");
			$(".loading").css("top", "15%");
			$(".loading").css("width", "0.8em");
			$(".loading").css("height", "0.8em");



		} else {
			$('#svgfile').addClass('mb20')
			$("#svgfile").css("position", "absolute");
			$("#svgfile").css("left", "14%");
			$("#svgfile").css("top", "43%");
			$('#svgfile').load('./images/desktopLogo.svg');
		}
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		alignment: 'center',
		detach: false
	});

	// Nav.

	// Title Bar.
	$(
		'<div id="titleBar">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'<span class="title">' + $('#logo h1').html() + '</span>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});


	var svg = Snap("#paper");
	var circ = svg.circle(0, 1, 1)
		.attr({ fill: "rgba(0,255,255,.5)" })
		.pattern(0, 0, 5, 5)
		.attr({ patternTransform: "rotate(25)" });
	svg.rect(0, 0, '100%', '100%').attr({ fill: circ });


	/*
	 *  
	 * 
	 * 
	 * 2013 by Tim Pietrusky
	 * timpietrusky.com
	 */

})(jQuery);