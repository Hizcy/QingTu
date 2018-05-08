$(document).ready(function(){

    var $email = $(".email"),
        $verify = $(".verify"),
        $reg_verify_btn = $(".reg_verify_btn"),
        $reg_verify_tr = $(".reg_verify_tr"),
        $reg_slt_way = $(".reg_slt_way").children("li"),
        $hway = $(".hway"),
        $phone = $(".phone"),
        $gverify = $(".gverify"),
        $phonereg = /^1[3|5|7|8]\d{9}$/,//手机正则
        $emailpreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //邮箱验证规则;   


        //注册方式切换
        $reg_slt_way.click(function(){
            $(this).addClass("reg_slt_speli").siblings("li").removeClass("reg_slt_speli");
            var $tti = $reg_slt_way.index(this);
            $hway.eq($tti).show().siblings("div").hide();
        });

        //实现placeholder   
        $(".email,.verify,.phone,.gverify").focus(function(){
            focusInput($(this),$(this).next());
        });
        $email.next().click(function(){
            clickText($email,$(this));
        });
        $verify.next().click(function(){
            clickText($verify,$(this));
        });
        $phone.next().click(function(){
            clickText($phone,$(this));
        });
        $gverify.next().click(function(){
            clickText($gverify,$(this));
        });

        $email.blur(function(){
            checkEmail();
            blurInput($(this),$(this).next());
        });
        $phone.blur(function(){
            checkPhone();
            blurInput($(this),$(this).next());
        });
        $verify.blur(function(){
            checkVerify();
            blurInput($(this),$(this).next());
        });
        $gverify.blur(function(){
            checkGverify();
            blurInput($(this),$(this).next());
        });



        $reg_verify_btn.click(function(){
            $index = $reg_verify_btn.index(this);
            $reg_verify_tr.eq($index).show();
            $(this).addClass("reg_verfiy_gray").attr("disabled","disabled");
            //$(".reg_sbtn_div").eq($index).css("margin","-23px 0 30px 470px");
        });


        //检查邮箱是否合法
        function checkEmail(){
            var $emailVal = $email.val();
            var $nextp = $(".email_note");
            $emailVal = Trim($emailVal,"g");
            if(!$emailpreg.test($emailVal)){
                WrongColor($nextp,$email);
                $nextp.html("请填写准确的邮箱");
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
                $nextp.html("请填写准确的验证码");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$verify);
                return true;
            }    
        }

        //检查手机号是否合法
        function checkPhone(){
            var $phoneVal = $phone.val();
            var $nextp = $(".phone_note");
            $phoneVal = Trim($phoneVal,"g");
            if(!$phonereg.test($phoneVal)){
                WrongColor($nextp,$phone);
                $nextp.html("请填写准确的手机号码");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$email);
                return true;
            }
        }
        //检查手机验证码验证码是否合法
        function checkGverify(){
            var $gverifyVal = $gverify.val();
            var $nextp = $(".gverify_note");
            $gverifyVal = Trim($gverifyVal,"g");
            if($gverifyVal == ""){
                WrongColor($nextp,$gverify);
                $nextp.html("请填写准确的验证码");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$gverify);
                return true;
            }    
        }
        

});