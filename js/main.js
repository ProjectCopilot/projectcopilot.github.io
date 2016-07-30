if (window.location.hash === '#more') {
    $('section').css({'position': 'fixed'});
    $('#info').css({'left': '0%', 'opacity': '1'});
}

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
