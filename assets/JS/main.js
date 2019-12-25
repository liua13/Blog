var previousY = $(this).scrollTop;
$(window).scroll(function() {
	var y = $(this).scrollTop();
	console.log(y);
	console.log(y);
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