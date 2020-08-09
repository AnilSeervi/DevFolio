let tilt = document.querySelectorAll(".rounded");
VanillaTilt.init(tilt, {
  max: 5,
  speed: 500,
  scale: 1.1,
  glare: true,
  "max-glare": 0.3,
});

const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  origin: "bottom",
  duration: 1000,
  desktop: true,
  mobile: true,
};
ScrollReveal().reveal(".hero-title", {
  ...defaultProps,
  delay: 500,
  origin: window.innerWidth > 768 ? "left" : "bottom",
  reset: true,
  useDelay: "once",
});
ScrollReveal().reveal(".name", {
  ...defaultProps,
  delay: window.innerWidth > 768 ? 1000 : 700,
  scale: window.innerWidth > 768 ? -4 : 1,
  reset: true,
  useDelay: "once",
  rotate:
    window.innerWidth > 768
      ? {
          x: 0,
          z: 10,
          y: 100,
        }
      : { x: 0, y: 0, z: 0 },
});
ScrollReveal().reveal(".hero-cta", {
  ...defaultProps,
  delay: 1200,
  origin: window.innerWidth > 768 ? "left" : "bottom",
  reset: true,
  useDelay: "once",
});

/* About Section */
ScrollReveal().reveal(".section-title", {
  ...defaultProps,
  delay: 300,
  distance: "0px",
});
ScrollReveal().reveal(".about-wrapper__image", {
  ...defaultProps,
  delay: 600,
  scale: 0,
});

ScrollReveal().reveal(".about-wrapper__info", {
  ...defaultProps,
  distance: "50px",
  delay: 1000,
  origin: window.innerWidth > 768 ? "left" : "bottom",
  scale: 1,
});

/* Projects Section */
ScrollReveal().reveal(".project-wrapper__text", {
  ...defaultProps,
  delay: 600,
  origin: window.innerWidth > 768 ? "left" : "bottom",
  scale: 1,
});

ScrollReveal().reveal(".project-wrapper__image", {
  ...defaultProps,
  delay: 1000,
  origin: window.innerWidth > 768 ? "right" : "bottom",
  scale: 0,
});

/* Contact Section */
ScrollReveal().reveal(".contact-wrapper", {
  ...defaultProps,
  delay: 600,
  scale: 1,
});

ScrollReveal().reveal(".fa", {
  ...defaultProps,
  delay: 500,
  interval: 100,
  reset: true,
  origin: "bottom",
  useDelay: "once",
});
