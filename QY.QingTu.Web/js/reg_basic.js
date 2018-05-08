$(document).ready(function(){

    var $bpwd = $(".bpwd"),
        $brpwd = $(".brpwd"),
        $bqiye = $(".bqiye"),
        $bname = $(".bname"),
        $bphone = $(".bphone"), 
        $bverify = $(".bverify"),
        $reg_get_vcode = $(".reg_get_vcode"),
        $phonereg = /^1[3|5|7|8]\d{9}$/,//手机正则
        $pwdpreg = /^[A-Za-z0-9]{6,20}$/;   //密码正则
        $uppreg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/,  //密码验证规则(字母数字组合)
        $fontpreg = /^[\u0391-\uFFE5]{2,30}$/,  //汉字正则
        $emailpreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //邮箱验证规则;   

        $(".reg_agree").click(function(){
            $(this).toggleClass("agree_on");
        })
        //实现placeholder   
        $(".bpwd,.brpwd,.bqiye,.bname,.bverify,.bphone").focus(function(){
            focusInput($(this),$(this).next());
        });
        $bpwd.next().click(function(){
            clickText($bpwd,$(this));
        });
        $brpwd.next().click(function(){
            clickText($brpwd,$(this));
        });
        $bqiye.next().click(function(){
            clickText($bqiye,$(this));
        });
        $bname.next().click(function(){
            clickText($bname,$(this));
        });
        $bphone.next().click(function(){
            clickText($bphone,$(this));
        });
        $bverify.next().click(function(){
            clickText($bverify,$(this));
        });

        $bpwd.blur(function(){
            checkPwd();checkSamepwd();
            blurInput($(this),$(this).next());
        });
        $brpwd.blur(function(){
            checkRpwd();checkSamepwd();
            blurInput($(this),$(this).next());
        });
        $bqiye.blur(function(){
            checkQiye();
            blurInput($(this),$(this).next());
        });
        $bname.blur(function(){
            checkOperater();
            blurInput($(this),$(this).next());
        });
        $bphone.blur(function(){
            checkPhone();
            blurInput($(this),$(this).next());
        });
        $bverify.blur(function(){
            checkBverify();
            blurInput($(this),$(this).next());
        });



        $reg_get_vcode.click(function(){
            $(".verify_note_p,.pp_u_note").show();
            $(this).addClass("reg_verfiy_gray").attr("disabled","disabled");
        });

        //判断密码是否符合规则
        function checkPwd(){
            var $bpwdVal = $bpwd.val();
            var $nextp = $(".bpwd_note");
            if(!$pwdpreg.test($bpwdVal)){
                WrongColor($nextp,$bpwd);
                $nextp.show().html("请输入6-20位数字或字母");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$bpwd);
                return true;
            }
        }
        function checkRpwd(){
            var $brpwdVal = $brpwd.val();
            var $nextp = $(".brpwd_note");
            if(!$pwdpreg.test($brpwdVal)){
                WrongColor($nextp,$brpwd);
                $nextp.html("请输入6-20位数字或字母");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$brpwd);
                return true;
            }
        }
        function checkSamepwd(){
            var $bpwdVal = $bpwd.val();
            var $brpwdVal = $brpwd.val();
            var $nextp = $(".brpwd_note");
            if($brpwdVal =="" || $brpwdVal =="请再次输入登录密码"){
                return false;
            }else{
                if($bpwdVal != $brpwdVal){
                    WrongColor($nextp,$brpwd);
                    $nextp.html("两次输入密码不一致，请重新输入");
                    return false;
                }else{
                    $nextp.html("&nbsp;");
                    RightColor($nextp,$brpwd);
                    return true;
                }
            }
        }
        //判断企业名称
        function checkQiye(){
            var $bqiyeVal = $bqiye.val(),$nextp = $(".bqiye_note");
            if($bqiyeVal.length > 50){
                WrongColor($nextp,$bqiye);
                $nextp.html("输入过长的企业名称");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$bqiye);
                return true;
            }
        }
        //判断联系人姓名是否符合规则
        function checkOperater(){
            var $bnameVal = $bname.val();
            var $nextp = $(".bname_note");
            $bnameVal = Trim($bnameVal,"g");
            if(!$fontpreg.test($bnameVal)){
                WrongColor($nextp,$bname);
                $nextp.html("请填写正确的操作人姓名");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$bname);
                return true;
            }
        }

        //检查手机号是否合法
        function checkPhone(){
            var $bphoneVal = $bphone.val();
            var $nextp = $(".bphone_note");
            $bphoneVal = Trim($bphoneVal,"g");
            if(!$phonereg.test($bphoneVal)){
                WrongColor($nextp,$bphone);
                $nextp.html("请填写准确的手机号码");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$bphone);
                return true;
            }
        }
        //检查手机验证码验证码是否合法
        function checkBverify(){
            var $bverifyVal = $bverify.val();
            var $nextp = $(".bverify_note");
            $bverifyVal = Trim($bverifyVal,"g");
            if($bverifyVal == "" || $bverfiy.length > 4){
                WrongColor($nextp,$bverify);
                $nextp.html("请填写准确的验证码");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$bverify);
                return true;
            }    
        }
        
	//一些协议的隐藏显示
	var $agree_span = $(".agree_span");
	var $agree_clbtn = $(".agree_clbtn");
	var $body_gray = $(".body_gray");
	var $agree_panel = $(".agree_panel");
	var $agree_panel_in = $(".agree_panel_in")
	var $aindex;
	var $aflag = true;

	$agree_span.click(function(){
		$aflag = false;
		$aindex = $agree_span.index(this);
		$body_gray.show();
		$agree_panel.show();
		$agree_panel_in.show();
		$agree_panel_in.children("div").eq($aindex).show().siblings("div").hide();

		$agree_clbtn.eq($aindex).click(function(){
			$body_gray.hide();
			$agree_panel.hide();
			$agree_panel_in.hide();
		});
	});
        

});