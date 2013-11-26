// ==UserScript==
// @name       OldFBChat
// @version    1.0
// @description Makes FB chat look nicer
// @namespace http://nykac.github.io/userscripts/
// @downloadURL http://nykac.github.io/userscripts/OldFBChat.user.js
// @match      https://www.facebook.com/*
// @copyright  2013 Vmsplicer
// ==/UserScript==

document.domain='facebook.com'
var qs = document.querySelector.bind(document);
if(qs('#facebook')) {
    var profileImg = qs('.headerTinymanPhoto');
    var selfProfileUrl = profileImg.src;
    var fbid = Number(profileImg.id.match(/profile_pic_header_(\d*)$/));

    var styles = document.head.appendChild(document.createElement('style'));
    styles.textContent = "#facebook .profileLink.hidden_elem { display:block !important }\n";
    styles.textContent+= ".profileLink.hidden_elem > img { content:url('"+selfProfileUrl+"')}";

    var _t = function () {
        if (qs('.conversationContainer')) {
            var bubles;
            if(bubbles=qs('.bubbles')) bubbles.classList.remove('bubbles');
        }
    }
    Arbiter.subscribeOnce('onload/onload', _t)
}

// @copyright  2013+, Vmsplicer
// ==/UserScript==
