// ==UserScript==
// @name         Image autosaved bg
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var foo = function(){
  var button = document.createElement('button');
  button.innerHTML = 'click to change background url.';
  button.onclick = function(){
    var b=prompt('image url');document.cookie = 'imurl='+b;void 0;return false;
  };
  // where do we want to have the button to appear?
  // you can append it to another element just by doing something like
  // document.getElementById('foobutton').appendChild(button);
  document.body.insertBefore(button, document.body.firstChild);
};
    foo();
    function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
    var im=getCookie('imurl');
    document.body.style = 'background: url('+im+') no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;';
})();
