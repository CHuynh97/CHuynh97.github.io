
	function isScrolledIntoView(element) {
	var TopView = $(window).scrollTop();
	var BottomView = TopView + $(window).height();

	var elementTop = $(element).offset().top();
	var elementBottom = elementTop + $(element).height();
	return ((elementBottom <= BottomView) && (elementTop >= TopView));
	}

	function fadeAnimation() {
		if (isScrolledIntoView("div")) {
			$("div").fadeIn();
		}
	}


