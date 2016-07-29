$('#more').click(function() {
    $('section').css({'position': 'fixed'});
    $('#info').animate({'left': '0%'}, 200);
    $('#info').animate({'opacity': '1'}, 190);
});

$('#back').click(function() {
	$('section').css({'position': 'absolute'});
    $('#info').animate({'opacity': '0.5'}, 200);
    $('#info').animate({'left': '-110%'}, 200);
});
