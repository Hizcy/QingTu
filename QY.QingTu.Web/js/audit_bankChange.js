$(document).ready(function(){
/*******************************风控-取款银行卡变更*****************************/

	//不通过按钮
	var $bankcg_a = $(".bankcg").find(".nopass");	
	$bankcg_a.click(function(){
		$(this).toggleClass("nopass_in");
	});
	//end 不通过按钮
	
	//不通过原因输入框
	var $autextarea = $(".autextarea");
	$autextarea.focus(function(){       	
        focusInput($(this),$(this).next());
    });
    $autextarea.blur(function(){
    	blurInput($(this),$(this).next());
        OnBlur($(this),$(this).next());
    });   
    //end 不通过原因输入框
	
		
	
});