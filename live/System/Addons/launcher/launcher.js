﻿(function() {
var div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<header id="header"><div class="powerbar tabs"><div class="topbar-current" title="Options" onclick="$(`#mainmenu`).toggle();return false"><img width="16" height="16" src="System/Addons/launcher/icon.svg" class="icon"><span class="navlocal">Launcher</span></div><div class="powercontainer" style="visibility:hidden"><div id="power-handle" onclick="whiteline()" onmousedown="destroywhite()"><div id="handle-line"></div></div></div></header>';
})();

var div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<nav class="navmenu" id="mainmenu"><ul class="tabs center"><li class="first current unavail"><a href="#tabc1"><div class="tabicon tab-add"></div> Add</a></li><li class=""><a href="#tabc2"><div class="tabicon tab-customize"></div> Customize</a></li><li class="last"><a href="#tabc3"><div class="tabicon tab-test"></div> Test Hub</a></li></ul><tab id="tabc1" class="tab-content clearfix" style="display: block;"><ul><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/file.svg#black" class="navi-img"></div><p>File</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/folder.svg#black" class="navi-img"></div><p>Folder</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/action.svg#black" class="navi-img"></div><p>Action</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/shortcut.svg#black" class="navi-img"></div><p>Shortcut</p></li></a><a><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/groups.svg#black" class="navi-img"></div><p>Group</p></li></a></ul></tab><tab id="tabc2" class="tab-content clearfix" style="display: none;"><ul><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/background.svg#black" class="navi-img"></div><p>Wallpaper</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/launcher.svg#black" class="navi-img"></div><p>Launcher</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/themes.svg#black" class="navi-img"></div><p>Themes</p></li></a></ul></tab><tab id="tabc3" class="tab-content clearfix" style="display: none;"><button onclick="lock()">Lockscreen</button></tab></nav>';

var div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div class="bottomhotspot"></div><div class="bar"><img width="32" height="32" class="virtualbutton unavail" title="Go to Launcher" src="System/Addons/launcher/icon.svg" onclick="showDialog(`dialog`)"><img width="32" height="32" class="virtualbutton unavail" title="Work Ambients" src="System/Addons/launcher/img/buttons/ambients.svg" onclick="showDialog(`dialog`)"><img width="32" height="32" class="virtualbutton" title="Search" src="System/Addons/launcher/img/buttons/search.svg" onclick="$(`#search`).toggle();return false;"><img width="32" height="32" class="virtualbutton unavail" title="Return" src="System/Addons/launcher/img/buttons/arrow-left.svg" onclick="showDialog(`dialog`)"><div style="padding-left:10px"><icon class="closed unavail" title="[Example] Dialer" onclick="showDialog(`dialog`)"><img width="32" height="32" src="img/app.svg#icon"></icon><icon class="closed unavail" title="[Example] Messenger" onclick="showDialog(`dialog`)"><img width="32" height="32" src="System/Apps/Messenger/icon.svg#icon"></icon><icon class="closed unavail" title="[Example] Contacts" onclick="showDialog(`dialog`)"><img width="32" height="32" src="System/Apps/Contacts/icon.svg#icon"></icon><icon icon="com.plasmmer.browser" class="closed unavail" title="[Example] Browser" onclick="showDialog(`dialog`)"><img width="32" height="32" src="System/Apps/com.plasmmer.browser/icon.svg#icon"></icon><icon class="closed unavail" title="[Example] Camera" onclick="showDialog(`dialog`)"><img width="32" height="32" src="System/Apps/Camera/icon.svg#icon"></icon><icon class="current unavail" title="[Example] Store.js" onclick="showDialog(`dialog`)"><img width="32" height="32" src="System/Apps/Store.js/icon.svg#icon"></icon><div class="app-preview"><img width="32" height="32" src="System/Apps/Studio/icon.svg#icon"><span class="app-title">Studio</span><div class="window-button_close" title="Close"></div><div title="Maximize"></div><div title="Toggle Fullscreen"></div><iframe src="System/Apps/Studio/index.html" width="200" height="141" frameborder="0" style="border: 1px solid #333;z-index:1"></iframe></div><icon class="openned unavail" title="[Example] Studio" onclick="showDialog(`dialog`)"><img width="32" height="32" src="System/Apps/Studio/icon.svg#badge"></icon></div></div>';

