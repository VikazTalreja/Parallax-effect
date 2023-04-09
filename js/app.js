const parallax_el = document.querySelectorAll(".parallax");

let Xvalue = 0,
  Yvalue = 0;

window.addEventListener("mousemove", (e) => {
  Xvalue = e.clientX - window.innerWidth / 2;
  Yvalue = e.clientY - window.innerHeight / 2;

  parallax_el.forEach((element) => {
    let speedx = element.dataset.speedx;
    let speedy = element.dataset.speedy;
    element.style.transform = `translateX(calc(-50% + ${
      -Xvalue * speedx
    }px)) translateY(calc(-50% + ${-Yvalue * speedy}px))`;
  });
});
