$(document).ready(function(){
/*******************************角色添加*****************************/
	
	var $mgrole = $(".mgrole"),
	$roletextarea = $(".roletextarea");

	$(".mgrole,.roletextarea").focus(function(){       	
        focusInput($(this),$(this).next());
    });

	//焦点获得时       实现placeholder
    $mgrole.next().click(function(){
        clickText($mgrole,$(this));
    });
    $roletextarea.next().click(function(){
        clickText($roletextarea,$(this));
    });

	//焦点失去时
	$mgrole.blur(function(){
        checkMgrole();
        blurInput($(this),$(this).next());
    });   
    $roletextarea.blur(function(){
    	blurInput($(this),$(this).next());
        OnBlur($(this),$(this).next());
    });   

	//判断角色名称是否为空 
    function checkMgrole(){
        var $mgroleVal = $mgrole.val();
        var $nextp = $mgrole.parent().parent().next().find(".note_p");
        $mgroleVal = Trim($mgroleVal,"g");
        if($mgroleVal == ""){
            WrongColor($nextp,$mgrole);
            $nextp.html("角色名不可为空，请填写角色名");
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$mgrole);
            return true;
        }    
    } 
	
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
	    obj.addClass("mg_right").removeClass("mg_wrong");
	    objn.removeClass("b_blue").removeClass("b_red");
	}
	function WrongColor(obj,objn){
	    obj.addClass("mg_wrong").removeClass("mg_right");
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
	
		
	
});