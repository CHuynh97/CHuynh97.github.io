$(document).ready(function() {
	function isOnScreen(element) {
		var topWindow = $(window).scrollTop();
		var bottomWindow = topWindow + $(window).height();
		var elementTop = $(element).offset().top;
		var elementBottom = elementTop + $(element).height();

		return ((elementBottom <= bottomWindow) && (elementTop >= topWindow));
	}
	

	setTimeout(function() {
		$(".infoText").removeClass("startUp");
	}, 1000);
});


