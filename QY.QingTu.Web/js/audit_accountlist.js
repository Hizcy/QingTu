$(document).ready(function(){





    var $tit = $(".risk_select").children("p"),
        $cont = $(".risk_select").children("ul"),
        $input = $(".risk_inputdiv").children("input"),
        $span = $(".risk_inputdiv").children("span");


    $(".order_detail_flist tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});

    $tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("p_on");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("p_on");
            $(this).parent().hide();
        });
    });


    $input.focus(function(){
        $(this).addClass("input_on");
        $input.next().hide();
    });
    $input.next().click(function(){
        $input.addClass("input_on").focus();
        $(this).hide();    
    });
    $input.blur(function(){
        $(this).removeClass("input_on");
        if($(this).val() == ""){
            $input.next().show();
        }
    });



























})