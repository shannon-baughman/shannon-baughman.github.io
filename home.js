
var state = 0;

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
				if ($(window).scrollTop() >= $('section#content').offset().top || $(window).scrollTop() + $(window).height() >= $('section#main').height() + $('section#content').height() - $(window).height() * 0.25) {
					if (state == 0) {
						$('span#number, span#email').fadeOut('fast', function() {
							$('span#number, span#email').css({
								'top': 'initial',
								'bottom': '1em'
							});
							$('span#number, span#email').fadeIn('fast');
						});
						state = 1;
					}
				}
				else {
					if (state == 1) {
						$('span#number, span#email').fadeOut('fast', function() {
							$('span#number, span#email').css({
								'top': '',
								'bottom': ''
							});
							$('span#number, span#email').fadeIn('fast');
						});
						state = 0;
					}
				}
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
	if (!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
		$('section#main h1').css('padding-top', $(window).height() / 2 - $('section#main h1').height() + $(window).scrollTop() / 2);
		$('section#main *').css('opacity', 1 - ($(window).scrollTop() / $(window).height()));
	}
	if ($(window).scrollTop() >= $('section#content').offset().top || $(window).scrollTop() + $(window).height() >= $('section#main').height() + $('section#content').height() - $(window).height() * 0.25) {
		if (state == 0) {
			$('span#number, span#email').fadeOut('fast', function() {
				$('span#number, span#email').css({
					'top': 'initial',
					'bottom': '1em'
				});
				$('span#number, span#email').fadeIn('fast');
			});
			state = 1;
		}
	}
	else {
		if (state == 1) {
			$('span#number, span#email').fadeOut('fast', function() {
				$('span#number, span#email').css({
					'top': '',
					'bottom': ''
				});
				$('span#number, span#email').fadeIn('fast');
			});
			state = 0;
		}
	}
});
