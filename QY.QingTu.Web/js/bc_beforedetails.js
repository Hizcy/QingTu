// JavaScript Document
$(document).ready(function(){

	//联系方式隐藏
    var strVal = $(".phone").html(),
    	strVal1 = $(".phone1").html();
    str = strVal.substring(0,3);
    str1 = strVal.substring(3,7);
    str2 = strVal.substring(7,11);
    str10 = strVal1.substring(0,3);
    str11 = strVal1.substring(3,7);
    str12 = strVal1.substring(7,11);
    var lphone =str1.replace(str1,"****");
    var lphone1 =str11.replace(str11,"****");
    $(".phone").html(str + lphone  + str2);
	$(".phone1").html(str10 + lphone1 + str12);
    
	$(".see").click(function(){
        $(".phone").html(str + str1 + str2);
    })
	$(".see1").click(function(){
    	$(".phone1").html(str10 + str11 + str12);
    })
    $(".agree").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layerBorder',    //自定义弹窗样式
            area: ['360px', '150px'],
            btn:['确 定','取 消'],
            content: "<div class='agreelar'>确认通过预菜单</div>",//自定义内容样式 
        }); 
    })
    $(".down").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layerBorder',    //自定义弹窗样式
            area: ['360px', '150px'],
            btn:['确 定','取 消'],
            content: "<div class='agreelar'>确认拒绝预菜单</div>",//自定义内容样式 
            btn1:function(){
                $(".pre_tr").remove();
            }
        }); 
    })
	
});