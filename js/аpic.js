function tts_toggle_play() {
    var playIcon    = 'fa-volume-up'
    var pauseIcon   = 'fa-pause'
    var speaker     = $('#speaker')[0];
    var speakerIcon = $('#speaker-icon');

    var playing = speakerIcon.hasClass( pauseIcon );
    if (playing) {
        speaker.pause();
        speakerIcon.removeClass(pauseIcon).addClass(playIcon);
    } else {
        speaker.play();
        speakerIcon.removeClass(playIcon).addClass(pauseIcon);
    }
}

