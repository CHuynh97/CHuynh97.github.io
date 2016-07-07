$(document).ready(function() {
	function isOnScreen(element) {
		var topWindow = $(window).scrollTop();
		var bottomWindow = topWindow + $(window).height();
		var elementTop = $(element).offset().top;
		var elementBottom = elementTop + $(element).height();

		return ((elementBottom <= bottomWindow) && (elementTop >= topWindow));
	}
	

	//switches which NavBar item is active
	function changeActive(id1, id2) {
		if (!($(id1).hasClass("active"))) {
			$(id1).addClass("active")
		}
		if ($(id2).hasClass("active")) {
			$(id2).removeClass("active")
		}
	}
	//scroll to next section
	function scrollToID(id) {
		//while (!isOnScreen(id)) {
			window.scrollBy(0, 400);
		//}
	}
	
	$(window).sc
	$("#AboutMeNav").addClass("active");
	$("#ProjectsNav").click(function(){
		changeActive("#ProjectsNav", "#AboutMeNav");
		scrollToID("#ProjectsNav")
	});
	$("#AboutMeNav").click(function(){
		changeActive("#AboutMeNav", "#ProjectsNav");
	});


	//setTimeout(function() {
	//	$(".infoText").AddClass("startUp");
	//}, 1000);


});




