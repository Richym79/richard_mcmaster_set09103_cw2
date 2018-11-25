

$(function(){
	$('#outcome_continue_btn').click(function() {
		window.location.href = "/chapter8/";
	});	
	$('#switch_mobile_text_version_btn').click(function() {
		//alert("text link clicked");
		$('#story_book_container').removeClass("story_book_initial_view");
		$('#story_book_container').addClass("story_book_text_only_view");
		$('#switch_mobile_text_version_btn').css("display","none").fadeOut();
		$('#switch_mobile_audio_version_btn').css("display","inline-block").fadeIn();
	});
	
	$('#switch_mobile_audio_version_btn').click(function() {
		//alert("text link clicked");
		$('#story_book_container').removeClass("story_book_text_only_view");
		$('#story_book_container').addClass("story_book_initial_view");
		$('#switch_mobile_audio_version_btn').css("display","none").fadeOut();
		$('#switch_mobile_text_version_btn').css("display","inline-block").fadeIn();
	});

	$('#story_play_btn').click(function() {
		story_audio.play();
		story_audio.addEventListener('ended',story_audio_ended);
		$('#story_audio_seek').attr('max',story_audio.duration);
		$('#story_play_btn').css("display","none").fadeOut();
		$('#story_pause_btn').css("display","inline-block").fadeIn();
	});
	
	$('#story_pause_btn').click(function() {
		story_audio.pause();
		$('#story_pause_btn').css("display","none").fadeOut();
		$('#story_play_btn').css("display","inline-block").fadeIn();
	});
	
	$('#story_backward_btn').click(function() {
		story_audio.currentTime = 0;
	});

	$('#story_mute_btn').click(function() {
		story_audio.muted = true;
		$('#story_mute_btn').css("display","none").fadeOut();
		$('#story_unmute_btn').css("display","inline-block").fadeIn();
	});
	
	$('#story_unmute_btn').click(function() {
		story_audio.muted = false;
		$('#story_unmute_btn').css("display","none").fadeOut();
		$('#story_mute_btn').css("display","inline-block").fadeIn();
	});

	$('#story_backward_btn').click(function() {
		var curr_class = $(this).attr("class");
		if(curr_class === "audio_backward_btn") {
			var curr_chapter = $('#current_chapter').text();
			var current_chapter = parseInt(curr_chapter);
			var chapter_to_show = current_chapter - 1;			
			// similar behavior as clicking on a link
			if(chapter_to_show >= 1) {
				window.location.href = "/chapter" + chapter_to_show + "/";
			} else {
				window.location.href = "/";
			}
		}
	});
	
	$('#story_text_prev_chapter_btn').click(function() {
		var curr_chapter = $('#current_chapter').text();
			var current_chapter = parseInt(curr_chapter);
			var chapter_to_show = current_chapter - 1;			
			// similar behavior as clicking on a link
			if(chapter_to_show >= 1) {
				window.location.href = "/chapter" + chapter_to_show + "/";
			} else {
				window.location.href = "/";
			}
	});
	
	$('#story_forward_btn').click(function() {
		var curr_class = $(this).attr("class");
		if(curr_class === "audio_forward_btn") {
			var curr_chapter = $('#current_chapter').text();
			var current_chapter = parseInt(curr_chapter);
			var chapter_to_show = current_chapter + 1;			
			// similar behavior as clicking on a link
			window.location.href = "/chapter" + chapter_to_show + "/";
				
			//display_story_info(chapter_to_show);
		}
	});
	
	$('#story_text_next_chapter_btn').click(function() {
		var curr_chapter = $('#current_chapter').text();
			var current_chapter = parseInt(curr_chapter);
			var chapter_to_show = current_chapter + 1;			
			// similar behavior as clicking on a link
			window.location.href = "/chapter" + chapter_to_show + "/";
	});
	
	//$("#story_outcome_content").load("../static/content/story_content/outcome_option.html");
	$(document).on('click','#story_outcome_option_1_btn',function(){
		window.location.href = "/outcome1/";
	});
	
	$(document).on('click','#story_outcome_option_2_btn',function(){
		window.location.href = "/outcome2/";;
	});
	
	$(document).on('click','#story_outcome_option_3_btn',function(){
		window.location.href = "/outcome3/";
	});
	
	$(document).on('click','#story_outcome_option_4_btn',function(){
		window.location.href = "/outcome4/";
	});
	
	display_story_info();
	
});	

