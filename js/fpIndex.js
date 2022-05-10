new fullpage("#fp-home", {
    anchors: ["Zeta-id", "WeDoIndustrialDesign", "EKO", "Sentry", "FlieBen", "Magma", "OurValues", "OurProcess", "OurTeam", "OurTeam", "ContactUs"],
    sectionsColor: ["#fff", "#fff", "#000", "#fff", "#000", "#000", "#fff", "#000", "#f7f7f7", "#000", "#000"],
    //menu: "#menu",

    onLeave: function (origin, destination, direction) {
        let leavingSection = this;

        //after leaving section 2
        if (origin.index == 0 && direction == "down") {
            let app = document.getElementById("wedo");

            let typewriter = new Typewriter(app, {
                loop: false,
                cursor: "",
                delay: 18,
            });
            typewriter.pauseFor(500).typeString("WE DO").typeString("<p>DESIGN</p>").pauseFor(500).deleteChars(6).pauseFor(200).typeString("<p>INDUSTRIAL</p>").typeString("<p>DESIGN</p>").start();
        }


        //Arribing Eko
        if (origin.index == 1 && direction == "down") {
            document.getElementById('eko-video').currentTime = 0;
        }
        if (origin.index == 3 && direction == "up") {
            document.getElementById('eko-video').currentTime = 0;
        }

        //Arribing Sentry
        if (origin.index == 2 && direction == "down") {
            document.getElementById('sentry-video').currentTime = 0;
        }
        if (origin.index == 4 && direction == "up") {
            document.getElementById('sentry-video').currentTime = 0;
        }

        //Arribing Flieben
        if (origin.index == 3 && direction == "down") {
            document.getElementById('flieben-video').currentTime = 0;
        }
        if (origin.index == 5 && direction == "up") {
            document.getElementById('flieben-video').currentTime = 0;
        }

        //Arribing Magma
        if (origin.index == 4 && direction == "down") {
            document.getElementById('magma-video').currentTime = 0;
        }
        if (origin.index == 6 && direction == "up") {
            document.getElementById('magma-video').currentTime = 0;
        }

    },
    scrollingSpeed: 850,
    parallax: true,
    parallaxOptions: {
        type: "reveal",
        percentage: 82,
        property: "translate",
    },

    scrollOverflow: true

});
document.querySelectorAll('.videosPortfolio').pause();
