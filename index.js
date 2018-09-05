$(function() {
	var x,y;
	var index = 0;
	var screenSizeWidth = $('body').width();
    var screenSizeHeight = $('body').height();
    //计算波纹元素一半的距离，用于定位
    var half_distance = (screenSizeWidth > screenSizeHeight ? screenSizeHeight / 2 : screenSizeWidth / 2) * 0.4;
	$(document).on("click", function(e) {
        x = e.pageX;
        y = e.pageY;
        waveMove(x, y, index++);
    });


    //注入元素
    function waveMove(x, y, z) {

    	$('.container').append(`<div class="content index${z}" style="
    		top:${y - half_distance}px; left:${x - half_distance}px"
    		>
				<div class="wave wave-1"></div>
				<div class="wave wave-2"></div>
				<div class="wave wave-3"></div>
				<div class="wave wave-4"></div>
			</div>`);

    	//移除元素
		setTimeout(function() {
			$(`.index${z}`).remove();
		}, 2000);
    }
});