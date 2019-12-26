var previousY = $(this).scrollTop;
$(window).scroll(function() {
	var y = $(this).scrollTop();
	if (y < 180) {
		$("#nav").css("display", "inline-block");
		$("#nav").css("background-color", "transparent");
	} else if(y < 690) {
		$("#nav").css("display", "inline-block");
		$("#nav").css("background-color", "#469DD6");
	} else {
	    if(previousY > y){
	    	$("#nav").fadeIn();
	    } else {
	    	$("#nav").fadeOut();
	    }
	}
	previousY = y;
});

function hamburgerNav(){
	if ($("#navBar").attr("class") == "trigger"){
		$("#navBar").addClass("responsive");
	} else {
		$("#navBar").removeClass("responsive");
	}
}