function story_audio_ended() {
	var curr_chapter = $('#current_chapter').text();
	var current_chapter = parseInt(curr_chapter);
	var chapter_to_show = current_chapter + 1;			
	// similar behavior as clicking on a link
	if(chapter_to_show < 8) {
		window.location.href = "/chapter" + chapter_to_show + "/";
	}
}





function display_story_info() {
	var curr_chapter = $('#current_chapter').text();
	var curr_chapter = parseInt(curr_chapter);
	if(curr_chapter >= 1) {
		$('#chapter_no_text').text("Chapter " + curr_chapter);
		$('#story_text_prev_chapter_btn').css("display","block");
		$('#story_backward_btn').removeClass("audio_backward_btn_disabled");
		$('#story_backward_btn').addClass("audio_backward_btn");
		$("#story_text_content").load("../static/content/location_" + curr_chapter + ".html");
		if(curr_chapter >= 7) {
			$('#story_text_next_chapter_btn').css("display","none");	
			$('#story_forward_btn').removeClass("audio_forward_btn");
			$('#story_forward_btn').addClass("audio_forward_btn_disabled");
		} else {
			$('#story_text_next_chapter_btn').css("display","block");
			$('#story_forward_btn').removeClass("audio_forward_btn_disabled");
			$('#story_forward_btn').addClass("audio_forward_btn");
		}
		
	} else {
		$('#chapter_no_text').text("Introduction");
		$('#chapter_title_text').text("Burke & Hare");
		$('#story_text_prev_chapter_btn').css("display","none");
		$('#story_backward_btn').removeClass("audio_backward_btn");
		$('#story_backward_btn').addClass("audio_backward_btn_disabled");
		$("#story_text_content").load("../static/content/intro.html");
	}
	
	load_up_story_audio(curr_chapter);
	
}


var story_audio = "";
function load_up_story_audio(chapter) {
	chapter = parseInt(chapter);
	if (story_audio !== "") {
	story_audio.pause();
	story_audio.currentTime = 0;
	$('#story_pause_btn').css("display","none").fadeOut();
	$('#story_play_btn').css("display","inline-block").fadeIn();
	}
	$('#story_audio_seek').unbind('change');
	$('#story_audio_seek').unbind('timeupdate');
	
	if(chapter >= 1) {
		story_audio = new Audio("../static/audio/location_" + chapter + ".mp3");
		
	} else {
		story_audio = new Audio("../static/audio/intro.mp3");
	}
	
	story_audio.addEventListener('loadedmetadata', function() {
		var audio_len = parseInt(story_audio.duration, 10);
		var len_time = secondsTotime(audio_len);
		$("#story_audio_length").text(len_time);
	});
	
	var story_audio_duration = story_audio.duration;
	$("#story_audio_length").text(story_audio.duration);
	//$('#story_audio_seek').attr('max',loc_1_audio.duration);
	
	$("#story_audio_seek").bind("change", function() {
		story_audio.currentTime = $(this).val();
		$("#story_audio_seek").attr("max", story_audio.duration);
	});
	
	story_audio.addEventListener('timeupdate',function (){
			var curtime = parseInt(story_audio.currentTime, 10);
			$("#story_audio_seek").val(story_audio.currentTime);
			var time = secondsTotime(curtime);
			$("#story_audio_currenttime").text(time);
	});
	

}

function secondsTotime(s) {
    var h = Math.floor(s/3600); //Get whole hours
    s -= h*3600;
    var m = Math.floor(s/60); //Get remaining minutes
    s -= m*60;
    return m+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}
