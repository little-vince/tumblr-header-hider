// ==UserScript==
// @name            Tumblr Header Hider
// @description     Hides the Tumblr dashboard header on scroll
// @version         0.7
// @grant           none
// @author          little-vince
// @namespace       http://little-vince.tumblr.com/
// @include         *www.tumblr.com/*
// @updateURL       https://raw.githubusercontent.com/little-vince/tumblr-header-hider/master/tumblr.header.hider.user.js
// @downloadURL     https://raw.githubusercontent.com/little-vince/tumblr-header-hider/master/tumblr.header.hider.user.js
// ==/UserScript==

// Last edited 12 November 2014 by mxcleod.tumblr.com
//fixed for firefox by mxcleod

// load jQuery code by Erik Vergobbi Vold & Tyler G. Hicks-Wright
// a function that loads jQuery and calls a callback function when jQuery has 
// finished loading
function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        
        //instead of appending to the body, its appending to the head tag, no longer putting it inside text boxes on tumblr -mxcleod
        document.head.appendChild(script);
    }, false);
    document.head.appendChild(script);
}

// the guts of this userscript
function main() {
    var header = ".l-header-container";
    var hidden = "nope"; //name of the hidden class name
    var fade = 0.2; //time of fade animation in seconds
    var notifbg = "#D95E40";
    var notiftxtbg = "#FFF";
    
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = header + " {" +
        "-webkit-transition: all " + fade + "s ease-out;" +
        "-moz-transition: all " + fade + "s ease-out;" +
        "transition: all " + fade + "s ease-out}" +
        header + "." + hidden + " {opacity: 0; visibility: hidden}" +
        ".tab_notice {background-color: " + notifbg + "!important}" +
        ".tab_notice_value {color: " + notiftxtbg + "!important}";
    document.head.appendChild(style);

    //Note, jQ replaces $ to avoid conflicts.
    //based off nav bar hiding code by Marc Audet
    jQ(window).scroll(
        {
            previousTop: 0
        }, 
        function() {
            var dh = jQ(document).height();
            var wh = jQ(window).height();
            var currentTop = jQ(window).scrollTop();
            //only activate when scrolled past jQ(header) size
            if (currentTop > jQ(header).height()) {
                //osx inertia bounce top
                if (currentTop <= 0) {
                    jQ(header).removeClass(hidden);
                    this.previousTop = 0;
                }
                //osx inertia bounce bottom
                else if (currentTop + wh >= dh) {
                    jQ(header).addClass(hidden);
                    this.previousTop = dh;
                }
                //normal non-intertia scrolling
                else {
                    if (currentTop < this.previousTop) {
                        //scrolling up (show header)
                        jQ(header).removeClass(hidden);
                    } else {
                        //scrolling down (hide header)
                        jQ(header).addClass(hidden);
                    }
                    this.previousTop = currentTop;
                }
            }
            //handle jumping to top of page
            else {
                jQ(header).removeClass(hidden);
                this.previousTop = currentTop;
            }
        }
    );
}

// load jQuery and execute the main function
addJQuery(main);
