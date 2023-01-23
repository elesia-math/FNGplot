/* SPDX-License-Identifier: Apache-2.0 */
/* Copyright (c) Wei-Hsu Lin(林韋旭) & All Contributors to FNGplot */

"use strict";

/* [!] Event Listeners */

document.querySelector(".side-menu__select").addEventListener("change", () => {
    switchSideMenu(document.querySelector(".side-menu__select").value);
});

document.querySelector("[data-id='sys-envirdata-refreshbtn']").addEventListener("click", () => {
	updateEnvirList();
});

for (const item of ["input", "change"]) {
    document.querySelector("[data-id='sys-ui-zoom-slider']").addEventListener(item, function() {
        changeRootZoom(item, this.querySelector("input"), this.querySelector("div"));
    });
};

document.querySelector("[data-id='plt-coord-settings']").addEventListener("input", (event) => {
    changeCoordSettings(event.target);
});

document.querySelector(".workspace__block-toolbar").addEventListener("click", (event) => {  //event delegation
    if (event.target.classList.contains("workspace__block-toolbar__btn")) {
        switch (event.target.dataset.id) {
        case "import":
            // nothing yet
        case "export":
            // nothing yet
        case "copy":
            // nothing yet
        case "delete": 
            {   // scoping
            
            }
        }
    }
});

fngNS.DOM.BLOCK_FRAME.addEventListener("click", (event) => {       // event delegation
    if (event.target.classList.contains("dragblock__btn--visibility")) {  // change visibility
        changeVisibility(event.target.closest(".dragblock").dataset.sid);
    } else if (event.target.classList.contains("dragblock__btn--edit")) {   // toggle editpanel
        toggleEditPanel(event.target.closest(".dragblock").dataset.sid);
    } else if (event.target.classList.contains("dragblock__btn--delete")) { // delete block
        deleteObject(event.target.closest(".dragblock").dataset.sid);
    }
});

for (const item of ["input", "change"]) {
    fngNS.DOM.BLOCK_FRAME.addEventListener(item, (event) => { 
        if (event.target.closest(".editpanel") != null) {    //verify that the input/change came from inside an editpanel
            const sid = event.target.closest(".dragblock").dataset.sid;
            handleUserEdit(event.target, sid, event.type);
        }
    });
};

document.querySelector(".toolbar").addEventListener("click", (event) => {  //event delegation
    const target = event.target;
    if (target.tagName.toLowerCase() === "img") {                                  //SVG icon clicked
        createFNGObject(target.dataset.objname, null);                            //create a brand new object of the specified kind
    } else if (target.classList.contains("toolbar__toggler__arrowbtn")) {         // Arrow button clicked
        toggleToolbarDropdown(target);                                            // Expand or collapse the respective panel
    }
});

window.addEventListener("error", function(){
    console.error("Execution Failed");
    alert("Execution Failed.");
});

/* [!] Primary initialization sequence */

console.log(`Welcome to FNGplot ${fngNS.MetaData.VERSION}`);
updateEnvirList();

// Init side_menu -> plt-settings -> coordinate settings
{
    const inputList = document.querySelector("div[data-id='plt-coord-settings']").querySelectorAll("input");    // length = 4
    for (let input of inputList) {
        input.value = fngNS.Coord[input.dataset.id];    // map them to variables and assign to them
    }
}

// Fetch editpanel data from editpanels.json (Note for future me: Realtive path of fetch() starts from the HTML page, NOT this JS file)
fetch("javascript/editpanel-data/editpanels.json")
.then((response) => {
    return response.json();
})
.then((data) => {
    fngNS.SysData.EDITPANEL_TEMPLATES = data;
    Object.defineProperty(fngNS.SysData, "EDITPANEL_TEMPLATES", {   // Lock it up
        configurable: false,
        writable: false,
    });
})
.catch( (error) => {
    alert("Fatal Error: Could not load file \"editpanels.json\"");
    console.error(error);
});

//Initialize positions, colors and click handlers of toolbar's tabs and expand/retract togglers
{
    const tabList = document.querySelectorAll(".toolbar__tab");
    const arrowBtnList = document.querySelectorAll(".toolbar__toggler__arrowbtn");
    for (let [i, tab] of tabList.entries()) {
        tab.style.borderColor = fngNS.SysData.TOOLBAR_CLR[i];                      //initialize them to their respective colors
        tab.addEventListener("click", () => {                                      //attach eventlisteners
            switchToolbar(i);
        });
    };
    for (let arrowBtn of arrowBtnList) {
        arrowBtn.style.transform = "rotate(0deg)";                                 //set them inline so they can be manipulated later
    };
    switchToolbar(1);                                                              //switch to "Geometry" (default)
}

//Init sortable container
fngNS.SysData.sortableList.push(
    new Sortable(fngNS.DOM.BLOCK_FRAME, {
        group: 'block-frame',
        animation: 150,
        fallbackOnBody: true,
        forceFallback: true,
        onEnd: function (evt) {
            if (evt.oldIndex != evt.newIndex) {  //If the position actually changed
                moveObject(evt.item.dataset.sid, evt.item.nextSibling != null ? evt.item.nextSibling.dataset.sid : null);
                //passes null as reference if there is no next neighbor. insertBefore() will take care of it.
            }
        },
        ghostClass: 'ghost-class',
        draggable: '.dragblock',
        handle: '.dragblock__icon',
        swapThreshold: 0.65,
        scroll: true,
        scrollSensitivity: 80,
        scrollSpeed: 10
    })
);