$(document).ready(function(){
    $(".order_detail_flist tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});
    
    var $limitBtn = $(".limitBtn");
	$limitBtn.click(function(){
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
//	$limitBtn.click(function(){
//		layer.open({
//          title: false,
//          closeBtn: 0, 
//          skin: 'layerBorder',	//自定义弹窗样式
//          area: ['500px', '220px'],
//          shift: 2,
//          btn: ['确 定', '取 消'],
//          content: "<div class='layer_limit'>本次使用额度付款金额为<span class='limit_span'>9876.00</span>元，是否确认付款？</div><div class='layer_limitip'>提示：该供应商已达到额度，将向该供应商支付额度金额，请联系豪诺财务</div>"
//          
//		})
//	});	

})