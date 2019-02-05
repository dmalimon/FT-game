// ==UserScript==
// @description A greasemonky userscript for cheating on a dumb online game
// @name        New
// @namespace   https://github.com/Legioniam/FT-cheat
// @include     http://faptitans.com/*
// @version     3
// @run-at      document-end
// @grant       none
// ==/UserScript==

// Replace scripts
DEBUG = 1
window.SCRIPT_SRC = ['https://github.com/Legioniam/FT-cheat/vendor.js', 'https://github.com/Legioniam/FT-cheatconf.js', 'https://github.com/Legioniam/FT-cheat/app.js'];

// Create buttons for cheats
var cheatToolbar = document.createElement('div');

var killButton = document.createElement('button');
killButton.innerHTML = 'Kill monster';
killButton.onclick = function() { window.killMonster() };
cheatToolbar.appendChild(killButton);

var DPSButton = document.createElement('button')
DPSButton.innerHTML = 'Increase DPS';
DPSButton.onclick = function() {
    var multip = parseFloat(prompt('Increase DPS in % (numbers only)'));
    window.game.getUser().get("multipliers").add("DPS", {value: new window.numbers(multip)});
};
cheatToolbar.appendChild(DPSButton);

var realPromoteLabel = document.createElement('label'), realPromoteCheck = document.createElement('input'), realPromoteText = document.createTextNode('Free (fake) promotions');
realPromoteCheck.type = 'checkbox';
realPromoteCheck.checked = false;
realPromoteCheck.onchange = function() { window.realPromote = !this.checked; };
realPromoteLabel.appendChild(realPromoteCheck);
realPromoteLabel.appendChild(realPromoteText);
cheatToolbar.appendChild(realPromoteLabel);

// Style the toolbar
cheatToolbar.style.position = 'absolute';
cheatToolbar.style.bottom = '0';
cheatToolbar.style.textAlign = 'center';
cheatToolbar.style.width = '100%';
cheatToolbar.style.backgroundColor = 'black';
cheatToolbar.style.color = 'whitesmoke';
document.body.appendChild(cheatToolbar);
