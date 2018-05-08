$(document).ready(function(){	
	
	var $legalperson = $(".legalperson"),  //法人姓名
	$ID_number = $(".ID_number"),
	$business = $(".business"),
	$qy_phone = $(".qy_phone"),
    $qy_address = $(".qy_address"),
	$seat = $(".seat"),
    $credit_code = $(".credit_code"),
    $license = $(".license"),
    $tissue = $(".tissue"),
    $taxation = $(".taxation"),  //税务登记证号
	$shop_name = $(".shop_name"),
	$shopkeeper_name = $(".shopkeeper_name"),
	$ID_shopkeeper = $(".ID_shopkeeper"),
	$contacts_name = $(".contacts_name"),
	$bank_card = $(".bank_card"),
	$bank_info = $(".bank_info"),
	$account_name = $(".account_name"),
	$contacts_ID = $(".contacts_ID"),
	$phonepreg = /^1[3|5|7|8]\d{9}$/, //手机正则
	$qy_phonepreg = /^\d+$/,//电话正则
	$fontpreg = /^[\u0391-\uFFE5]{2,30}$/,  //汉字正则
    $ID_numberreg = /^(\d{18}|\d{17}x)$/,   //身份证号正则
    $numberreg = /^[0-9]*$/;
    $numberreg1 = /^[0-9]{13,15}$/;
    $emailpreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //邮箱验证规则; 

    var $file_yy = $("#file_yy"),  //法人身份证证件照
        $file_sf = $("#file_sf"),  //联系人身份证证件照
        $file_xy = $("#file_xy"),  //统一社会信用代码证件照
        $file_zc = $("#file_zc"),  //营业执照证件照
        $file_zz = $("#file_zz"),  //组织机构证件照
        $file_sw = $("#file_sw"),  //税务登记证件照
        $img_sw= $("#img_sw"),
        $img_zc= $("#img_zc"),
        $img_zz = $("#img_zz"),
        $img_yy= $("#img_yy"),
        $img_sf = $("#img_sf"),
        $img_xy = $("#img_xy");

	$(".business,.legalperson,.ID_number,.seat,.qy_phone,.qy_address,.credit_code,.license,.tissue,.taxation,.shop_name,.shopkeeper_name,.ID_shopkeeper,.contacts_name,.bank_card,.bank_info,.account_name,.contacts_ID").focus(function(){       	
        focusInput($(this),$(this).next());
    });

	

    $fli_a = $(".fli_a");
    $fli_a.hover(function(){
        $(this).next().show();
    },function(){
        $(this).next().hide();
    });

	//点击span获得焦点
	$contacts_name.next().click(function(){
		$contacts_name.focus();
	})
	$ID_number.next().click(function(){
		$ID_number.focus();
	})
	
	//焦点获得时       实现placeholder
	
	$contacts_name.next().click(function(){  //联系人姓名
       clickText($contacts_name,$(this));
    });
	$bank_card.next().click(function(){  //新增银行卡号
       clickText($bank_card,$(this));
    });
	$bank_info.next().click(function(){  //开户行
       clickText($bank_info,$(this));
    });
	$account_name.next().click(function(){  //开户行
       clickText($account_name,$(this));
    });
	$contacts_ID.next().click(function(){  //开户行
       clickText($contacts_ID,$(this));
    });
	

	//焦点失去时
	$business.blur(function(){  //企业名称
        checkbusiness();
        blurInput($(this),$(this).next());
    });  
	$legalperson.blur(function(){  //法人姓名
        checkLegalperson();
        blurInput($(this),$(this).next());
    });  
    $ID_number.blur(function(){  //法人身份证号
        checkID_number();
        blurInput($(this),$(this).next());
    });  
	$seat.blur(function(){  //法人户籍所在地
        checkseat();
        blurInput($(this),$(this).next());
    });  
    $qy_phone.blur(function(){    //企业电话
        checkqy_phone();
        blurInput($(this),$(this).next());
    }); 
    $qy_address.blur(function(){  //企业地址
        checkqy_address();
        blurInput($(this),$(this).next());
    }); 
    $credit_code.blur(function(){  //统一信用代码
        checkCredit_code();
        blurInput($(this),$(this).next());
    });
     $license.blur(function(){  //营业执照
        checkLicense();
        blurInput($(this),$(this).next());
    });
    $tissue.blur(function(){  //组织机构代码
        checkTissue();
        blurInput($(this),$(this).next());
    });
    $taxation.blur(function(){  //税务登记证号
        checkTaxation();
        blurInput($(this),$(this).next());
    });
	$shop_name.blur(function(){  //店铺名称
        checkshop_name();
        blurInput($(this),$(this).next());
    });
	$shopkeeper_name.blur(function(){  //店主姓名
        checkshopkeeper_name();
        blurInput($(this),$(this).next());
    });
	$ID_shopkeeper.blur(function(){  //店主身份证号
       checkID_shopkeeper();
        blurInput($(this),$(this).next());
    });
	$contacts_name.blur(function(){  //联系人姓名
       checkcontacts_name();
        blurInput($(this),$(this).next());
    });
	$bank_card.blur(function(){  //新增银行卡号
       checkbank_card();
        blurInput($(this),$(this).next());
    });
	$bank_info.blur(function(){  //开户行
       checkbank_info();
        blurInput($(this),$(this).next());
    });
	$account_name.blur(function(){  //开户名
       checkaccount_name();
        blurInput($(this),$(this).next());
    });
	$contacts_ID.blur(function(){  //联系人身份证号
       checkcontacts_ID();
        blurInput($(this),$(this).next());
    });
	
	
	function checkbusiness(){    //企业名称
        return checkName($business,"企业名称");
    }
    function checkLegalperson(){    //法人姓名
        return checkName($legalperson,"法人姓名");
    }
    function checkqy_phone(){    //企业电话
        return checkReg_on($qy_phone,$qy_phonepreg,"企业电话");
    }
    function checkID_number(){    //法人身份证号
        return checkReg_on($ID_number,$ID_numberreg,"法人身份证号");
    }
	function checkseat(){    //法人户籍所在地
        return checkName($seat,"法人户籍所在地");
    }
    function checkqy_address(){   //企业地址
        return checkName($qy_address,"详细企业地址");
    }
    function checkCredit_code(){   //统一信用代码
        return checkReg_on($credit_code,$numberreg,"统一信用代码");
    }
    function checkLicense(){   //营业执照
        return checkReg_on($license,$numberreg1,"营业执照");
    }
    function checkTissue(){   //组织机构代码
        return checkReg_on($tissue,$numberreg,"组织机构代码");
    }
    function checkTaxation(){   //税务登记证号
        return checkReg_on($taxation,$numberreg,"税务登记证号");
    }
	function checkshop_name(){   //店铺名称 
        return checkName($shop_name,"店铺名称");
    }
	function checkshopkeeper_name(){   //店主姓名 
        return checkName($shopkeeper_name,"店主姓名");
    }
	function checkID_shopkeeper(){   //店主身份证号 
        
    }
	function checkcontacts_name(){   //联系人姓名 
        return checkName($contacts_name,"联系人姓名");
    }
	function checkbank_card(){   //新增银行卡号 
        return checkName($bank_card,"银行卡号 ");
    }
	function checkbank_info(){   //开户行  
        return checkName($bank_info,"开户行 ");
    }
	function checkaccount_name(){   //开户名  
        return checkName($account_name,"开户名 ");
    }
	function checkcontacts_ID(){   //联系人身份证号  
        return checkReg_on($contacts_ID,$ID_numberreg,"联系人身份证号 ");
    }
	

    function checkFile_yy(){    //法人身份证号
        return yesImg($file_yy,"请上传证件照");
    } 
    function checkFile_sf(){    //联系人身份证号
        return yesImg($file_sf,"请上传证件照");
    }
    function checkFile_xy(){    //统一社会信用代码证件照
        return yesImg($file_xy,"请上传证件照");
    }
    function checkFile_zc(){    //营业执照证件照
        return yesImg($file_xy,"请上传证件照");
    }
    function checkFile_zz(){    //组织机构证件照
        return yesImg($file_zz,"请上传证件照");
    }
    function checkFile_sw(){    //税务登记证件照
        return yesImg($file_sw,"请上传证件照");
    }


    //检查姓名是否符合规则
    //$obj表示当前input
    //$hint表示提示信息
    function checkName($obj,$hint){
        var $objVal = $obj.val();
        var $nextp = $obj.parent().parent().next().find(".note_p");
        $objVal = Trim($objVal,"g");
        if($objVal == ""){
            WrongColor($nextp,$obj);
            $nextp.html("请输入" + $hint);
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$obj);
            return true;
        }
    }
    
    //检查身份证号是否合法
    //$obj表示当前input
    //$reg表示对比信息
    //$hint表示提示信息
    function checkReg_on($obj,$reg,$hint){
        var $objVal = $obj.val();
        var $nextp = $obj.parent().parent().next().find(".note_p");
        $objVal = Trim($objVal,"g");
        if($objVal == ""){
            WrongColor($nextp,$obj);
            $nextp.html("请输入" + $hint);
            return false;
        }else if(!$reg.test($objVal)){
            WrongColor($nextp,$obj);
            $nextp.html("请输入正确的" + $hint);
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$obj);
            return true;
        }
    }
    
 

	//objs对象，img_yy上传的图片，imgbox图片显示位置，site图片地址显示位置
    function upImg(objs, imgs) {
        objs.change(function () {
			var $file = $(this),
	        	fileObj = $file[0],
	        	$fileVal = $file.val(),
	        	windowURL = window.URL || window.webkitURL,
	        	dataURL;
	        var $imgBox = objs.parent().parent().find(".aIupimgBox"),
	        	$site = objs.parent().prev().find(".aIupsite"),
		        $wr_tr = objs.parent().parent().find(".aIup_p"),
		        $right = objs.parent().parent().find(".aIup_span");	

            if (fileObj && fileObj.files && fileObj.files[0]) {
                var extStart = $fileVal.lastIndexOf(".");
                var ext = $fileVal.substring(extStart, $fileVal.length).toUpperCase();

				dataURL = windowURL.createObjectURL(fileObj.files[0]);
				imgs.attr('src',dataURL);
				$site.html($fileVal);
				$imgBox.show();
				$wr_tr.hide();
				objs.parent().css("margin-top","72px");
				$right.addClass("aI_right");

			if (ext != ".BMP" && ext != ".PNG" && ext != ".JPG" && ext != ".JPEG") {
				$right.show().html("图片格式错误");
				$right.addClass("aIup_wrong").removeClass("aI_right");
				
				return false;
			}
			else if (sizeM > 2) {
				$right.show().html("图片大小错误");
				$right.addClass("aIup_wrong").removeClass("aI_right");
				
				return false;
			}

            } else {
				dataURL = $file.val();
		        imgs.attr('src',dataURL);
	            $site.html($fileVal);
	            $imgBox.show();
	            $wr_tr.hide();
	            objs.parent().css("margin-top","72px");
	            $right.addClass("aI_right");
            }
        });
    }
