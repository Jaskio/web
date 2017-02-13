class ButtonAudio {
    limitPlayback(audio) {
        audio.play();
        if (audio.currentTime > 0.1) {
            audio.pause;
            audio.currentTime = 0
        }
    }
}
