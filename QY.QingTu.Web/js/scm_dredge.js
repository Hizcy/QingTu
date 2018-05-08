$(document).ready(function(){
	//表单验证
	var idReg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,//18位身份证号
		phoneReg = /^1[3|5|7|8]\d{9}$/,   //手机号正则
		nReg = /^[0-9]{20}$/,  //可输入20位数字的正则
		enReg = /^[0-9A-Za-z]{8,20}$/;  //可输入8-20位字母或数字的正则
	var $dreinput_id = $(".dreinput_id"),
		$J_last = $(".J_last"),
		$J_id = $(".J_id"),
		$J_phone = $(".J_phone"),
		$J_bank = $(".J_bank"),
		$J_qybank = $(".J_qybank"),
		$J_accinfo = $(".J_accinfo"),
		$J_pwd = $(".J_pwd"),
		$p3 = $("#p3"),
		$J_ainfo = $(".J_ainfo"),
		dreinput_id,id,phone,bank,qybank,accinfo,pwd,p3,ainfo;
	var $file_zm = $("#file_zm"),
		$img_zm = $("#img_zm"),
		$file_sc = $("#file_sc"),
		$img_sc = $("#img_sc"),
		$file_zm2 = $("#file_zm2"),
		$img_zm2 = $("#img_zm2"),
		$file_sc2 = $("#file_sc2"),
		$img_sc2 = $("#img_sc2"),
		file_zm,file_sc,file_zm2,file_sc2,
		$banklogo = $(".banklogo"),
		$banklogo2 = $(".banklogo2");


	//上传要求提示隐藏显示

	$(".uptips_tit").hover(function(){
		$(this).next().show();
	},function(){
		$(this).next().hide();
	});


	$J_bank.keyup(function(){
		var $val = $(this).val();
		if($val.length >= 5){
			for(var $key in $banklist){
				if($val == $key){
					$banklogo.removeClass("disn").html($banklist[$key]);break;
				}
			}	
		}else{
			$banklogo.addClass("disn").html("&nbsp;");
		}
	});
	$J_qybank.keyup(function(){
		var $val = $(this).val();
		if($val.length >= 5){
			for(var $key in $banklist){
				if($val == $key){
					$banklogo2.removeClass("disn").html($banklist[$key]);break;
				}
			}	
		}else{
			$banklogo2.addClass("disn").html("&nbsp;");
		}
	});	


	$("#dretab").submit(function(){
		dreinput_id = checkOther4($dreinput_id,"请选择身份");
		last = checkOther($J_last,"请输入正确的渠道上游账号");
		id = checkOptional($J_id,"请输入正确的法人身份证号",idReg);
		file_zm = yesImg($file_zm,"请上传法人正面证件照");
		file_sc = yesImg($file_sc,"请上传法人手持证件照");
		phone = checkReg($J_phone,"请输入联系人常用手机号","请输入正确的联系人常用手机号",phoneReg);
		file_zm2 = yesImg($file_zm2,"请上传联系人正面证件照");
		file_sc2 = yesImg($file_sc2,"请上传联系人手持证件照");
		bank = checkReg($J_bank,"请输入银行卡号","请输入正确的银行卡号",nReg);
		//qybank = checkReg($J_qybank,"请输入企业银行账号","请输入正确的企业银行账号",nReg);
		accinfo = checkOther($J_accinfo,"请输入开户行信息");
		pwd = checkReg($J_pwd,"请输入支付密码","请输入8-20位数字或字母",enReg);
//		p3 = checkOther2($p3);
		ainfo = checkOther($J_ainfo,"请输入开户行信息");
		if ($(".ditch_tr").is(":visible")) {
			if(last){
				return true;
			}else{
				return false;
			}
		}
		if (!$J_id.val() == "") {
			if(id){
				return true;
			}else{
				return false;
			}
		} 
		if(dreinput_id&&phone&&bank&&file_zm&&file_sc&&phone&&file_zm2&&file_sc2&&bank&&accinfo&&pwd&&ainfo){
			return true;
		}else{
			return false;
		}
	});
	
	/********焦点获得时**********/
	$dreinput_id.focus(function(){
		$(this).addClass("dre_blue").removeClass("dre_red");
	})
	$J_last.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_last.next().click(function(){
		clickText($J_last,$(this));
	});
	$J_id.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_id.next().click(function(){
		clickText($J_id,$(this));
	});
	$J_phone.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_phone.next().click(function(){
		clickText($J_phone,$(this));
	});
	$J_bank.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_bank.next().click(function(){
		clickText($J_bank,$(this));
	});
	$J_qybank.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_qybank.next().click(function(){
		clickText($J_qybank,$(this));
	});
	$J_accinfo.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_accinfo.next().click(function(){
		clickText($J_accinfo,$(this));
	});
	$J_pwd.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_pwd.next().click(function(){
		clickText($J_pwd,$(this));
	});
	$J_ainfo.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_ainfo.next().click(function(){
		clickText($J_ainfo,$(this));
	});
	/********焦点失去时**********/
	$dreinput_id.blur(function(){
		dreinput_id = checkOther4($dreinput_id,"请选择身份");
	})
	$dreinput_id.change(function(){
		dreinput_id = checkOther4($dreinput_id,"请选择身份");
		//选择一级客户渠道上游提示
		if($(this).val() == "一级客户"){
			$(".ditch_tr,.prompt_id").show();
			$J_last.val("").removeClass("dre_red").removeClass("dre_blue");
			$J_last.next().show();
			$J_last.parent().next().removeClass("dre_wrong").removeClass("dre_right").html("");
		}else{
			$(".prompt_id").hide();
			if ($(this).val() == "分级客户") {
				$(".ditch_tr").show();
				$J_last.val("").removeClass("dre_red").removeClass("dre_blue");
				$J_last.next().show();
				$J_last.parent().next().removeClass("dre_wrong").removeClass("dre_right").html("");
			} else{
				$(".ditch_tr").hide();
			}
		}
	})
	$J_last.blur(function(){
		blurInput($(this),$(this).next());
		last = checkOther3($J_last,"请输入渠道上游账号");
	})
	$J_id.blur(function(){
		blurInput($(this),$(this).next());
		id = checkOptional($J_id,"请输入正确的法人身份证号",idReg);
	})
	$J_phone.blur(function(){
		blurInput($(this),$(this).next());
		phone = checkReg($J_phone,"请输入联系人常用手机号","请输入正确的联系人常用手机号",phoneReg);
	})
	$J_bank.blur(function(){
		blurInput($(this),$(this).next());
		bank = checkReg($J_bank,"请输入银行卡号","请输入正确的银行卡号",nReg);
	})
	$J_qybank.blur(function(){
		blurInput($(this),$(this).next());
		qybank = checkReg($J_qybank,"请输入企业银行账号","请输入正确的企业银行账号",nReg);
	})
	$J_accinfo.blur(function(){
		blurInput($(this),$(this).next());
		accinfo = checkOther($J_accinfo,"请输入开户行信息");
	})
	$J_pwd.blur(function(){
		blurInput($(this),$(this).next());
		pwd = checkReg($J_pwd,"请输入支付密码","请输入8-20位数字或字母",enReg);
	})
	$p3.blur(function(){
		p3 = checkOther2($p3);
	})
	$p3.change(function(){
		p3 = checkOther2($p3);
	})
	$J_ainfo.blur(function(){
		blurInput($(this),$(this).next());
		ainfo = checkOther($J_ainfo,"请输入开户行信息");
	})
	
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wr = obj.parent().next();
        $val = Trim($val,"g");
        if ($val == "") {
        	WrongColor($wr,obj);
            $wr.show().html(con1);
            return false;
        } else{
        	if(!preg.test($val)){
	            WrongColor($wr,obj);
	            $wr.show().html(con2);
	            return false;
	        }else{
	        	RightColor($wr,obj);
	            $wr.html("&nbsp;");
	            return true;
	        }    
        }
    }
    
    //判断其他不用正则的
    function checkOther(obj,con){
        var $val = obj.val();
        var $wr = obj.parent().next();
        if($val == ""){
            WrongColor($wr,obj);
            $wr.show().html(con);
            return false;
        }else{
            RightColor($wr,obj);
            $wr.html("&nbsp;");
            return true;
        } 
    }
    function checkOther2(obj){
        var $val = obj.val();
        var $wr = obj.parent().next().next();
        if($val == ""|| $val == "市、县级市、县" || $val == "请选择"){
            obj.addClass("dre_red");
            return false;
        }else{
            obj.removeClass("dre_red");
            return true;
        } 
    }
    //判断最多六个渠道上游号
    function checkOther3(obj,con){
    	var $val = obj.val();
        var $wr = obj.parent().next();
        if($val == ""){
            WrongColor($wr,obj);
            $wr.show().html(con);
            return false;
        }else if($val.split(";").length>6 || $val.split("；").length>6 || ($val.split(";").length+$val.split("；").length-1)>6){
        	WrongColor($wr,obj);
			$wr.html("渠道上游数超过最大数量，请重新输入")
        }else{
            RightColor($wr,obj);
            $wr.html("&nbsp;");
            return true;
        } 
    }
    //身份选择
    function checkOther4(obj,con){
        var $val = obj.val();
        var $wr = obj.next();
        if($val == "请选择"){
            WrongColor($wr,obj);
            $wr.show().html(con);
            return false;
        }else{
            RightColor($wr,obj);
            $wr.html("&nbsp;");
            return true;
        } 
    }
    
    //判断非必填且有正则的
    function checkOptional(obj,con,preg){
        var $val = obj.val();
        var $wr = obj.parent().next();
        $val = Trim($val,"g");
    	if ($val == "") {
        	OnBlur(obj);
            $wr.html("&nbsp;");
            $wr.removeClass("dre_wrong").removeClass("dre_right");
            return true;
        } else{
        	if(!preg.test($val)){
	            WrongColor($wr,obj);
	            $wr.show().html(con);
	            return false;
	        }else{
	        	RightColor($wr,obj);
	            $wr.html("&nbsp;");
	            return true;
	        }    
        }
    }

    
    
	//综合样式判定
	function RightColor(obj,objn){
		obj.removeClass("dre_wrong").addClass("dre_right");
		objn.removeClass("dre_blue").removeClass("dre_red");
	}
	function WrongColor(obj,objn){
		obj.addClass("dre_wrong").removeClass("dre_right");
		objn.addClass("dre_red").removeClass("dre_blue");
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
	function OnFocus(obj){
	    obj.addClass("dre_blue").removeClass("dre_red");
	}
	function OnBlur(obj){
	   obj.removeClass("dre_blue").removeClass("dre_red"); 
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
	

	
	//判断是否已经上传图片,未上传图片错误提示
	function yesImg(obj,con){
		var $site = obj.parent().parent().find(".dreupsite");
		var $siteval = $site.html();
        var $wrong = obj.parent().parent().find(".dreup_p");
        if($siteval == ""){
        	$wrong.show().html(con);
            $wrong.addClass("dreup_wrong");
            return false;
            
        }
	}
	//end 判断是否已经上传图片,未上传图片错误提示
	
	//上传图片预览	
	upImg($file_zm,$img_zm);
	upImg($file_sc,$img_sc);
	upImg($file_zm2,$img_zm2);
	upImg($file_sc2,$img_sc2);
	function upImg(objs,imgs){
		objs.change(function() {
	        var $file = $(this),
	        	fileObj = $file[0],
	        	$fileVal = $file.val(),
	        	windowURL = window.URL || window.webkitURL,
	        	dataURL;
	        var $imgBox = objs.parent().parent().find(".dreupimgBox"),
	        	$site = objs.parent().prev().find(".dreupsite"),
		        $wr_tr = objs.parent().parent().find(".dreup_p"),
		        $right = objs.parent().parent().find(".dreup_span");
		    if ($file.val() == "") {
		    	return false;
		    } 
	        if(fileObj && fileObj.files && fileObj.files[0]){
	            dataURL = windowURL.createObjectURL(fileObj.files[0]);
	            imgs.attr('src',dataURL);
	            $site.html($fileVal);
	            $imgBox.show();
	            $wr_tr.hide();
	            objs.parent().css("margin-top","72px");
	            $right.addClass("dre_right");
	        }else{
		        dataURL = $file.val();
		        imgs.attr('src',dataURL);
	            $site.html($fileVal);
	            $imgBox.show();
	            $wr_tr.hide();
	            objs.parent().css("margin-top","72px");
	            $right.addClass("dre_right");
	        }
	    });
	}	
	//end 上传图片预览
	
	//选择个人或企业
	var $choose_a = $(".run_div").children("a"),
		$gr_bank = $(".gr_bank"),
		$gr_bank_next = $(".gr_bank_next"),
		$qy_bank = $(".qy_bank"),
		$qy_bank_next = $(".qy_bank_next"),
		$J_gr = $(".J_gr"),
		$J_qy = $(".J_qy");
	$choose_a.click(function(){
		$(this).find("i").addClass("run_on");
		$(this).siblings().find("i").removeClass("run_on");
		if ($J_gr.hasClass("run_on")) {
			$gr_bank.removeClass("disn");
			$gr_bank_next.removeClass("disn");
			$qy_bank.addClass("disn");
			$qy_bank_next.addClass("disn");
		} else{
			$qy_bank.removeClass("disn");
			$gr_bank_next.addClass("disn");
			$gr_bank.addClass("disn");
			$qy_bank_next.removeClass("disn");
		}
	})
	//end 选择个人或企业
	
	//协议弹窗
	var $agreed_sjru = $(".agreed_sjru");
	$agreed_sjru.click(function(){
		layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            area: ['800px', '480px'],
            content: $('.pro_sjrz')
        })	
	})
	
	var	$od_sbtn = $(".od_sbtn"),
		$tbb = $(".tbb"),
		$delete_this_line = $(".delete_this_line");//删除本行按钮
	$(".od_return_c,.od_return_l").hover(function(){
		$(".od_return_c").css("background","url(../HSP-PCv2.0/images/bc/circle.png) no-repeat center -91px");
		$(".od_return_l").animate({"top":"12px"});
	},function(){
		$(".od_return_c").css("background","url(../HSP-PCv2.0/images/bc/circle.png) no-repeat center 0px");
		$(".od_return_l").animate({"top":"3px"});
	});

	//同意协议开启按钮
	var $agreedBtn = $(".agreedBtn"),
		$dreBtn = $(".dreBtn");
	$agreedBtn.click(function(){
		$(this).toggleClass("agreedBtn_on");
		$dreBtn.toggleClass("dreBtn_jin");
		dreBtn_jin();
	})
	$dreBtn.click(function(){
		dreBtn_jin();
	})
	function dreBtn_jin(){
		if ($dreBtn.hasClass("dreBtn_jin")) {
			$dreBtn.attr("disabled","disabled");
		} else{
			$dreBtn.removeAttr("disabled");
		}
	}

	
})