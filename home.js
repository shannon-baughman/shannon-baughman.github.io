
function resize() {
	$('body').css('font-size', $(window).width() / 87.5);
	var h1 = $('section#main h1');
	h1.css('padding-top', $(window).height() / 2 - h1.height());
}

$(window).resize(resize);

$(document).ready(function() {
	resize();
	setTimeout(function() {
		resize();
		$('section#main h1').fadeIn('fast');
		setTimeout(function() {
			$('section#main h2').fadeIn('fast');
			setTimeout(function() {
				$('span#number, span#email, span#header').fadeIn('fast');
				$('section#main>span').fadeIn('fast');
			}, 1000);
		}, 500);
	}, 1000);
	$('section#main span span').click(function() {
		$('html, body').animate({
			'scrollTop': $('section#content').offset().top + 'px'
		});
	});
});

$(document).scroll(function() {
	$('section#main h1').css('padding-top', $(window).height() / 2 - $('section#main h1').height() + $(window).scrollTop() / 2);
	$('section#main *').css('opacity', 1 - ($(window).scrollTop() / $(window).height()));
});
