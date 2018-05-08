$(document).ready(function(){
	
    $(".ordermg_table tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});//表格偶数行样式
    
    //发票号码，供应商输入框js
    var $order = $(".shoporder").children("input"),
        $supplier = $(".supplier").children("input");
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
    //end 发票号码，供应商输入框js
    
    //开票日期
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
        
    //发票状态切换
	var $order_zt_a = $(".order_zt a");
	$order_zt_a.click(function(){
		$(this).addClass("order_zt_on").siblings("a").removeClass("order_zt_on");
	});

	//刷新资金点击倒计时
	(function(){
		var time = 120;
		function countDown(obj){
			if(time == 0){
				$(obj).attr("disabled",false);
				$(obj).val("刷新");
				$(obj).addClass("renovate");
				$(obj).removeClass("renovate_cl");
				time = 120;
			}else{
				$(obj).attr("disabled",true);
				$(obj).val(time+"s");
				time--;
				$(obj).addClass("renovate_cl");
				$(obj).removeClass("renovate");
				setTimeout(function(){
					countDown(obj);
				},1000);
			}
		}
		$("#renovate").click(function(){
			countDown(this)
		})
	})();

})