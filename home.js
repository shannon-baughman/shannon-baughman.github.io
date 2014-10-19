
function resize() {
	$('body').css('font-size', $(window).width() / 100);
	var h1 = $('section#main h1');
	h1.css('padding-top', $(window).height() / 2 - h1.height());
}

$(window).resize(resize);

$(document).ready(function() {
	resize();
	setTimeout(function() {
		$('section#main h1').fadeIn('fast');
		setTimeout(function() {
			$('section#main h2').fadeIn('fast');
			setTimeout(function() {
				$('section#main>span').fadeIn('fast');
			}, 1000);
		}, 500);
	}, 1000);
	$('section#main span span').click(function() {
	});
});

$(document).scroll(function() {
	$('body').css('background-position', 'center ' + -($(window).scrollTop() / 2) + 'px');
	$('section#main *').css('opacity', 1 - ($(window).scrollTop() / $(window).height()));
});
