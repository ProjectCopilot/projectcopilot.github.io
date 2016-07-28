$("#more").click(function(){
    $("#info").animate({"left": "30%",'opacity':'1'}, 650);
    $("#info").animate({"left": "0%",'opacity':'1'}, 300);
});

$("#back").click(function(){
    $("#info").animate({"left": "-100%",'opacity':'1'}, "slow");
});