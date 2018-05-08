$(document).ready(function(){
    $(".ordermg_table tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});//表格偶数行样式
    
    var $order = $(".shoporder").children("input"),
        $supplier = $(".supplier").children("input"),
        $not_allowed = $(".not_allowed"),
        $span_ac_k = $(".span_ac_k");
    $order.focus(function(){
        $(this).addClass("input_on");
        $order.next().hide();
    });
    $order.next().click(function(){
        $order.addClass("input_on").focus();
        $(this).hide();    
    });
    $order.blur(function(){
        $(this).removeClass("input_on");
        if($(this).val() == ""){
            $order.next().show();
        }
    });
    $supplier.focus(function(){
        $(this).addClass("input_on");
        $supplier.next().hide();
    });
    $supplier.next().click(function(){
        $supplier.addClass("input_on").focus();
        $(this).hide();    
    });
    $supplier.blur(function(){
        $(this).removeClass("input_on");
        if($(this).val() == ""){
            $supplier.next().show();
        }
    });
    layui.use('laydate', function(){
      var laydate = layui.laydate;
      
      var start = {
        min: '1900-01-01 00:00:00', //最小日期
        max: '2099-12-31 23:59:59', //最大日期
        istoday: false,
        choose: function(datas){
          end.min = datas; //开始日选好后，重置结束日的最小日期
          end.start = datas //将结束日的初始值设定为开始日
        }
      };
      
      var end = {
        min: '1900-01-01 00:00:00',
        max: '2099-06-16 23:59:59',
        istoday: false,
        choose: function(datas){
          start.max = datas; //结束日选好后，重置开始日的最大日期
        }
      };
      
      document.getElementById('LAY_demorange_s').onclick = function(){
        start.elem = this;
        laydate(start);
      }
      document.getElementById('LAY_demorange_e').onclick = function(){
        end.elem = this
        laydate(end);
      }
  
    });
    //end 开票日期
        
	var $order_zt_a = $(".order_zt a");
	$order_zt_a.click(function(){
		$(this).addClass("order_zt_on").siblings("a").removeClass("order_zt_on");
	});

    $not_allowed.hover(function(){
        if($(this).next().length > 0){
            $(this).next().show();
        }
    },function(){
        if($(this).next().length > 0){
            $(this).next().hide();
        }
    });
    $span_ac_k.click(function(){
        $(this).toggleClass("ac_k_on");
    })
    
    //查看图片弹窗
    var $lookbtn = $(".lookbtn");
    
	
	$lookbtn.click(function(){
		layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			area: '800px',
			skin: 'layui-layer-nobg', //没有背景色
			shadeClose: true,
			content: $('.imgd')
		});
	})
	
	
    
})