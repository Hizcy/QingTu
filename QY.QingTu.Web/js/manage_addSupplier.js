$(document).ready(function(){
/***********************平台-添加供应商JS***********************/

	var $companyname = $(".companyname"),//企业名称
	$tallage = $(".tallage"),//税号
	$enphone = $(".enphone"),//企业电话
	$enaddress = $(".enaddress"),//企业地址
	$bankac = $(".bankac"),//银行账号
	$acname = $(".acname"),//开户名
	$bankInfo = $(".bankInfo"),//开户行信息
	integer = /^(([123456789]\d)|100)$/,//大于0小于等于100的正整数正则
	bank = /^[0-9]{16,20}$/,  //银行卡
	acname = /^[\u4e00-\u9fa5a-zA-Z0-9]{2,50}$/,//数字、字母、汉字
	enphone = /^1[3|5|7|8]\d{9}$/;//手机正则

			
   //焦点获得时       实现placeholder
    $(".companyname,.tallage,.enphone,.enaddress,.bankac,.acname,.bankInfo").focus(function(){
        focusInput($(this),$(this).next());
    });
    $companyname.next().click(function(){
        clickText($companyname,$(this));
    });
    $tallage.next().click(function(){
        clickText($tallage,$(this));
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
		}else if(!enphone.test($enphoneVal)){
			WrongColor($nextp,$nextspan,$enphone);
			$nextp.html("请输入正确的企业电话");
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
		}else if(!acname.test($acnameVal)){
			WrongColor($nextp,$nextspan,$acname);
			$nextp.html("请输入正确的开户名");
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
	
	/////////////////////完成提示弹窗/////////////////////
	$(".bc_sbtn").click(function(){
		if(CheckCompanyname() && CheckTallage() && CheckEnphone() && CheckEnaddress() && CheckBankac() &&CheckAcname() && CheckBankInfo()){			layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layerBorder',    //自定义弹窗样式
            area: ['360px', '240px'],
            btn:['确定'],
            content: $(".add_win")//自定义内容样式
        }); 
			
		}
        
    });	
	
	var $table1 = $(".table1");
    $table1.on("click",".comname",function(e){
    var $th_title = $(this).children("input"),
        $th_ul = $(this).children("ul"),
        $th_list = $th_ul.children("li"),
        $th_height = $(this).height();
        if($th_title.val() !=""){
          $th_title.trigger("keyup");
        }
        $th_title.keyup(function(){
          $th_ul.show();
          $th_ul.css({"position":"absolute","top":$th_height+1,"left":0});  
        });
        $th_list.hover(function(){
          $th_title.off("blur");
        });
        $th_list.click(function(e){
          $th_title.val($(this).html());
          CheckCompanyname();
          $(this).parent().hide();
          e.stopPropagation();
        });
        e.stopPropagation();
        $(document).click(function(){
          $th_ul.hide();
        });
  });

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