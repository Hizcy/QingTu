$(document).ready(function(){

    var $lname = $(".lname"),
        $lnamecode = $(".lnamecode"),
        $oname = $(".oname"),
        $lzjz = $(".lzjz"),
        $sfzpreg = /^(\d{15}$|^\d{17}(\d|X|x))$/, //身份证正则
        $fontpreg = /^[\u0391-\uFFE5]{2,9}$/;  //汉字正则
  
        //实现placeholder   
        $(".lname,.lnamecode,.oname").focus(function(){
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

        $lzjz.click(function(){
            checkUpload($zjz_note,$(".nextp3"));
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

});