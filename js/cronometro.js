function Stopwatch(selector) {

    // Element containing the stopwatch html structure
    var main_element = document.querySelector(selector);

    // Used to flag if watch is running or not
    var is_running = false;

    // Used to store the reference to the watch
    var watch = null;

    /*
     * There are two counters in the application
     * 1. Main counter: It counts the total
     * 2. Sub counter: It counts only the lap
     */
    var counter = {
        main: {
            // This element will not change through out the application
            element: main_element.querySelector(".main-counter")
        },

        sub: {
            // This element keeps on changing with new laps
            element: null
        }
    };

    // Lap information
    var laps = {

        count: 0, // Number of laps

        element: main_element.querySelector('.laps'), // Element where laps are shown

        // Holds the data of the slowest lap
        slowest: { 
            value: {},
            update: false,
            element: null
        },

        // Holds the data of the fastest lap
        fastest: {
            value: {},
            update: false,
            element: null
        }
    };

    // All the control buttons in the application
    var buttons = {
        lap: main_element.querySelector('.btn-lap'),
        reset: main_element.querySelector('.btn-reset'),
        start: main_element.querySelector('.btn-start'),
        stop: main_element.querySelector('.btn-stop'),

        // This function will show/hide the buttons based on the condition
        showHide: function() {

            // disable the lap button if watch is null, that is during initial state
            this.lap[(watch === null ? 'set' : 'remove') + 'Attribute']('disabled', 'disabled');

            // show the lap button is watch is running or during the initial state but not during paused state
            this.lap.style.display = is_running || watch === null ? 'inline' : 'none';

            // Show reset button when watch is paused (stopped but watch is still present)
            this.reset.style.display = !is_running && watch !== null ? 'inline' : 'none';

            // Show start button when watch is not running
            this.start.style.display = !is_running ? 'inline' : 'none';

            // Show stop button when watch is running
            this.stop.style.display = is_running ? 'inline' : 'none';
        }
    };

    // Add click events to their functions
    buttons.lap.onclick = lap;
    buttons.reset.onclick = reset;
    buttons.start.onclick = start;
    buttons.stop.onclick = stop;

    // Initialize the application & Show relevant buttons
    init();
    buttons.showHide();


    /*
     * Used to initialize the main stopwatch and "individual lap" stopwatch
     * - It can initialize the main or sub counters based on the input argument "item"
     * - If nothing is passed then main stopwatch is initialized
     */
    function init(item) {

        item = item || 'main';

        // Set everything to 0
        counter[item].time = {
            minutes: 0,
            seconds: 0,
            milli_seconds: 0
        };

        // It saves total times the stopwatch counted, Used to find the slowest and fastest lap
        counter[item].ticks = 0;

        // Print the updated values
        update();

    }


    /*
     * Starts a lap
     */
    function lap() {

        // counter.sub contains current lap data
        // "laps" object contains overall laps data
        // "laps.slowest" object contains data of the slowest lap
        // "laps.fastest" object contains data of the fastest lap

        // If current lap is second lap or "current lap" is slower than already noted slowest lap
        if (laps.count === 1 || counter.sub.ticks > laps.slowest.value.ticks) {

            // Save this lap's data as slowest
            laps.slowest.value = {
                number: laps.count,
                ticks: counter.sub.ticks
            };

            // Mark it for update so that we update the DOM
            laps.slowest.update = true;

        }

        // If current lap is second lap or current lap is faster than already noted slowet lap
        if (laps.count === 1 || counter.sub.ticks < laps.fastest.value.ticks) {

            // Save current lap's data as fastest
            laps.fastest.value = {
                number: laps.count,
                ticks: counter.sub.ticks
            };

            // Mark it for update so that we update the DOM
            laps.fastest.update = true;
        }

        // If will mark lap as "slowest" or "fastest" only after 2 laps
        if (laps.count > 1) {

            // Update the slowest lap
            if (laps.slowest.update || laps.count === 2) {

                // Remove previously slowest lap
                if (laps.slowest.element) {
                    laps.slowest.element.classList.remove('slowest');
                }

                // Find the current slowest lap using the lap number saved before
                laps.slowest.element = main_element.querySelector('.lap' + laps.slowest.value.number);

                // Add the class to mark as the slowest
                laps.slowest.element.classList.add('slowest');
            }

            // Update the fastest lap
            if (laps.fastest.update || laps.count === 2) {

                // Unmark the previously fastest lap
                if (laps.fastest.element) {
                    laps.fastest.element.classList.remove('fastest');
                }

                // Find the current fastest lap using the lap number saved before
                laps.fastest.element = main_element.querySelector('.lap' + laps.fastest.value.number);

                // Add the class to mark as the fastest lap
                laps.fastest.element.classList.add('fastest');
            }
        }

        // Increment the laps count
        laps.count++;

        // Prepare the html for lap row
        // Every lap element will have ".lap1, .lap2 based on the count" to find them
        var content = '<div class="lap lap' + laps.count + '">' + '<div class="name pull-left">' + 'Pregunta ' + laps.count + '</div>' + '<div class="counter pull-right"></div>' + '<div class="clear"></div>' + '</div>';

        // Add to the laps element
        laps.element.insertAdjacentHTML('afterbegin', content);

        // Find the lap element using the count
        counter.sub.element = main_element.querySelector('.lap' + laps.count + ' .counter');

        // Reset the sub counter -> "counter.sub" object
        init('sub');
    }


    /*
     * Reset the stopwatch, Application will goback to "initial state"
     */
    function reset() {
        // Empty the laps
        laps.count = 0;
        laps.element.innerHTML = '';

        // Re-initialize the data -> "counter.main" object
        init();

        // Reset the sub counter -> "counter.sub" object
        init('sub');

        watch = null;

        // Show/Hide the control buttons conditionally
        buttons.showHide();
    }


    /*
     * Start the watch
     */ 
    function start() {

        // Initialize the first lap
        if (laps.count === 0) {
            lap();
        }

        // Clear the previous watch if running
        stop();

        // Mark the watch as running
        is_running = true;

        // Call back function gets called for every 10 milli seconds
        watch = setInterval(function() {

            // We will go through both objects
            // 1. Main stopwatch object
            // 2. Sub stopwatch object (current lap)
            [counter.main, counter.sub].forEach(function(item) {

                // Count the number of times the current object is being called
                // This is used to know the lowest and fastest lap
                item.ticks++;

                // If milli seconds are 99, it means it's a second
                if (item.time.milli_seconds == 99) {

                    // Reset the millli second counter
                    item.time.milli_seconds = 0;

                    // If Seconds counted are 59, it means a minute
                    if (item.time.seconds == 59) {

                        // Reset the seconds counter
                        item.time.seconds = 0;
                        // Increment the minute
                        item.time.minutes++;

                    } else {
                        item.time.seconds++;
                    }
                } else {
                    item.time.milli_seconds++;
                }


            });

            // Print the updated stopwatch data
            update();

        }, 10);

        // Show/Hide the control buttons conditionally
        buttons.showHide();

    }


    /*
     * Stop the watch
     */
    function stop() {

        // Mark watch as not running
        is_running = false;

        // If watch reference is present, Clear it
        if (watch) {
            clearInterval(watch);
        }

        // Show/Hide the control buttons conditionally
        buttons.showHide();
    }


    /*
     * Update the DOM
     * 1. Main counter
     * 2. Current Lap counter
     */
    function update() {
        [counter.main, counter.sub].forEach(function(item) {
            if (!item.element) {
                return false;
            }
            item.element.innerHTML = format(item.time.minutes) + ':' + format(item.time.seconds);
        });
    }


    /*
     * Format the digit. "9" -> "09"
     */
    function format(digit) {
        if (digit < 10) {
            return '0' + digit;
        }
        return digit;
    }

}
