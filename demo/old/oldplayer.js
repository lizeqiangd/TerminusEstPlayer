/**
 * Created by lizeq on 7/29/2016.
 */
var player_id = 'TerminusEstPlayer_123123';
var player_selector = '#' + player_id + ' ';
var video_content = $(player_selector + '.video_content')[0];
// var auto_hide_controller_timer: number=0;
// let auto_hide_controller_delay: number = 3000;
var contoller_display_state = 2;
var screenfull;
function onStageResize() {
    $(player_selector).height($(player_selector).width() / 16 * 9);
}
function addUIListener() {
    video_content.ondurationchange = updateProgressBar;
    video_content.ontimeupdate = updateProgressBar;
    video_content.onloadeddata = updateBufferBar;
    $(player_selector + ' .play_button').click(() => {
        onPlayButtonClick();
    });
    $(player_selector + ' .play_icon').click(() => {
        onPlayButtonClick();
    });
    $(player_selector + '.progress_bar').mousedown((event) => {
        var deltaX = event.pageX - $(player_selector + '.progress_bar').offset().left;
        var bar_width = $(player_selector + '.progress_bar').width();
        video_content.currentTime = Math.floor(deltaX / bar_width * video_content.duration);
    });
    $(player_selector + '.VideoMouseMask').click(() => {
        onPlayButtonClick();
    });
    video_content.oncanplay = () => {
        displayBufferIcon(false);
    };
    video_content.onpause = () => {
        displayPlayIcon(true);
        $(player_selector + ' .play_button').removeClass('play_state0');
        $(player_selector + ' .play_button').addClass('play_state1');
    };
    video_content.onplay = () => {
        displayPlayIcon(false);
        $(player_selector + ' .play_button').removeClass('play_state1');
        $(player_selector + ' .play_button').addClass('play_state0');
    };
    video_content.onseeking = () => {
        displayBufferIcon(true);
    };
    $(player_selector + ' .fullscreen_button').click(() => {
        if (screenfull.enabled) {
            if (!screenfull.isFullscreen) {
                screenfull.request($(player_selector)[0]);
            }
            else {
                screenfull.exit();
            }
        }
    });
    $(player_selector).mousemove((event) => {
        var deltaY = event.pageY - $(player_selector).offset().top;
        var judge = deltaY / $(player_selector).height();
        if (judge > 0.6) {
            displayController(true);
        }
        else {
            displayController(false);
        }
    });
    $(player_selector).mouseout((event) => {
        var deltaY = event.pageY - $(player_selector).offset().top;
        var deltaX = event.pageX - $(player_selector).offset().left;
        if (deltaY >= $(player_selector).height() || deltaX >= $(player_selector).width() || deltaX <= 0 || deltaY <= 0) {
            contoller_display_state = 2;
            displayController(false);
        }
    });
    $(player_selector);
    //
    // video_content.onemptied = ()=> {
    //     console.log('onemptied')
    // };
    // video_content.onended = ()=> {
    //     console.log('onended')
    // };
    // video_content.onerror = ()=> {
    //     console.log('onerror')
    // };
    // video_content.onloadstart = ()=> {
    //     console.log('onloadstart')
    // };
    // video_content.onplaying = ()=> {
    //     console.log('onplaying')
    // };
    // video_content.onseeked = ()=> {
    //     console.log('onseeked')
    // };
    $(player_selector + '.resolution_button_item').click(() => {
    });
    video_content.onvolumechange = () => {
        console.log('onvolumechange');
    };
    $(player_selector + ' .volume_button').click(function () {
        alert('test');
    });
    $(player_selector + ' .resolution_button').click(function () {
        alert('test');
    });
    $(player_selector + ' .comment_button').click(function () {
        alert('test');
    });
}
function displayController(value) {
    if (value) {
        if (contoller_display_state == 4) {
            contoller_display_state = 1;
            $(player_selector + '.controller').stop();
            $(player_selector + '.controller').animate({
                bottom: "0"
            }, 400, 'linear', () => {
                contoller_display_state = 2;
                return;
            });
        }
    }
    else {
        if (contoller_display_state == 2) {
            contoller_display_state = 3;
            $(player_selector + '.controller').stop();
            $(player_selector + '.controller').animate({
                bottom: "-65px"
            }, 400, 'linear', () => {
                contoller_display_state = 4;
            });
        }
    }
}
function displayPlayIcon(value) {
    if (value) {
        $(player_selector + '.play_icon').show();
    }
    else {
        $(player_selector + '.play_icon').fadeOut();
    }
}
function displayBufferIcon(value) {
    if (value) {
        $(player_selector + '.buffer_icon').show();
    }
    else {
        $(player_selector + '.buffer_icon').hide();
    }
}
function onPlayButtonClick() {
    if ($(player_selector + ' .play_button').hasClass('play_state1')) {
        play();
    }
    else {
        pause();
    }
}
function updateProgressBar() {
    var play_precent = video_content.currentTime / video_content.duration * 100;
    $(player_selector + '.play_bar').css('width', play_precent + '%');
    $(player_selector + '.play_time').html(`${formatSecond(video_content.currentTime)} / ${formatSecond(video_content.duration)}`);
}
function formatSecond(seconds) {
    var haveplayminite = Math.floor(seconds / 60);
    var haveplaysecond = Math.floor(Math.floor(seconds) % 60);
    var haveplayminite_s = haveplayminite.toString();
    var haveplaysecond_s = haveplaysecond.toString();
    if (haveplayminite < 10) {
        haveplayminite_s = "0" + haveplayminite_s;
    }
    if (haveplaysecond < 10) {
        haveplaysecond_s = "0" + haveplaysecond_s;
    }
    return haveplayminite_s + ":" + haveplaysecond_s;
}
function play() {
    video_content.play();
}
function pause() {
    video_content.pause();
}
function volume(value) {
    if (value > 1)
        value = 1;
    if (value < 0)
        value = 0;
    video_content.volume = value;
}
function updateBufferBar() {
    $(player_selector + '.buffer_bar').remove();
    var video_duration = video_content.duration;
    for (var i = 0; i < video_content.seekable.length; i++) {
        var left = video_content.seekable.start(i) / video_duration * 100;
        var width = (video_content.seekable.end(i) - video_content.seekable.start(i)) / video_duration * 100;
        $(player_selector + '.progress_bar').prepend(`<div class="buffer_bar" style="left:${left}%; width:${width}%;"></div>`);
    }
}
$(document).ready(function () {
    addUIListener();
    displayBufferIcon(true);
    volume(-1);
    // pause()
    // var updateBufferTimer=setInterval(updateBufferBar,1000);
    play();
    onStageResize();
    $(window).resize(onStageResize);
    //        getVideoURL(function (data) {
    //            if (data) {
    //                console.log(data);
    //                $('#video_content').attr('src', data);
    //            }else{
    //
    //            }
    //        }, '6df29b2417');
});
// function getVideoURL(callback, video_unique) {
//     $.get({
//         url: 'http://zealer.lizeqiangd.com:1460/api/video/VideoAPI.php?api=LeCloudVideo&video_unique=' + video_unique,
//         success: function (data) {
//             var video_data = JSON.parse(data);
//             if (video_data['data'] && video_data['data']['video_list']) {
//                 video_data = video_data['data']['video_list'];
//                 for (var value in video_data) {
//                     //console.log(video_data[value]);
//                     if (video_data[value]['definition'] == '高清') {
//                         callback(video_data[value]['main_url']);
//                         return;
//                     }
//                 }
//             } else {
//                 callback(false);
//                 return;
//             }
//         }
//     });
// }
//# sourceMappingURL=oldplayer.js.map