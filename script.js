console.log("working");
let layer1 = document.querySelector("#layer1");
let layer2 = document.querySelector(".layer2");
let mainEvent = document.querySelector(".event-cont");
let siteoFd = document.querySelector(".cont-bottom");

mainEvent.addEventListener("mousemove", () => {
      layer1.style.opacity = "1"
})
mainEvent.addEventListener("mouseout", () => {
      layer1.style.opacity = "0"
})
siteoFd.addEventListener("mousemove", () => {
      layer2.style.opacity = "1"
})
siteoFd.addEventListener("mouseout", () => {
      layer2.style.opacity = "0"
})



let tl = gsap.timeline();


tl.from(".animate", {
      opacity: 0,
      duration: 0.5,
      y: "-100%"
})

tl.from("#logo,#search,#login,#submit", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
      y: "-10%"
})

tl.from(".big-txt", {
      opacity: 0,
      duration: 1,
      stagger: 1,
      y: "-10%",
})

tl.from(".moving-date", {
      opacity: 0,
      // stagger:0.3,
      y: "100%"
})

tl.from(".event-cont", {
      opacity: 0,
      scale: 0,
      borderRadius: "30%",
      duration: 1.5,
})

gsap.from(".p2-top-lft,.p2-top-rght", {
      opacity: 0,
      y: "-30%",
      // stagger:0.5,
      duration: 1,
      scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 500px",
            end: "100px 300px",
            // scrub:4,
            // markers:true,
      }
})

gsap.from(".center", {
      opacity: 0,
      y: "-10%",
      stagger: 0.5,
      duration: 0.5,
      scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 300px",
            end: "100px 300px",
      }
})

gsap.from(".events", {
      opacity: 0,
      y: "-10%",
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 200px",
            end: "100px 100px",
      }

})
gsap.from(".third-ani", {
      opacity: 0,
      y: "30%",
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 100px",
            end: "100px 100px",
      }

})


gsap.from(".p3-top .Center", {
      opacity: 0,
      y: "50%",
      duration: 0.5,
      scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "300px 500px",
            end: "500px 400px",
      }
})


gsap.from(".p3-top h1", {
      opacity: 0,
      y: "10%",
      duration: 1,
      scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "300px 450px",
            end: "500px 400px",
            // markers:true,
      }
})

gsap.from(".p3-top .p3-last-p ", {
      opacity: 0,
      y: "10%",
      duration: 1,
      scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "300px 400px",
            end: "500px 400px",
      }
})


gsap.from(".p3-bottom .card-cont", {
      opacity: 0,
      y: "30%",
      stagger: 0.1,
      scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            scrub: 4,
            start: "200px 300px",
            end: "300px 250px",
            // markers:true,
      }
})



gsap.from("#all-teams", {
      opacity: 0,
      y: "30%",
      stagger: 0.1,
      scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            // scrub:4,
            start: "600px 300px",
            end: "650px 250px",
            // markers:true,
      }
})

gsap.from(".p4-top p,.p4-top h1", {
      opacity: 0,
      stagger: 0.5,
      y: "10%",
      duration: 1,
      scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "160px 500px",
            end: "100px 500px",
      }

})
gsap.from(".p4-first,.p4-second,.p4-third", {
      opacity: 0,
      y: "10%",
      stagger: 0.4,
      duration: 1,
      scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "260px 500px",
            end: "100px 500px",
      }

})

gsap.from(".p5-first-p,.p5-first-h,.p5-second-p", {
      opacity: 0,
      y: "-40%",
      stagger: 0.4,
      duration: 1,
      scrollTrigger: {
            trigger: "#page5",
            scroller: "body",
            start: "300px 500px",
      }

})


gsap.from(".p5-card", {
      opacity: 0,
      y: "10%",
      stagger: 0.4,
      duration: 1,
      scrollTrigger: {
            trigger: "#page5",
            scroller: "body",
            start: "450px 500px",
      }

})


gsap.from(".name,.profile,.awards,.category", {
      opacity: 0,
      y: "10%",
      stagger: 0.4,
      duration: 1,
      scrollTrigger: {
            trigger: "#page5",
            scroller: "body",
            start: "980px 500px",
      }
})

gsap.from("#page6 .Center", {
      opacity: 0,
      y: "-20%",
      stagger: 1,
      duration: 1,
      scrollTrigger: {
            trigger: "#page6",
            scroller: "body",
            start: "100px 400px",
      }

})

gsap.from(".cont-bottom", {
      opacity: 0,
      scale: 0,
      y: "10%",
      borderRadius: "10%",
      duration: 1.5,
      scrollTrigger: {
            trigger: "#page6",
            scroller: "body",
            start: "300px 400px",
      }

})

// gsap.from(".creator",{
//                opacity:0,
//                y:"10%",
//                duration:0.4,
//                scrollTrigger:{
//                               trigger:"#page6",
//                               scroller:"body",
//                               start:"600px 30px",
//                }

// })

gsap.from("#footer-img", {
      opacity: 0,
      y: "-40%",
      duration: 0.8,
      scrollTrigger: {
            trigger: "footer",
            scroller: "body",
            start: "100px 500px",
            end: "200px 500px",
      }

})


gsap.from(".footer-cont", {
      opacity: 0,
      y: "-40%",
      duration: 0.8,
      scrollTrigger: {
            trigger: "footer",
            scroller: "body",
            start: "100px 460px",
            end: "200px 500px",
      }
})

gsap.from(".ftb", {
      opacity: 0,
      y: "-40%",
      duration: 0.8,
      stagger: 0.5,
      scrollTrigger: {
            trigger: "footer",
            scroller: "body",
            start: "100px 460px",
            end: "200px 500px",
      }

})

