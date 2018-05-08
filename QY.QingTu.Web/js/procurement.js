// JavaScript Document
$(document).ready(function(){
	
		$(".od_return_c,.od_return_l").hover(function(){
		$(".od_return_c").css("background","url(images/bc/circle.png) no-repeat center -91px");
		$(".od_return_l").stop(true,true).animate({"top":"12px"});
	},function(){
		$(".od_return_c").css("background","url(images/bc/circle.png) no-repeat center 0px");
		$(".od_return_l").stop(true,true).animate({"top":"3px"});
	});
	
	layer.use('extend/layer.ext.js');
	var	$btn_name = $(".btn_name"),   //提示窗口确定按钮
		$cls_pp = $(".cls_pp"),    //提示窗口关闭按钮
		$body_gray = $(".body_gray"),    //灰色背景
		$orderinfo_save_btn = $(".orderinfo_save_btn"), //订单信息另存为按钮
		$tips_div = $(".tips_div"),//提示订单窗口
		$order_table_cont = $(".order_table_cont"),   //本表单所有内容
		$btn_add_neworder = $(".btn_add_neworder"), //添加新的表单按钮
		$procurement_selectorder_tt = $(".procurement_selectorder_tt"),
		$add_line_btn = $(".add_line_btn"),//添加新的一行按钮
		$trash_icon = $(".trash_icon"),   //删除本表单按钮
		$recordtit = $(".recordtit"),
		$recordcont = $(".recordcont"),
		$savedtit = $(".savedtit"),
		$savedcont = $(".savedcont"),
		$prop_slt_way = $(".prop_slt_way").children("li"),
		$hway = $(".hway"),
		$prop_note = $(".prop_note"),
		$prop_ntk = $(".prop_ntk"),
		$prop_order_svbtn = $(".prop_order_svbtn"),
		$dorder_list = "",
		$hyorder_list = "",
		$gystit2 = $(".gystit2"),
		$detailtb = $(".detailtb"),
		$hybridtb = $(".hybridtb");



		$hyorder_list += '<tr class="hybrid_order">';
		$hyorder_list += '<td width="180" class="tblist_pos">飘柔洗发水</td>';
		$hyorder_list += '<td width="150">';
		$hyorder_list += '<div class="select_cata">';
		$hyorder_list += '<p class="select_catat">请选择</p>';
		$hyorder_list += '<ul class="select_catac" style="display:none">';
		$hyorder_list += '<li>请选择</li>';
		$hyorder_list += '<li>食品</li>';
		$hyorder_list += '<li>药品</li>';
		$hyorder_list += '<li>电子</li>';
		$hyorder_list += '<li>百货</li>';
		$hyorder_list += '<li>洗化</li>';
		$hyorder_list += '</ul>';
		$hyorder_list += '</div>'; 
		$hyorder_list += '</td>';
		$hyorder_list += '<td width="100">';
		$hyorder_list += '<input type="text" class="edit_tb_input spfl" value="" maxlength="10"/>';
		$hyorder_list += '</td>';
		$hyorder_list += '<td width="150">';
		$hyorder_list += '<div class="select_cata">';
		$hyorder_list += '<p class="select_catat">请选择</p>';
		$hyorder_list += '<ul class="select_catac" style="display:none">';
		$hyorder_list += '<li>请选择</li>';
		$hyorder_list += '<li>食品</li>';
		$hyorder_list += '<li>药品</li>';
		$hyorder_list += '<li>电子</li>';
		$hyorder_list += '<li>百货</li>';
		$hyorder_list += '<li>洗化</li>';
		$hyorder_list += '</ul>';
		$hyorder_list += '</div>';
		$hyorder_list += '</td>';
		$hyorder_list += '<td width="80"><input type="text" class="edit_tb_input spsl" value="" maxlength="10"/></td>';
		$hyorder_list += '<td width="120"><input type="text" class="edit_tb_input spdw" value="" maxlength="10"/></td>';
		$hyorder_list += '<td width="100"><input type="text" class="edit_tb_input spsl" value="" maxlength="10"/></td>';
		$hyorder_list += '<td width="100"><input type="text" class="edit_tb_input spsl" value="1000" maxlength="10"/></td>';
		$hyorder_list += '<td width="130">';
		$hyorder_list += '<input type="button" value="&nbsp;" class="delete_this_line"/>';
		$hyorder_list += '<input type="button" value="&nbsp;" class="add_this_line"/>';
		$hyorder_list += '</td>';
		$hyorder_list += '</tr>';

		$dorder_list +='<tr class="detail_order">';
    	$dorder_list +='<td width="180"><input type="text" class="edit_noborder_input spsl" value="&nbsp;" maxlength="10"/></td>';
		$dorder_list +='<td width="150">';
		$dorder_list +='<div class="select_cata">';
		$dorder_list +='<p class="select_catat">请选择</p>';
		$dorder_list +='<ul class="select_catac" style="display:none">';
		$dorder_list +='<li>请选择</li>';
		$dorder_list +='<li>食品公司</li>';
		$dorder_list +='<li>食品阿萨德</li>';
		$dorder_list +='<li>食品撒啊</li>';
		$dorder_list +='<li>食是是</li>';
		$dorder_list +='<li>食品有限公司</li>';
		$dorder_list +='</ul>';
		$dorder_list +='</div>';
		$dorder_list +='</td>';
		$dorder_list +='<td width="100"><input type="text" class="edit_noborder_input spsl" value="&nbsp;" maxlength="10"/></td>';
		$dorder_list +='<td width="150">';
		$dorder_list +='<div class="select_cata">';
		$dorder_list +='<p class="select_catat">请选择</p>';
		$dorder_list +='<ul class="select_catac" style="display:none">';
		$dorder_list +='<li>请选择</li>';
		$dorder_list +='<li>山东合有限公司</li>';
		$dorder_list +='<li>山东合电子有限公司</li>';
		$dorder_list +='<li>山东合商云购电子有限公司</li>';
		$dorder_list +='<li>山东合商云限公司</li>';
		$dorder_list +='<li>山东合商云购电子有限公司</li>';
		$dorder_list +='</ul>';
		$dorder_list +='</div>';
		$dorder_list +='</td>';
		$dorder_list +='<td width="80"><input type="text" class="edit_noborder_input spsl" value="&nbsp;" maxlength="10"/></td>';
		$dorder_list +='<td width="120"><input type="text" class="edit_noborder_input spsl" value="&nbsp;" maxlength="10"/></td>';
		$dorder_list +='<td width="100"><input type="text" class="edit_noborder_input spsl" value="&nbsp;" maxlength="10"/></td>';
		$dorder_list +='<td width="100">800.00</td>';
		$dorder_list +='<td width="130">';
		$dorder_list +='<input type="button" value="&nbsp;" class="delete_this_line"/>';
		$dorder_list +='<input type="button" value="&nbsp;" class="add_this_line"/>';
		$dorder_list +='</td>';
		$dorder_list +='</tr>';

	


	//明细订单添加一列
	$detailtb.on("click", ".add_this_line", function(){
		$detailtb.append($dorder_list);
	});	
	//明细订单商品名称
	$detailtb.on("keyup click", ".edit_noborder_input", function(e){
		var $input = $(this),
			$li = $input.next().children("li");
		if($input.val() != ""){
			$(".edit_noborder_input").next().hide();
			$input.next().show();	
		}
		$li.click(function(){
			$input.val($(this).html());
			if($input.val() == "商品1商品1"){
				$input.parent().css({border:"1px solid #f40"});
			}else{
				$input.parent().css({border:"1px solid #e4e4e4"});
			}
			$(this).parent().hide();
		});
		e.stopPropagation();
		$(document).click(function(){
			$input.next().hide();
		});
	});
	//明细订单选择供应商
	$detailtb.on("click", ".select_cata", function(e){
		var $sltp = $(this).children("p"),
			$sltul = $(this).children("ul");
		getSltVal($sltp);

		e.stopPropagation();
		$(document).click(function(){
			$sltul.hide();
		});
	});
	//明细订单删除本行
	$detailtb.on("click", ".delete_this_line",function(){
		var $that = $(this),
			$index = $that.index();
		layer.confirm('你确定要删除本行吗？', {
			 title: false,
			 closeBtn: 0,
			 skin: 'layerBorder',	//自定义弹窗样式
			 time: 0, //不自动关闭
			 area: ['360px', '150px'],
			 btn: ['确定', '取消'],
			 yes: function(index){
				if($(".detail_order").length > 1){
					$(".detail_order").eq($index).remove();
				}else{
					alert("不能再删除啦");
				}
				layer.close(index);
			}
		});
	});


	//订单模式提醒
	$prop_slt_way.click(function(){
		$(this).addClass("prop_slt_speli").siblings("li").removeClass("prop_slt_speli");
		var $tti = $prop_slt_way.index(this);
		$hway.eq($tti).show().siblings("div").hide();
	});

	//选择订单采取何种模式
	$prop_note.hover(function(){
		$prop_ntk.show();
	},function(){
		$prop_ntk.hide();
	});
	//订单另存为
	$prop_order_svbtn.click(function(){
		layer.prompt({
		  title: '请输入保存文件名:',
		  formType: 3 //prompt风格，支持0-2
		}, function(pass){
			alert(pass);
			layer.closeAll();
		});
	});

	//下拉框选择值
	getSltVal4($recordtit);//请选择一个记录
	getSltVal2($savedtit);//选择订单存档
	getSltVal3($gystit2);//(明细订单下)请选择供应商

	//订单信息另存为
	$orderinfo_save_btn.click(function(){
		var $pindex = $orderinfo_save_btn.index(this);
		
		if($(".spmc").val() == ""){
			layOpen("你输入的商品名称不能为空！");
		}else if($(".spgg").val() == ""){
			layOpen("你输入的商品规格不能为空！");
		}else if($(".spfl").val() == ""){
			layOpen("你输入的商品分类不能为空！");
		}else{
			$tips_div.eq($pindex).show();
			$body_gray.show();
			$cls_pp.click(function(){
				$tips_div.eq($pindex).hide();
				$body_gray.hide();
			});
			$btn_name.click(function(){
				if($(".input_name").val() =="" ||$(".input_name").val() =="请输入保存文件名"){
					$(".tips_ppinfo").html("请输入合法的文件名!");
				}else{
					$tips_div.eq($pindex).hide();
					$body_gray.hide();
				}
			});			
		}
	});
	function layOpen(str){
		layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			skin: 'layerBorder',	//自定义弹窗样式
			btn:['确定'],
			content: '<div class="wrong_note">'+str+'</div>'//自定义内容样式
		});	
	}
	
	function getSltVal(tit){
		var $that = tit;
		if($that.next().is(":visible")){
			$that.next().hide();
		}else{
			$that.next().show();
		}
		$that.next().children("li").click(function(e){
			$that.html($(this).html());
			$(this).parent().hide();
			e.stopPropagation();
		});
	}
	function getSltVal4(tit){
		tit.click(function(){
			var $ss = tit.index(this);
			tit.eq($ss).next().toggle();
			tit.eq($ss).next().children("li").click(function(){
				tit.eq($ss).html($(this).html());
				$(this).parent().hide();
			});
		});
	}


	//选择订单存档
	function getSltVal2(tit){
		tit.click(function(){
			var $ss = tit.index(this);
			tit.eq($ss).next().toggle();
			$(".savedcont p").children("span").click(function(){
				var $newtit = $(this).html();
				tit.eq($ss).html($newtit);
				$savedtit.find(".delete_em").hide();
				$savedcont.hide();
			});
		});
	}	
	
	//请选择供应商
	function getSltVal3(tit){
		tit.click(function(){
			var $ss = tit.index(this);
			tit.eq($ss).next().toggle();
			tit.eq($ss).next().children("li").click(function(){	
				if ($(this).hasClass("jin_grey")) {
					tit.eq($ss).html("请选择供应商");
				} else{
					$(this).parent().hide();
					tit.eq($ss).html($(this).html());
				}
			});
		});
	}
	
	//删除选择订单存档某条项目
	var $delete_em = $(".delete_em");
	$delete_em.click(function(){
		$(this).parent("p").hide();
		var $savedtitVal=$savedtit.html(),
			$delete=$(this).prev(".delete_span"),
			$deleteVal=$delete.html();
		if ($savedtitVal == $deleteVal) {
			$savedtit.html("选择订单存档");
		} 
	})

	$(".run_div a").click(function(){
		$(this).find("i").toggleClass("run_on");
		$(this).siblings().find("i").removeClass("run_on");
	})
	
	$(".jin_grey").removeAttr("disabled");$(".jin_grey").attr("disabled","disabled");
	
	
	//协议弹窗
	var $procp_a = $(".procp_a");
	$procp_a.click(function(){
		layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            area: ['900px', ''],
            content: $('.pro_sjrz')
        })	
	})
	
	//点击提交订单提示
	$(".prop_pay_present").click(function(){
		if($(".logistics_card").val() == "请选择"){
			layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn1',
	            area: ['380px', '150px'],
	            btn: ['确 定'],
	            content: "<div class='layer_war'><img src='images/lay3.png'>请选择银行卡!</div>"
	        })
		}else
		if($(".logistics_wl").val() == "请选择"){
			layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn1',
	            area: ['380px', '150px'],
	            btn: ['确 定'],
	            content: "<div class='layer_war'><img src='images/lay3.png'>请选择物流公司!</div>"
	        })
		}else
		if($(".logistics_ck").val() == "请选择"){
			layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn1',
	            area: ['380px', '150px'],
	            btn: ['确 定'],
	            content: "<div class='layer_war'><img src='images/lay3.png'>请选择仓库属性!</div>"
	        })
		}
	})
	//获取屏幕高度
	$(".bodybg2").height($(window).height());
});



	