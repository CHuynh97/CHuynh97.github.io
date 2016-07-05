$(document).ready(function() {
	function isScrolledIntoView(element) {
		var TopView = $(window).scrollTop();
		var BottomView = TopView + $(window).height();

		var elementTop = $(element).offset().top();
		var elementBottom = elementTop + $(element).height();
		var result = ((elementBottom > BottomView) && (elementTop < TopView));
		return result;
	}

	var testInt = 5;
	$(".testClass").html(testInt);

});


