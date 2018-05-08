
$(function() {

	var $money = $(".money"),
        $pwd = $(".pwd"),
        $auth = $(".auth"),
        $note_je = $(".note_je"),
        $note_pwd = $(".note_pwd"),
        $note_vr = $(".note_vr"),
        $wt_note_tit = $(".wt_note_tit"),
        $wt_note_cont = $(".wt_note_cont");
        $wt_note_tit.hover(function(){
            $wt_note_cont.show();
        },function(){
            $wt_note_cont.hide();
        });
	$(".money,.pwd,.auth").focus(function(){
		focusInput($(this),$(this).next());
	});
	$money.next().click(function(){
        clickText($money,$(this));
    });
    $money.blur(function(){
        blurInput($(this),$(this).next());
        if($(this).val() == ""){
            WrongColor($note_je,$(this));
            $note_je.html("输入正确的金额");
        }else{
            RightColor($note_je,$(this));
            $note_je.html("");
        }
    });
    $pwd.next().click(function(){
        clickText($pwd,$(this));
    });
    $pwd.blur(function(){
        blurInput($(this),$(this).next());
        if($(this).val() == ""){
            WrongColor($note_pwd,$(this));
            $note_pwd.html("您输入密码超过5次，已将您的账户冻结，请联系客服人员，电话053181677073");
        }else{
            RightColor($note_pwd,$(this));
            $note_pwd.html("");
        }
    });
    $auth.next().click(function(){
        clickText($auth,$(this));
    });
    $auth.blur(function(){
        blurInput($(this),$(this).next());
        if($(this).val() == ""){
            WrongColor($note_vr,$(this));
            $note_vr.html("输入正确的验证码");
        }else{
            RightColor($note_vr,$(this));
            $note_vr.html("");
        }
    });
});
/*点击失效*/
var timer;
$(function() {
	$(".gain").click(function(){
		var time = 3;
		var $that = $(this);

		clearInterval(timer);
		timer = setInterval(function(){	
			time --;
			if(time < 0){
				console.log(time);
	       	 		$that.removeAttr('disabled');
	       	 		$that.removeClass("col");
			}else{
				$that.attr({"disabled":"disabled"});
				$that.addClass("col");
			}

		},1000);
	});
});
