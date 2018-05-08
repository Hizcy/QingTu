$(document).ready(function(){
    $(".order_detail_flist tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});
    
    var $teleBtn = $(".teleBtn");
	$teleBtn.click(function(){
		layer.open({
            title: false,
            closeBtn: 0, 
            skin: 'layerBorder',	//自定义弹窗样式
            area: '440px',
            shift: 2,
            btn: ['确 定', '取 消'],
            content: "<div class='layer_limit'>您本次向北京十二付款订单金额为<span class='limit_span'>￥20000.00</span>，是否确认付款？</div>"
		})
	});	

})