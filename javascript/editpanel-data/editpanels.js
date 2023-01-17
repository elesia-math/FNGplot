let data = {
    linepp:`
<div class="objblock-editpanel" data-objname="linepp">
    <div class="label-monospace">-----------User-----------------</div>
    <div>Name: <input type="text" data-property="label" class="size-long"></div>
    <div class="label-monospace">-----------Math-----------------</div>
    <div>Start Point: ( <input type="number" step="0.5" data-property="x1" class="size-short"> , <input type="number" step="0.5" data-property="y1" class="size-short"> )</div>
    <div>End Point: ( <input type="number" step="0.5" data-property="x2" class="size-short"> , <input type="number" step="0.5" data-property="y2" class="size-short"> )</div>
    <div class="label-monospace">-----------Style: Basic---------</div>
    <div>Width: <input type="number" min="0" data-property="strokeWidth" class="size-short"></div>
    <div>Color: <input type="color" data-property="strokeColor" class="size-short"></div>
    <div>Opacity: <input type="number" min="0" max="100" step="1" data-property="strokeOpacity" class="size-short">%</div>
    <div class="label-monospace">-----------Style: Advanced------</div>
    <div>LineCap: 
        <select data-property="lineCap" class="size-medium">
            <option value="butt" selected>Butt</option>
            <option value="round">Round</option>
            <option value="square">Square</option>
        </select>
    </div>
    <div>PathLength: <input type="number" min="0" data-property="pathLength" class="size-short"></div>
    <div>DashArray: <input type="text" data-property="dashArray" placeholder="NULL" class="size-medium"> </div>
    <div>DashOffset: <input type="number" data-property="dashOffset" class="size-short"></div>
    <div class="label-monospace">-----------System---------------</div>
    <div>SystemID: <input type="text" data-property="sid" class="idtag" disabled></div>
</div>
`,
    lineppext:`
<div class="objblock-editpanel" data-objname="lineppext">
    <div class="label-monospace">-----------User-----------------</div>
    <div>Name: <input type="text" data-property="label" class="size-long"></div>
    <div class="label-monospace">-----------Math-----------------</div>
    <div>Start Point: ( <input type="number" step="0.5" data-property="x1" class="size-short"> , <input type="number" step="0.5" data-property="y1" class="size-short"> )</div>
    <div>End Point: ( <input type="number" step="0.5" data-property="x2" class="size-short"> , <input type="number" step="0.5" data-property="y2" class="size-short"> )</div>
    <div>Extend: Start =  <input type="number" step="0.5" data-property="startExtend" class="size-short"> End = <input type="number" step="0.5" data-property="endExtend" class="size-short"></div>  
    <div class="label-monospace">-----------Style: Basic---------</div>
    <div>Width: <input type="number" min="0" data-property="strokeWidth" class="size-short"></div>
    <div>Color: <input type="color" data-property="strokeColor" class="size-short"></div>
    <div>Opacity: <input type="number" min="0" max="100" step="1" data-property="strokeOpacity" class="size-short">%</div>
    <div class="label-monospace">-----------Style: Advanced------</div>
    <div>LineCap: 
        <select data-property="lineCap" class="size-medium">
            <option value="butt" selected>Butt</option>
            <option value="round">Round</option>
            <option value="square">Square</option>
        </select>
    </div>
    <div>PathLength: <input type="number" min="0" data-property="pathLength" class="size-short"></div>
    <div>DashArray: <input type="text" data-property="dashArray" placeholder="NULL" class="size-medium"> </div>
    <div>DashOffset: <input type="number" data-property="dashOffset" class="size-short"></div>
    <div class="label-monospace">-----------System---------------</div>
    <div>SystemID: <input type="text" data-property="sid" class="idtag" disabled></div>
</div>
`,
    lineps:`
<div class="objblock-editpanel" data-objname="lineps">
    <div class="label-monospace">-----------User-----------------</div>
    <div>Name: <input type="text" data-property="label" class="size-long"></div>
    <div class="label-monospace">-----------Math-----------------</div>
    <div>Origin: ( <input type="number" step="0.5" data-property="x" class="size-short"> , <input type="number" step="0.5" data-property="y" class="size-short"> )</div>
    <div>Slope: <input type="text" data-property="slope" class="size-short"> (Blank = Vertical)</div>
    <div>Extend: Left =  <input type="number" step="0.5" data-property="leftExtend" class="size-short"> Right = <input type="number" step="0.5" data-property="rightExtend" class="size-short"></div>  
    <div class="label-monospace">-----------Style: Basic---------</div>
    <div>Width: <input type="number" min="0" data-property="strokeWidth" class="size-short"></div>
    <div>Color: <input type="color" data-property="strokeColor" class="size-short"></div>
    <div>Opacity: <input type="number" min="0" max="100" step="1" data-property="strokeOpacity" class="size-short">%</div>
    <div class="label-monospace">-----------Style: Advanced------</div>
    <div>LineCap: 
        <select data-property="lineCap" class="size-medium">
            <option value="butt" selected>Butt</option>
            <option value="round">Round</option>
            <option value="square">Square</option>
        </select>
    </div>
    <div>PathLength: <input type="number" min="0" data-property="pathLength" class="size-short"></div>
    <div>DashArray: <input type="text" data-property="dashArray" placeholder="NULL" class="size-medium"> </div>
    <div>DashOffset: <input type="number" data-property="dashOffset" class="size-short"></div>
    <div class="label-monospace">-----------System---------------</div>
    <div>SystemID: <input type="text" data-property="sid" class="idtag" disabled></div>
</div>
`,
    rect:`
<div class="objblock-editpanel" data-objname="rect">
    <div class="label-monospace">-----------User-----------------</div>
    <div>Name: <input type="text" data-property="label" class="size-long"></div>
    <div class="label-monospace">-----------Math-----------------</div>
    <div>Origin: ( <input type="number" step="0.5" data-property="originX" class="size-short"> , <input type="number" step="0.5" data-property="originY" class="size-short"> )</div>
    <div>OriginMode: 
        <select data-property="originVert" class="size-medium">
            <option value="TOP">Top</option>
            <option value="MIDDLE">Middle</option>
            <option value="BOTTOM" selected>Bottom</option>
        </select>
        <select data-property="originHoriz" class="size-medium">
            <option value="LEFT" selected>Left</option>
            <option value="MIDDLE">Middle</option>
            <option value="RIGHT">Right</option>
        </select>
    </div>
    <div>Width: <input type="number" min="0" data-property="width" class="size-short"></div>
    <div>Height: <input type="number" min="0" data-property="height" class="size-short"></div>
    <div class="label-monospace">-----------Style: Basic---------</div>
    <div>BorderColor: <input type="color" data-property="strokeColor" class="size-short"></div>
    <div>BorderWidth: <input type="number" min="0" data-property="strokeWidth" class="size-short"></div>
    <div>BorderOpacity: <input type="number" min="0" max="100" step="1" data-property="strokeOpacity" class="size-short">%</div>
    <div>FillColor: <input type="color" data-property="fillColor" class="size-short"></div>
    <div>FillOpacity: <input type="number" min="0" max="100" step="1" data-property="fillOpacity" class="size-short">%</div>
    <div class="label-monospace">-----------Style: Advanced------</div>
    <div>RoundedCorner: <input type="number" min="0" data-property="roundCorner" class="size-short"></div>
    <div>BorderLineJoin:
        <select data-property="lineJoin" class="size-medium">
            <option value="miter" selected>Miter</option>
            <option value="bevel">Bevel</option>
            <option value="round">Round</option>
        </select>
    </div>
    <div>BorderLineCap(dash):
        <select data-property="lineCap" class="size-medium">
            <option value="butt" selected>Butt</option>
            <option value="round">Round</option>
            <option value="square">Square</option>
        </select>
    </div>
    <div>PathLength: <input type="number" min="0" data-property="pathLength" class="size-short"></div>
    <div>DashArray: <input type="text" data-property="dashArray" placeholder="NULL" class="size-medium"> </div>
    <div>DashOffset: <input type="number" data-property="dashOffset" class="size-short"></div>
    <div class="label-monospace">-----------System---------------</div>
    <div>SystemID: <input type="text" data-property="sid" class="idtag" disabled></div>
</div>
`,
    triangle:`
<div class="objblock-editpanel" data-objname="triangle">
    <div class="label-monospace">-----------User-----------------</div>
    <div>Name: <input type="text" data-property="label" class="size-long"></div>
    <div class="label-monospace">-----------Math-----------------</div>
    <div>P1: ( <input type="number" step="0.5" data-property="x1" class="size-short"> , <input type="number" step="0.5" data-property="y1" class="size-short"> )</div>
    <div>P2: ( <input type="number" step="0.5" data-property="x2" class="size-short"> , <input type="number" step="0.5" data-property="y2" class="size-short"> )</div>
    <div>P3: ( <input type="number" step="0.5" data-property="x3" class="size-short"> , <input type="number" step="0.5" data-property="y3" class="size-short"> )</div>
    <div class="label-monospace">-----------Style: Basic---------</div>
    <div>BorderColor: <input type="color" data-property="strokeColor" class="size-short"></div>
    <div>BorderWidth: <input type="number" min="0" data-property="strokeWidth" class="size-short"></div>
    <div>BorderOpacity: <input type="number" min="0" max="100" step="1" data-property="strokeOpacity" class="size-short">%</div>
    <div>FillColor: <input type="color" data-property="fillColor" class="size-short"></div>
    <div>FillOpacity: <input type="number" min="0" max="100" step="1" data-property="fillOpacity" class="size-short">%</div>
    <div class="label-monospace">-----------Style: Advanced------</div>
    <div>BorderLineJoin:
        <select data-property="lineJoin" class="size-medium">
            <option value="miter">Miter</option>
            <option value="bevel">Bevel</option>
            <option value="round" selected>Round</option>
        </select>
        MiterLimit: <input type="number" min="0" data-property="miterLimit" class="size-short">
    </div>
    <div>BorderLineCap(dash):
        <select data-property="lineCap" class="size-medium">
            <option value="butt" selected>Butt</option>
            <option value="round">Round</option>
            <option value="square">Square</option>
        </select>
    </div>
    <div>PathLength: <input type="number" min="0" data-property="pathLength" class="size-short"></div>
    <div>DashArray: <input type="text" data-property="dashArray" placeholder="NULL" class="size-medium"> </div>
    <div>DashOffset: <input type="number" data-property="dashOffset" class="size-short"></div>
    <div class="label-monospace">-----------System---------------</div>
    <div>SystemID: <input type="text" data-property="sid" class="idtag" disabled></div>
</div>
`,
    circle:`
<div class="objblock-editpanel" data-objname="circle">
    <div class="label-monospace">-----------User-----------------</div>
    <div>Name: <input type="text" data-property="label" class="size-long"></div>
    <div class="label-monospace">-----------Math-----------------</div>
    <div>Center: ( <input type="number" step="0.5" data-property="cx" class="size-short"> , <input type="number" step="0.5" data-property="cy" class="size-short"> )</div>
    <div>Radius: <input type="number" min="0" step="0.1" data-property="radius" class="size-short"></div>
    <div class="label-monospace">-----------Style: Basic---------</div>
    <div>BorderColor: <input type="color" data-property="strokeColor" class="size-short"></div>
    <div>BorderWidth: <input type="number" min="0" data-property="strokeWidth" class="size-short"></div>
    <div>BorderOpacity: <input type="number" min="0" max="100" step="1" data-property="strokeOpacity" class="size-short">%</div>
    <div>FillColor: <input type="color" data-property="fillColor" class="size-short"></div>
    <div>FillOpacity: <input type="number" min="0" max="100" step="1" data-property="fillOpacity" class="size-short">%</div>
    <div class="label-monospace">-----------Style: Advanced------</div>
    <div>BorderLineCap(dash):
        <select data-property="lineCap" class="size-medium">
        <option value="butt" selected>Butt</option>
            <option value="round">Round</option>
            <option value="square">Square</option>
        </select>
    </div>
    <div>PathLength: <input type="number" min="0" data-property="pathLength" class="size-short"></div>
    <div>DashArray: <input type="text" data-property="dashArray" placeholder="NULL" class="size-medium"> </div>
    <div>DashOffset: <input type="number" data-property="dashOffset" class="size-short"></div>
    <div class="label-monospace">-----------System---------------</div>
    <div>SystemID: <input type="text" data-property="sid" class="idtag" disabled></div>
</div>
`,
    circle3p:`
<div class="objblock-editpanel" data-objname="circle3p">
    <div class="label-monospace">-----------User-----------------</div>
    <div>Name: <input type="text" data-property="label" class="size-long"></div>
    <div class="label-monospace">-----------Math-----------------</div>
    <div>Point 1: ( <input type="number" step="0.5" data-property="x1" class="size-short"> , <input type="number" step="0.5" data-property="y1" class="size-short"> )</div>
    <div>Point 2: ( <input type="number" step="0.5" data-property="x2" class="size-short"> , <input type="number" step="0.5" data-property="y2" class="size-short"> )</div>
    <div>Point 3: ( <input type="number" step="0.5" data-property="x3" class="size-short"> , <input type="number" step="0.5" data-property="y3" class="size-short"> )</div>
    <div class="label-monospace">-----------Style: Basic---------</div>
    <div>BorderColor: <input type="color" data-property="strokeColor" class="size-short"></div>
    <div>BorderWidth: <input type="number" min="0" data-property="strokeWidth" class="size-short"></div>
    <div>BorderOpacity: <input type="number" min="0" max="100" step="1" data-property="strokeOpacity" class="size-short">%</div>
    <div>FillColor: <input type="color" data-property="fillColor" class="size-short"></div>
    <div>FillOpacity: <input type="number" min="0" max="100" step="1" data-property="fillOpacity" class="size-short">%</div>
    <div class="label-monospace">-----------Style: Advanced------</div>
    <div>BorderLineCap(dash):
        <select data-property="lineCap" class="size-medium">
            <option value="butt" selected>Butt</option>
            <option value="round">Round</option>
            <option value="square">Square</option>
        </select>
    </div>
    <div>PathLength: <input type="number" min="0" data-property="pathLength" class="size-short"></div>
    <div>DashArray: <input type="text" data-property="dashArray" placeholder="NULL" class="size-medium"> </div>
    <div>DashOffset: <input type="number" data-property="dashOffset" class="size-short"></div>
    <div class="label-monospace">-----------System---------------</div>
    <div>SystemID: <input type="text" data-property="sid" class="idtag" disabled></div>
</div>`,
}
