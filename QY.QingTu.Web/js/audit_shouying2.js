$(document).ready(function(){

    var $lname = $(".lname"),
        $lnamecode = $(".lnamecode"),
        $oname = $(".oname"),
        $liscence = $(".liscence"),
        $zuzhi = $(".zuzhi"), 
        $tax = $(".tax"),
        $scode = $(".scode"),
        $lzjz = $(".lzjz"),
        $zjz_note = $(".zjz_note"),
        $ozjz = $(".ozjz"),
        $ozjz_note = $(".ozjz_note"),
        $reg_san_s = $(".reg_san_s"),
        $reg_san_tb = $(".reg_san_tb"),
        $llzjz = $(".llzjz"),
        $liscence_note = $(".liscence_note"),
        $zzjz = $(".zzjz"),
        $zzjz_note = $(".zzjz_note"),
        $tzjz = $(".tzjz"),
        $tzjz_note = $(".tzjz_note"),
        $szjz = $(".szjz"),
        $szjz_note = $(".szjz_note"),
        $numreg = /^\d{1,15}$/,     //营业执照号
        $numreg2 = /^\d{1,25}$/,    //组织机构代码
        $numreg3 = /^\d{1,20}$/,    //税务登记证号
        $sfzpreg = /^(\d{15}$|^\d{17}(\d|X|x))$/, //身份证正则
        $fontpreg = /^[\u0391-\uFFE5]{2,9}$/;  //汉字正则
  
        //实现placeholder   
        $(".lname,.lnamecode,.oname,.liscence,.zuzhi,.tax,.scode").focus(function(){
            focusInput($(this),$(this).next());
        });
        $lname.next().click(function(){
            clickText($lname,$(this));
        });
        $lnamecode.next().click(function(){
            clickText($lnamecode,$(this));
        });
        $oname.next().click(function(){
            clickText($oname,$(this));
        });
        $liscence.next().click(function(){
            clickText($liscence,$(this));
        });
        $zuzhi.next().click(function(){
            clickText($zuzhi,$(this));
        });
        $tax.next().click(function(){
            clickText($tax,$(this));
        });
        $scode.next().click(function(){
            clickText($scode,$(this));
        });

        $lname.blur(function(){
            checkLname();
            blurInput($(this),$(this).next());
        });
        $lnamecode.blur(function(){
            checkSfz($(this),$(".nextp2"),"请输入正确的法人身份证号");
            blurInput($(this),$(this).next());
        });
        $oname.blur(function(){
            checkSfz($(this),$(".nextp4"),"请输入正确的操作人身份证号");
            blurInput($(this),$(this).next());
        });
        $liscence.blur(function(){
            checkLiscence();
            blurInput($(this),$(this).next());
        });
        $zuzhi.blur(function(){
            checkZuzhi();
            blurInput($(this),$(this).next());
        });
        $tax.blur(function(){
            checkTax();
            blurInput($(this),$(this).next());
        });
        $scode.blur(function(){
            checkScode();
            blurInput($(this),$(this).next());
        });

        $lzjz.click(function(){
            checkUpload($zjz_note,$(".nextp3"));
        });
        $ozjz.click(function(){
            checkUpload($ozjz_note,$(".nextp5"));
        });
        $llzjz.click(function(){
            checkUpload($liscence_note,$(".nextp8"));
        });
        $zzjz.click(function(){
            checkUpload($zzjz_note,$(".nextp10"));
        });
        $tzjz.click(function(){
            checkUpload($tzjz_note,$(".nextp12"));
        });
        $szjz.click(function(){
            checkUpload($szjz_note,$(".nextp14"));
        });


        $reg_san_s.click(function(){
            var $san = $reg_san_s.index(this);
            $(this).addClass("san_on").siblings("p").removeClass("san_on");
            $reg_san_tb.eq($san).show().siblings(".reg_san_tb").hide();
        });


        //判断法人代表是否符合规则
        function checkLname(){
            var $val = $lname.val();
            var $nextp = $(".nextp1");
            if(!$fontpreg.test($val)){
                WrongColor($nextp,$lname);
                $nextp.show().html("请输入正确的企业法人姓名");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$lname);
                return true;
            }
        }
        //判断身份证号
        function checkSfz(obj,wr,con){
            var $val = obj.val();
            var $nextp = wr;
            if(!$sfzpreg.test($val)){
                WrongColor($nextp,obj);
                $nextp.show().html(con);
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,obj);
                return true;
            }    
        }
        //判断是否上传成功
        function checkUpload(obj,wr){
            obj.html("你上传图片的路径IMG_4987568321.jpg").css({"fontSize":"14px","color":"#646464"});
            wr.addClass("p_right").html("&nbsp;");
        }
        //判断营业执照号是否正确
        function checkLiscence(){
            var $val = $liscence.val(),$nextp = $(".nextp7");
            if(!$numreg.test($val)){
                WrongColor($nextp,$liscence);
                $nextp.html("请输入正确的营业执照号");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$liscence);
                return true;
            }
        }
        //判断营业执照号是否正确
        function checkZuzhi(){
            var $val = $zuzhi.val(),$nextp = $(".nextp9");
            if(!$numreg2.test($val)){
                WrongColor($nextp,$zuzhi);
                $nextp.html("请输入正确的组织机构代码");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$zuzhi);
                return true;
            }
        }
        //判断税务登记号是否正确
        function checkTax(){
            var $val = $tax.val(),$nextp = $(".nextp11");
            if(!$numreg3.test($val)){
                WrongColor($nextp,$tax);
                $nextp.html("请输入正确的组织机构代码");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$tax);
                return true;
            }
        }
        //判断统一社会信用代码是否正确
        function checkScode(){
            var $val = $scode.val(),$nextp = $(".nextp13");
            if(!$numreg3.test($val)){
                WrongColor($nextp,$scode);
                $nextp.html("请输入正确的税务登记证号");
                return false;
            }else{
                $nextp.html("&nbsp;");
                RightColor($nextp,$scode);
                return true;
            }
        }

        
        

});