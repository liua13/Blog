greetings = ["student . coder . writer ."];
wordLength = 0;
index = 0;

changeScroll = 1;
previousScroll = 0;

// cursor typing 
$(document).ready(function(){
	message = $("#greetings");
	typing();
	setInterval(function(){
		cursor();
	}, 1000);

});

function typing(){
	if(index >= greetings.length){
		index = 0;
	}
	
	message.text(greetings[index].substr(0, wordLength++));
	if(wordLength <= greetings[index].length){
		setTimeout(function(){
			typing(greetings[index]);
		}, 75);
	} else {
		setTimeout(function(){
			erasing();
		}, 500);
	}
}

function erasing(){
	message.text(greetings[index].substr(0, wordLength--));
	if(wordLength >= 0){
		setTimeout(function(){
			erasing();
		}, 60);
	} else {
		setTimeout(function(){
			index++;
			typing();
		}, 500);
	}
}

function cursor(){
	$("#cursor").animate({
		opacity: 0
	}, 300, "swing").animate({
		opacity: 1
	}, 300, "swing")
}

// nav bar
/*
var previousY = $(this).scrollTop;
$(window).scroll(function() {
	var y = $(this).scrollTop();

	if(previousY > y){
    	$("#nav").fadeIn();
    } else {
    	$("#nav").fadeOut();
    }

	if (y == 0){
		$("#nav").css("background-color", "transparent");
	} else {
		$("#nav").css("background-color", "#09283a");
	} 

	previousY = y;
});
*/

$(window).scroll(function() {
	var y = $(this).scrollTop();

	if(y < 50){
    	$("#nav").removeClass('nav-scroll');
    	$(".page-link").css('color', 'white');
    	$(".page-link:after").css('background-color', 'white');
    } else {
    	$("#nav").addClass('nav-scroll');
    	$(".page-link").css('color', '#09283a');
    	$(".page-link:after").css('background-color', '#09283a');
    }
});
