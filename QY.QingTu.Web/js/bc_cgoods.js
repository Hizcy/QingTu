// JavaScript Document
$(document).ready(function(){

	$(".od_return_c,.od_return_l").hover(function(){
		$(".od_return_c").css("background","url(images/bc/circle.png) no-repeat center -91px");
		$(".od_return_l").stop(true,true).animate({"top":"12px"});
	},function(){
		$(".od_return_c").css("background","url(images/bc/circle.png) no-repeat center 0px");
		$(".od_return_l").stop(true,true).animate({"top":"3px"});
	});
	
	//确认收货点击完成弹窗
	 $(".zz_upsbtn_input").click(function(){
        layer.open({
            title: false,
            type:1,
            closeBtn: 0, 
            skin: 'layerBorder',    //自定义弹窗样式
            area: ['380px', '150px'],
            shift: 1,
            btn: ['确 定'],
            content: "<div class='layer_hint'>确认收货成功</div>"
        })
    })
	
	$(".prop_img").click(function(){
		$(this).siblings().removeAttr("readonly");
		$(this).siblings().addClass("prop_k_tith_input_on");
		})
	$(".prop_k_tith_input").blur(function(){
		$(this).attr({ readonly: 'true' });
		$(this).removeClass("prop_k_tith_input_on");
		})
	//未保存返回提示弹窗
	$(".od_return_c").click(function(){
        layer.open({
            title: false,
            type:1,
            closeBtn: 0, 
            skin: 'layerBorder',    //自定义弹窗样式
            area: ['380px', '150px'],
            shift: 1,
            btn: ['确 定'],
            content: "<div class='layer_hint' style='margin-top:30px !important;'>编辑的内容尚未保存，是否离开此页面？</div>"
        })
    })

});