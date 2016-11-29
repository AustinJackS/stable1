// ==UserScript==
// @name         Save Inspect
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Reload the page or navigate away and still have inspect element changes.
// @author       Austin Scott
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function sve() {
        
        localStorage.setItem(window.location.href.split('?')[0],document.body.innerHTML);
    }
    function doStuff() {
        if (localStorage.getItem(window.location.href.split('?')[0])===null) {
            localStorage.setItem(window.location.href.split('?')[0], document.body.innerHTML);
        }
        document.body.innerHTML = localStorage.getItem(window.location.href.split('?')[0]);
        setInterval(sve, 5);
    }

    window.onload = doStuff();
})();
