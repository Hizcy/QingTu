
$(document).ready(function(){
	
	var $shi = $(".shi"),
	$gui = $(".gui");
	
	//焦点获得时
	$shi.focus(function(){
		OnFocus($(this));
	});
	$gui.focus(function(){
		OnFocus($(this));
	});

	//焦点失去时
	$shi.blur(function(){
        Checkweizhi();
    });   
    $gui.blur(function(){
    	Checkweizhi();
    });   

	//判断是否为空 
    function Checkweizhi(){
    	var $nextp = $(".note_p");
        var $shiVal = $shi.val();
        var $guiVal = $gui.val();
        $shiVal = Trim($shiVal,"g");
        $guiVal = Trim($guiVal,"g");
        if($shiVal == ""){
            WrongColor($nextp,$shi);
            $nextp.html("请填写备档位置");
            return false;
        }else{
            if($guiVal == ""){
	            WrongColor($nextp,$gui);
	            $nextp.html("请填写备档位置");
	            return false;
	        }else{
	            $nextp.html("&nbsp;");
	            RightColor($nextp,$shi,$gui);
	            return true;
	        }    
        }    
    } 
	
	function RightColor(obj,objn,objs){
	    obj.addClass("mg_right").removeClass("mg_wrong");
	    objn.removeClass("b_blue").removeClass("b_red");
	    objs.removeClass("b_blue").removeClass("b_red");
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
	
		
	
});