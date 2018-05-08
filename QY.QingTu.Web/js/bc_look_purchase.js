$(document).ready(function(){
	
    $(".ordermg_table tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});//表格偶数行样式
    
    //动态计算进度条长度
    var $mo_percent = $(".mo_i").html()*1,
		$a = $mo_percent*171/100;
    $(".mo_three_tit4 span").css("width",$a+"px");
    
    //联系方式隐藏
    var strVal = $(".phone").html();
    str = strVal.substring(0,3);
    str1 = strVal.substring(3,7);
    str2 = strVal.substring(7,11);
    var lphone =str1.replace(str1,"****");
    $(".phone").html(str + lphone  + str2);
    $(".see").click(function(){
        $(".phone").html(str + str1 + str2);
    })

    $(".look_button").click(function(){
    	count();
    	layer.open({
            title: false,
            type:1,
            closeBtn: 0, 
            skin: 'layerBorder',	//自定义弹窗样式
            area: ['380px', '170px'],
            shift: 2,
            btn: ['确 定', '取 消'],
            content: "<div class='layer_hint'>已确认预采单，匹配成功将在我的销售查看该笔订单<br><span class='time'>3</span>s</div>"
		})
    });
    function count(){
        var $initval = 3;
        var timer = window.setInterval(function(){
        	var s = $(".time");
            if(s.html() > 1){
            	$initval--;
                s.html($initval);
            }else{
                clearInterval(timer);
                layer.closeAll();
                return false; 
            }
        },1000)
    } 

//加减
    $(".operation_minus").click(function(){
        var $index = $(".operation_minus").index(this);
        var $num_text = $(".num_text").eq($index);
        var $val = parseInt($num_text.val());
        if($val>1){
            $num_text.val($val-1);  
        }
    });
    $(".operation_add").click(function(){
        var $index = $(".operation_add").index(this);
        var $num_text = $(".num_text").eq($index);
        var $val = parseInt($num_text.val());
        if($val<99){
            $num_text.val($val+1);  
        }
    });
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
	
	//全选按钮
	$(".check_all").click(function(){
		if($(this).attr("checked") == undefined){
			$(":checkbox").attr("checked",false);
			$(".check_t").each(function(){
				if($(this).attr("checked") == undefined){
					$(this).parent().parent().find(".surplus").html($(this).parent().parent().find(".surplus").html()*1+$(this).parent().parent().find(".num_text").val()*1);
					$(this).parent().parent().find(".num_text").val("0");
				}				
            })
		}
		if($(this).attr("checked") == "checked"){
			$(":checkbox").attr("checked","checked");
            $(".check_t").each(function(){
				if($(this).attr("checked") == "checked"){
					$(this).parent().parent().find(".num_text").val($(this).parent().parent().find(".surplus").html()*1+$(this).parent().parent().find(".num_text").val()*1);
					$(this).parent().parent().find(".surplus").html("0");
            	}
				
            })
        }
	})
	$(".check_t").click(function(){
		if($(this).attr("checked") == undefined){
			$(".check_all").attr("checked",false);
			$(this).parent().parent().find(".surplus").html($(this).parent().parent().find(".surplus").html()*1+$(this).parent().parent().find(".num_text").val()*1);
			$(this).parent().parent().find(".num_text").val("0");
		}
		if($(this).attr("checked") == "checked"){
			$(this).parent().parent().find(".num_text").val($(this).parent().parent().find(".surplus").html()*1+$(this).parent().parent().find(".num_text").val()*1);
			$(this).parent().parent().find(".surplus").html("0");
            
        }
	})
});