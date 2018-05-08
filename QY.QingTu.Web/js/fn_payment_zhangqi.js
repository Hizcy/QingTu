$(document).ready(function(){
    $(".order_detail_flist tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});
    
    var $zhangqiBtn = $(".zhangqiBtn");
	$zhangqiBtn.click(function(){
		layer.open({
            title: false,
            closeBtn: 0, 
            skin: 'layerBorder',	//自定义弹窗样式
            area: '440px',
            shift: 2,
            btn: ['确 定', '取 消'],
            content: "<div class='layer_limit'>本次使用额度付款金额为<span class='limit_span'>9876.00</span>元，是否确认付款？</div>"
		})
	});	

})