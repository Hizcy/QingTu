$(document).ready(function(){

    var $input = $(".risk_inputdiv").children("input"),
        $span = $(".risk_inputdiv").children("span");

    $(".order_detail_flist tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});

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