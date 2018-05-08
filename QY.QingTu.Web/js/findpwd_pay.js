$(document).ready(function(){
    var $verify = $(".verify"),//验证码输入框
        $reg_verify_btn = $(".reg_verify_btn"),//获取验证码按钮
        $reg_verify_tr = $(".reg_verify_tr");//隐藏验证码提示
        $pwd = $(".pwd"),
		$rpwd = $(".rpwd"),
		pwdpreg = /^[A-Za-z0-9]{6}$/; //6位字母或数字密码正则

		//下一步
		var $findpwd1 = $(".findpwd1"),
			$findpwd2 = $(".findpwd2"),
			$findpwd1_btn = $(".findpwd1_btn"),
			$findpwd2_btn = $(".findpwd2_btn");
		$findpwd1_btn.click(function(){
			$findpwd2.show();
			$findpwd1.hide();
	    });
	   

        //实现placeholder   
        $(".verify,.pwd,.rpwd").focus(function(){      	
            focusInput($(this),$(this).next());
        });
        $verify.next().click(function(){
            clickText($verify,$(this));
        });

        //失去焦点时
        $verify.blur(function(){
            checkVerify();
            blurInput($(this),$(this).next());
        });
		$pwd.blur(function(){
		    CheckPwd();CheckSamepwd();
		    blurInput($(this),$(this).next());
		});
		$rpwd.blur(function(){
		    CheckRpwd();CheckSamepwd();
		    blurInput($(this),$(this).next());
		});

		//获取验证码按钮
        $reg_verify_btn.click(function(){
            $index = $reg_verify_btn.index(this);
            $reg_verify_tr.eq($index).show();
            $(this).addClass("reg_verfiy_gray").attr("disabled","disabled");
            $(".reg_sbtn_div").eq($index).css("margin","45px 0 30px 470px");
        });

        //检查邮箱验证码是否合法
        function checkVerify(){
            var $verifyVal = $verify.val();
            var $nextp = $(".verify_note");
            $verifyVal = Trim($verifyVal,"g");
            if($verifyVal == ""){
                WrongColor($nextp,$verify);
                $nextp.html("请输入验证码");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$verify);
                return true;
            }    
        }

	//判断密码是否符合规则
	function CheckPwd(){
		var $pwdVal = $pwd.val();
		var $nextp = $(".pwd_note");
		if(!pwdpreg.test($pwdVal)){
			WrongColor($nextp,$pwd);
			$nextp.html("建议输入6位数字或字母");
			return false;
		}else{
			$nextp.html("&nbsp;");
			RightColor($nextp,$pwd);
			return true;
		}
	}	
	
	function CheckRpwd(){
		var $rpwdVal = $rpwd.val();
		var $nextp = $(".rpwd_note");
		if(!pwdpreg.test($rpwdVal)){
			WrongColor($nextp,$rpwd);
			$nextp.html("请再次输入支付密码");
			return false;
		}else{
			$nextp.html("&nbsp;");
			RightColor($nextp,$rpwd);
			return true;
		}
	}
	function CheckSamepwd(){
		var $pwdVal = $pwd.val();
		var $rpwdVal = $rpwd.val();
		var $nextp = $(".rpwd_note");
		if($rpwdVal=="" || $rpwdVal=="请再次输入登录密码"){
			return false;
		}else{
			if($pwdVal != $rpwdVal){
				WrongColor($nextp,$rpwd);
				$nextp.html("两次输入密码不一致，请重新输入");
				return false;
			}else{
				$nextp.html("&nbsp;");
				RightColor($nextp,$rpwd);
				return true;
			}
		}
	}
	
	
	
	
	/////////////////////完成提示弹窗/////////////////////
	$(".findpwd2_btn").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layerBorder',    //自定义弹窗样式
            area: ['360px', '240px'],
            btn:['确定'],
            content: $(".findpwd_win")//自定义内容样式
        }); 

    });
	
	
	

});