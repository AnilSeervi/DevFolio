const img = document.querySelectorAll(".img-fluid");
for (let i = 1; i < img.length; i++) {
  img[i].addEventListener("mousemove", function (p) {
    if (window.innerWidth > 768) {
      img[i].style.transition = ``;
      let rotateX = -(img[i].width / 2 - p.pageX) / 150;
      let rotateY = (img[i].height / 2 - p.pageY) / 200;
      img[
        i
      ].style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  });
  img[i].addEventListener("mouseout", function () {
    img[i].style.transform = ``;
    img[i].style.transition = `transform 400ms ease-out`;
  });
}
