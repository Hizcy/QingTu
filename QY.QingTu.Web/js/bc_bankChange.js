$(document).ready(function(){
/*******************************操作人电话变更*****************************/

	var $chbank = $(".chbank"),//新手机号
	$bankInfo = $(".bankInfo"),
	$bankreg = /^[1-9]\d*$/;//验证数字
      
	$(".chbank,.bankInfo").focus(function(){       	
        focusInput($(this),$(this).next());
    });

	//焦点获得时       实现placeholder
    $chbank.next().click(function(){
        clickText($chbank,$(this));
    });
    $bankInfo.next().click(function(){
        clickText($bankInfo,$(this));
    });  
    
	//焦点失去时
	$chbank.blur(function(){
        checkChbank();
        blurInput($(this),$(this).next());
    });    
	$bankInfo.blur(function(){
        checkBankInfo();
        blurInput($(this),$(this).next());
    });  
    
    
    //检查更改银行卡号是否合法
    function checkChbank(){
        var $chbankVal = $chbank.val();
        var $nextp = $chbank.parent().parent().next().find(".note_p");
        $chbankVal = Trim($chbankVal,"g");
        if(!$bankreg.test($chbankVal)){
            WrongColor($nextp,$chbank);
            $nextp.html("请填写您的银行卡号");
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$chbank);
            return true;
        }
    }
    //检查开户行信息是否为空
    function checkBankInfo(){
        var $bankInfoVal = $bankInfo.val();
        var $nextp = $bankInfo.parent().parent().next().find(".note_p");
        $bankInfoVal = Trim($bankInfoVal,"g");
        if($bankInfoVal == ""){
            WrongColor($nextp,$bankInfo);
            $nextp.html("请输入开户分（支）行信息");
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$bankInfo);
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