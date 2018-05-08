// JavaScript Document
$(document).ready(function(){

	var	$manage_addul = $(".manage_addul").children("li"),
		$hway = $(".hway"),
		$tit = $(".risk_select").children("p"),
		$titlg = $(".risk_selectlg").children("p"),
		$user = $(".user"),
		$user_note = $(".user_note"),
		$manage_role_ul = $(".manage_role_ul").children("li"),
		$role_note = $(".role_note"),
		$organization_note = $(".organization_note"),
		$pwd = $(".pwd"),
		$pwd_note = $(".pwd_note"),
		$name = $(".name"),
		$name_note = $(".name_note"),
		$phone = $(".phone"),
		$phone_note = $(".phone_note"),
		$email = $(".email"),
		$email_note = $(".email_note"),
		$phonepreg = /^1[3|5|7|8]\d{9}$/, //手机正则
		$pwdpreg = /^[A-Za-z0-9]{6,20}$/,   //密码正则
		$fontpreg = /^[\u0391-\uFFE5]{2,30}$/,  //汉字正则
        $emailpreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //邮箱验证规则; 

	//增加新用户/批量增加商家
	$manage_addul.click(function(){
		$(this).addClass("add_speli").siblings("li").removeClass("add_speli");
		var $tti = $manage_addul.index(this);
		$hway.eq($tti).show().siblings("div").hide();
	});
	//角色选择

	$manage_role_ul.click(function(){
		$(this).toggleClass("role_in");
	});
	//下拉框选择值
	$tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("p_on");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("p_on");
            $(this).parent().hide();
        });
    });


	$titlg.click(function(){
        var $tt = $titlg.index(this);
        $(this).toggleClass("p_onlg");
        $titlg.eq($tt).next().toggle();
        $titlg.eq($tt).next().children("li").click(function(){
            $titlg.eq($tt).html($(this).html()).removeClass("p_onlg");
            $(this).parent().hide();
        });
    });

	$user.focus(function(){
		focusInput($(this),$(this).next());
	});
	$pwd.focus(function(){
		focusInput($(this),$(this).next());
	});
	$name.focus(function(){
		focusInput($(this),$(this).next());
	});
	$phone.focus(function(){
		focusInput($(this),$(this).next());
	});
	$email.focus(function(){
		focusInput($(this),$(this).next());
	});

	$user.next().click(function(){
		clickText($user,$(this));
	});
	$pwd.next().click(function(){
		clickText($pwd,$(this));
	});
	$name.next().click(function(){
		clickText($name,$(this));
	});
	$phone.next().click(function(){
		clickText($phone,$(this));
	});
	$email.next().click(function(){
		clickText($email,$(this));
	});

	$user.blur(function(){
		blurInput($(this),$(this).next());
		if($(this).val() == 111){
			WrongColor($user_note,$(this));
			$user_note.html("当前用户名已存在，请重新输入");
		}else{
			RightColor($user_note,$(this));
			$user_note.html("");
		}
	});
	$pwd.blur(function(){
		blurInput($(this),$(this).next());
		checkSfz($(this),$pwd_note,"请输入6-20位数字或字母",$pwdpreg);
	});
	$name.blur(function(){
		blurInput($(this),$(this).next());
		checkSfz($(this),$name_note,"请输入正确的操作人姓名",$fontpreg);
	});
	$phone.blur(function(){
		blurInput($(this),$(this).next());
		checkSfz($(this),$phone_note,"请输入正确的操作人手机号",$phonepreg);
	});
	$email.blur(function(){
		blurInput($(this),$(this).next());
		checkSfz($(this),$email_note,"请输入正确的邮箱",$emailpreg);
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

	/////////////////////完成提示弹窗/////////////////////
	$(".useradd_sbtn").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layerBorder',    //自定义弹窗样式
            area: ['360px', '240px'],
            btn:['确定'],
            content: $(".add_win")//自定义内容样式
        }); 

    });
    
    
});