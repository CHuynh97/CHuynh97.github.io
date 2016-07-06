$(document).ready(function() {
	function isOnScreen(element) {
		var topWindow = $(window).scrollTop();
		var bottomWindow = topWindow + $(window).height();
		var elementTop = $(element).offset().top;
		var elementBottom = elementTop + $(element).height();

		return ((elementBottom <= bottomWindow) && (elementTop >= topWindow));
	}
	

	if (!isOnScreen(".infoText")) {
		$(".infoText").css({
			animation-play-state: "paused";
		});
	} else {
		$(".infoText").css({
			animation-play-state: "running";
		});
	}

});


