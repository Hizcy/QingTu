$(document).ready(function(){
	var $login_user_input = $(".login_user_input"),//用户名
		$login_pwd_input = $(".J_pwd"),//密码
		$login_code_input = $(".login_code_input");
	//焦点获得时
	$login_user_input.next().click(function(){
		$(this).hide();
		$login_user_input.focus();
	});
	$login_code_input.next().click(function(){
		$(this).hide();
		$login_code_input.focus();
	});
	$login_user_input.focus(function(){
		$login_user_input.addClass("login_user_input_b").removeClass("login_user_input").removeClass("login_user_input_r");
		$login_user_input.next().hide();
	});	
	$(".login_ntit_p").on("focus",".J_pwd",function(){
		$(this).addClass("login_pwd_input_b").removeClass("login_pwd_input").removeClass("login_pwd_input_r");
		$(".J_pwdspan").hide();
		if ($(this).attr("type") == "text") {
			$(this).remove();
			$(".J_user").parent().next(".login_pwd").find("span").before('<input type="password" class="J_pwd login_pwd_input_b" />');
			$(".login_box .login_ntit_p .J_pwd").focus();
		}
		$(".login_ntit_p").on("blur",".J_pwd",function(){
	       if($(this).val() == ""){
				$(this).removeClass("login_pwd_input_b").addClass("login_pwd_input_r");
				$(".login_prompt").addClass("note_wrong").html("请输入密码");
				$(".J_pwdspan").show();
			}
			else{
				$(this).removeClass("login_pwd_input_b").addClass("login_pwd_input");
				$(".login_prompt").removeClass("note_wrong").html("");
			}
	    })  
    }) 	
	$(".login_ntit_p").on("click",".J_pwdspan",function(){
       $(".login_box .login_ntit_p .J_pwd").trigger("focus");
    })     
	$login_code_input.focus(function(){
		$login_code_input.addClass("login_code_input_b").removeClass("login_code_input").removeClass("login_code_input_r");
		$login_code_input.next().hide();
	});	
	//焦点失去时
	$login_user_input.blur(function(){
		if($login_user_input.val() == ""){
			$login_user_input.removeClass("login_user_input_b").addClass("login_user_input_r");
			$(".login_prompt").addClass("note_wrong").html("请输入用户名");
			$login_user_input.next().show();
		}
		else{
			$login_user_input.removeClass("login_user_input_b").addClass("login_user_input");
			$(".login_prompt").removeClass("note_wrong").html("");
			}
	});
	$login_code_input.blur(function(){
		if($login_code_input.val() == ""){
			$login_code_input.removeClass("login_code_input_b").addClass("login_code_input_r");
			$(".login_prompt").addClass("note_wrong").html("请输入验证码");
			$login_code_input.next().show();
		}
		else{
			$login_code_input.removeClass("login_code_input_b").addClass("login_code_input");
			$(".login_prompt").removeClass("note_wrong").html("");
			}
	});
	$(".login_sbtn").click(function(){
		$(".login_box .login_user_input, .login_box .J_pwd,.login_box .login_code_input").val("").next().show();
		$(".login_box .login_ntit_p .J_pwd").remove();
		$(".J_user").parent().next(".login_pwd").find("span").before('<input type="text" class="login_pwd_input J_pwd" />');
	})
	
	//综合样式判定
	function RightColor(obj,objs,objn){
		obj.removeClass("note_wrong");
		objs.addClass("note_right");
		objn.removeClass("b_blue").removeClass("b_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("note_wrong");
		objs.removeClass("note_right");
		objn.addClass("b_red").removeClass("b_blue");
	}
	function OnFocus(obj){
		obj.addClass("b_blue").removeClass("b_red");
	}	
	//去除空格	
	function Trim(str,is_global) {
		var result;
		result = str.replace(/(^\s+)|(\s+$)/g,"");
		if(is_global.toLowerCase()=="g"){
			result = result.replace(/\s/g,"");
		 }
		return result;
	}
	
});