var div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div id="search" style="display: none;"><ul class="tabs center"><li class="first unavail current"><a href="#tabs1"><div class="tabicon tab-apps"></div> Apps</a></li><li class=""><a href="#tabs2"><div class="tabicon tab-games"></div> Games</a></li><li class=""><a href="#tabs3"><div class="tabicon tab-files"></div> Files</a></li><li class="last"><a href="#tabs4"><div class="tabicon tab-browser"></div> Web</a></li></ul><tab id="tabs1" class="tab-content clearfix" style="display: block;"><h1>Oh, sorry!</h1><p>This function was not been implemented, yet.<i><br><b>Developer Tip: </b>You can submit a pull request with this function in <a target="blank" href="https://github.com/Software-js/WS.js">GitHub!</a></i></p></tab><tab id="tabs2" class="tab-content clearfix" style="display: none;"><h1>Oh, sorry!</h1><p>This function was not been implemented, yet.<i><br><b>Developer Tip: </b>You can submit a pull request with this function in <a target="blank" href="https://github.com/Software-js/WS.js">GitHub!</a></i></p></tab><tab id="tabs3" class="tab-content clearfix" style="display: none;"><h1>Oh, sorry!</h1><p>This function was not been implemented, yet.<i><br><b>Developer Tip: </b>You can submit a pull request with this function in <a target="blank" href="https://github.com/Software-js/WS.js">GitHub!</a></i></p></tab><tab id="tabs4" class="tab-content clearfix" style="display: none;"><h1>Oh, sorry!</h1><p>This function was not been implemented, yet.<i><br><b>Developer Tip: </b>You can submit a pull request with this function in <a target="blank" href="https://github.com/Software-js/WS.js">GitHub!</a></i></p></tab></div>';

var div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<launcher><ul class="tabs center"><li class="first current unavail"><a href="#tab1"><div class="tabicon tab-apps"></div> Apps</a></li><li class="last"><a href="#tab2"><div class="tabicon tab-games"></div> Games</a></li></ul><tab id="tab1" class="tab-content clearfix" style="display: block;"><ul class="tabs center"><li class="first current unavail"><a href="#tab-apps1"><div class="tabicon tab-pinned"></div> Pinned</a></li><li class=""><a href="#tab-apps2"><div class="tabicon tab-mostused"></div> Most used</a></li><li class=""><a href="#tab-apps3"><div class="tabicon tab-recent"></div> Recent</a></li><li class="last"><a href="#tab-apps4"><div class="tabicon tab-all"></div> All</a></li></ul><tab id="tab-apps1" class="tab-content clearfix scroller" style="display: block;"><icon class="unavail"><img width="48" height="48" src="img/pinnedsite.svg#badge"><span class="app-title">[Example] Pinned site</span></icon><p><b style="color:yellow">Warning: </b> All these icons can`t open apps. I`ve not developed codes for dinamically list or open apps. These examples are not yet functional. Soon I`ll do this.</p><button onclick="showDialog(`#dialog`)">Show dialog</button></tab><tab id="tab-apps2" class="tab-content clearfix scroller" style="display: none;"><h1>Oh, sorry!</h1><p>This function was not been implemented, yet.<i><br><b>Developer Tip: </b>You can submit a pull request with this function in <a target="blank" href="https://github.com/Software-js/WS.js">GitHub!</a></i></p></span></tab><tab id="tab-apps3" class="tab-content clearfix scroller" style="display: none;"><h1>Oh, sorry!</h1><p>This function was not been implemented, yet.<i><br><b>Developer Tip: </b>You can submit a pull request with this function in <a target="blank" href="https://github.com/Software-js/WS.js">GitHub!</a></i></p></span></tab><tab id="tab-apps4" class="tab-content clearfix scroller" style="display: none;"><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">B</div><icon icon="com.plasmmer.browser" class="unavail"><img width="48" height="48" src="System/Apps/com.plasmmer.browser/icon.svg#badge"><span class="app-title">Browser</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">C</div><icon class="unavail"><img width="48" height="48" src="System/Apps/Camera/icon.svg#badge"><span class="app-title">Camera</span></icon><icon class="unavail"><img width="48" height="48" src="System/Apps/Contacts/icon.svg#badge"><span class="app-title">Contacts</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">D</div><icon class="unavail"><img width="48" height="48" src="System/Apps/Devices/pc.svg#badge"><span class="app-title">Devices</span></icon><icon class="unavail"><img width="48" height="48" src="img/app.svg#badge"><span class="app-title">Dialer</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">F</div><icon class="unavail"><img width="48" height="48" src="System/Apps/File Explorer/icon.svg#badge"><span class="app-title">File Explorer</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">G</div><icon class="unavail"><img width="48" height="48" src="System/Apps/Gallery/icon.svg#badge"><span class="app-title">Gallery</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">M</div><icon class="unavail"><img width="48" height="48" src="System/Apps/Messenger/icon.svg#badge"><span class="app-title">Messenger</span></icon><icon class="unavail"><img width="48" height="48" src="System/Apps/Microphone/icon.svg#badge"><span class="app-title">Microphone</span></icon><icon class="unavail"><img width="48" height="48" src="System/Apps/Music/icon.svg#badge"><span class="app-title">Music</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">N</div><icon class="unavail"><img width="48" height="48" src="System/Apps/Notes/icon.svg#badge"><span class="app-title">Notes</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">S</div><icon class="unavail"><img width="48" height="48" src="System/Apps/Store.js/icon.svg#badge"><span class="app-title">Store.js</span></icon><icon class="unavail"><img width="48" height="48" src="System/Apps/Studio/icon.svg#badge"><span class="app-title">Studio</span></icon><p><b style="color:yellow">Warning: </b> All these icons can`t open apps. I`ve not developed codes for dinamically list or open apps. These examples are not yet functional. Soon I`ll do this.</p></tab></tab><tab id="tab2" class="tab-content clearfix" style="display: none;"><ul class="tabs center"><li class="first current unavail"><a href="#tab-games1"><div class="tabicon tab-pinned"></div> Pinned</a></li><li class=""><a href="#tab-games2"><div class="tabicon tab-mostused"></div> Most used</a></li><li class=""><a href="#tab-games3"><div class="tabicon tab-recent"></div> Recent</a></li><li class="last"><a href="#tab-games4"><div class="tabicon tab-all"></div> All</a></li></ul><tab id="tab-games1" class="tab-content clearfix scroller" style="display: block;"><icon class="unavail"><img width="48" height="48" src="img/pinnedsite.svg#badge"><span class="app-title">[Example] Pinned webgame</span></icon><p><b style="color:yellow">Warning: </b> All these icons can`t open apps. I`ve not developed codes for dinamically list or open apps. These examples are not yet functional. Soon I`ll do this.</p></tab><tab id="tab-games2" class="tab-content clearfix scroller" style="display: none;"><h1>Oh, sorry!</h1><p>This function was not been implemented, yet.<i><br><b>Developer Tip: </b>You can submit a pull request with this function in <a target="blank" href="https://github.com/Software-js/WS.js">GitHub!</a></i></p></span></tab><tab id="tab-games3" class="tab-content clearfix scroller" style="display: none;"><h1>Oh, sorry!</h1><p>This function was not been implemented, yet.<i><br><b>Developer Tip: </b>You can submit a pull request with this function in <a target="blank" href="https://github.com/Software-js/WS.js">GitHub!</a></i></p></span></tab><tab id="tab-games4" class="tab-content clearfix scroller" style="display: none;"><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">0-9</div><icon class="unavail"><img width="48" height="48" src="img/game.svg#badge"><span class="app-title">2048</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">B</div><icon class="unavail"><img width="48" height="48" src="img/game.svg#badge"><span class="app-title">Battleship</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">P</div><icon class="unavail"><img width="48" height="48" src="img/game.svg#badge"><span class="app-title">Pixel Paint</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">R</div><icon class="unavail"><img width="48" height="48" src="img/game.svg#badge"><span class="app-title">Rock Paper Scizor</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">S</div><icon class="unavail"><img width="48" height="48" src="img/game.svg#badge"><span class="app-title">Symbolistic</span></icon><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">T</div><icon class="unavail"><img width="48" height="48" src="img/game.svg#badge"><span class="app-title">Tic Tac Toe</span></icon><p><b style="color:yellow">Warning: </b> All these icons can`t open apps. I`ve not developed codes for dinamically list or open apps. These examples are not yet functional. Soon I`ll do this.</p></tab></tab></launcher>';

