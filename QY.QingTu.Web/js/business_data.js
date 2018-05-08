$(document).ready(function(){	
	
	var $legalperson = $(".legalperson"),  //法人姓名
	$ID_number = $(".ID_number"),
	$linkman = $(".linkman"),
    $link_ID = $(".link_ID"),
    $credit_code = $(".credit_code"),
    $license = $(".license"),
    $tissue = $(".tissue"),
    $taxation = $(".taxation"),  //税务登记证号
	$shop_name = $(".shop_name"),
	$shopkeeper_name = $(".shopkeeper_name"),
	$ID_shopkeeper = $(".ID_shopkeeper"),
	$contacts_name = $(".contacts_name"),
	$phonepreg = /^1[3|5|7|8]\d{9}$/, //手机正则
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

	$(".legalperson,.ID_number,.linkman,.link_ID,.credit_code,.license,.tissue,.taxation,.shop_name,.shopkeeper_name,.ID_shopkeeper,.contacts_name").focus(function(){       	
        focusInput($(this),$(this).next());
    });

    $(".mgbtn").click(function(){
        if($manage_role_ul.eq(0).hasClass("role_in")){
            if(checkLegalperson()&&checkID_number()&&checkFile_yy()&&checkLinkman()&&checkLink_ID()&&checkFile_sf()&&checkCredit_code()&&checkFile_xy()){
                layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 1,
                    skin: 'layerBtn2',
                    area: ['380px', '150px'],
                    btn: ['确 定','取消'],
                    content: "<div class='layer_war'>供应商已添加，请等待审核</div>"
                })
                return true;
            }else{
                return false;
            }
        }else{
            if(checkLegalperson()&&checkID_number()&&checkFile_yy()&&checkLinkman()&&checkLink_ID()&&checkFile_sf()&&checkLicense()&&checkFile_zc()&&checkTissue()&&checkFile_zz()&&checkTaxation()&&checkFile_sw()){
                layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 1,
                    skin: 'layerBtn2',
                    area: ['380px', '150px'],
                    btn: ['确 定','取消'],
                    content: "<div class='layer_war'>供应商已添加，请等待审核</div>"
                })
                return true;
            }else{
                return false;
            }
        }
        
    });

    $fli_a = $(".fli_a");
    $fli_a.hover(function(){
        $(this).next().show();
    },function(){
        $(this).next().hide();
    });

	//焦点获得时       实现placeholder
    $legalperson.next().click(function(){ //法人姓名
        clickText($legalperson,$(this));
    });
    $ID_number.next().click(function(){  //法人省份证号
        clickText($ID_number,$(this));
    });
    $linkman.next().click(function(){  //联系人姓名
        clickText($linkman,$(this));
    });
    $link_ID.next().click(function(){  //联系人省份证号
        clickText($link_ID,$(this));
    });
    $credit_code.next().click(function(){  //统一信用代码
        clickText($credit_code,$(this));
    });
    $license.next().click(function(){  //营业执照
        clickText($license,$(this));
    });
    $tissue.next().click(function(){  //组织机构代码
        clickText($tissue,$(this));
    });
    $taxation.next().click(function(){  //税务登记证号
        clickText($taxation,$(this));
    });
	$shop_name.next().click(function(){  //店铺名称
        clickText($shop_name,$(this));
    });
	$shopkeeper_name.next().click(function(){  //店主姓名
        clickText($shopkeeper_name,$(this));
    });
	$ID_shopkeeper.next().click(function(){  //店主身份证号
       clickText($ID_shopkeeper,$(this));
    });
	$contacts_name.next().click(function(){  //联系人姓名
       clickText($contacts_name,$(this));
    });

	//焦点失去时
	$legalperson.blur(function(){  //法人姓名
        checkLegalperson();
        blurInput($(this),$(this).next());
    });  
    $ID_number.blur(function(){  //法人身份证号
        checkID_number();
        blurInput($(this),$(this).next());
    });  
    $linkman.blur(function(){    //联系人姓名
        checkLinkman();
        blurInput($(this),$(this).next());
    }); 
    $link_ID.blur(function(){  //联系人身份证号
        checkLink_ID();
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

    function checkLegalperson(){    //法人姓名
        return checkName($legalperson,"法人姓名");
    }
    function checkLinkman(){    //联系人姓名
        return checkName($linkman,"联系人姓名");
    }
    function checkID_number(){    //法人身份证号
        return checkReg_on($ID_number,$ID_numberreg,"法人身份证号");
    }
    function checkLink_ID(){   //联系人身份证号
        return checkReg_on($link_ID,$ID_numberreg,"联系人身份证号");
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
        return checkReg_on($ID_shopkeeper,$ID_numberreg,"店主身份证号");
    }
	function checkcontacts_name(){   //联系人姓名 
        return checkName($contacts_name,"联系人姓名");
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
	
		
	
});