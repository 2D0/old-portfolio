$('#mainSlider ul').bxSlider({
  auto: true,
  controls: false,
  autoControls: false,
  stopAutoOnClick: true,
  pager: true,
});


$(".btnMenu").click(function(){
   $(".gnb").animate({
        right:0
   },300);
});
$(".gnb .close").click(function(){
    $(".gnb").animate({
        right:-400
    },300);
});



    $(".gnb li .m").click(function(){

    var tg=$(this).siblings(".gnb .sub");

    var dis=tg.css("display");

 

    if(dis=="block"){

        $(this).removeClass("on");

        tg.slideUp(300);

    }

 

    if(dis=="none"){

        $("#header .gnb li .m").removeClass("on");

        $(this).addClass("on");

        $(".gnb li .sub").slideUp(300);

        tg.slideDown(300);

    };

    

    return false;

}); 