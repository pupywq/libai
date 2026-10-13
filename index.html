var started = false;
function startMusic() {
    if (started) return;
    started = true;
    audio.muted = false;
    audio.play().catch(function () {});
    document.removeEventListener('touchstart', startMusic);
    document.removeEventListener('click', startMusic);
}

// 如果之前已经点过播放，这次自动接着播
if (localStorage.getItem('bgm_playing') === '1') {
    started = true;
    audio.play().catch(function () {});
}

document.addEventListener('touchstart', startMusic);
document.addEventListener('click', startMusic);

window.addEventListener('beforeunload', function () {
    localStorage.setItem('bgm_time', audio.currentTime);
    localStorage.setItem('bgm_playing', started ? '1' : '0');
});
