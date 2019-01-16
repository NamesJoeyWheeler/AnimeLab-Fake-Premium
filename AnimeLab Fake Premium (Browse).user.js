// ==UserScript==
// @name         AnimeLab Fake Premium (Browse)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.animelab.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName('prompt-ribbon premium-upgrade')[0].remove();
    document.getElementsByClassName('pre-footer premium')[0].remove();
    document.getElementsByClassName('promotion-chunk')[0].remove();
    document.getElementsByClassName('snippet premium')[0].remove();
    document.getElementsByClassName('snippet premium')[0].remove();
    document.getElementsByClassName('snippet premium')[0].remove();
    document.getElementsByClassName('snippet premium')[0].remove();
    document.getElementsByClassName('snippet premium')[0].remove();
        var link2 = window.document.createElement('link');
        link2.rel = 'stylesheet';
        link2.type = 'text/css';
        link2.href = 'https://cdn.discordapp.com/attachments/507144562641207318/535064833691746314/customlab.css';
        document.getElementsByTagName("head")[0].appendChild(link2);


})();