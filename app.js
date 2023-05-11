const ttp = document.getElementById("titlepage");
const ttpb = document.getElementById("titlepageBehind");
const book = document.getElementById('mainRulebook')
const p1 = document.getElementById('page1')
const p2 = document.getElementById('page2')
const p3 = document.getElementById('page3')
const p4 = document.getElementById('page4')
const p5 = document.getElementById('page5')
const p6 = document.getElementById('page6')
const p7 = document.getElementById('page7')
const p8 = document.getElementById('page8')
const p9 = document.getElementById('page9')
const p10 = document.getElementById('page10')
const p11 = document.getElementById('page11')
const p12 = document.getElementById('page12')
const p13 = document.getElementById('page13')
const p14 = document.getElementById('page14')
const bpb = document.getElementById('backpageBehind')
const bp = document.getElementById('backpage')

ttp.onclick =()=>{
    ttp.style.transform = "rotateY(-180deg) translateZ(-1px)"
    ttpb.style.transform = "rotateY(-180deg) translateZ(-1.1px)"
    book.style.transform = "translate(50%, 0) rotate3d(1, 0, 0, 20deg)"
}

ttpb.onclick =()=>{
    ttp.style.transform = "rotateY(0deg) translateZ(20px)"
    ttp.style.zIndex = "21"
    ttpb.style.transform = "rotateY(0deg) translateZ(19.9px)"
    ttpb.style.zIndex = "20"
    book.style.transform = ""
}

p1.onclick = ()=>{
    p1.style.transform = "rotateY(-180deg) translateZ(-2px)"
    p2.style.transform = "rotateY(-180deg) translateZ(-2.1px)"
}

p2.onclick = ()=>{
    p1.style.transform = "rotateY(0deg) translateZ(18px)"
    p2.style.transform = "rotateY(0deg) translateZ(17.9px)"
}

p3.onclick = ()=>{
    p3.style.transform = "rotateY(-180deg) translateZ(-3px)"
    p4.style.transform = "rotateY(-180deg) translateZ(-3.1px)"
}

p4.onclick = ()=>{
    p3.style.transform = "rotateY(0deg) translateZ(17px)"
    p4.style.transform = "rotateY(0deg) translateZ(16.9px)"
}

p5.onclick = ()=>{
    p5.style.transform = "rotateY(-180deg) translateZ(-4px)"
    p6.style.transform = "rotateY(-180deg) translateZ(-4.1px)"
}

p6.onclick = ()=>{
    p5.style.transform = "rotateY(0deg) translateZ(16px)"
    p6.style.transform = "rotateY(0deg) translateZ(15.9px)"
}

p7.onclick = ()=>{
    p7.style.transform = "rotateY(-180deg) translateZ(-5px)"
    p8.style.transform = "rotateY(-180deg) translateZ(-5.1px)"
}

p8.onclick = ()=>{
    p7.style.transform = "rotateY(0deg) translateZ(15px)"
    p8.style.transform = "rotateY(0deg) translateZ(14.9px)"
}

p9.onclick = ()=>{
    p9.style.transform = "rotateY(-180deg) translateZ(-6px)"
    p10.style.transform = "rotateY(-180deg) translateZ(-6.1px)"
}

p10.onclick = ()=>{
    p9.style.transform = "rotateY(0deg) translateZ(14px)"
    p10.style.transform = "rotateY(0deg) translateZ(13.9px)"
}

p11.onclick = ()=>{
    p11.style.transform = "rotateY(-180deg) translateZ(-7px)"
    p12.style.transform = "rotateY(-180deg) translateZ(-7.1px)"
}

p12.onclick = ()=>{
    p11.style.transform = "rotateY(0deg) translateZ(13px)"
    p12.style.transform = "rotateY(0deg) translateZ(12.9px)"
}

p13.onclick = ()=>{
    p13.style.transform = "rotateY(-180deg) translateZ(-8px)"
    p14.style.transform = "rotateY(-180deg) translateZ(-8.1px)"
}

p14.onclick = ()=>{
    p13.style.transform = "rotateY(0deg) translateZ(12px)"
    p14.style.transform = "rotateY(0deg) translateZ(11.9px)"
}

bpb.onclick = ()=>{
    bpb.style.transform = "rotateY(-180deg) translateZ(-9px)"
    bp.style.transform = "rotateY(-180deg) translateZ(-9.1px)"
    book.style.transform = "translate(100%, 0)"
}

bp.onclick = ()=>{
    bpb.style.transform = "rotateY(0deg) translateZ(11px)"
    bp.style.transform = "rotateY(0deg) translateZ(10.9px)"
    book.style.transform = "translate(50%, 0) rotate3d(1, 0, 0, 20deg)"
}
