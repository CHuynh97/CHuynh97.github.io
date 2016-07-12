$(document).ready(function() {

	//retrieve ids of letters for both names
	var fNameElements = $("#FirstName").children();
	var fletters = [];
	for (var i=0; i< fNameElements.length; i++) {
		var id = "#"+$(fNameElements[i]).attr("id");
		fletters.push(id);
		//$(id).hide();
	}

	var lNameElements = $("#LastName").children();
	var lletters = [];
	for (var i=0; i< lNameElements.length; i++) {
		var id = "#"+$(lNameElements[i]).attr("id");
		lletters.push(id);
		//$(id).hide();
	}

	for (var i = 1; i < fletters.length; i++) {
		$(fletters[i]).hide();
		$(lletters[i]).hide();
	}

	var myInterval;

	setTimeout(function() {
		myInterval = setInterval(function() {
			var fPosition = $("#c1").position().left;
			var lPosition = $("#h2").position().left;
			for(var i = 1; i < fletters.length; i++) {
				if (fPosition <= (i*100) && lPosition <= (i*100)) {
					$(fletters[i]).show();
					$(lletters[i]).show();
				}
			}
		}, 50);
		$(".blank").hide();
	}, 2000);

	setTimeout(function() {
		clearInterval(myInterval);
	}, 4000);
	
	$("html").click(function() {
		$("html").load("content.html");
	})

});