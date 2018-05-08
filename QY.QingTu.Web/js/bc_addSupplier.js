$(document).ready(function(){
/***********************商家中心-添加供应商JS***********************/

	var $companyname = $(".companyname"),//企业名称
	$tallage = $(".tallage"),//税号
	$discount = $(".discount"),//折扣率
	$enphone = $(".enphone"),//企业电话
	$enaddress = $(".enaddress"),//企业地址
	$bankac = $(".bankac"),//银行账号
	$acname = $(".acname"),//开户名
	$bankInfo = $(".bankInfo"),//开户行信息
	bank = /^[0-9]{16,20}$/,  //银行卡
	integer = /^(([123456789]\d)|100)$/;//大于0小于等于100的正整数正则
			
   //焦点获得时       实现placeholder
    $(".companyname,.tallage,.discount,.enphone,.enaddress,.bankac,.acname,.bankInfo").focus(function(){
        focusInput($(this),$(this).next());
    });
    $companyname.next().click(function(){
        clickText($companyname,$(this));
    });
    $tallage.next().click(function(){
        clickText($tallage,$(this));
    });
    $discount.next().click(function(){
        clickText($discount,$(this));
    });	   
    $enphone.next().click(function(){
        clickText($enphone,$(this));
    });	
    $enaddress.next().click(function(){
        clickText($enaddress,$(this));
    });	
    $bankac.next().click(function(){
        clickText($bankac,$(this));
    });	
    $acname.next().click(function(){
        clickText($acname,$(this));
    });	
    $bankInfo.next().click(function(){
        clickText($bankInfo,$(this));
    });	    
    
	//焦点失去时
	$companyname.blur(function(){
        CheckCompanyname();
        blurInput($(this),$(this).next());
    });
	$tallage.blur(function(){
        CheckTallage();
        blurInput($(this),$(this).next());
    });	    
    $discount.blur(function(){
        CheckDiscount();
        blurInput($(this),$(this).next());
    });	    
    $enphone.blur(function(){
        CheckEnphone();
        blurInput($(this),$(this).next());
    });	
    $enaddress.blur(function(){
        CheckEnaddress();
        blurInput($(this),$(this).next());
    });	
    $bankac.blur(function(){
        CheckBankac();
        blurInput($(this),$(this).next());
    });	
    $acname.blur(function(){
        CheckAcname();
        blurInput($(this),$(this).next());
    });	
    $bankInfo.blur(function(){
        CheckBankInfo();
        blurInput($(this),$(this).next());
    });	    
		
	//判断企业名称是否为空
	function CheckCompanyname(){
		var $companynameVal = $companyname.val();
		var $nextp = $companyname.parent().parent().next().find(".note_p");
		var $nextspan = $companyname.next().next();
		$companynameVal = Trim($companynameVal,"g");
		if($companynameVal == ""){
			WrongColor($nextp,$nextspan,$companyname);
			$nextp.html("请输入企业名称");
			return false;
		}else{
			$nextp.html("&nbsp;");
			$nextspan.html("&nbsp;");
			RightColor($nextp,$nextspan,$companyname);
			return true;
		}	
	}
	//判断税号是否为空
	function CheckTallage(){
		var $tallageVal = $tallage.val();
		var $nextp = $tallage.parent().parent().next().find(".note_p");
		var $nextspan = $tallage.next().next();
		$tallageVal = Trim($tallageVal,"g");
		if($tallageVal == ""){
			WrongColor($nextp,$nextspan,$tallage);
			$nextp.html("请输入税号");
			return false;
		}else{
			$nextp.html("&nbsp;");
			$nextspan.html("&nbsp;");
			RightColor($nextp,$nextspan,$tallage);
			return true;
		}	
	}		
	//判断折扣率是否符合规则
	function CheckDiscount(){
		var $discountVal = $discount.val();
		var $nextp = $discount.parent().parent().next().find(".note_p");
		var $nextspan = $discount.next().next().next();
		$discountVal = Trim($discountVal,"g");
		if(!integer.test($discountVal)){
			WrongColor($nextp,$nextspan,$discount);
			$nextp.html("请输入折扣率");
			return false;
		}else{
			$nextp.html("&nbsp;");
			$nextspan.html("&nbsp;");
			RightColor($nextp,$nextspan,$discount);
			return true;
		}
	}		
	//判断企业电话是否为空
	function CheckEnphone(){
		var $enphoneVal = $enphone.val();
		var $nextp = $enphone.parent().parent().next().find(".note_p");
		var $nextspan = $enphone.next().next();
		$enphoneVal = Trim($enphoneVal,"g");
		if($enphoneVal == ""){
			WrongColor($nextp,$nextspan,$enphone);
			$nextp.html("请输入企业电话");
			return false;
		}else{
			$nextp.html("&nbsp;");
			$nextspan.html("&nbsp;");
			RightColor($nextp,$nextspan,$enphone);
			return true;
		}	
	}	
	//判断企业地址是否为空
	function CheckEnaddress(){
		var $enaddressVal = $enaddress.val();
		var $nextp = $enaddress.parent().parent().next().find(".note_p");
		var $nextspan = $enaddress.next().next();
		$enaddressVal = Trim($enaddressVal,"g");
		if($enaddressVal == ""){
			WrongColor($nextp,$nextspan,$enaddress);
			$nextp.html("请输入详细企业地址");
			return false;
		}else{
			$nextp.html("&nbsp;");
			$nextspan.html("&nbsp;");
			RightColor($nextp,$nextspan,$enaddress);
			return true;
		}	
	}		
	//判断银行账号是否为空
	function CheckBankac(){
		var $bankacVal = $bankac.val();
		var $nextp = $bankac.parent().parent().next().find(".note_p");
		var $nextspan = $bankac.next().next();
		$bankacVal = Trim($bankacVal,"g");
		if($bankacVal == ""){
			WrongColor($nextp,$nextspan,$bankac);
			$nextp.show().html("请输入银行账号");
			return false;
		}else if(!bank.test($bankacVal)){
			WrongColor($nextp,$nextspan,$bankac);
			$nextp.show().html("请输入正确银行账号");
			return false;
		}else{
			$nextp.html("&nbsp;").hide();
			$nextspan.html("&nbsp;");
			RightColor($nextp,$nextspan,$bankac);
			return true;
		}	
	}		
	//判断开户名是否为空
	function CheckAcname(){
		var $acnameVal = $acname.val();
		var $nextp = $acname.parent().parent().next().find(".note_p");
		var $nextspan = $acname.next().next();
		$acnameVal = Trim($acnameVal,"g");
		if($acnameVal == ""){
			WrongColor($nextp,$nextspan,$acname);
			$nextp.html("请输入开户名");
			return false;
		}else{
			$nextp.html("&nbsp;");
			$nextspan.html("&nbsp;");
			RightColor($nextp,$nextspan,$acname);
			return true;
		}	
	}	
	//判断开户信息是否为空
	function CheckBankInfo(){
		var $bankInfoVal = $bankInfo.val();
		var $nextp = $bankInfo.parent().parent().next().find(".note_p");
		var $nextspan = $bankInfo.next().next();
		$bankInfoVal = Trim($bankInfoVal,"g");
		if($bankInfoVal == ""){
			WrongColor($nextp,$nextspan,$bankInfo);
			$nextp.html("请输入开户分（支）行信息");
			return false;
		}else{
			$nextp.html("&nbsp;");
			$nextspan.html("&nbsp;");
			RightColor($nextp,$nextspan,$bankInfo);
			return true;
		}	
	}		
	
	
	//综合样式判定
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
	function RightColor(obj,objs,objn){
		obj.removeClass("bc_wrong");
		objs.addClass("bc_right");
		objn.removeClass("b_blue").removeClass("b_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("bc_wrong");
		objs.removeClass("bc_right");
		objn.addClass("b_red").removeClass("b_blue");
	}
	function OnFocus(obj){
		obj.addClass("b_blue").removeClass("b_red");
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
	
	 //判断所属银行
    var $bankac = $(".bankac"),
    	$banklogo = $(".banklogo");
	$bankac.keyup(function(){
		var $val = $(this).val();
		if($val.length >= 5){
			for(var $key in $banklist){
				if($val == $key){
					$banklogo.show().html($banklist[$key]);break;

				}
			}
		}else{
			$banklogo.html("&nbsp;");
		}
	});
	//end 判断所属银行    
	
	

	
	
	
	

	

})