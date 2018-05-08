// JavaScript Document
$(document).ready(function(){
	var	$od_sbtn = $(".od_sbtn"),
		$tbb = $(".tbb"),
		$delete_this_line = $(".delete_this_line");//删除本行按钮
	$(".od_return_c,.od_return_l").hover(function(){
		$(".od_return_c").css("background","url(images/bc/circle.png) no-repeat center -91px");
		$(".od_return_l").animate({"top":"12px"});
	},function(){
		$(".od_return_c").css("background","url(images/bc/circle.png) no-repeat center 0px");
		$(".od_return_l").animate({"top":"3px"});
	});

	$(".order_detail_flist tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});
	$od_sbtn.click(function(){
		if($(this).val() == "保存订单"){
			$tbb.eq(0).show().siblings("table").hide();
			$od_sbtn.val("编辑订单");
		}else{
			$tbb.eq(1).show().siblings("table").hide();
			$od_sbtn.val("保存订单");
		}
	});
	getSltVal($(".select_catat"));
	//删除本行
	$delete_this_line.click(function(){
		var $that = $(this);
		layer.confirm('<p style="line-height:60px;width:300px;">你确定要删除本行吗？</p>', {
			 title: false,
			 closeBtn: 0,
			 skin: 'layerBorder',	//自定义弹窗样式
			 time: 0, //不自动关闭
			 btn: ['确定', '取消'],
			 yes: function(index){
				layer.close(index);
				$that.parent().parent().remove();
			}
		});
	});

	$(".od_send").click(function(){
		layer.open({
            title: false,
            type:1,
            closeBtn: 0, 
            skin: 'layerBorder',    //自定义弹窗样式
            area: ['380px', '150px'],
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
	

});