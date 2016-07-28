$("#more").click(function(){
    $("section").css({"position": "fixed"});
    $("#info").animate({"left": "10%",}, 650);
    $("#info").animate({"left": "0%",}, 300);
});

$("#back").click(function(){
	$("section").css({"position": "absolute"});
    $("#info").animate({"left": "-110%"}, "slow");
});