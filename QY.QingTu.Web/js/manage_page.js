
$(document).ready(function(){
    var $menuname = $(".menuname"),
        $menuurl = $(".menuurl"),
        $pagename = $(".pagename"),
        $pageurl = $(".pageurl");
    $(".menuname,.menuurl,.pagename,.pageurl").focus(function(){
        focusInput($(this),$(this).next());
    });
    $menuname.next().click(function(){
        clickText($menuname,$(this));
    });
    $menuurl.next().click(function(){
        clickText($menuurl,$(this));
    });
    $pagename.next().click(function(){
        clickText($pagename,$(this));
    });
    $pageurl.next().click(function(){
        clickText($pageurl,$(this));
    });

    $menuname.blur(function(){
        if($(this).val() == ""){
            $(this).addClass("b_red").removeClass("b_blue");
        }else{
            $(this).removeClass("b_red").removeClass("b_blue");
        }
        blurInput($(this),$(this).next());
    });
    $menuurl.blur(function(){
        if($(this).val() == ""){
            $(this).addClass("b_red").removeClass("b_blue");
        }else{
            $(this).removeClass("b_red").removeClass("b_blue");
        }
        blurInput($(this),$(this).next());
    });
    $pagename.blur(function(){
        console.log(11)
        if($(this).val() == ""){
            $(this).addClass("b_red").removeClass("b_blue");
        }else{
            $(this).removeClass("b_red").removeClass("b_blue");
        }
        blurInput($(this),$(this).next());
    });
    $pageurl.blur(function(){
        console.log(11)
        if($(this).val() == ""){
            $(this).addClass("b_red").removeClass("b_blue");
        }else{
            $(this).removeClass("b_red").removeClass("b_blue");
        }
        blurInput($(this),$(this).next());
    });


    $(".addcd").click(function(){
        console.log(1);
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layerBorder',    //自定义弹窗样式
            area:['460px','160'],
            btn:['确定','关闭'],
            content: $(".mn_addmenu"),//自定义内容样式
        });
    });
    $(".addym").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layerBorder',    //自定义弹窗样式
            area:['460px','160'],
            btn:['确定','关闭'],
            content: $(".mn_addpage"),//自定义内容样式
        });
    });
     
    $(".delete").click(function(){
        var $that = $(this);
        layer.confirm('<p style="font:16px/60px Microsoft yahei;color:#6d869c;width:300px;text-align:center;">你确定要进行此操作吗？</p>', {
             title: false,
             closeBtn: 0,
             skin: 'layerBorder',   //自定义弹窗样式
             time: 0, //不自动关闭
             btn: ['确定', '取消'],
             yes: function(index){
                layer.close(index);
                $that.parent().parent().remove();
            }
        });
    });
});