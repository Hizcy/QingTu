$(document).ready(function(){
	//渠道上游验证
	var $channel_text = $(".channel_text"),
    	channel_text;
		
		$(".add_qd2").click(function(){
			channel_text = checkRec($channel_text,"请输入渠道上游账号");
			
			if(channel_text){
				layer.closeAll();
				return true;
			}else{
				return false;
			}

		})

	 /********焦点获得时**********/
    $channel_text.focus(function(){   //姓名
        OnFocus($(this));
    });
    

    /********焦点失去时**********/
    $channel_text.blur(function(){    //姓名
        channel_text = checkRec($channel_text,"请输入渠道上游账号");
    });
    
    
    
    //封装可用,obj需要判断的对象，con显示什么样的内容
    function checkRec(obj,con){
        var $val = obj.val();
        var $right= obj.next();
        var $wrong = obj.parent().parent().next().children().find(".note_w");
        $val = Trim($val,"g");
        if ($val == "") {
            WrongColor($wrong,$right,obj);
            $wrong.html(con);
            return false;
        }else{
            RightColor($wrong,$right,obj);
            $wrong.html("&nbsp;");
            return true;
        }    
    }
    //封装所有正则可用,obj需要判断的对象，con显示什么样的内容，preg正则表达式
    function checkRec2(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.next();
        var $right = obj.next();
        $val = Trim($val,"g");
        if ($val == "") {
            WrongColor($wrong,$right,obj);
            $wrong.html(con1);
            return false;
        } else if(!preg.test($val)){
            WrongColor($wrong,$right,obj);
            $wrong.html(con2);
            return false;
        }else{
            RightColor($wrong,$right,obj);
            $wrong.html("&nbsp;");
            return true;
        }    
    }

	
    var $inpbg_l=$('.inpbg_l'),
	    $add_qd2=$('.add_qd2'),
		$add_qx2=$('.add_qx2');
	    $inpbg_l.click(function(){
	        layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 0,
		            skin: 'layerBtn2',
		            area: ['400px', '150px'],
		            shift: 2,
	                content: $(".channel")
	        });
	    });
		$add_qx2.click(function(){
			layer.closeAll();
			})
			function RightColor(obj,objs,objn){
        obj.removeClass("note_wrong");
        objs.addClass("note_right");
        objn.removeClass("b_blue").removeClass("b_red");
    }
    function WrongColor(obj,objs,objn){
        obj.addClass("note_wrong");
        objs.removeClass("note_right");
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
	
	//移除按钮弹窗
	$(".span_red_btn2").click(function(){
                layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn2',
		            area: ['380px', '150px'],
		            btn: ['确 定','取消'],
		            content: "<div class='layer_war'><p>&nbsp;&nbsp;&nbsp;确认移除该账户？</p><i>移除后，该账号供应链配额将清零</i></div>"
		        })
            })
			
    //增加额度按钮弹窗
	$(".span_red_btn").click(function(){
                layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn2',
		            area: ['380px', ''],
		            btn: ['确 定','取消'],
		            content: $(".sum_up"),
		            yes: function(){
		            	if($(".sum_sel2").val() == "请选择"){
		            		$(".sum_sel2").parent().parent().next().children(".sel_prompt").html("请选择有效的组织");
		            		$(".sum_sel2").parent().parent().next().children(".sel_prompt").addClass("note_w note_wrong");
		            	}
		            }
		        })
            })
			
					
    //减少额度按钮弹窗
	$(".span_green_btn").click(function(){
                layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn2',
		            area: ['380px', ''],
		            btn: ['确 定','取消'],
		            content: $(".sum_down"),
		            yes: function(){
		            	if($(".sum_sel").val() == "请选择"){
		            		$(".sum_sel").parent().parent().next().children(".sel_prompt").html("请选择有效的组织");
		            		$(".sum_sel").parent().parent().next().children(".sel_prompt").addClass("note_w note_wrong");
		            	}
		            }
		        })
            })
	//额度默认字体
	var $sum_up_text = $(".sum_up_text"),
		$sum_pla =  $(".sum_pla");
		$sum_pla.click(function(){
			$(this).prev().focus()
			})
		$sum_up_text.focus(function(){
			$(this).next().hide();
			})
		$sum_up_text.blur(function(){
			if($(this).val() == ""){
				$(this).next().show();
			}
		})
	})

	//鼠标移入业务配额出现每个指定组织的可用配额详情
	$(".release_span").mousemove(function(){
		$(this).children(".details").show();
	})
	$(".release_span").mouseleave(function(){
		$(this).children(".details").hide();
	})
	
	$(".ordermg_td").mousemove(function(){
		$(this).children(".details2").show();
	})
	$(".ordermg_td").mouseleave(function(){
		$(this).children(".details2").hide();
	})
