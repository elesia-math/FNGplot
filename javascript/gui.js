/* SPDX-License-Identifier: Apache-2.0 */
/* Copyright (c) Wei-Hsu Lin(林韋旭) & All Contributors to FNGplot */

/* gui.js: This file contains code used for GUI */

"use strict";

// || Left panel

//Left panel display switch

function switchLeftPanel(optn){
    const panelList = document.querySelectorAll("div[id^=\"left-panel-item-\"]");  //select all panels
    for(let panel of panelList){                                                   //hide everyone first
	    panel.style.display = "none";
    };
    document.querySelector(`#left-panel-item-${optn}`).style.display = "flex";     //then show only the selected panel
}

//Change root zoom level

function changeRootZoom(value,mode){
    if(mode == "change"){
        document.getElementById("root-frame").style.transform=`scale(${value/100})`;
    }
    document.getElementById("rootzoom-label").innerHTML = `Zoom: ${value}%`;
}

// Update environment data list 

function updateEnvirList(){
    document.querySelector("#envir-datalist > pre").innerHTML = `
Root Frame:
--------------------------
Width / Height: 
${document.querySelector("#root-frame").getBoundingClientRect().width}px / ${document.querySelector("#root-frame").getBoundingClientRect().height}px


Viewport:
--------------------------
innerWidth / clientWidth: 
${window.innerWidth}px / ${document.documentElement.clientWidth}px
innerHeight / clientHeight: 
${window.innerHeight}px / ${document.documentElement.clientHeight}px


Device:
--------------------------
ScreenWidth / ScreenHeight:
${window.screen.width}px / ${window.screen.height}px


`
}


// || Toolbar

//Toolbar display switch

function switchToolbar(optn){
    const btnList = document.querySelectorAll("button[id^=\"toolbar-select-\"]");               //select all buttons
    for(let btn of btnList){
        btn.style.background = "transparent";                                                   //set all buttons to transparent background (unselected)
        btn.style.color = "#000000";                                                            //set all buttons' text to black (unselected)
        btn.style.fontWeight = "normal";                                                        //set font weight to normal (unselected)
    };
    btnList[optn].style.background = TOOLBAR_CLR[optn];                                         //set background to its border color (selected)
    btnList[optn].style.color = "#ffffff";                                                      //set text color to white (selected)
    btnList[optn].style.fontWeight = "bold";                                                    //set font weight to bold (selected)
    
    const panelList = document.querySelectorAll("div[id^=\"toolbar-item-\"]");                  //select all  divs
    for(let panel of panelList){                                                                //hide all divs first
        panel.style.display = "none";
    };
    panelList[optn].style.display = "block";                                                    //then show the selected div
}

// Toggle toolbar dropdown when down arrow is clicked

function toggleToolbarDropdown(item){
    if(item.style.transform == "rotate(0deg)"){                 //expand
        item.style.transform = "rotate(180deg)";
        item.parentNode.parentNode.style.overflow = "visible";
    }
    else if(item.style.transform == "rotate(180deg)"){          //collapse
        item.style.transform = "rotate(0deg)";
        item.parentNode.parentNode.style.overflow = "hidden";
    }
}

// || Others
