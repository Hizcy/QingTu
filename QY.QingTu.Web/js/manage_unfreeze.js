$(document).ready(function(){

    $(".order_detail_flist tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});

	//解冻提示弹窗
	var $unfreeze = $(".unfreeze");
	
	$unfreeze.click(function(){
		layer.open({
            title: false,
            closeBtn: 0, 
            skin: 'layerBorder',	//自定义弹窗样式
            area: '380px',
            shift: 2,
            btn: ['确 定', '取 消'],
            content: "<div class='layer_hint'>您确定解冻账号****的支付密码？</div>"
		})
	});	
	//end 解冻提示弹窗



























})