$(document).ready(function(){

    var $supplier = $(".supplier").children("input"),$btn = $(".span_blue_btnlg");



    $btn.click(function(){
        layer.confirm('<p class="withdrawal_note">你确定要向银行卡 <a>2131232545561111</a> <br />付款 <span>￥971,223.00</span> ？</p>', {
            title: false,
            type:1,
            closeBtn: 0,
            skin: 'layerBorder',   //自定义弹窗样式
            time: 0, //不自动关闭
            area: ['400px', '160px'],
            btn: ['确 定', '取 消'],
            yes: function(index){
                layer.close(index);
            }
        });
    });


    $(".order_detail_flist tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});
    $supplier.focus(function(){
        $(this).addClass("input_on");
        $supplier.next().hide();
    });
    $supplier.next().click(function(){
        $supplier.addClass("input_on").focus();
        $(this).hide();    
    });
    $supplier.blur(function(){
        $(this).removeClass("input_on");
        if($(this).val() == ""){
            $supplier.next().show();
        }
    });


})