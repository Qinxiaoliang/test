window.onload = function () {
    var bannerList= document.querySelector('.bannerList');
    var banner = document.querySelector('.banner');
    var listWarp = document.querySelector('.listWarp');
    var pics = document.querySelectorAll('.listWarp li');
    var liw = css(pics[0],"width");

    var pre = document.querySelector('#pre a');
    var next = document.querySelector('#next a');
    var now = 0;
    css(listWarp,"width",pics.length*liw);
    pre.onclick = function () {
        if(now == 0){
            now = pics.length-1;
            css(listWarp,"left",-now*liw);
        }
        now--;

        startMove({
            el:listWarp,
            type: "easeOut",
            time: 500,
            target: {
                left: -now*liw
            }
        });

    }
    next.onclick = function(){
        //给最后再复制一个第0张,当用户切换到第二个第0张(也就是最后一张)，瞬间切换会第一个0张
        if(now >= pics.length-1){
            now = 0;
            css(listWarp,"left",0);
        }
        now++;

        startMove({
            el:listWarp,
            type: "easeOut",
            time: 500,
            target: {
                left: -now*liw
            }
        });
    };
    autoPlay();
    function autoPlay(){
         timer = setInterval(next.onclick,2000);
    }
    banner.onmouseover = function(){
        clearInterval(timer);
    };
    banner.onmouseout = autoPlay;


};






