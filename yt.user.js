// ==UserScript==
// @name         YT autoreload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Austin Scott
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function sg() {
        function chck() {
            if (document.getElementsByClassName("videoAdUiSkipButton videoAdUiAction").length > 0) {document.getElementsByClassName("videoAdUiSkipButton videoAdUiAction")[0].click();}
            if (document.getElementsByClassName("ytp-time-duration")[0].innerHTML == document.getElementsByClassName("ytp-time-current")[0].innerHTML) {
                window.location.reload();
            }
        }
        setInterval(chck, 500);
    }

    window.onload = sg();
})();