//上传图片预览
        
    upImg($file_yy,$img_yy);
    upImg($file_sf,$img_sf);
    upImg($file_xy,$img_xy);
    upImg($file_zc,$img_zc);
    upImg($file_zz,$img_zz);
    upImg($file_sw,$img_sw);
    //end 上传图片（需要引用uploadImg.js）
    
    //判断是否已经上传图片,未上传图片错误提示
    function yesImg(obj,con){
        var $site = obj.parent().parent().find(".aIupsite");
        var $siteval = $site.html();
        var $wrong = obj.parent().parent().find(".aIup_p");
        if($siteval == ""){
            $wrong.show().html(con);
            $wrong.addClass("mg_wrong");
            return false;
        }else{
            return true;
        }
    }
    //end 判断是否已经上传图片,未上传图片错误提示


    //选择是否三证合一
    var $manage_role_ul = $(".manage_role_ul").children("li");
    var yes = $(".first");
    if (yes.hasClass("role_in")) {
        $(".code_d").removeClass("disn");
    } else{
        $(".code_d").addClass("disn");
    }  
    $manage_role_ul.click(function(){
      $(this).addClass("role_in").siblings().removeClass("role_in");
        var no = $(".first");
        if (no.hasClass("role_in")) {
            $(".code_d").removeClass("disn");
            $(".code").addClass("disn");
        } else{
            $(".code_d").addClass("disn");
            $(".code").removeClass("disn");
        }  
	})


	function focusInput($input,$text){
	    OnFocus($input);
	    $text.hide();
	}
	function clickText($input,$text){
	    OnFocus($input);
	    $input.focus();
	    $text.hide();
	}
	function blurInput($input,$text){
	    if($input.val() == ""){
	        $text.show();
	    }
	}
	function RightColor(obj,objn){
	    obj.addClass("mg_right").removeClass("mg_wrong");
	    objn.removeClass("b_blue").removeClass("b_red");
	}
	function WrongColor(obj,objn){
	    obj.addClass("mg_wrong").removeClass("mg_right");
	    objn.addClass("b_red").removeClass("b_blue");
	}
	function OnFocus(obj){
	    obj.addClass("b_blue").removeClass("b_red");
	}
	function OnBlur(obj){
	   obj.removeClass("b_blue").removeClass("b_red"); 
	}
	
	//去除空格  
	function Trim(str,is_global) {
	    var result;
	    result = str.replace(/(^\s+)|(\s+$)/g,"");
	    if(is_global.toLowerCase()=="g"){
	        result = result.replace(/\s/g,"");
	     }
	    return result;
	}
	function getSltVal(tit){
	    tit.click(function(){
	        var $ss = tit.index(this);
	        tit.eq($ss).next().toggle();
	        tit.eq($ss).next().children("li").click(function(){
	            tit.eq($ss).html($(this).html());
	            $(this).parent().hide();
	        });
	    });
	}
	
	
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
		$dorder_list2 = "",
		$hyorder_list = "",
		$gystit2 = $(".gystit2"),
		$detailtb = $(".detailtb"),
		$hybridtb = $(".hybridtb");

		//有状态栏
		$dorder_list +='<tr class="detail_order">';
		$dorder_list +='<td class="tblist_pos"><input type="text" class="edit_noborder_input" value="5461564894845615648" maxlength="40"/>';
		$dorder_list +='</td>',
		$dorder_list +='<td>张三</td>';
		$dorder_list +='<td class="norms"><div title="山东省济南市高薪区舜泰支行">山东省济南市高薪区舜泰支行</div></td>';
		$dorder_list +='<td></td>';
		$dorder_list +='<td class="save_but">';
		$dorder_list +='<input title="编辑" type="button" value="&nbsp;" class="editor_this_line"/>';
		$dorder_list +='<input title="设为默认" type="button" value="&nbsp;" class="save_this_line"/>';
		$dorder_list +='<input title="删除" type="button" value="&nbsp;" class="delete_this_line"/>';
		$dorder_list +='</td>';
		$dorder_list +='</tr>';
		
		//无状态栏
		$dorder_list2 +='<tr class="detail_order">';
		$dorder_list2 +='<td class="tblist_pos"><input type="text" class="edit_noborder_input" value="5461564894845615648" maxlength="40"/>';
		$dorder_list2 +='</td>',
		$dorder_list2 +='<td>张三</td>';
		$dorder_list2 +='<td class="norms"><div title="山东省济南市高薪区舜泰支行">山东省济南市高薪区舜泰支行</div></td>';
		$dorder_list2 +='<td class="save_but">';
		$dorder_list2 +='<input title="编辑" type="button" value="&nbsp;" class="editor_this_line"/>';
		$dorder_list2 +='<input title="设为默认" type="button" value="&nbsp;" class="save_this_line"/>';
		$dorder_list2 +='<input title="删除" type="button" value="&nbsp;" class="delete_this_line"/>';
		$dorder_list2 +='</td>';
		$dorder_list2 +='</tr>';

	
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
	
	//明细订单删除本行
	$detailtb.on("click", ".delete_this_line",function(){
		var $that = $(this).parent().parent(),
			$index = $that.index();
		layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn1',
            area: ['380px', '150px'],
            btn: ['确 定'],
            content: "<div class='layer_err' style='padding: 0;'>确定删除本行？<p style='color:#60abec; font-size:12px; line-height:26px;'>卡号：5461564894845615648</p></div>",
			yes: function(index){
				if($(".detail_order").length > 1){
					$(".detail_order").eq($index-1).remove();
				}else{
					alert("不能再删除啦");
				}
				layer.close(index);
			}
		});
	});
	//设为默认提示
	$detailtb.on("click", ".save_this_line",function(){
		layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn1',
            area: ['380px', '150px'],
            btn: ['确 定'],
            content: "<div class='layer_suc'><img src='images/lay1.png'>设置成功!</div>"
        })
	})


	//新增银行卡信息弹窗
	var $add_this_line=$('.add_this_line'),
	 	$add_this_line2=$('.add_this_line2');
			    $add_this_line.click(function(){
			        layer.open({
			            type: 1,
			            title: false,
			            closeBtn: 1,
			            skin: 'layerBtn2',
			            area: ['582px', ''],
			            btn: ['确 定','取消'],
						shift: 2,
		                content: $(".add_invoice_tb"),
		                yes: function(index, layero){
						     $detailtb.append($dorder_list)
						     layer.close(index); 
						}
			        });
				});
			$add_this_line2.click(function(){
			        layer.open({
			            type: 1,
			            title: false,
			            closeBtn: 1,
			            skin: 'layerBtn2',
			            area: ['582px', ''],
			            btn: ['确 定','取消'],
						shift: 2,
		                content: $(".add_invoice_tb"),
		                yes: function(index, layero){
						     $detailtb.append($dorder_list2)
						     layer.close(index); 
						}
			        });
				});
	//编辑新增银行卡信息弹窗
	 			$detailtb.on("click", ".editor_this_line",function(){
			    	layer.open({
				            type: 1,
				            title: false,
				            closeBtn: 1,
				            skin: 'layerBtn2',
				            area: ['582px', ''],
				            btn: ['确 定','取消'],
							shift: 2,
			                content: $(".add_invoice_tb")
			        });
					
			    });
				
	var $risk_p1 = $(".risk_p1"),
		$risk_p2 = $(".risk_p2"),
		$risk_p3 = $(".risk_p3"),
		$risk_cont1 = $(".risk_cont1"),
		$risk_cont2 = $(".risk_cont2"),
		$risk_cont3 = $(".risk_cont3");
		
		$risk_p1.click(function(){
			$risk_p1.addClass("risk_p_on").removeClass("risk_switch p");
			$risk_p2.addClass("risk_switch p").removeClass("risk_p_on");
			$risk_p3.addClass("risk_switch p").removeClass("risk_p_on");
			$risk_cont1.show();
			$risk_cont2.hide();
			$risk_cont3.hide();
		});
		$risk_p2.click(function(){
			$risk_p2.addClass("risk_p_on").removeClass("risk_switch p");
			$risk_p1.addClass("risk_switch p").removeClass("risk_p_on");
			$risk_p3.addClass("risk_switch p").removeClass("risk_p_on");
			$risk_cont2.show();
			$risk_cont1.hide();
			$risk_cont3.hide();
		});
		$risk_p3.click(function(){
			$risk_p3.addClass("risk_p_on").removeClass("risk_switch p");
			$risk_p2.addClass("risk_switch p").removeClass("risk_p_on");
			$risk_p1.addClass("risk_switch p").removeClass("risk_p_on");
			$risk_cont3.show();
			$risk_cont2.hide();
			$risk_cont1.hide();
		});
		
//	var myVar;
// 
//
//  myVar = setInterval(alertFunc, 1000);
//
// 
//function alertFunc() {
//  alert("Hello!");
//}
});