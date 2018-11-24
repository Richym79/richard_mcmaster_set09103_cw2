
var stories_array=[];
$(function(){
	//get_story_details();
	
	
	
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
			var current_chapter = parseInt(chapter_no);
			var chapter_to_show = current_chapter - 1;
			display_story_info(chapter_to_show);
		}
	});
	
	$('#story_text_prev_chapter_btn').click(function() {
		var current_chapter = parseInt(chapter_no);
		var chapter_to_show = current_chapter - 1;
		display_story_info(chapter_to_show);
	});
	
	$('#story_forward_btn').click(function() {
		var curr_class = $(this).attr("class");
		if(curr_class === "audio_forward_btn") {
			var current_chapter = parseInt(chapter_no);
			var chapter_to_show = current_chapter + 1;
			display_story_info(chapter_to_show);
		}
	});
	
	$('#story_text_next_chapter_btn').click(function() {
		var current_chapter = parseInt(chapter_no);
		var chapter_to_show = current_chapter + 1;
		display_story_info(chapter_to_show);
	});
	
	$("#story_outcome_content").load("../static/content/story_content/outcome_option.html");
	$(document).on('click','#story_outcome_option_1_btn',function(){
		$('#story_book_container').css("display","none").fadeOut();
		$('#outcome_option_1').css("display","inline-block").fadeIn();
		$('#story_outcome_content').css("display","inline-block").fadeIn();
	});
	
	$(document).on('click','#story_outcome_option_2_btn',function(){
		$('#story_book_container').css("display","none").fadeOut();
		$('#outcome_option_2').css("display","inline-block").fadeIn();
		$('#story_outcome_content').css("display","inline-block").fadeIn();
	});
	
	$(document).on('click','#story_outcome_option_3_btn',function(){
		$('#story_book_container').css("display","none").fadeOut();
		$('#outcome_option_3').css("display","inline-block").fadeIn();
		$('#story_outcome_content').css("display","inline-block").fadeIn();
	});
	
	$(document).on('click','#story_outcome_option_4_btn',function(){
		$('#story_book_container').css("display","none").fadeOut();
		$('#outcome_option_4').css("display","inline-block").fadeIn();
		$('#story_outcome_content').css("display","inline-block").fadeIn();
	});
	
	getLocation();
});	


var geo_curr_pos;
function getLocation() {
	geo_curr_pos = "";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        geo_curr_pos = "Geolocation Error";
		alert(geo_curr_pos);
    }
}
function showPosition(position) {
    geo_curr_pos = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
	alert(geo_curr_pos); 
}




function story_audio_ended() {
	
}

var stories_array=[];
function get_story_details() {
	stories_array=[];
	//alert("Getting json file");
	$.get("../static/content/story_content.json", function(data, status){
		//var parsed_data = JSON.parse(data); 
		for (var i in data){
				var StoryToPush = [];
				//alert(data[i]['chapter']);
				var story_row = data[i];
				//alert(story_row['chapter']);
				StoryToPush[0] = story_row['chapter'];
				StoryToPush[1] = story_row['chapter_title'];
				StoryToPush[2] = story_row['audio_src'];
				StoryToPush[3] = story_row['text_content_source'];
				StoryToPush[4] = story_row['location_lat'];
				StoryToPush[5] = story_row['location_lng'];
				StoryToPush[6] = story_row['main_image'];
				StoryToPush[7] = story_row['old_map_img'];
				StoryToPush[8] = story_row['secondary_image'];
				stories_array.push(StoryToPush);
		}
		display_story_info(0);
    });
}




var story_dets;
var chapter_no;
var chapter_title;
var chapter_audio_src;
var chapter_text_content;
var chapter_location_lat;
var chapter_location_lng;
var chapter_main_img;
var chapter_map_img;
var chapter_second_image;

function display_story_info(chapter) {
	var story_dets = stories_array[chapter];
	chapter_no = story_dets[0];
	chapter_title = story_dets[1];
	chapter_audio_src = story_dets[2];
	chapter_text_content = story_dets[3];
	chapter_location_lat = story_dets[4];
	chapter_location_lng = story_dets[5];
	chapter_main_img = story_dets[6];
	chapter_map_img = story_dets[7];
	chapter_second_image = story_dets[8];
	
	if(chapter >= 1) {
		$('#chapter_no_text').text("Chapter " + chapter_no);
		$('#chapter_title_text').html(chapter_title);	
		$("#story_text_content").load("../static/content/story_content/location_" + chapter + ".html");
		$('#story_text_prev_chapter_btn').css("display","block");
		$('#story_backward_btn').removeClass("audio_backward_btn_disabled");
		$('#story_backward_btn').addClass("audio_backward_btn");
		
		if(chapter >= 7) {
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
		$('#chapter_title_text').html("The Burke &amp; Hare Story");
		$("#story_text_content").load("../static/content/story_content/intro.html");
		$('#story_text_prev_chapter_btn').css("display","none");
		$('#story_backward_btn').removeClass("audio_backward_btn");
		$('#story_backward_btn').addClass("audio_backward_btn_disabled");
	}
	
	$('#chapter_map_img').attr("src","../static/images/story_images/" + chapter_map_img);
	$('#chapter_main_img').attr("src","../static/images/story_images/" + chapter_main_img);
	$('#chapter_second_img').attr("src","../static/images/story_images/" + chapter_second_image);
	//alert(stories_array[0]);
	load_up_story_audio(chapter);
	
}


var story_audio = "";
function load_up_story_audio(chapter) {
	if (story_audio !== "") {
	story_audio.pause();
	story_audio.currentTime = 0;
	$('#story_pause_btn').css("display","none").fadeOut();
	$('#story_play_btn').css("display","inline-block").fadeIn();
	}
	$('#story_audio_seek').unbind('change');
	$('#story_audio_seek').unbind('timeupdate');
	
	if(chapter >= 1) {
		story_audio = new Audio('../static/content/story_content/audio/location_' + chapter + '.mp3');
	} else {
		story_audio = new Audio('../static/content/story_content/audio/intro.mp3');
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
