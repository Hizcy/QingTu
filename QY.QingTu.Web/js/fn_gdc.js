$(document).ready(function(){

    $(".order_detail_flist tr:even").css({"background":"#f9f9fa","border-top":"1px solid #e1e6eb"});




    $(".fk_pfedit").click(function(){
        $(this).hide();
        $(".fn_gdinput").removeAttr("readonly");
        $(".fn_gdslt").removeAttr("disabled");
        $(".fk_pfsave,.fk_pfcanel").show();
    });
    $(".fk_pfsave").click(function(){
        $(".fk_pfedit").show();
        $(".fk_pfsave,.fk_pfcanel").hide();
        $(".fn_gdinput").attr("readonly","readonly");
        $(".fn_gdslt").attr("disabled","disabled");
    });
    $(".fk_pfcanel").click(function(){
        $(".fk_pfedit").show();
        $(".fk_pfsave,.fk_pfcanel").hide();
        $(".fn_gdinput").attr("readonly","readonly");
        $(".fn_gdslt").attr("disabled","disabled");
    });


    $(".fn_gdinput").blur(function(){
        if($(this).val() == ""){
            $(this).addClass("b_red");
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
    
    
    
})