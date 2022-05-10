const fliebenPlay = document.querySelector('#fliebenPlay');
const fliebenRev = document.querySelector('#fliebenRev');
const fliebenLoopHot = document.querySelector('#fliebenLoopHot');
const fliebenLoopCold = document.querySelector('#fliebenLoopCold');
const fliebenLoopHotRev = document.querySelector('#fliebenLoopHotRev');
const fliebenLoopColdRev = document.querySelector('#fliebenLoopColdRev');
const projectVideos = document.querySelector('#projectVideos');
const fpProject = document.querySelector('#fpProject');

const magmaNext = document.querySelector('#magmaNext');
const mouse = document.querySelector('#mouse');

fliebenPlay.pause();
fliebenRev.pause();
console.log(fliebenRev.currentTime);
console.log(fliebenPlay.currentTime);

new fullpage('#fpProject', {
    anchors: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],

    afterRender: function () {
        fullpage_api.setAllowScrolling(false);
        setTimeout(() => {
            console.log('6 sec delay');
            fullpage_api.setAllowScrolling(true);
        }, 6000);
    },
    afterLoad: function (origin, destination, direction) {
        var loadedSection = this;

        if (isNaN(document.querySelector('body.fp-viewing-0'))) {
            fliebenPlay.currentTime = 0;
            fliebenRev.currentTime = 8.067;
            //fliebenRev.style.opacity = 0;
            // fliebenLoopCold.style.opacity = 0;
            // fliebenLoopCold.pause();
            // fliebenLoopHot.style.opacity = 0;
            // fliebenLoopHot.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        } else if (isNaN(document.querySelector('body.fp-viewing-1'))) {
            fliebenPlay.currentTime = 2.167;
            fliebenRev.currentTime = 5.933;
            //fliebenRev.style.opacity = 0;
            // fliebenLoopCold.style.opacity = 0;
            // fliebenLoopCold.pause();
            // fliebenLoopHot.style.opacity = 0;
            // fliebenLoopHot.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        } else if (isNaN(document.querySelector('body.fp-viewing-2'))) {
            fliebenPlay.currentTime = 3.165;
            fliebenRev.currentTime = 4.933;
            //fliebenRev.style.opacity = 0;
            // fliebenLoopCold.style.opacity = 0;
            // fliebenLoopCold.pause();
            // fliebenLoopHot.style.opacity = 0;
            // fliebenLoopHot.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        } else if (isNaN(document.querySelector('body.fp-viewing-3'))) {
            fliebenPlay.currentTime = 4.433;
            fliebenRev.currentTime = 3.667;
            //fliebenRev.style.opacity = 0;
            // fliebenLoopHot.style.opacity = 1;
            // fliebenLoopHot.play();
            // fliebenLoopCold.style.opacity = 0;
            // fliebenLoopCold.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        } else if (isNaN(document.querySelector('body.fp-viewing-4'))) {
            fliebenPlay.currentTime = 6.5;
            fliebenRev.currentTime = 1.6;
            //fliebenRev.style.opacity = 0;
            // fliebenLoopCold.style.opacity = 1;
            // fliebenLoopCold.play();
            // fliebenLoopHot.style.opacity = 0;
            // fliebenLoopHot.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        } else {
            fliebenPlay.currentTime = 8.067;
            //fliebenRev.currentTime = 0;
            //fliebenRev.style.opacity = 0;
            //fliebenLoopCold.style.opacity = 0;
            // fliebenLoopCold.pause();
            // fliebenLoopHot.style.opacity = 0;
            // fliebenLoopHot.pause();
            // fliebenLoopColdRev.style.opacity = 0;
            // fliebenLoopColdRev.pause();
            // fliebenLoopHotRev.style.opacity = 0;
            // fliebenLoopHotRev.pause();
        }
    },


    onLeave: function (origin, destination) {
        let leavingSection = this;

        /*********** 0 ***********/
        /*  <<<  */
        if (origin.index == 1 && destination.index == 0) {
            fliebenRev.playbackRate = 1;
            fullpage_api.setScrollingSpeed(2500);
            mouse.style.opacity = .05;
            rev1();
        } else if (origin.index > 1 && destination.index == 0) {
            fliebenRev.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(2500);
            mouse.style.opacity = .05;
            rev1();
        } else if (origin.index > 2 && destination.index == 0) {
            fliebenRev.playbackRate = 2;
            fullpage_api.setScrollingSpeed(2500);
            mouse.style.opacity = .05;
            rev1();
        }

        /*********** 1 *******/
        /*  0 >>>  */
        if (origin.index == 0 && destination.index == 1) {
            fliebenPlay.playbackRate = 1;
            fullpage_api.setScrollingSpeed(2500);
            mouse.style.opacity = .05;
            play1();
        } else if (origin.index < 0 && destination.index == 1) {
            fliebenPlay.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(2500);
            mouse.style.opacity = .05;
            play1();
        } else if (origin.index < 1 && destination.index == 1) {
            fliebenPlay.playbackRate = 2;
            fullpage_api.setScrollingSpeed(2500);
            mouse.style.opacity = .05;
            play1();
        }

        /*  <<< 1  */
        if (origin.index == 2 && destination.index == 1) {
            fliebenRev.playbackRate = 1;
            fullpage_api.setScrollingSpeed(1200);
            mouse.style.opacity = .05;
            rev2();
        } else if (origin.index > 2 && destination.index == 1) {
            fliebenRev.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(1200);
            mouse.style.opacity = .05;
            rev2();
        } else if (origin.index > 3 && destination.index == 1) {
            fliebenRev.playbackRate = 2;
            fullpage_api.setScrollingSpeed(1200);
            mouse.style.opacity = .05;
            rev2();
        }

        /*********** 2 *******/
        /*  1 >>>  */
        if (origin.index <= 1 && destination.index == 2) {
            fliebenPlay.playbackRate = 1;
            fullpage_api.setScrollingSpeed(1200);
            mouse.style.opacity = .05;
            play2();
        } else if (origin.index <= 1 && destination.index == 2) {
            fliebenPlay.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(1200);
            mouse.style.opacity = .05;
            play2();
        } else if (origin.index <= 1 && destination.index == 2) {
            fliebenPlay.playbackRate = 2;
            fullpage_api.setScrollingSpeed(1200);
            mouse.style.opacity = .05;
            play2();
        }

        /*  <<< 3  */
        if (origin.index >= 3 && destination.index == 2) {
            fliebenRev.playbackRate = 1;
            fullpage_api.setScrollingSpeed(1600);
            mouse.style.opacity = .05;
            rev3();
        } else if (origin.index >= 3 && destination.index == 2) {
            fliebenRev.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(1600);
            mouse.style.opacity = .05;
            rev3();
        } else if (origin.index >= 3 && destination.index == 2) {
            fliebenRev.playbackRate = 2;
            fullpage_api.setScrollingSpeed(1600);
            mouse.style.opacity = .05;
            rev3();
        }

        /*********** 3 *******/
        /*  2 >>>  */
        if (origin.index <= 2 && destination.index == 3) {
            fliebenPlay.playbackRate = 1;
            fullpage_api.setScrollingSpeed(1600);
            mouse.style.opacity = .05;
            play3();
        } else if (origin.index <= 2 && destination.index == 3) {
            fliebenPlay.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(1600);
            mouse.style.opacity = .05;
            play3();
        } else if (origin.index <= 2 && destination.index == 3) {
            fliebenPlay.playbackRate = 2;
            fullpage_api.setScrollingSpeed(1600);
            mouse.style.opacity = .05;
            play3();
        }

        /*  <<< 4  */
        if (origin.index >= 4 && destination.index == 3) {
            fliebenRev.playbackRate = 1;
            fullpage_api.setScrollingSpeed(2600);
            mouse.style.opacity = .05;
            rev4();
        } else if (origin.index >= 4 && destination.index == 3) {
            fliebenRev.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(2600);
            mouse.style.opacity = .05;
            rev4();
        } else if (origin.index >= 4 && destination.index == 3) {
            fliebenRev.playbackRate = 2;
            fullpage_api.setScrollingSpeed(2600);
            mouse.style.opacity = .05;
            rev4();
        }

        /*********** 4 *******/
        /*  3 >>>  */
        if (origin.index <= 3 && destination.index == 4) {
            fliebenPlay.playbackRate = 1;
            fullpage_api.setScrollingSpeed(2600);
            mouse.style.opacity = .05;
            play4();
        } else if (origin.index <= 3 && destination.index == 4) {
            fliebenPlay.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(2600);
            mouse.style.opacity = .05;
            play4();
        } else if (origin.index <= 3 && destination.index == 4) {
            fliebenPlay.playbackRate = 2;
            fullpage_api.setScrollingSpeed(2600);
            mouse.style.opacity = .05;
            play4();
        }

        /*  <<< 5  */
        if (origin.index >= 5 && destination.index == 4) {
            fpProject.style.opacity = 0;
            fliebenRev.playbackRate = 1;
            fullpage_api.setScrollingSpeed(2400);
            mouse.style.opacity = .05;
            rev5();
        } else if (origin.index >= 5 && destination.index == 4) {
            fliebenRev.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(2400);
            mouse.style.opacity = .05;
            rev5();
        } else if (origin.index >= 5 && destination.index == 4) {
            fliebenRev.playbackRate = 2;
            fullpage_api.setScrollingSpeed(2400);
            mouse.style.opacity = .05;
            rev5();
        }

        /*********** 5 *******/
        /*  4 >>>  */
        if (origin.index <= 4 && destination.index == 5) {
            elementsProject.style.opacity = 1;
            fliebenPlay.playbackRate = 1;
            fullpage_api.setScrollingSpeed(2400);
            mouse.style.opacity = .05;
            play5();
        } else if (origin.index <= 4 && destination.index == 5) {
            elementsProject.style.opacity = 1;
            fliebenPlay.playbackRate = 1.5;
            fullpage_api.setScrollingSpeed(2400);
            mouse.style.opacity = .05;
            play5();
        } else if (origin.index <= 4 && destination.index == 5) {
            elementsProject.style.opacity = 1;
            fliebenPlay.playbackRate = 2;
            fullpage_api.setScrollingSpeed(2400);
            mouse.style.opacity = .05;
            play5();
        }

        /*  <<< 6  */
        if (origin.index >= 6 && destination.index == 5) {
            fullpage_api.setScrollingSpeed(700);
            elementsProject.style.opacity = 0;
            fliebenRev.style.opacity = 1;
            fliebenRev.currentTime = 0
            fliebenRev.pause();
            fliebenPlay.style.opacity = 0;
            setTimeout(() => {
                projectVideos.style.opacity = 1;
                setTimeout(() => {
                    fpProject.style.opacity = 0;
                }, 200);
            }, 700);

        }

        /*********** 6 *******/
        /*  5 >>>  */
        if (origin.index <= 5 && destination.index == 6) {
            fullpage_api.setScrollingSpeed(700);
            fliebenPlay.style.opacity = 0;
            fliebenRev.style.opacity = 0;
            mouse.style.opacity = .25;
            fpProject.style.opacity = 1;
            projectVideos.style.opacity = 0;
        }

        /*  <<< 7  */
        if (origin.index >= 7 && destination.index == 6) {
            fullpage_api.setScrollingSpeed(700);
            mouse.style.opacity = .25;
        }

        /*********** 7 *******/
        /*  6 >>>  */
        if (origin.index <= 6 && destination.index == 7) {
            fullpage_api.setScrollingSpeed(700);
            mouse.style.opacity = .25;
        }

        /*  <<< 8  */
        if (origin.index >= 8 && destination.index == 7) {
            fullpage_api.setScrollingSpeed(700);
            mouse.style.opacity = .25;
        }

        /*********** 8 *******/
        /*  7 >>>  */
        if (origin.index <= 7 && destination.index == 8) {
            fullpage_api.setScrollingSpeed(700);
            mouse.style.opacity = .25;
        }

        /*  <<< 9  */
        if (origin.index >= 9 && destination.index == 8) {
            fullpage_api.setScrollingSpeed(700);
            mouse.style.opacity = .25;
        }

        /*********** 9 *******/
        /*  8 >>>  */
        if (origin.index <= 8 && destination.index == 9) {
            fullpage_api.setScrollingSpeed(700);
        }

        /*  <<< 10  */
        if (origin.index >= 10 && destination.index == 9) {
            fullpage_api.setScrollingSpeed(700);
        }

        /*********** 10 *******/
        /*  9 >>>  */
        if (origin.index <= 9 && destination.index == 10) {
            fullpage_api.setScrollingSpeed(700);
            magmaNext.currentTime = 0;
        }

        /*********** 11 *******/
        /*  10 >>>  */
        if (origin.index <= 10 && destination.index == 11) {
            fullpage_api.setScrollingSpeed(100000000);
            fullpage_api.setAllowScrolling(false);
            setTimeout(() => {
                console.log('1 sec delay')
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