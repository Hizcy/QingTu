$(document).ready(function(){

    var $tit = $(".risk_select").children("p"),
        $cont = $(".risk_select").children("ul"),
        $input = $(".risk_inputdiv").children("input"),
        $span = $(".risk_inputdiv").children("span");
	
    $(".order_detail_flist tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});//表格偶数行样式

	//操作类型
    $tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("p_on");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("p_on");
            $(this).parent().hide();
        });
    });
    //end 操作类型

	//关键词
    $input.focus(function(){
        $(this).addClass("input_on");
        $input.next().hide();
    });
    $input.next().click(function(){
        $input.addClass("input_on").focus();
        $(this).hide();    
    });
    $input.blur(function(){
        $(this).removeClass("input_on");
        if($(this).val() == ""){
            $input.next().show();
        }
    });
	//end 关键词
	
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

























})