var cur = document.querySelector("#cursor")
var blu = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    cur.style.left =dets.x + "px" 
    cur.style.top = dets.y + "px" 
    blu.style.left = dets.x - 200 + "px"
    blu.style.top = dets.y - 200 + "px"
})



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    delay:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25vh",
        end: "top -70%",
        scrub:2
    }
})

