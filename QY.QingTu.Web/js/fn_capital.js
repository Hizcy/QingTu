$(document).ready(function(){

    $(".order_detail_flist tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});//表格奇偶样式
	
	//返回按钮
	$(".od_return_c,.od_return_l").hover(function(){
		$(".od_return_c").css("background","url(../HSP-PCv2.0/images/bc/circle.png) no-repeat center -91px");
		$(".od_return_l").animate({"top":"12px"});
	},function(){
		$(".od_return_c").css("background","url(../HSP-PCv2.0/images/bc/circle.png) no-repeat center 0px");
		$(".od_return_l").animate({"top":"3px"});
	});
    
    //商家财务资金流水切换
    var $ctit_a = $(".capital_tit").children("a"),
    $capitalBox = $(".capitalBox");
    $ctit_a.click(function(){
    	$(this).addClass("ctit_on").siblings("a").removeClass("ctit_on");	
    	var $tti = $ctit_a.index(this);
		$capitalBox.eq($tti).show().siblings("div .capitalBox").hide();
    });
    //end 商家财务资金流水切换
    
    //交易时间
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
        min:'1900-01-01 00:00:00',
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
    //end 交易时间
    
    
    //交易流水单号输入框js
    var $capInput1 = $(".capInput1").children("input"),
    $capInput2 = $(".capInput2").children("input");
    $capInput1.focus(function(){
        $(this).addClass("input_on");
        $(this).next().hide();
    });
    $capInput1.next().click(function(){
        $(this).prev().addClass("input_on").focus();
        $(this).hide();    
    });
    $capInput1.blur(function(){
        $(this).removeClass("input_on");
        if($(this).val() == ""){
            $(this).next().show();
        }
    });
    $capInput2.focus(function(){
        $(this).addClass("input_on");
        $(this).next().hide();
    });
    $capInput2.next().click(function(){
        $(this).prev().addClass("input_on").focus();
        $(this).hide();    
    });
    $capInput2.blur(function(){
        $(this).removeClass("input_on");
        if($(this).val() == ""){
            $(this).next().show();
        }
    });
    //end 交易流水单号输入框js
    

})