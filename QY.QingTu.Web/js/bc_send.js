

$(document).ready(function(){
	$(".od_send").click(function(){
		layer.open({
            title: false,
            type:1,
            closeBtn: 0, 
            skin: 'layerBorder',	//自定义弹窗样式
            area: ['380px', '170px'],
            shift: 2,
            btn: ['确 定', '取 消'],
            content: "<div class='layer_hint'>确认该笔订单商品已全部发货？</div>"
		})
	})

      var $photo_bg = $(".photo_bg"),
        $photo_big = $(".photo_big"),
        $od_look = $(".od_look");
        

   
      $(".photo_bg,.photo_big").click(function(){
            $photo_bg.hide();
            $photo_big.hide();
      });   
      $(".od_look").click(function(){
            $photo_bg.show();
            $photo_big.show();
            $photo_big.children("img").show();  
      })
})