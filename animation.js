gsap.registerPlugin(ScrollTrigger);

const scrollAnimation = (section) => {
  return {
    scrollTrigger: {
      trigger: section,
      toggleActions: "play complete none",
      start: "top 80%",
      end: "bottom top",
    },
  };
};

let sections = document.querySelectorAll("section");
sections.forEach(function (section) {
  let sectionText = section.querySelector(".section-title");
  let title = sectionText.querySelector(".section-title h1");
  let text1 = sectionText.querySelector(".des-animation");
  let text2 = sectionText.querySelector(".sub-title");

  let textTimeline = new gsap.timeline(scrollAnimation(section));
  textTimeline.from([title, text2], {
    opacity: 0,
    xPercent: 10,
    duration: 0.6,
    ease: "power0",
  });
  textTimeline.from(
    text1,
    {
      opacity: 0,
      xPercent: -10,
      duration: 0.8,
      ease: "power0",
    },
    "-=1"
  );
});

let figures = gsap.utils.toArray(".animation__image");
figures.forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "resume pause resume pause",
    },
  });
});

let images = gsap.utils.toArray(".animation__image img");
images.forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    scale: 1.5,
    duration: 2,
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "resume pause resume pause",
    },
  });
});

// // Fade In Transitions
function fadeInUpInit() {
  gsap.utils.toArray(".animation-wrapper").forEach((section) => {
    const elems = section.querySelectorAll(".animation-item");
    // Set starting params for sections
    gsap.set(elems, {
      y: 60,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      overwrite: "auto",
    });

    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom 30%",
      markers: false,
      // toggleActions: "play complete none",
      onEnter: () =>
        gsap.to(elems, {
          y: 0,
          opacity: 1,
          stagger: 0.7,
        }),
      // onLeave: () =>
      //   gsap.to(elems, {
      //     y: -50,
      //     opacity: 0,
      //     stagger: 0.5,
      //   }),
      // onEnterBack: () =>
      //   gsap.to(elems, {
      //     y: 0,
      //     opacity: 1,
      //     stagger: -0.5,
      //   }),
      // onLeaveBack: () =>
      //   gsap.to(elems, {
      //     y: 50,
      //     opacity: 0,
      //     stagger: -0.5,
      //   }),
    });
  });
}

fadeInUpInit();
