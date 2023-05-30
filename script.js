
function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  }
  
  init()
  
  
  gsap.to("#page2 #img", {
    width: "100%",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      // markers:true,
      start: "top 10%",
      end: "top -40%",
      scrub: true,
      pin: true
    }
  })
  
  gsap.from("#page3 h1", {
    rotate: 5,
    y: 100,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
      trigger: "#page3 h1",
      scroller: "#main",
      // markers: true,
      start: "top 60%",
      end: "top 40%",
      scrub: 3
    }
  })
  
  
  document.addEventListener("mousemove", function (dets) {
    document.querySelector("#cursor").style.left = `${dets.x + 20}px`
    document.querySelector("#cursor").style.top = `${dets.y + 20}px`
  })
  
  
  var flag = 0
  document.querySelector("#menu").addEventListener("click", function () {
    if (flag == 0) {
      document.querySelector("#menu").style.height = "24px"
      document.querySelector("#line1").style.rotate = "47deg"
      document.querySelector("#line2").style.rotate = "-48deg"
      document.querySelector("#full-scr").style.top = 0
      flag = 1
    } else {
      document.querySelector("#menu").style.height = "12px"
      document.querySelector("#line1").style.rotate = "0deg"
      document.querySelector("#line2").style.rotate = "0deg"
      document.querySelector("#full-scr").style.top = "-100%"
      flag = 0
    }
  
  })
  
  
  
  var loader = gsap.timeline()
  
  loader.to("#kuch-bhi h5", {
      y: -84,
      delay: 1.5,
      duration: 1.7,
    })
    .to("#text-anime", {
      y: -40,
      rotateX: 90,
      duration: 0.8,
      opacity: 0
    })
    .to("#loader1", {
      height: 0,
      duration: 0.8,
      delay: 0.5
    })
    .to("#loader2", {
      height: 0,
      duration: 0.8,
    }, "-=0.3")
    .to("#loader3", {
      height: 0,
      duration: 0.8,
    }, "-=1")
    .to("#loader4", {
      height: 0,
      duration: 0.8,
    }, "-=0.7")
    .to("#loader", {
      top: "-100vh",
      duration: 0.1
    })
  
  
  
  var page4TL = gsap.timeline({
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      scrub: 2,
      // markers: true,
      start: "top 0",
      end: "top -100%",
      pin: true
    }
  })
  
  
  page4TL.from("#page4 h1", {
    scale: 1.95,
    lineHeight: "30vw"
  }, "anim")
  page4TL.from("#page4 h2", {
    scale: 1.8,
    lineHeight: "43vw"
  }, "anim")
  page4TL.to("#page5", {
    y: "-180vh"
  }, "anim")
  
  
  
  
  
  
  var all = document.querySelectorAll(".box")
  all.forEach(function(e){
  
    e.addEventListener("mouseenter",function(){
      document.querySelector("#cursor").innerHTML = "More"
      document.querySelector("#cursor").style.scale = 3.5
      document.querySelector("#cursor").style.backgroundColor = "#fff"
      document.querySelector("#cursor").style.borderColor = "#fff"
    })
    e.addEventListener("mouseleave",function(){
      document.querySelector("#cursor").innerHTML = ""
      document.querySelector("#cursor").style.scale = 1
      document.querySelector("#cursor").style.backgroundColor = "transparent"
      document.querySelector("#cursor").style.borderColor = "#e1e1e1"
    })
    
  })

  
var btn = document.querySelector(".btn1").addEventListener("mouseenter",function(){
  document.querySelector("#cursor").style.scale = 2.5
  document.querySelector("#cursor").style.borderColor = "#fff"
  // document.querySelector(".cursor").style.opacity = 0
})

var btn= document.querySelector(".btn1").addEventListener("mouseleave",function(){ 
  document.querySelector("#cursor").style.scale = 1
  // document.querySelector(".cursor").style.opacity = 1
  
})
  
  var page6TL = gsap.timeline({
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      // markers:true,
      scrub:2,
      pin:true
    }
  })
  page6TL.to("#page6 h1",{
    scale:4,
    filter:"blur(20px)",
    opacity:0,
  })
  page6TL.to("#page6 #para",{
    opacity:1,
  })
  
  
  
  gsap.from("#box1 img",{
    height:"200%",
    scrollTrigger:{
      trigger:"#page4",
      scroller:"#main",
      // markers:true,
      start:"top 160%",
      end:"top 159%",
      scrub:2
    }
  })

  gsap.from("#page7 h1",{
    y:50,
    opacity:0,
    stagger:2,
    scrollTrigger:{
      trigger:"#page7",
      scroller:"#main",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
      scrub:2
    }
  })
 
  // gsap.from("#page5 .box img",{
  //   height:"150%",
  // scrollTrigger: {
  // trigger: "#page5 .box img",
  // scroll: "#main",
  // markers:true,
  // start:"top 40%",
  // end: "top 20%",
  // scrub: true,
  // // pin: true
  // }
  // })
  
// gsap.from("#page5 #box1 img",{
//   height:"150%",
// scrollTrigger: {
// trigger: "#page5 #box1 img",
// scroll: "#main",
// start:"top 40%",
// end: "top 20%",
// scrub: true,
// // pin: true

// }
// })
// gsap.from("#page5 #box2 img",{
// height:"150%",
// scrollTrigger: {
// trigger: "#page5 #box2 img",
// scroll: "#main",
// start:"top 40%",
// end: "top 20%",
// scrub: true,
// }
// })

// gsap.from("#page5 #box3 img",{
// height:"150%",
// scrollTrigger: {
// trigger: "#page5",
// scroll: "#main",
// markers:true,
// start:"top 40%",
// end: "top 20%",
// scrub: true,
// }
// })
