$(document).ready(function(){
	
//  $(".ordermg_table tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});//表格偶数行样式
    
    //订单号，订单金额输入框js
    var $order = $(".shoporder").children("input"),
        $sumer = $(".sumer").children("input");
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
    $sumer.focus(function(){
        $(this).addClass("inputsum_on");
        $sumer.next().hide();
    });
    $sumer.next().click(function(){
        $sumer.addClass("inputsum_on").focus();
        $(this).hide();    
    });
    $sumer.blur(function(){
        $(this).removeClass("inputsum_on");
        if($(this).val() == ""){
            $sumer.next().show();
        }
    });
    //end 订单号，订单金额输入框js
    
    //操作时间
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
    //end 操作时间
        
    //订单状态切换
	var $order_zt_a = $(".order_zt a");
	$order_zt_a.click(function(){
		$(this).addClass("order_zt_on").siblings("a").removeClass("order_zt_on");
	});
	//订单状态切换
	
	//取消提示弹窗
	var $abolishBtn = $(".abolishBtn");
	
	$abolishBtn.click(function(){
		layer.open({
            title: false,
            type:1,
            closeBtn: 0, 
            skin: 'layerBorder',	//自定义弹窗样式
            area: ['380px', '150px'],
            shift: 2,
            btn: ['确 定', '取 消'],
            content: "<div class='layer_hint'>取消订单后订单将无法继续，确定取消？</div>"
		})
	});	
	//end 取消提示弹窗

    $(".fahuo").click(function(){
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
    
    //代发提示弹窗
    $(".replace").click(function(){
		layer.open({
            title: false,
            type:1,
            closeBtn: 1, 
            skin: 'layerBorder',	//自定义弹窗样式
            area: ['600px', ''],
            shift: 2,
            content: $(".replace2")
		})
	});
	
	//动态计算进度条长度
    $(".progress_bar span").each(function(){
    	$(this).css("width",$(this).next().next().html()*1*171/100+"px")
    })
    
    //是否为进程中表格切换
    $(".order1").click(function(){
    	$(".ordermg_table1").show();
    	$(".ordermg_table2").hide();
    })
    $(".order2").click(function(){
    	$(".ordermg_table2").show();
    	$(".ordermg_table1").hide();
    })
    
    //采购订单展开收起
   // var $ordermg_add = "",
//  	$ordermg_add +='<tr>';
//  	$ordermg_add += "<td></td>",
//  	$ordermg_add += "<td>XS0160601000132</td>",
//  	$ordermg_add += "<td><span class="span_gray">2015-01-08 18:46:09</span></td>",
//  	$ordermg_add += "<td><b>9000.00</b></td>",
//  	$ordermg_add += "<td><span>刘红梅</span></td>",
//  	$ordermg_add += "<td><span class="span_colour57">待发货</span></td>",
//  	$ordermg_add += "<td><p class="m8"><span class="span_blue_btn btnsize">&nbsp;&nbsp;&nbsp;查&nbsp;看&nbsp;&nbsp;&nbsp;</span></p></td>",
//  	$ordermg_add += "</tr>",
    $(".ordermg_retract").click(function(){
    	if($(this).hasClass("ordermg_open")){
    		$(this).removeClass("ordermg_open");
    		$(this).html("展开");
    		$(this).parent().parent().find($(".ordermg_or")).remove();
    	}else{
    		$(".ordermg_retract").each(function(){
    			$(this).removeClass("ordermg_open");
    			$(this).html("展开");
    		})
    		$(this).parent().parent().find($(".ordermg_or")).remove();
    		$(this).addClass("ordermg_open");
	    	$(this).html("收起");
	    	$(this).parent().after('<tr class="ordermg_or"><td></td><td>XS0160601000132</td><td><span class="span_gray">2015-01-08 18:46:09</span></td><td><b>9000.00</b></td><td><span>刘红梅</span></td><td><span class="span_colour57">待发货</span></td><td><p class="m8"><span class="span_blue_btn btnsize">&nbsp;&nbsp;&nbsp;查&nbsp;看&nbsp;&nbsp;&nbsp;</span></p></td></tr>');
	    }
    	
    })
	
})