document.querySelector(".ham").addEventListener("click", changeIcon);

function changeIcon(event) {
  let ham = event.currentTarget;
  ham.classList.toggle("clicked");
  ham.children[0].classList.toggle("rotate-left");
  ham.children[1].classList.toggle("vanish");
  ham.children[2].classList.toggle("rotate-right");
  document.querySelector(".drawer-items").classList.toggle("visible");
}

gsap.from(".nav-main", { duration: 2, y: "-100%", ease: "bounce" });
gsap.from(".hero-img", { duration: 2, x: "90%", ease: "bounce" });
gsap.from(".heroSection_text", { duration: 2, y: "170%", ease: "bounce" });
// gsap.to(".hero-img", { rotation: 360, duration: 2.8, ease: "power10.in" });
