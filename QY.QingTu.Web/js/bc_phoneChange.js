$(document).ready(function(){
/*******************************操作人电话变更*****************************/

	var $chphone = $(".chphone"),//新手机号	
	$chverify = $(".chverify"),//验证码
	$verify_btn = $(".verify_btn"),//获取验证码按钮
    $chTips1 = $(".chTips1"),//验证码提示
    $chTips2 = $(".chTips2"),//验证码提示
	$chpay = $(".chpay"),//支付密码
	$phonereg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,//手机号正则
	$pwdreg = /^[A-Za-z0-9]{6}$/; //6位字母或数字密码正则

    //获取验证码按钮
    $verify_btn.click(function(){
        $index = $verify_btn.index(this);
        $chTips1.hide();
        $chTips2.eq($index).show();
        $(this).addClass("verfiy_gray").attr("disabled","disabled");
    });
        
	$(".chphone,.chverify,.chpay").focus(function(){       	
        focusInput($(this),$(this).next());
    });

	//焦点获得时       实现placeholder
    $chphone.next().click(function(){
        clickText($chphone,$(this));
    });
    $chverify.next().click(function(){
        clickText($chverify,$(this));
    });  
    $chpay.next().click(function(){
        clickText($chpay,$(this));
    });  
    
	//焦点失去时
	$chphone.blur(function(){
        checkChphone();
        blurInput($(this),$(this).next());
    });    
	$chverify.blur(function(){
        checkChverify();
        blurInput($(this),$(this).next());
    });  
    $chpay.blur(function(){
        CheckChpay();
        blurInput($(this),$(this).next());
    });  
    
    
    //检查手机号是否合法
    function checkChphone(){
        var $chphoneVal = $chphone.val();
        var $nextp = $chphone.parent().parent().next().find(".note_p");
        $chphoneVal = Trim($chphoneVal,"g");
        if(!$phonereg.test($chphoneVal)){
            WrongColor($nextp,$chphone);
            $nextp.html("请填写您的手机号");
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$chphone);
            return true;
        }
    }
    //检查手机验证码验证码是否合法
    function checkChverify(){
        var $chverifyVal = $chverify.val();
        var $nextp = $chverify.parent().parent().next().find(".note_p");
        $chverifyVal = Trim($chverifyVal,"g");
        if($chverifyVal == ""){
            WrongColor($nextp,$chverify);
            $nextp.html("请填写准确的验证码");
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$chverify);
            return true;
        }    
    } 
	//判断支付密码是否符合规则
	function CheckChpay(){
		var $chpayVal = $chpay.val();
		var $nextp = $chpay.parent().parent().next().find(".note_p");
		if(!$pwdreg.test($chpayVal)){
			WrongColor($nextp,$chpay);
			$nextp.html("输入支付密码进行验证");
			return false;
		}else{
			$nextp.html("&nbsp;");
			RightColor($nextp,$chpay);
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
	    obj.addClass("ch_right").removeClass("ch_wrong");
	    objn.removeClass("b_blue").removeClass("b_red");
	}
	function WrongColor(obj,objn){
	    obj.addClass("ch_wrong").removeClass("ch_right");
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