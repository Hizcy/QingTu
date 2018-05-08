$(document).ready(function(){

    var $bank_card = $(".bank_card"),
        $bank_info = $(".bank_info"),
        $enterprisename = $(".enterprisename"),
        $en_bcard = $(".en_bcard"),
        $en_binfo = $(".en_binfo"), 
        $spwd = $(".spwd"),
        $rspwd = $(".rspwd"),
        $address = $(".address"),
        $bcreg = /^\d{1,25}$/,    //银行卡号
        $pwdpreg = /^[A-Za-z0-9]{6}$/;   //密码正则
  
        //实现placeholder   
        $(".bank_card,.bank_info,.enterprisename,.en_bcard,.en_binfo,.spwd,.rspwd,.address").focus(function(){
            focusInput($(this),$(this).next());
        });
        $bank_card.next().click(function(){
            clickText($bank_card,$(this));
        });
        $bank_info.next().click(function(){
            clickText($bank_info,$(this));
        });
        $enterprisename.next().click(function(){
            clickText($enterprisename,$(this));
        });
        $en_bcard.next().click(function(){
            clickText($en_bcard,$(this));
        });
        $en_binfo.next().click(function(){
            clickText($en_binfo,$(this));
        });
        $spwd.next().click(function(){
            clickText($spwd,$(this));
        });
        $rspwd.next().click(function(){
            clickText($rspwd,$(this));
        });
        $address.next().click(function(){
            clickText($address,$(this));
        });

        $bank_card.blur(function(){
            checkSfz($(this),$(".bankcard_note"),"请输入正确的银行卡号",$bcreg);
            blurInput($(this),$(this).next());
        });
        $bank_info.blur(function(){
            checkOther($(this),$(".bi_note"),"请输入正确的开户行信息");
            blurInput($(this),$(this).next());
        });
        $enterprisename.blur(function(){
            checkOther($(this),$(".en_note"),"请输入正确的企业开户账户名");
            blurInput($(this),$(this).next());
        });
        $en_bcard.blur(function(){
            checkSfz($(this),$(".enbc_note"),"请输入正确的企业银行账号",$bcreg);
            blurInput($(this),$(this).next());
        });
        $en_binfo.blur(function(){
            checkOther($(this),$(".enbi_note"),"请输入正确的企业开户行信息");
            blurInput($(this),$(this).next());
        });
        $spwd.blur(function(){
            checkSfz($(this),$(".spwd_note"),"请输入正确的支付密码",$pwdpreg);
            checkSamepwd();
            blurInput($(this),$(this).next());
        });
        $rspwd.blur(function(){
            checkSfz($(this),$(".rspwd_note"),"请输入正确的支付密码",$pwdpreg);
            checkSamepwd();
            blurInput($(this),$(this).next());
        });
        $address.blur(function(){
            checkOther($(this),$(".address_note"),"请输入正确的商品配送地址");
            blurInput($(this),$(this).next());
        });

        //封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
        function checkSfz(obj,wr,con,preg){
            var $val = obj.val();
            var $nextp = wr;
            if(!preg.test($val)){
                WrongColor($nextp,obj);
                $nextp.show().html(con);
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,obj);
                return true;
            }    
        }

        //判断其他不用正则的
        function checkOther(obj,wr,con){
            var $val = obj.val();
            var $nextp = wr;
            if($val.length < 1 || $val.length > 50){
                WrongColor($nextp,obj);
                $nextp.show().html(con);
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,obj);
                return true;
            } 
        }

        //判断密码是否符合规则
        function checkSamepwd(){
            var $spwdVal = $spwd.val();
            var $rspwdVal = $rspwd.val();
            var $nextp = $(".rspwd_note");
            if($rspwdVal =="" || $rspwdVal =="请再次输入登录密码"){
                return false;
            }else{
                if($spwdVal != $rspwdVal){
                    WrongColor($nextp,$rspwd);
                    $nextp.html("两次输入密码不一致，请重新输入");
                    return false;
                }else{
                    $nextp.html("&nbsp;");
                    RightColor($nextp,$rspwd);
                    return true;
                }
            }
        }
});