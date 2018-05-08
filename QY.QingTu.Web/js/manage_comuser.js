$(document).ready(function(){
/*******************************操作人电话变更*****************************/
	//角色选择
	var $manage_role_ul = $(".manage_role_ul").children("li");	
	$manage_role_ul.click(function(){
		$(this).toggleClass("role_in");
	});
	//end 角色选择
	
	var $mgoperator = $(".mgoperator"),
	$mgphone = $(".mgphone"),
	$mgemail = $(".mgemail"),
	$phonepreg = /^1[3|5|7|8]\d{9}$/, //手机正则
	$fontpreg = /^[\u0391-\uFFE5]{2,30}$/,  //汉字正则
    $emailpreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //邮箱验证规则; 

	$(".mgoperator,.mgphone,.mgemail").focus(function(){       	
        focusInput($(this),$(this).next());
    });

	//焦点获得时       实现placeholder
    $mgoperator.next().click(function(){
        clickText($mgoperator,$(this));
    });
    $mgphone.next().click(function(){
        clickText($mgphone,$(this));
    });
    $mgemail.next().click(function(){
        clickText($mgemail,$(this));
    });

	//焦点失去时
	$mgoperator.blur(function(){
        checkMgoperator();
        blurInput($(this),$(this).next());
    });  
    $mgphone.blur(function(){
        checkMgphone();
        blurInput($(this),$(this).next());
    });  
    $mgemail.blur(function(){
        checkMgemail();
        blurInput($(this),$(this).next());
    });  

    //检查操作人姓名是否符合规则
    function checkMgoperator(){
        var $mgoperatorVal = $mgoperator.val();
        var $nextp = $mgoperator.parent().parent().next().find(".note_p");
        $mgoperatorVal = Trim($mgoperatorVal,"g");
        if(!$fontpreg.test($mgoperatorVal)){
            WrongColor($nextp,$mgoperator);
            $nextp.html("请填写正确的操作人姓名");
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$mgoperator);
            return true;
        }
    }
    
    //检查手机号是否合法
    function checkMgphone(){
        var $mgphoneVal = $mgphone.val();
        var $nextp = $mgphone.parent().parent().next().find(".note_p");
        $mgphoneVal = Trim($mgphoneVal,"g");
        if(!$phonepreg.test($mgphoneVal)){
            WrongColor($nextp,$mgphone);
            $nextp.html("请输入正确的手机号");
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$mgphone);
            return true;
        }
    }
    
    //检查邮箱是否合法
    function checkMgemail(){
        var $mgemailVal = $mgemail.val();
        var $nextp = $mgemail.parent().parent().next().find(".note_p");
        $mgemailVal = Trim($mgemailVal,"g");
        if(!$emailpreg.test($mgemailVal)){
            WrongColor($nextp,$mgemail);
            $nextp.html("请填写正确的电子邮箱");
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$mgemail);
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