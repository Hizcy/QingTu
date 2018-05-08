$(document).ready(function(){
	
        
	//页面加载动画
	//$(".loading").hide();
	 $.ajax({
        type: 'GET',
        //url: E:/HSYG/HS.UI/供应链项目/branches/商贸对接v3.3/商户中心.html,
        data: {},
       success: function(){
           // $('body').append(data);
            $('.loading').hide();
        },
        dataType: 'html'
    });
	
	
	//侧边栏目选中
	var $side = $(".side"),
		$side_a = $(".side a");
	$side.click(function(){
		$(this).addClass("side_on").siblings("p").removeClass("side_on");
		$side_a.removeClass("side_a_on");
		$(this).children().addClass("side_a_on");
		var $pindex = $(this).index(),
			$sidex = "side"+$pindex;
		$(this).children().addClass($sidex+"_on");
		for(var i=0;i<$side.length;i++){
			$(this).siblings().children().removeClass("side"+i+"_on")
		}
	});
	//end 侧边栏目选中

	
});