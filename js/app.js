$(document).ready(function() {

});
$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
  });
    $('.ryu').mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    });
    $('.ryu').mousedown(function() {
    console.log('mousedown');
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show().finish().animate(
            {'left': '1020px'},
                500,
            function() {
            $(this).hide();
            $(this).css('left', '520px');
  });
  });
    $('.ryu').mouseup(function() {
    console.log('mouseup');
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
  });       
});
	$(document).keydown(function (e) {
		if (e.keyCode == 88) { 
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	});
	$(document).keyup(function (e) {
		if (e.keyCode == 88) { 
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
		}
	});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}