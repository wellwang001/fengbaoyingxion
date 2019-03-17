$(function () {

        $(".video-box>ul>li:nth-child(1)").stop().animate({
            marginTop:"-180px"
        },400,function () {
            $(".video-box>ul>li:nth-child(2)").stop().animate({
                marginTop:"-180px"
            },400,function () {
                $(".video-box>ul>li:nth-child(3)").stop().animate({
                    marginTop:"-180px"
                },400);
            });
        });


});