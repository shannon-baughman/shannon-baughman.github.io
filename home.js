
function resize() {
	$('body').css('font-size', $(window).width() / 100);
}

$(window).resize(resize);

$(document).ready(function() {
	resize();
});
