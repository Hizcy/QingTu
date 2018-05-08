$(document).ready(function(){
	
    $(".ordermg_table tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});//表格偶数行样式

	var	$od_sbtn = $(".od_sbtn"),
		$tbb = $(".tbb"),
		$delete_this_line = $(".delete_this_line");//删除本行按钮
	$(".od_return_c,.od_return_l").hover(function(){
		$(".od_return_c").css("background","url(../HSP-PCv2.0/images/bc/circle.png) no-repeat center -91px");
		$(".od_return_l").animate({"top":"12px"});
	},function(){
		$(".od_return_c").css("background","url(../HSP-PCv2.0/images/bc/circle.png) no-repeat center 0px");
		$(".od_return_l").animate({"top":"3px"});
	});
	
//	$(".span_gray_i").click(function(){
//		var $it = $(this).parent().next();
//		$it.toggleClass("disn");
//		if($it.hasClass("disn")){
//			$it.addClass("disn")
//		}else{
//			$it.removeClass("disn")
//		}
//		$(".details").width(($(".ordermg_table").width()));
//		})

	//使用配额弹窗
	$(".span_gray_i1").click(function(){
		layer.open({
            title: false,
            type:1,
            closeBtn: 0, 
            skin: 'layerBorder',	//自定义弹窗样式
            area: ['800px', ''],
            shift: 2,
            btn: ['确 定'],
            content: $(".details1")
		})
	});
	//上游分配配额
	$(".span_gray_i2").click(function(){
		layer.open({
            title: false,
            type:1,
            closeBtn: 0, 
            skin: 'layerBorder',	//自定义弹窗样式
            area: ['560px', ''],
            shift: 2,
            btn: ['确 定'],
            content: $(".details2")
		})
	});
	//修改下游配额
	$(".span_gray_i3").click(function(){
		layer.open({
            title: false,
            type:1,
            closeBtn: 0, 
            skin: 'layerBorder',	//自定义弹窗样式
            area: ['660px', ''],
            shift: 2,
            btn: ['确 定'],
            content: $(".details3")
		})
	});
	
	
});