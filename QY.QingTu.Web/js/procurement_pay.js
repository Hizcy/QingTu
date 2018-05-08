$(document).ready(function(){
	
    var $pwd = $(".pwd"),
        $verify = $(".verify"),
        $prop_verify_btn = $(".prop_verify_btn"),
        $prop_verify_tr = $(".prop_verify_tr");
		
		



        $(".order_detail_flist tr:even").addClass("tb_interval"); //表格间隔颜色变化
        $(".pwd,.verify").focus(function(){
            focusInput($(this),$(this).next());
        });
        $pwd.next().click(function(){
            clickText($pwd,$(this));
        });
        $verify.next().click(function(){
            clickText($verify,$(this));
        });
        $(".pwd,.verify").blur(function(){
            blurInput($(this),$(this).next());
        });

        $prop_verify_btn.click(function(){
            $prop_verify_tr.show();
            $(this).addClass("prop_verfiy_gray").attr("disabled","disabled");
        });
	
	
	//钱包支付使用额度
		var $prop = $(".prop_k_tith_input"),
		$prop2 = $(".prop_k_tith_input2"),
		$wrapdiv2 = $(".wrapdiv2");
		$prop2.click(function(){
		
		if($prop2.prop("checked")==true){
			$wrapdiv2.show()
		}else{
			$wrapdiv2.hide()
			}
		})
	
	//缩略图对应显示and边框变化
	var $thumbnail = $(".thumbnail").children().children("li"),
		$thb_li = $(".thumbnail_b ul").children("li");
   	var $pindex=0;
	var $thumbnail_li = $(".thumbnail_b ul li");
		
	
		$thumbnail_li.click(function(){
			$pindex = $thb_li.index(this);
			if ($pindex == 0) {
		        $th_left.removeClass("th_left").addClass("left_first");
		        $th_right.removeClass("right_last").addClass("th_right");
		    }
		    if ($pindex == $thumbnail.length -  1) {
		        $th_right.removeClass("th_right").addClass("right_last");
		        $th_left.removeClass("left_first").addClass("th_left");
		    }
		    if ($pindex > 0 && $pindex < $thumbnail.length - 1) {
		        $th_left.removeClass("left_first").addClass("th_left");
		        $th_right.removeClass("right_last").addClass("th_right");
		    }

			$thumbnail.eq($pindex).show().siblings().hide();
			$(".thumbnail ul li").css("top","0");
			$(".thumbnail ul li").css("left","0");
			$(".thumbnail ul li img").attr("width","744px");
			$(".thumbnail ul li img").attr("height","350px");
			$(".thumbnail ul li img").css("zoom","100%");
			$(this).addClass("thb_on").siblings().removeClass("thb_on");	
		})
	//缩略图左右切换（循环切换）
	var $thb_left = $(".thb_left"),
		$thb_right = $(".thb_right"),
		$thb_ul = $(".thumbnail_b ul"),
		$swidth = $(".thumbnail_b").width(),
		$lastf = $thb_ul.children("li").length-6;
		/*$thb_left.click(function(){
			if(!$thb_ul.is(":animated")){
				$thb_ul.animate({left:"-="+$swidth},100,function(){
					$thb_ul.css({left:"0px"}).children("li:lt(5)").appendTo($thb_ul);
				})
			}
    	})
    	$thb_right.click(function(){
			if(!$thb_ul.is(":animated")){
				$thb_ul.css({left:"-152px"}).children("li:gt("+$lastf+")").prependTo($thb_ul);
				$thb_ul.animate({left:"+="+$swidth},100);
			}
    	})*/
	//缩略图左右切换（不循环切换）
	$thb_left.click(function(){
			$thumbnail_li.eq(5).hide();	
			$thumbnail_li.eq(0).show();
		})
	$thb_right.click(function(){
		if($thumbnail_li.length>=6){
			$thumbnail_li.eq(0).hide();
			$thumbnail_li.eq(5).show();
		}
		else{}
	})

	//上传图片预览
	var $file_yy = $("#file_yy"),
		$upload_num = $('.upload_num');
	upImg($file_yy);
	//objs对象，img_yy上传的图片，imgbox图片显示位置，site图片地址显示位置
    function upImg(objs) {
        objs.change(function () {
            //获取上传图片的大小
            var $file = $(this),
            	filesize = $file[0].files[0].size,
				sizeM = filesize/1024/1024,
	            $fileVal = $file.val(),
	            fileObj = $file[0],
	            windowURL = window.URL || window.webkitURL,
	            dataURL,
	            $arr = [];
            var $addimg = $('<div class="aIupimg"><img id="img_yy" /><p class="site_p" style="display: none;"></p><div class="clearfix"></div><div class="aIup_oper"><a class="lookimg_btn">查看原图</a><a class="delimg_btn">移除</a></div></div>'),
            	$aIupimgBox = objs.parent().prev(),
            	$site_p = $(".aIupimgBox").find(".site_p"),
        		$reallen = $aIupimgBox.children(".aIupimg").length;
        	if ($(".upload_num").html() < 6) {
        		var $upload_num = $(".upload_num").html($(".aIupimg").length+1);
        	}    
	        if($file.val() == ""){
	            return;
	        } 
	        if($(".aIupimg").length < 6){
                $site_p.each(function(){
                    if($(this).html() != $file.val()){
                        $arr.push("1");
                    }else{
                        $arr.push("2");
                    }
                });
//              alert($arr);
                if($arr.indexOf("2") == '-1'){
		            if (fileObj && fileObj.files && fileObj.files[0]) {
		                var extStart = $fileVal.lastIndexOf(".");
		                var ext = $fileVal.substring(extStart, $fileVal.length).toUpperCase();
		                if (ext != ".JPG" && ext != ".JPEG") {
			                layer.open({
					            type: 1,
					            title: false,
					            closeBtn: 1,
					            skin: 'layerBtn1',
					            area: ['380px', '150px'],
					            btn: ['确 定'],
					            content: "<div class='layer_err'><img src='images/main/lay2.png'>图片格式错误!</div>"
					        })                    
		                    return false;
		                }
		                else if (sizeM > 2) {
			                layer.open({
					            type: 1,
					            title: false,
					            closeBtn: 1,
					            skin: 'layerBtn1',
					            area: ['380px', '150px'],
					            btn: ['确 定'],
					            content: "<div class='layer_err'><img src='images/main/lay2.png'>图片大小错误!</div>"
					        })                   	
		                    return false;
		                }
		                else {           	
		                    dataURL = windowURL.createObjectURL(fileObj.files[0]);
		                    $aIupimgBox.show();
		                    $aIupimgBox.append($addimg);
		                    $addimg.find("img").attr('src', dataURL);
		                    $site_p.html($file.val());
		                    objs.parent().css("margin-top", "56px");
		                    return true;
		                }
		            } else {
		                dataURL = $file.val();
		                var imgObj = document.getElementById(imgs);
		                imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
		                imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
		                $(".aIupimgBox").hide();
		            }
                }
	        }                       
        });
    }
	//上传图片预览	
	//缩略图弹窗
	$(".aIupimgBox").on("click",".lookimg_btn",function(){
		$(".thumbnail ul li").css("top","0");
		$(".thumbnail ul li").css("left","0");
		$(".thumbnail ul li img").attr("width","744px");
		$(".thumbnail ul li img").attr("height","350px");
		$(".thumbnail ul li img").css("zoom","100%");
		layer.open({
			type: 1,
			title: false,
			closeBtn: 1,
			skin: 'thumbnail_bg',
			area: ['840px', '570px'],
			shift: 2,
			content: $(".thumbnail_tc"),
			cancel: function(index){
				$(".bodybg").css("overflow","visible");	
			}
				
		});
		$(".bodybg").css("overflow","hidden");
		return false;
	});
		
	//删除图片
	$(".aIupimgBox").on("click",".delimg_btn",function(){
		$(this).parent().parent().remove();
		$(".upload_num").html($(".aIupimg").length);
		if($(".upload_num").html() == "0"){
			$(".aIupimgBox").hide();
		}
		else{
			$(".aIupimgBox").show();	
		}	
		return false;
	})
	//大图翻页
	var $th_left = $("#left"),
		$th_right = $("#right");
	$th_left.click(function(){
		if($pindex != 0){
			$(".thumbnail ul li").css("top","0");
			$(".thumbnail ul li").css("left","0");
			$(".thumbnail ul li img").attr("width","744px");
			$(".thumbnail ul li img").attr("height","350px");
			$(".thumbnail ul li img").css("zoom","100%");
		}
		if($thumbnail.length == 6 && $pindex == 1){
			$thumbnail_li.eq(5).hide();	
			$thumbnail_li.eq(0).show();
		}

		if ($pindex == $thumbnail.length - 1) {
	          $th_right.addClass("th_right").removeClass("right_last");
	    }
		if ($pindex == 1) {
	        $th_left.addClass("left_first").removeClass("th_left");
	   }
		if($pindex>0){
			$pindex--;
		}
			$thumbnail.eq($pindex).show().siblings().hide();
			if($pindex<$thumbnail.length-1){
			$thumbnail_li.eq($pindex).addClass("thb_on").siblings().removeClass("thb_on");
		}
	})
	$th_right.click(function(){
		if($pindex != $thumbnail.length-1){
		$(".thumbnail ul li").css("top","0");
		$(".thumbnail ul li").css("left","0");
		$(".thumbnail ul li img").attr("width","744px");
		$(".thumbnail ul li img").attr("height","350px");
		$(".thumbnail ul li img").css("zoom","100%");
		}
		if($thumbnail.length == 6 && $pindex == 4){
			$thumbnail_li.eq(0).hide();	
			$thumbnail_li.eq(5).show();
		}
		if ($pindex == 0) {
	        $th_left.addClass("th_left").removeClass("left_first");
	    }
		if ($pindex == $thumbnail.length - 2) {
	          $th_right.addClass("right_last").removeClass("th_right");
	    }
		if($pindex<$thumbnail.length-1){
			$pindex++;
		}
			$thumbnail.eq($pindex).show().siblings().hide();
			if($pindex<=$thumbnail.length-1){
			$thumbnail_li.eq($pindex).addClass("thb_on").siblings().removeClass("thb_on");
		}
	})
	
});
	
	
    

    