var div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div id="alphabeticalsele"><div class="alphabetic" onclick="$(`#alphabeticalsele`).toggle();return false">🌐</div><div class="alphabetic inactive unavail">&amp;</div><div class="alphabetic inactive unavail">0-9</div><div class="alphabetic inactive unavail">A</div><div class="alphabetic unavail">B</div><div class="alphabetic unavail">C</div><div class="alphabetic unavail">D</div><div class="alphabetic inactive unavail">E</div><div class="alphabetic unavail">F</div><div class="alphabetic inactive unavail">G</div><div class="alphabetic inactive unavail">H</div><div class="alphabetic inactive unavail">I</div><div class="alphabetic inactive unavail">J</div><div class="alphabetic inactive unavail">K</div><div class="alphabetic inactive unavail">L</div><div class="alphabetic unavail">M</div><div class="alphabetic unavail">N</div><div class="alphabetic inactive unavail">O</div><div class="alphabetic inactive unavail">P</div><div class="alphabetic inactive unavail">Q</div><div class="alphabetic inactive unavail">R</div><div class="alphabetic unavail">S</div><div class="alphabetic inactive unavail">T</div><div class="alphabetic inactive unavail">U</div><div class="alphabetic inactive unavail">V</div><div class="alphabetic inactive unavail">W</div><div class="alphabetic inactive unavail">X</div><div class="alphabetic inactive unavail">Y</div><div class="alphabetic inactive unavail">Z</div></div>';