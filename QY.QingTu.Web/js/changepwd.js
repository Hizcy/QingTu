$(document).ready(function(){
	/////////////////////设置新密码/////////////////////
	var $oldpwd = $(".oldpwd"),
	$pwd = $(".pwd"),
	$rpwd = $(".rpwd"),
	pwdpreg = /^[A-Za-z0-9]{6,20}$/; //6-20位字母或数字密码正则
	
	//实现placeholder   
    $(".oldpwd,.pwd,.rpwd").focus(function(){   	
        focusInput($(this),$(this).next());
    });
    $oldpwd.next().click(function(){
        clickText($oldpwd,$(this));
    });
    $pwd.next().click(function(){
        clickText($pwd,$(this));
    });
    $rpwd.next().click(function(){
        clickText($rpwd,$(this));
    });
		
	//失去焦点时
	$oldpwd.blur(function(){
        CheckOldpwd();
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
    
    
    //检查当前登录密码
    function CheckOldpwd(){
		var $oldpwdVal = $oldpwd.val();
		var $nextp = $(".oldpwd_note");
		if(!pwdpreg.test($oldpwdVal)){
			WrongColor($nextp,$oldpwd);
			$nextp.html("请输入登录密码");
			return false;
		}else{
			$nextp.html("&nbsp;");
			RightColor($nextp,$oldpwd);
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