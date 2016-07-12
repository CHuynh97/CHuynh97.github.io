
$(document).ready(function() {

	//Bring window to top of page before every load
	$(window).on('beforeunload', function() {
		hideAll();
    	$(window).scrollTop(0);
	});
	
	
	//Variables to represent threshold values of animation range
	var upperThreshold = 0;
	var animationRange = 0;
	var lowerThreshold = 0;

	function updateThresholds() {
		//assign values
		upperThreshold = $(window).scrollTop() + ($(window).height() * 0.1);
		lowerThreshold = $(window).scrollTop() + ($(window).height() * 0.85);
		animationRange = lowerThreshold - upperThreshold;

		//truncate
		upperThreshold -= 0.5;
		upperThreshold = parseFloat(upperThreshold.toFixed());
		animationRange -= 0.5;
		animationRange = parseFloat(animationRange.toFixed());
		lowerThreshold -= 0.5;
		lowerThreshold = parseFloat(lowerThreshold.toFixed());
	}
	//assign values on load
	updateThresholds();

	//Functions to check which region of the window an element is within
	function inAnimationRange(element) {
		var elementTop = $(element).offset().top;
		var elementBottom = elementTop + $(element).height();

		return ((elementBottom < lowerThreshold) && (elementTop > upperThreshold));
	}
	function aboveRange(element) {
		var elementBottom = $(element).offset().top; + $(element).height();
		return (elementBottom <= upperThreshold);
	}
	function belowRange(element) {
		var elementTop = $(element).offset().top;
		return (elementTop >= lowerThreshold);
	}

	
	
	//get all ids with animateInfo class, store in array
	var animatingInfo = document.getElementsByClassName("animateInfo");
	var animateIDs = []
	for (var i = 0; i < animatingInfo.length; i++) {
		var entry = "#"+$(animatingInfo[i]).attr("id")
		animateIDs.push(entry);
	}

	//hide all animating tags
	function hideAll() {
		for(var i = 0; i < animateIDs.length; i++) {
			if (!$(animateIDs[i]).hasClass("hideOnStart")){
				$(animateIDs[i]).addClass("hideOnStart");
			}
		}
	}
	

	//Array of navbar items
	var navList = ["#AboutMeNav", "#SkillsNav", "#ProjectsNav"];

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
	function scrollToId(element){
		//scroll to height where element is in animation range
		var height = $(element).offset().top - ($(window).height()*0.2);
		var current = $(window).scrollTop();
		// trunctate both values
		height -= 0.5;
		height = parseFloat(height.toFixed());
		current -= 0.5;
		current = parseFloat(animationRange.toFixed());

		var scrollInterval = setInterval(function(){
			if (current < height) {
				current++;
				$(window).scrollTop(current);
			}
			else if (current > height) {
				current--;
				$(window).scrollTop(current);
			} 
		}, 1);
		if (current == height){
			clearInterval(scrollInterval);
		}
		
		
		
	}
	
	//implement onclick listeners for navbar items
	$("#AboutMeNav").addClass("activeNav");
	$("#AboutMeNav").click(function() {
		changeActiveNav("#AboutMeNav");
		scrollToId("#AboutMe");
	});
	$("#SkillsNav").click(function() {
		changeActiveNav("#SkillsNav");
		scrollToId("#Skills");
	});
	$("#ProjectsNav").click(function() {
		changeActiveNav("#ProjectsNav");
		scrollToId("#Projects");
	});
	
	console.log("On start:\n");
	console.log("Waterloo text width:" + $("#EducationText").width());
	console.log("Window width: " + $(window).width());
	//initialize first tags that cover height of window 
	for(var i = 0; i < animateIDs.length; i++) {
		var id = animateIDs[i];
		
		if (inAnimationRange(id)) {
			//console.log(id + " will animate.\n");
			if($(id).hasClass("hideOnStart")){
				$(id).removeClass("hideOnStart");
				$(id).addClass("SlideLeft");
			}
		}
	}
	
	$(window).scroll(function(){
		updateThresholds();
		console.log("Skills aboveRange: " + aboveRange("#Skills"));
		
		for (var i = 0; i < animateIDs.length; i++) {
			var id = animateIDs[i];
			if (inAnimationRange(id)) {
					if($(id).hasClass("hideOnStart")){
						$(id).removeClass("hideOnStart");
					}
					if ($(id).hasClass("Exit")) {
						$(id).removeClass("Exit");
					}	
					$(id).addClass("SlideLeft");
				}
				else if (aboveRange(id) || belowRange(id)){
					if ($(id).hasClass("SlideLeft")) {
						$(id).removeClass("SlideLeft");
						$(id).addClass("Exit");
						$(id).addClass("hideOnStart");
					}
				}
		}
	});

	$("#email").hover(function() {
		$("#contact-description").html("chris.huynh17@gmail.com");
	});
	$("#phone").hover(function() {
		$("#contact-description").html("289-879-1347");
	});
	$("#resume").hover(function() {
		$("#contact-description").html("Click to view my resume.");
	});
	$("#github").hover(function() {
		$("#contact-description").html("Click to view my GitHub page.");
	});

});




