function focusInput($input,$text){
    OnFocus($input);
    $text.hide();
}
function clickText($input,$text){
    OnFocus($input);
    $input.focus();
    $text.hide();
}
function blurInput($input,$text){
    if($input.val() == ""){
        $text.show();
    }
}
function RightColor(obj,objn){
    obj.addClass("p_right").removeClass("p_wrong");
    objn.removeClass("b_blue").removeClass("b_red");
}
function WrongColor(obj,objn){
    obj.addClass("p_wrong").removeClass("p_right");
    objn.addClass("b_red").removeClass("b_blue");
}
function OnFocus(obj){
    obj.addClass("b_blue").removeClass("b_red");
}
function OnBlur(obj){
   obj.removeClass("b_blue").removeClass("b_red"); 
}

//去除空格  
function Trim(str,is_global) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g,"");
    if(is_global.toLowerCase()=="g"){
        result = result.replace(/\s/g,"");
     }
    return result;
}
function getSltVal(tit){
    tit.click(function(){
        var $ss = tit.index(this);
        tit.eq($ss).next().toggle();
        tit.eq($ss).next().children("li").click(function(){
            tit.eq($ss).html($(this).html());
            $(this).parent().hide();
        });
    });
}
$(function(){
input();    
})

function input(){

    var $input = $("body").find("input[type='text']");

    $input.each(function(){
        if($(this).val() != "" ){
            $(this).next("span").hide(); 
        }
    });
}
// alert($input.val());
//     if($input.val() != ""){
//         alert(1);
//         $input.next("span").hide();
//     }
// }