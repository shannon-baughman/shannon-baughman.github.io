
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
});

$(document).scroll(function() {
	$('body').css('background-position', ($(window).scrollTop() / 2) + 'px center');
});
