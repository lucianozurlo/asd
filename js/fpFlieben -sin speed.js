let fliebenPlay = document.getElementById("fliebenPlay");
let fliebenRev = document.getElementById("fliebenRev");
let fliebenEnd = document.getElementById("fliebenEnd");
let mouse = document.getElementById("mouse");

fliebenPlay.pause();
fliebenRev.pause();
fliebenPlay.currentTime = 0;
fliebenRev.currentTime = 8.067;
console.log(fliebenRev.currentTime);
console.log(fliebenPlay.currentTime);

fliebenEnd.style.opacity = 0;

new fullpage('#fpProject', {
    anchors: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],

    scrollOverflow: true,

    afterRender: function () {
        fullpage_api.setAllowScrolling(false);

        setTimeout(() => {
            console.log("6 sec delay");
            fullpage_api.setAllowScrolling(true);
        }, 6000);
    },
    afterLoad: function (origin, destination, direction) {
        if (origin.index == 4 && direction == 'down') {
            fliebenEnd.style.opacity = 1;
        }

    },

    onLeave: function (origin, destination, direction) {
        let leavingSection = this;

        /*********** 0 ***********/
        /* <<< 1 */
        if (origin.index >= 1 && destination.index == 0) {
            fullpage_api.setScrollingSpeed(2500);
            mouse.style.opacity = .05;

            function rev1() {
                fliebenRev.currentTime = 5.933;
                fliebenPlay.currentTime = 2.167;
                fliebenPlay.style.opacity = 0;
                fliebenRev.play();

                let timer = setInterval(function () {
                    if (fliebenRev.currentTime >= 8.067) {
                        fliebenRev.pause();
                        fliebenPlay.currentTime = 0;
                        console.log(fliebenRev.currentTime);
                        console.log(fliebenPlay.currentTime);
                        mouse.style.opacity = .25;
                        clearInterval(timer);
                    }
                }, 1);
            };
            rev1();
        }

        /*********** 1 *******/
        /*  0 >>>  */
        if (origin.index <= 0 && destination.index == 1) {
            fullpage_api.setScrollingSpeed(2500);
            mouse.style.opacity = .05;

            function play1() {
                fliebenRev.currentTime = 8.067;
                fliebenPlay.currentTime = 0;
                fliebenPlay.style.opacity = 1;
                fliebenPlay.play();

                let timer = setInterval(function () {
                    if (fliebenPlay.currentTime >= 2.167) {
                        fliebenPlay.pause();
                        fliebenRev.currentTime = 5.933;
                        console.log(fliebenRev.currentTime);
                        console.log(fliebenPlay.currentTime);
                        mouse.style.opacity = .25;
                        clearInterval(timer);
                    }
                }, 1);
            };
            play1();
        }

        /*  <<< 2  */
        if (origin.index >= 2 && destination.index == 1) {
            fullpage_api.setScrollingSpeed(1200);
            mouse.style.opacity = .05;

            function rev2() {
                fliebenRev.currentTime = 4.933;
                fliebenPlay.currentTime = 3.165;
                fliebenPlay.style.opacity = 0;
                fliebenRev.play();

                let timer = setInterval(function () {
                    if (fliebenRev.currentTime >= 5.933) {
                        fliebenRev.pause();
                        fliebenPlay.currentTime = 2.167;
                        console.log(fliebenRev.currentTime);
                        console.log(fliebenPlay.currentTime);
                        mouse.style.opacity = .25;
                        clearInterval(timer);
                    }
                }, 1);
            };
            rev2();
        }

        /*********** 2 *******/
        /*  1 >>>  */
        if (origin.index <= 1 && destination.index == 2) {
            fullpage_api.setScrollingSpeed(1200);
            mouse.style.opacity = .05;

            function play2() {
                fliebenRev.currentTime = 5.933;
                fliebenPlay.currentTime = 2.167;
                fliebenPlay.style.opacity = 1;
                fliebenPlay.play();

                let timer = setInterval(function () {
                    if (fliebenPlay.currentTime >= 3.165) {
                        fliebenPlay.pause();
                        fliebenLoopHot.play();
                        fliebenRev.currentTime = 4.933;
                        console.log(fliebenRev.currentTime);
                        console.log(fliebenPlay.currentTime);
                        fliebenPlay.style.opacity = 1;
                        mouse.style.opacity = .25;
                        clearInterval(timer);
                    }
                }, 1);
            };
            play2();
        }

        /*  <<< 3  */
        if (origin.index >= 3 && destination.index == 2) {
            fullpage_api.setScrollingSpeed(1600);
            mouse.style.opacity = .05;

            function rev3() {
                fliebenRev.currentTime = 3.667;
                fliebenPlay.currentTime = 4.433;
                fliebenPlay.style.opacity = 0;
                fliebenRev.play();

                let timer = setInterval(function () {
                    if (fliebenRev.currentTime >= 4.933) {
                        fliebenRev.pause();
                        fliebenPlay.currentTime = 3.167;
                        console.log(fliebenRev.currentTime);
                        console.log(fliebenPlay.currentTime);
                        mouse.style.opacity = .25;
                        clearInterval(timer);
                    }
                }, 1);
            };
            rev3();
        }

        /*********** 3 *******/
        /*  2 >>>  */
        if (origin.index <= 2 && destination.index == 3) {
            fullpage_api.setScrollingSpeed(1600);
            mouse.style.opacity = .05;

            function play3() {
                fliebenRev.currentTime = 4.933;
                fliebenPlay.currentTime = 3.165;
                fliebenPlay.style.opacity = 1;
                fliebenPlay.play();

                let timer = setInterval(function () {
                    if (fliebenPlay.currentTime >= 4.433) {
                        fliebenPlay.pause();
                        fliebenLoopHot.play();
                        fliebenLoopCold.play();
                        fliebenRev.currentTime = 3.667;
                        console.log(fliebenRev.currentTime);
                        console.log(fliebenPlay.currentTime);
                        mouse.style.opacity = .25;
                        clearInterval(timer);
                    }
                }, 1);
            };
            play3();
        }

        /*  <<< 4  */
        if (origin.index >= 4 && destination.index == 3) {
            fullpage_api.setScrollingSpeed(2600);
            mouse.style.opacity = .05;

            function rev4() {
                fliebenRev.currentTime = 1.6;
                fliebenPlay.currentTime = 6.5;
                fliebenPlay.style.opacity = 0;
                fliebenRev.play();

                let timer = setInterval(function () {
                    if (fliebenRev.currentTime >= 3.667) {
                        fliebenRev.pause();
                        fliebenPlay.currentTime = 4.433;
                        console.log(fliebenRev.currentTime);
                        console.log(fliebenPlay.currentTime);
                        mouse.style.opacity = .25;
                        clearInterval(timer);
                    }
                }, 1);

            };
            rev4();
        }


        /*********** 4 *******/
        /*  3 >>>  */
        if (origin.index <= 3 && destination.index == 4) {
            fullpage_api.setScrollingSpeed(2600);
            mouse.style.opacity = .05;

            function play4() {
                fliebenRev.currentTime = 3.667;
                fliebenPlay.currentTime = 4.433;
                fliebenPlay.style.opacity = 1;
                fliebenPlay.play();

                let timer = setInterval(function () {
                    if (fliebenPlay.currentTime >= 6.5) {
                        fliebenPlay.pause();
                        fliebenLoopCold.play();
                        fliebenRev.currentTime = 1.6;
                        console.log(fliebenRev.currentTime);
                        console.log(fliebenPlay.currentTime);
                        mouse.style.opacity = .25;
                        clearInterval(timer);
                    }
                }, 1);
            };
            play4();
        }

        /*  <<< 5  */
        if (origin.index >= 5 && destination.index == 4) {
            fullpage_api.setScrollingSpeed(2400);
            document.getElementById('fliebenEnd').style.opacity = 0;
            mouse.style.opacity = .05;

            function rev5() {
                fliebenRev.currentTime = 0;
                fliebenPlay.currentTime = 8.067;
                fliebenPlay.style.opacity = 0;
                fliebenRev.play();

                let timer = setInterval(function () {
                    if (fliebenRev.currentTime >= 1.6) {
                        fliebenRev.pause();
                        fliebenPlay.currentTime = 6.5;
                        console.log(fliebenRev.currentTime);
                        console.log(fliebenPlay.currentTime);
                        mouse.style.opacity = .25;
                        clearInterval(timer);
                    }
                }, 1);
            };
            rev5();
        }

        /*********** 5 *******/
        /*  4 >>>  */
        if (origin.index <= 4 && destination.index == 5) {
            fullpage_api.setScrollingSpeed(2400);
            mouse.style.opacity = .05;

            function play5() {
                fliebenRev.currentTime = 1.6;
                fliebenPlay.currentTime = 6.5;
                fliebenPlay.style.opacity = 1;
                fliebenPlay.play();

                let timer = setInterval(function () {
                    if (fliebenPlay.currentTime >= 8.067) {
                        fliebenPlay.pause();
                        fliebenRev.currentTime = 0;
                        console.log(fliebenRev.currentTime);
                        console.log(fliebenPlay.currentTime);
                        mouse.style.opacity = .25;
                        clearInterval(timer);
                    }
                }, 1);
            };
            play5();
        }

        /*  <<< 6  */
        if (origin.index >= 6 && destination.index == 5) {
            fullpage_api.setScrollingSpeed(1000);
            projectVideos.style.opacity = 0;
            elementsProject.style.opacity = 0;
            setTimeout(() => {
                console.log("4 sec delay")
                projectVideos.style.opacity = 1;
                elementsProject.style.opacity = 1;
            }, 1000);
        }


        /*********** 6 *******/
        /*  5 >>>  */
        if (origin.index <= 5 && destination.index == 6) {
            fullpage_api.setScrollingSpeed(1000);
            fliebenPlay.currentTime = 8.067;
            fliebenRev.currentTime = 0;
            mouse.style.opacity = .25;

            fullpage_api.setAllowScrolling(false);
            setTimeout(() => {
                console.log("4 sec delay")
                fullpage_api.setAllowScrolling(true);
                clearInterval(timer);
            }, 4000);
        }

        /*  <<< 7  */
        if (origin.index >= 7 && destination.index == 6) {
            fullpage_api.setScrollingSpeed(1000);
            fullpage_api.setAllowScrolling(false);
            setTimeout(() => {
                console.log("4 sec delay")
                fullpage_api.setAllowScrolling(true);
            }, 4000);
        }

        /*********** 7 *******/
        /*  6 >>>  */
        if (origin.index <= 6 && destination.index == 7) {
            fullpage_api.setScrollingSpeed(1000);
        }

        /*  <<< 8  */
        if (origin.index >= 8 && destination.index == 7) {
            fullpage_api.setScrollingSpeed(700);
        }

        /*********** 8 *******/
        /*  7 >>>  */
        if (origin.index <= 7 && destination.index == 8) {
            fullpage_api.setScrollingSpeed(700);
            magmaNext.currentTime = 0;
        }


        /*********** 9 *******/
        /*  8 >>>  */
        if (origin.index <= 8 && destination.index == 9) {
            fullpage_api.setScrollingSpeed(100000000);
            fullpage_api.setAllowScrolling(false);
            setTimeout(() => {
                console.log("1 sec delay")
                window.location.href = 'flieben.html';
                mouse.style.opacity = .25;
                clearInterval(timer);
            }, 1000);
        }
    },

    parallax: true,
    parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
    }
});