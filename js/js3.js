const svg = document.getElementsByTagName("svg")[0];

const fill = document.getElementById("fill")
const strok = document.getElementById("strok")

// const lineBtn = document.getElementById("line")
// const rectBtn = document.getElementById("rect")
// const circleBtn = document.getElementById("circle")
// const clearBtn = document.getElementById("clear")

// lineBtn.addEventListener('click', drawLine)
// rectBtn.addEventListener('click', drawRect)
// circleBtn.addEventListener('click', drawCircle)
// clearBtn.addEventListener('click', () => svg.innerHTML = '')

function drawCircle(e){
    console.log(e);
    e.addEventListener("dragstart",(pos)=>{
        var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
        console.log(pageCoords);
        // e.target.style.opacity = 0.5
        // img = e.target
    })
    // const el = `
    // <circle cx="${xAxis.value || 0}" cy="${yAxis.value || 0}" r="${radius.value || 0}" stroke=“orange" stroke-width="4" fill="blue" />
    // `;
    // svg.innerHTML += el;
}
function drawRect(e){
    // const el = `
    // <rect width="${xOrWidth.value || 0}" height="${yOrheight.value || 0}" x="${xAxis.value || 0}" y="${yAxis.value || 0}" style="fill:rgb(0,0,255);stroke-width:10;" />
    // `;
    // svg.innerHTML += el;
}
function drawLine(e){
    // const el = `
    //     <line x1="${xAxis.value || 0}" y1="${yAxis.value || 0}" x2="${xOrWidth.value || 0}" y2="${yOrheight.value || 0}" stroke="black" style="fill:rgb(0,0,255);stroke-width:10;" stroke-linecap="round"    />
    // `;
    // svg.innerHTML += el;
}
function clear(e){
    // const el = `
    //     <line x1="${xAxis.value || 0}" y1="${yAxis.value || 0}" x2="${xOrWidth.value || 0}" y2="${yOrheight.value || 0}" stroke="black" style="fill:rgb(0,0,255);stroke-width:10;" stroke-linecap="round"    />
    // `;
    // svg.innerHTML += el;
}
function drawCurve(){
    svg
}