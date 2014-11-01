// ==UserScript==
// @name           	Tumblr Hide Header
// @description    	Hides the Tumblr dashboard header on scroll
// @version        	0.2
// @grant          	none
// @author         	little-vince
// @namespace      	http://little-vince.tumblr.com/
// @include        	*www.tumblr.com/*
// ==/UserScript==

// Last edited 1 November 2014

// load jQuery code by Erik Vergobbi Vold & Tyler G. Hicks-Wright
// a function that loads jQuery and calls a callback function when jQuery has 
// finished loading
function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

// the guts of this userscript
function main() {
    var header = ".l-header-container";
    // Note, jQ replaces $ to avoid conflicts.
    jQ(window).scroll(
        {
            previousTop: 0
        }, 
        function () {
            var currentTop = jQ(window).scrollTop();
            if (currentTop < this.previousTop) {
                jQ(header).fadeIn(200);
            } else {
                jQ(header).fadeOut(200);
            }
            this.previousTop = currentTop;
        }
    );
}

// load jQuery and execute the main function
addJQuery(main);
