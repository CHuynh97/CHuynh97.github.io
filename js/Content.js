
$(document).ready(function() {
	function isOnScreen(element) {
		var topWindow = $(window).scrollTop();
		var bottomWindow = topWindow + ($(window).height())/1.5;

		var elementTop = $(element).offset().top;
		var elementBottom = elementTop + $(element).height();

		return ((elementBottom <= bottomWindow) && (elementTop >= topWindow));
	}

	//Array of navbar items
	var navList = ["#AboutMeNav", "#SkillsNav", "#ProjectsNav"];

	//get all ids with hideOnStart class, store in arrays
	var allElements = document.getElementsByTagName("*");
	var animatingInfo = new Array();
	for (var i = 0; i < allElements.length; i++) {
		var element = allElements[i];
		if (element.id) {
			var nextID = "#"+element.id;
			if ($(nextID).hasClass("animateInfo")) {
				animatingInfo.push(nextID);
			}
			
		}
	}
	
	//log ids for testing
	for (var j = 0; j < animatingInfo.length; j++) {
		console.log(animatingInfo[j]);
		console.log(isOnScreen(animatingInfo[j]));
	}
	//console.log(allIds.length);
	
	
	//from allIds find and return specified id
	//function getID(id) {

	//}

	//switches which NavBar item is active
	function changeActiveNav(id) {
		var i = 0;
		while ((i<navList.length) && (!$(navList[i]).hasClass("activeNav"))) {
			i++;
		}
		if (navList[i] != id) {
			$(navList[i]).removeClass("activeNav");
			$(id).addClass("activeNav");
		}		
	}

	//function to scroll to header when nav item clicked
	//function scrollToId(element){
	//
	//}
	
	//implement onclick listeners for navbar items
	$("#AboutMeNav").addClass("activeNav");
	$("#AboutMeNav").click(function() {
		changeActiveNav("#AboutMeNav");
	});
	$("#SkillsNav").click(function() {
		changeActiveNav("#SkillsNav");
	});
	$("#ProjectsNav").click(function() {
		changeActiveNav("#ProjectsNav");
	});
	


	for(var i = 0; i < 4; i++) {
		var id = animatingInfo[i];
		if (isOnScreen(id)) {
			if ($(id).hasClass("hideOnStart")) {
				$(id).removeClass("hideOnStart");		
				//$(id).addClass(id);
			}
			
		}
	}
	console.log(animatingInfo.length);

	//console.log(isOnScreen("#AboutMeh1"));
	
	//$(window).scroll(function(){
	//	for(var i = 0; i < allIds.length; i++) {
	//		var id = "#"+allIds[i];
	//		if (isOnScreen(i)) {
	//			$(i).removeClass(i);		
	//			$(i).addClass(i);
	//		}
	//	}
	//});

	


});




