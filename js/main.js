"use strict";

var player;

function videoHTML(link) {
    return '<video \n' +
        'id="video-js" \n' +
        'class="video-js vjs-default-skin vjs-big-play-centered" \n' +
        'controls \n' +
        'autoplay \n' +
        'width="600" \n' +
        'height="300" \n' +
        'preload="auto" \n' +
        "data-setup='" + '{"techorder" : ["flash","html5] }' + "'>\n" +
        '<source src="' + link + '" type="rtmp/flv"> \n' +
        '</video>';
}

$("div.video-thumbnail").click(function () {
    $("div.video-thumbnail").css("background-color", "white");
    $(this).css("background-color", "red");

    var videoNumber = $(this).data("video");
    var videoLink ="rtmp://media18.cloudcam.vn:1935/cloud-camera/IDhi776288061";
    if(videoNumber == 1) {
        videoLink = "rtmp://media18.cloudcam.vn:1935/cloud-camera/IDhi776288061";
    } else {
        videoLink = "rtmp://media18.cloudcam.vn:1935/cloud-camera/IDhi776287819";
    }

    player.dispose();

    var html = videoHTML(videoLink);
    console.log(html);

    $('div.video-background').html(html);

    player = videojs('#video-js');
    window.setTimeout('player.play()', 1500);

});

$(document).ready(function () {
    $('div.video-background').html(videoHTML("rtmp://media18.cloudcam.vn:1935/cloud-camera/IDhi776288061"));
    player = videojs('#video-js');
});
