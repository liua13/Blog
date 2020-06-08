$(window).scroll(function() {
	var y = $(this).scrollTop();

	if(y < 75){
    	$("#nav").show();
    } else {
    	$("#nav").hide();
    }
});
