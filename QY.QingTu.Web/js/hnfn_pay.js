$(document).ready(function(){

    var $supplier = $(".supplier").children("input"),$ocode = $(".ocode").children("input");




 // $(".span_blue_btnlg").click(function(){
 //     layer.confirm('<p style="font:14px/26px Microsoft yahei;color:#6d869c;width:330px;padding:15px 0;">你本次向北京十二有限公司付款订单金额为<b style="padding:0 5px;color:#f40;word-break:keep-all;">1176</b>元,是否确认付款？</p>', {
 //          title: false,
 //          closeBtn: 0,
 //          skin: 'layerBorder',   //自定义弹窗样式
 //          time: 0, //不自动关闭
 //          btn: ['确定', '取消'],
 //          yes: function(index){
 //             layer.close(index);
 //             $that.parent().parent().remove();
 //         }
 //     });
 // })


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

    $ocode.focus(function(){
        $(this).addClass("input_on");
        $ocode.next().hide();
    });
    $ocode.next().click(function(){
        $ocode.addClass("input_on").focus();
        $(this).hide();    
    });
    $ocode.blur(function(){
        $(this).removeClass("input_on");
        if($(this).val() == ""){
            $ocode.next().show();
        }
    });
    //操作时间
    layui.use('laydate', function(){
      var laydate = layui.laydate;
      
      var start = {
        min: '1900-01-01 00:00:00', //最小日期
        max: '2099-12-31 23:59:59', //最大日期
        istoday: false,
        choose: function(datas){
          end.min = datas; //开始日选好后，重置结束日的最小日期
          end.start = datas //将结束日的初始值设定为开始日
        }
      };
      
      var end = {
        min: '1900-01-01 00:00:00',
        max: '2099-06-16 23:59:59',
        istoday: false,
        choose: function(datas){
          start.max = datas; //结束日选好后，重置开始日的最大日期
        }
      };
      
      document.getElementById('LAY_demorange_s').onclick = function(){
        start.elem = this;
        laydate(start);
      }
      document.getElementById('LAY_demorange_e').onclick = function(){
        end.elem = this
        laydate(end);
      }
  
    });
    //end 操作时间
    
    //手续费提示
    $wt_note_tit = $(".wt_note_tit"),
    $wt_note_cont = $(".wt_note_cont");
    $wt_note_tit.hover(function(){
        $wt_note_cont.show();
    },function(){
        $wt_note_cont.hide();
    });
    //end 手续费提示
})