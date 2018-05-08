$(document).ready(function(){

	//不通过按钮
	var $sytable_a = $(".sytable").find(".nopass");	
	$sytable_a.click(function(){
		$(this).toggleClass("nopass_in");
	});
	//end 不通过按钮
	
	//已经交换资质
	var $syexchange = $(".syexchange");	
	$syexchange.click(function(){
		$(this).toggleClass("syexchange_in");
	});
	//end 已经交换资质
	
	//结算方式
	var $sy_jiesuan = $(".sy_jiesuan"),
	$cont_edu = $(".cont_edu"),//额度
	$cont_zhangqi = $(".cont_zhangqi");//账期
	
	$sy_jiesuan.change(function(){
		if($(this).val() == "edu"){
			$cont_zhangqi.hide();
			$cont_edu.show();
		}else{
			if($(this).val() == "zhangqi"){
				$cont_zhangqi.show();
				$cont_edu.hide();
			}else{
				$cont_zhangqi.hide();
				$cont_edu.hide();
			}		
		}			
	})
	//end 结算方式


})