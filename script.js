function locomotive() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    lerb: 0.01,
    smooth: true,
  });
}
// locomotive();
let page1 = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let img = document.querySelector(".img");
page1.addEventListener("mousemove", (val) => {
  gsap.to(cursor, {
    x: val.clientX,
    y: val.clientY,
    duration: 0.5,
    ease: "power1.out",
  });
});
img.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 2,
    opacity : 1,
    backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
    duration: 0.5,
    ease: "power1.out",
  });
});
img.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    opacity : 0,
    backgroundImage:
      "radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%)",
  });
});
