$(document).ready(function(){
    var $email = $(".email"),//邮箱输入框
        $verify = $(".verify"),//验证码输入框
        $reg_verify_btn = $(".reg_verify_btn"),//获取验证码按钮
        $reg_verify_tr = $(".reg_verify_tr"),//隐藏验证码提示
        $emailpreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, //邮箱验证规则;   
        $pwd = $(".pwd"),
        $rpwd = $(".rpwd"),
        pwdpreg = /^[A-Za-z0-9]{6,20}$/; //6-20位字母或数字密码正则

		//下一步
		var $findpwd1 = $(".findpwd1");
		var $findpwd2 = $(".findpwd2");
		var $findpwd1_btn = $(".findpwd1_btn");
		var $findpwd2_btn = $(".findpwd2_btn");
		$findpwd1_btn.click(function(){
			$findpwd2.show();
			$findpwd1.hide();
	    });
	   

        //实现placeholder   
        $(".email,.verify,.pwd,.rpwd").focus(function(){       	
            focusInput($(this),$(this).next());
        });

        $email.next().click(function(){
            clickText($email,$(this));
        });
        $verify.next().click(function(){
            clickText($verify,$(this));
        });
        $pwd.next().click(function(){
            clickText($pwd,$(this));
        });
        $rpwd.next().click(function(){
            clickText($rpwd,$(this));
        });

        //失去焦点时
        $email.blur(function(){
            checkEmail();
            blurInput($(this),$(this).next());
        });
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

        //检查邮箱是否合法
        function checkEmail(){
            var $emailVal = $email.val();
            var $nextp = $(".email_note");
            $emailVal = Trim($emailVal,"g");
            if(!$emailpreg.test($emailVal)){
                WrongColor($nextp,$email);
                $nextp.html("请输入账户绑定的邮箱");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$email);
                return true;
            }    
        }
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
			$nextp.html("建议使用6-20字母数字组合");
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
			$nextp.html("请再次输入登录密码");
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