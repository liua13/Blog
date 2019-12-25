greetings = ["Annie.", "a student.", "a coder.", "a writer."];
wordLength = 0;
index = 0;

changeScroll = 1;
previousScroll = 0;

$(document).ready(function(){
	message = $("#greetings");
	typing();
	setInterval(function(){
		cursor();
	}, 600);
});

function typing(){
	if(index >= greetings.length){
		index = 0;
	}
	
	message.text(greetings[index].substr(0, wordLength++));
	if(wordLength <= greetings[index].length){
		setTimeout(function(){
			typing(greetings[index]);
		}, 50);
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
		}, 50);
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