$(document).ready(function(){
	
   
    //发票号码，供应商输入框js
    var $sindex=0,
        $li = $(".manage_addul").children("li"),
        $cont = $(".capital_cont").children("table"),
        $rcmoney = $(".rcmoney"),
        $b2bp = $(".b2bp"),
        $b2bpos = $(".b2bpos"),
        $pgbtn = $(".pgbtn"),
        $cpt_code = $(".cpt_code"),
        $span = $pgbtn.next("span"),
        $b = $span.children("b"),
        timer,
        numpreg = /^[1-9]\d*(\.\d{1,2})?$/,
		moneyreg = /^((\d{1,3}(,\d{3})*)|(\d+))(\.\d{1,2})?$/,
        $wt_note_tit = $(".wt_note_tit"),
        $wt_note_cont = $(".wt_note_cont");

    $li.click(function(){
        $sindex = $li.index(this);
        $(this).addClass("add_speli").siblings("li").removeClass("add_speli");
        $cont.eq($sindex).show().siblings("table").hide();
    });  
    $wt_note_tit.hover(function(){
        $wt_note_cont.eq($sindex).show();
    },function(){
        $wt_note_cont.hide();
    });
    $rcmoney.focus(function(){
        focusInput($(this),$(this).next());
		var aa = $(this).val();
		$(this).val(aa.replace(/,/g,""));
    });
    $rcmoney.next().click(function(){
        clickText($rcmoney,$(this));
    });
    $rcmoney.blur(function(){
        blurInput($(this),$(this).next());
        if(!numpreg.test($(this).val())){
            WrongColor($b2bp,$(this));
            $b2bp.html("输入正确的金额");
        }else{
			var str = $(this).val();
			if(str.indexOf(".")>-1){
				arr = str.split(".");
				newstr = toThousands(arr[0])+"."+arr[1];
				$(this).val(newstr);
				
			}else{
				newstr = toThousands(str)+".00";
				$(this).val(newstr);
			}
			
			
			
            RightColor($b2bp,$(this));
            $b2bp.html("");
        }
    });
    //end 发票号码，供应商输入框js
    
    $pgbtn.click(function(){
        var i = 120;
        clearInterval(timer);
        $(this).addClass("notallowed").attr("disabled","disabled");
        $cpt_code.show();
        $span.show();
        timer = setInterval(function(){
            if(i>1){
                i--;
                $b.html(i);
            }else{
                $span.hide();$b.html(120);
                $pgbtn.removeClass("notallowed").removeAttr("disabled");
            }   
        },1000);
    });
})
$(".cpt_cbtner").click(function(){
    layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        area: ['480px', '230px'],
        shift: 2,
        content: $(".comments_cont")
    })
}); 
$(".ed_btn").click(function(){
    layer.closeAll();
})
$(".ing_rebtn").click(function(){
    layer.closeAll();
})
function toThousands(num) {
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
}