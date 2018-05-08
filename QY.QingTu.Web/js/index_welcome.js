$(document).ready(function(){
	//侧边栏高度
	$left_h = $(".index_sidebar").height();
	$right_h = $(".index_welcome").height();
	$(".index_welcome").height($left_h-120);
	//end 侧边栏高度
});