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
  useDelay: "onload",
});
ScrollReveal().reveal(".name", {
  ...defaultProps,
  distance: "0px",
  delay: window.innerWidth > 768 ? 1000 : 700,
  scale: window.innerWidth > 768 ? -3 : 1,
  reset: true,
  useDelay: "onload",
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
  delay: 1000,
  scale: window.innerWidth > 768 ? -3 : 0,
  reset: true,
  useDelay: "onload",
});

/* About Section */
ScrollReveal().reveal(".section-title", {
  ...defaultProps,
  delay: 400,
  distance: "0px",
});
ScrollReveal().reveal(".about-wrapper__image", {
  ...defaultProps,
  delay: 600,
  scale: 0,
});

ScrollReveal().reveal(".about-wrapper__info", {
  ...defaultProps,
  delay: 700,
  distance: "100px",
  origin: window.innerWidth > 768 ? "left" : "top",
  scale: 1,
});

/* Projects Section */
ScrollReveal().reveal(".project-wrapper__text", {
  ...defaultProps,
  delay: 600,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});

ScrollReveal().reveal(".project-wrapper__image", {
  ...defaultProps,
  distance: window.innerWidth > 768 ? "800px" : "30px",
  delay: 600,
  origin: window.innerWidth > 768 ? "right" : "bottom",
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
  useDelay: "onload",
});
