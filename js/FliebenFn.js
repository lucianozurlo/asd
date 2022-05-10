function play1() {
    fliebenPlay.style.opacity = 1;
    fliebenRev.style.opacity = 0;
    fliebenPlay.play();

    let timer = setInterval(function () {
        if (fliebenPlay.currentTime >= 2.167) {
            fliebenPlay.pause();
            fliebenRev.currentTime = 5.933;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
        }
    }, 1);
};
function play2() {
    fliebenPlay.style.opacity = 1;
    fliebenRev.style.opacity = 0;
    fliebenPlay.play();

    let timer = setInterval(function () {
        if (fliebenPlay.currentTime >= 3.165) {
            fliebenLoopHot.play();
            fliebenPlay.pause();
            fliebenRev.currentTime = 4.933;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            fliebenPlay.style.opacity = 1;
            mouse.style.opacity = .25;
            clearInterval(timer);
        }
    }, 1);
};
function play3() {
    fliebenPlay.style.opacity = 1;
    fliebenRev.style.opacity = 0;
    fliebenPlay.play();

    let timer = setInterval(function () {
        if (fliebenPlay.currentTime >= 4.433) {
            fliebenLoopHot.play();
            fliebenPlay.pause();
            fliebenLoopHotRev.style.opacity = 0;
            fliebenLoopHot.style.opacity = 1;
            fliebenRev.currentTime = 3.667;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
        }
    }, 1);
};
function play4() {
    fliebenPlay.style.opacity = 1;
    fliebenRev.style.opacity = 0;
    fliebenLoopHot.style.opacity = 0;
    fliebenLoopHotRev.style.opacity = 0;
    fliebenLoopHot.pause();
    fliebenPlay.play();

    let timer = setInterval(function () {
        if (fliebenPlay.currentTime >= 6.5) {
            fliebenLoopCold.play();
            fliebenPlay.pause();
            fliebenLoopColdRev.style.opacity = 0;
            fliebenLoopCold.style.opacity = 1;
            fliebenRev.currentTime = 1.6;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
        }
    }, 1);
};
function play5() {
    fliebenPlay.style.opacity = 1;
    fliebenRev.style.opacity = 0;
    fliebenLoopCold.style.opacity = 0;
    fliebenLoopColdRev.style.opacity = 0;
    fliebenLoopCold.pause();
    fliebenPlay.play();

    let timer = setInterval(function () {
        if (fliebenPlay.currentTime >= 8.067) {
            fliebenPlay.pause();
            fliebenRev.currentTime = 0;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            setTimeout(() => {
                fpProject.style.opacity = 1;
            }, 250);

            clearInterval(timer);
        }
    }, 1);
};

function rev1() {
    //fliebenRev.currentTime = 5.933;
    fliebenRev.style.opacity = 1;
    fliebenPlay.style.opacity = 0;
    fliebenRev.play();

    let timer = setInterval(function () {
        if (fliebenRev.currentTime >= 8.067) {
            fliebenRev.pause();
            fliebenPlay.currentTime = 0;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
        }
    }, 1);
};
function rev2() {
    //fliebenRev.currentTime = 4.933;
    fliebenRev.style.opacity = 1;
    fliebenPlay.style.opacity = 0;
    fliebenRev.play();

    let timer = setInterval(function () {
        if (fliebenRev.currentTime >= 5.933) {
            fliebenRev.pause();
            fliebenPlay.currentTime = 2.167;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
        }
    }, 1);
};
function rev3() {
    //fliebenRev.currentTime = 3.667;
    fliebenLoopHotRev.style.opacity = 0;
    fliebenLoopHotRev.pause();
    fliebenRev.style.opacity = 1;
    fliebenPlay.style.opacity = 0;
    fliebenRev.play();

    let timer = setInterval(function () {
        if (fliebenRev.currentTime >= 4.933) {
            fliebenRev.pause();
            fliebenPlay.currentTime = 3.167;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
        }
    }, 1);
};
function rev4() {
    //fliebenRev.currentTime = 1.6;
    fliebenLoopColdRev.style.opacity = 0;
    fliebenLoopColdRev.pause();
    fliebenRev.style.opacity = 1;
    fliebenPlay.style.opacity = 0;
    fliebenRev.play();

    let timer = setInterval(function () {
        if (fliebenRev.currentTime >= 3.667) {
            fliebenRev.pause();
            fliebenLoopHotRev.play();
            fliebenLoopHotRev.style.opacity = 1;
            fliebenPlay.currentTime = 4.433;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
        }
    }, 1);

};
function rev5() {
    //fliebenRev.currentTime = 0;
    projectVideos.style.opacity = 1;
    fliebenPlay.style.opacity = 0;
    fliebenRev.style.opacity = 1;
    fliebenPlay.style.opacity = 0;
    fliebenRev.play();

    let timer = setInterval(function () {
        if (fliebenRev.currentTime >= 1.6) {
            fliebenRev.pause();
            fliebenLoopCold.style.opacity = 0;
            fliebenLoopColdRev.play();
            fliebenLoopColdRev.style.opacity = 1;
            fliebenPlay.currentTime = 6.5;
            console.log(`fliebenPlay: ${fliebenPlay.currentTime}`);
            console.log(`fliebenRev: ${fliebenRev.currentTime}`);
            mouse.style.opacity = .25;
            clearInterval(timer);
        }
    }, 1);
};
