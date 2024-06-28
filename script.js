gsap.to("#nav",{
    backgroundColor:"rgb(0,255,0,0.2)",
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        scrub:2,
        start:"top -10%",
        end:"top -20%"
    }
})
