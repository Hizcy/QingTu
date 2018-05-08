$(document).ready(function(){
	var $photo_bg = $(".photo_bg"),
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

});