(() => {
  const btn = document.querySelector(".menu_btn");
  const nav = document.querySelector(".navbar");
  const a_btn = document.querySelectorAll(".menu_item");
  const section = document.querySelectorAll(".secPage");
  const header = document.querySelector("header");
  let headerHeight;

  // const headerItems = [
  //   document.querySelector(".logo"),
  //   ...document.querySelectorAll(".menu_item"),
  // ];

  // const moeveToPage = (idx) => { 
  //   const secHeight = section[idx].offsetTop - header.offsetHeight;
  //   window.scrollTo({
  //     top: secHeight,
  //     behavior: "smooth",
  //   });
  // };

  // headerItems.forEach((el, idx) => {
  //   el.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     moeveToPage(idx);
  //   });
  // });

  const move = (index) => {
    let sectionsPosi = section[index].offsetTop;
    headerHeight = header.offsetHeight;

    let um = sectionsPosi - headerHeight;
    window.scroll({
      top: um,
      behavior: "smooth",
    });
  };

  a_btn.forEach((el, idx) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      move(idx);
    });
  });

  let flag = true;

  const menu_toggle = () => {
    if (flag) {
      gsap.to(topLine, {
        rotation: -45,
        top: 35,
        duration: 0.3,
      });
      gsap.to(middleLine, {
        transformOrigin: "left",
        scaleX: 0,
        duration: 0.2,
      });
      gsap.to(bottomLine, {
        rotation: 45,
        top: 35,
        duration: 0.3,
      });
      flag = false;
    } else {
      gsap.to(topLine, {
        rotation: 0,
        top: "25px",
        duration: 0.3,
      });
      gsap.to(middleLine, {
        top: "35px",

        scaleX: 1,
        duration: 0.2,
      });
      gsap.to(bottomLine, {
        rotation: 0,
        top: "45px",
        duration: 0.3,
      });
      flag = true;
    }
  };

  btn.addEventListener("click", (e) => {
    menu_toggle();
    const menuHeight = nav.firstElementChild.offsetHeight;
    nav.classList.toggle("active");

    nav.classList.contains("active")
      ? (nav.style.height = `${menuHeight}px`)
      : (nav.style.height = `0px`);
  });
})();

document.querySelector(".logo").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
