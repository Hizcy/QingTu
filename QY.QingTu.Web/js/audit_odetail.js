$(document).ready(function(){
	var $fk_pfsave = $(".fk_pfsave"),
        $fk_pfedit = $(".fk_pfedit"),
        $fk_pfcanel = $(".fk_pfcanel"),
        $edit_input = $(".edit_input"),
        $fk_updiv = $(".fk_updiv"),
        $cf_sbtn_gray = $(".cf_sbtn_gray"),
        $edit_select = $(".edit_select"),
        $detailaddr = $(".detailaddr"),
        $daddr_p = $(".daddr_p"),
        $photo_bg = $(".photo_bg"),
        $photo_big = $(".photo_big"),
        $photo = $(".photo");
        

    $photo.click(function(){
        var $index = $photo.index(this);
        $photo_bg.show();
        $photo_big.show();
        $photo_big.children("img").eq($index).show().siblings("img").hide();  
    });
    $photo_bg.click(function(){
        $(this).hide();
        $photo_big.hide();
    });   

    $fk_pfedit.click(function(){
        $(this).hide();
        $(".fk_pfcanel,.fk_pfsave,.edit_select,.detailaddr").show();
        $edit_input.addClass("edit_on").removeAttr("readonly");
        $fk_updiv.show();
        $daddr_p.hide();
    });
    $fk_pfsave.click(function(){
        $fk_pfedit.show();$daddr_p.show();
        $(".fk_pfcanel,.fk_pfsave,.edit_select,.detailaddr").hide();
        $edit_input.removeClass("edit_on").attr("readonly","readonly");
        $fk_updiv.hide();
    });
    $fk_pfcanel.click(function(){
        $fk_pfedit.show();$daddr_p.show();
        $(".fk_pfcanel,.fk_pfsave,.edit_select,.detailaddr").hide();
        $edit_input.removeClass("edit_on").attr("readonly","readonly");
        $fk_updiv.hide();
    });

    //$cf_sbtn_gray.click(function(){
    //    layer.open({
    //        type: 1,
    //        title: false,
    //        closeBtn: 0,
    //        skin: 'layerBorder',    //自定义弹窗样式
    //        area:['460px','240px'],
    //        btn:['确定','关闭'],
    //        content: $(".mn_addmenu"),//自定义内容样式
	//		success:function(){
	//			
	//		},
    //    });
    //});

});