
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
		var elementBottom = $(element).offset().top + $(element).height();
		return (elementBottom <= upperThreshold);
	}
	function belowRange(element) {
		var elementTop = $(element).offset().top;
		return (elementTop >= lowerThreshold);
	}

	
	
	//get all ids with animateInfo class, store in array
	var animatingInfo = document.getElementsByClassName("animateInfo");
	var animateIDs = [];
	for (var i = 0; i < animatingInfo.length; i++) {
		var entry = "#"+$(animatingInfo[i]).attr("id");
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
	var navList = ["#AboutMeNav", "#SkillsNav", "#WorkNav", "#ProjectsNav"];

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
	function scrollToId(element) {
		/*var height = $(element).offset().top-upperThreshold;
      	$('html, body').animate({
        	scrollTop: height
      	}, 1000);
    	*/
	}
	
	//implement onclick listeners for navbar items
	$("#AboutMeNav").addClass("activeNav");
	$("#AboutMeNav").click(function() {
		scrollToId("#AboutMe");
	});
	$("#SkillsNav").click(function() {
		scrollToId("#Skills");
	});
	$("#ProjectsNav").click(function() {
		
		scrollToId("#Projects");
	});
	

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
		//console.log("PacMan in range: " + inAnimationRange("#PacManVR"));
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
		if (inAnimationRange("#AboutMe")) {
			changeActiveNav("#AboutMeNav");
		}
		if (inAnimationRange("#Skills")) {
			changeActiveNav("#SkillsNav");
		}
		if (inAnimationRange("#Work")) {
			changeActiveNav("#WorkNav");
		}
		if (inAnimationRange("#Projects")) {
			changeActiveNav("#ProjectsNav");
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
	$("#linkedin").hover(function() {
		$("#contact-description").html("Click to view my LinkedIn profile");
	});

	var contactButtons = document.getElementsByClassName("contact-button");
	var contactDivs = document.getElementsByClassName("contact_text");
	var contactTexts = [];
	for (var i = 0; i < contactDivs.length; i++) {
		
		var img = contactButtons[i];
		
		$(contactDivs[i]).hide();
		var enter = onHoverEnter(i);
		$(img).hover(enter);
	}
	function onHoverEnter(i) {
		return function() {
			if (!$(contactDivs[i]).is(":visible")) {
				$(contactDivs[i]).show();
				if ($(contactDivs[i]).hasClass("Exit")) {
					$(contactDivs[i]).removeClass("Exit");
				}
				$(contactDivs[i]).addClass("SlideLeft");
			}
			else {
				if ($(contactDivs[i]).hasClass("SlideLeft")) {
					$(contactDivs[i]).removeClass("SlideLeft");
				}
				$(contactDivs[i]).addClass("Exit");
				$(contactDivs[i]).hide(500);
			}
		};
	}

	

});






