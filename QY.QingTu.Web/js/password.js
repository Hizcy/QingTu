$(document).ready(function(){
	//修改支付密码弹窗
	 $(".modify").click(function(){
    	layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn2',
	            area: ['710px', ''],
	            btn: ['确 定','取消'],
				shift: 2,
                content: $(".findpwd_table")
        });
	});
	//修改支付密码验证
	$(".oldpwd").focus(function(){
		$(this).addClass("b_blue");
		$(this).next().hide();
	});
	$(".oldpwd").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("b_red");
			$(this).removeClass("b_blue");
			$(".oldpwd_note").addClass("p_wrong reg_pnote");
			$(".oldpwd_note").html("建议输入6-20位数字或字母");
			$(this).next().show();
		}else{
			$(this).removeClass("b_blue");
			$(this).removeClass("b_red");
			$(".oldpwd_note").removeClass("p_wrong reg_pnote");
			$(".oldpwd_note").addClass("p_right");
			$(".oldpwd_note").html("　");
		}
	});
	$(".cli").click(function(){
		$(this).hide();
		$(this).prev().focus();
	});
	$(".pwd").focus(function(){
		$(this).addClass("b_blue");
		$(this).next().hide();
	});
	$(".pwd").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("b_red");
			$(this).removeClass("b_blue");
			$(".pwd_note").addClass("p_wrong reg_pnote");
			$(".pwd_note").html("建议输入6-20位数字或字母");
			$(this).next().show();
		}
		if($(this).val() == $(".rpwd").val() && $(this).val() != "" && $(".rpwd").val() != ""){
			$(this).removeClass("b_blue");
			$(this).removeClass("b_red");
			$(".pwd_note").removeClass("p_wrong reg_pnote");
			$(".pwd_note").addClass("p_right");
			$(".pwd_note").html("　");
			$(".rpwd").removeClass("b_blue");
			$(".rpwd").removeClass("b_red");
			$(".rpwd_note").removeClass("p_wrong reg_pnote");
			$(".rpwd_note").addClass("p_right");
			$(".rpwd_note").html("　");
		}
		if($(this).val() != $(".rpwd").val() && $(this).val() != ""){
			$(this).removeClass("b_blue");
			$(this).removeClass("b_red");
			$(".pwd_note").removeClass("p_wrong reg_pnote");
			$(".pwd_note").addClass("p_right");
			$(".pwd_note").html("　");
			$(".rpwd").addClass("b_red");
			$(".rpwd").removeClass("b_blue");
			$(".rpwd_note").removeClass("p_right");
			$(".rpwd_note").addClass("p_wrong reg_pnote");
			$(".rpwd_note").html("两遍密码不一致");
		}
	});
	$(".rpwd").focus(function(){
		$(this).addClass("b_blue");
		$(this).next().hide();
	});
	$(".rpwd").blur(function(){
		if($(this).val() != $(".pwd").val()){
			$(this).addClass("b_red");
			$(this).removeClass("b_blue");
			$(".rpwd_note").addClass("p_wrong reg_pnote");
			$(".rpwd_note").html("两遍密码不一致");
		}
		if($(this).val() == ""){
		$(this).addClass("b_red");
		$(this).removeClass("b_blue");
		$(".rpwd_note").addClass("p_wrong reg_pnote");
		$(".rpwd_note").html("请再次输入支付密码");
		$(this).next().show();
		}
		if($(this).val() == $(".pwd").val() && $(this).val() != ""){
			$(this).removeClass("b_blue");
			$(this).removeClass("b_red");
			$(".rpwd_note").removeClass("p_wrong reg_pnote");
			$(".rpwd_note").addClass("p_right");
			$(".rpwd_note").html("　");
		}
		
	});
	//找回支付密码弹窗
	 $(".back").click(function(){
    	layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn2',
	            area: ['730px', ''],
	            btn: ['确 定','取消'],
				shift: 2,
                content: $(".findpwd_table2")
        });
	});
	//找回支付密码验证码验证
	$(".verify").focus(function(){
		$(this).addClass("b_blue");
		$(this).next().hide();
	});
	$(".verify").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("b_red");
			$(this).removeClass("b_blue");
			$(".verify_note").addClass("p_wrong reg_pnote");
			$(".verify_note").html("请输入验证码");
			$(this).next().show();
		}else{
			$(this).removeClass("b_blue");
			$(this).removeClass("b_red");
			$(".verify_note").removeClass("p_wrong reg_pnote");
			$(".verify_note").addClass("p_right");
			$(".verify_note").html("　");
		}
	});
	$(".pwd2").focus(function(){
		$(this).addClass("b_blue");
		$(this).next().hide();
	});
	$(".pwd2").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("b_red");
			$(this).removeClass("b_blue");
			$(".pwd_note2").addClass("p_wrong reg_pnote");
			$(".pwd_note2").html("建议输入6-20位数字或字母");
			$(this).next().show();
		}
		if($(this).val() == $(".rpwd2").val() && $(this).val() != "" && $(".rpwd2").val() != ""){
			$(this).removeClass("b_blue");
			$(this).removeClass("b_red");
			$(".pwd_note2").removeClass("p_wrong reg_pnote");
			$(".pwd_note2").addClass("p_right");
			$(".pwd_note2").html("　");
			$(".rpwd2").removeClass("b_blue");
			$(".rpwd2").removeClass("b_red");
			$(".rpwd_note2").removeClass("p_wrong reg_pnote");
			$(".rpwd_note2").addClass("p_right");
			$(".rpwd_note2").html("　");
		}
		if($(this).val() != $(".rpwd2").val() && $(this).val() != ""){
			$(this).removeClass("b_blue");
			$(this).removeClass("b_red");
			$(".pwd_note2").removeClass("p_wrong reg_pnote");
			$(".pwd_note2").addClass("p_right");
			$(".pwd_note2").html("　");
			$(".rpwd2").addClass("b_red");
			$(".rpwd2").removeClass("b_blue");
			$(".rpwd_note2").removeClass("p_right");
			$(".rpwd_note2").addClass("p_wrong reg_pnote");
			$(".rpwd_note2").html("两遍密码不一致");
		}
	});
	$(".rpwd2").focus(function(){
		$(this).addClass("b_blue");
		$(this).next().hide();
	});
	$(".rpwd2").blur(function(){
		if($(this).val() != $(".pwd2").val()){
			$(this).addClass("b_red");
			$(this).removeClass("b_blue");
			$(".rpwd_note2").addClass("p_wrong reg_pnote");
			$(".rpwd_note2").html("两遍密码不一致");
		}
		if($(this).val() == ""){
		$(this).addClass("b_red");
		$(this).removeClass("b_blue");
		$(".rpwd_note2").addClass("p_wrong reg_pnote");
		$(".rpwd_note2").html("请再次输入支付密码");
		$(this).next().show();
		}
		if($(this).val() == $(".pwd2").val() && $(this).val() != ""){
			$(this).removeClass("b_blue");
			$(this).removeClass("b_red");
			$(".rpwd_note2").removeClass("p_wrong reg_pnote");
			$(".rpwd_note2").addClass("p_right");
			$(".rpwd_note2").html("　");
		}
	});
	//点击验证码
	$(".reg_verify_btn").click(function(){
		$(this).addClass("reg_verfiy_gray");
		$(".reg_verify_tr").show();
	})
	
	
})