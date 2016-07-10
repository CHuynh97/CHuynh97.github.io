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
	
	
	setTimeout(function() {
		$(fletters[4]).show();
		$(lletters[4]).show();
	}, 2000);	

	setTimeout(function() {
		$(fletters[3]).show();
		$(lletters[3]).show();
	}, 2300);	

	setTimeout(function() {
		$(fletters[2]).show();
		$(lletters[2]).show();
	}, 2600);
	
	setTimeout(function() {
		$(fletters[1]).show();
		$(lletters[1]).show();
	}, 2900);	
});