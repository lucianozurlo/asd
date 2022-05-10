const sentryNext = document.querySelector('#sentryNext');

new fullpage('#fpProject', {
    anchors: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],

    parallax: true,
    parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
    },

    onLeave: function (origin, destination) {
        let leavingSection = this;
        /*********** 7 *******/
        /*  6 >>>  */
        if (origin.index <= 9 && destination.index == 10) {
            fullpage_api.setScrollingSpeed(700);
            sentryNext.currentTime = 0;
        }

        /*********** 8 *******/
        /*  7 >>>  */
        if (origin.index <= 10 && destination.index == 11) {
            fullpage_api.setScrollingSpeed(100000000);
            fullpage_api.setAllowScrolling(false);
            setTimeout(() => {
                console.log('1 sec delay')
                window.location.href = 'eko.html';
                mouse.style.opacity = .25;
                clearInterval(timer);
            }, 1000);
        }
    },

});

