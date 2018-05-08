
$(document).ready(function(){
	//侧边栏高度
	$left_h = $(".HC_menubar").height();
	$right_h = $(".HC_content").height();
	if($left_h>$right_h){
		$(".HC_content").height($left_h);
	}else{
		$(".HC_menubar").height($right_h);
	}
	//end 侧边栏高度
	
	//选中项
	var $HC_menubar_li = $(".HC_menubar li");
	$HC_menubar_li.click(function(){
		$HC_menubar_li.removeClass("HCmenu_on");
		$(this).addClass("HCmenu_on");
	});	
	//end 选中项
 	
});

