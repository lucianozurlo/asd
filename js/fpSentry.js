const fliebenNext = document.querySelector('#fliebenNext');

new fullpage('#fpProject', {
    anchors: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],

    parallax: true,
    parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
    },

    onLeave: function (origin, destination) {
        let leavingSection = this;
        /*********** 15 *******/
        /*  14 >>>  */
        if (origin.index <= 14 && destination.index == 15) {
            fullpage_api.setScrollingSpeed(700);
            fliebenNext.currentTime = 0;
        }

        /*********** 16 *******/
        /*  15 >>>  */
        if (origin.index <= 15 && destination.index == 16) {
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

});

