const steps = document.querySelectorAll(".step");
const graphics = document.querySelectorAll(".graphic-item")

steps.forEach((el, idx) => {
    // Intersection Observer객체가 observe로 관찰하는 요소가 나타나거나 사라질때 콜백함수 실행
    // 관찰대상 등록 => .step 클래스를 가진 요소
    // targetStep.observe(el);
    el.setAttribute("data-index", idx);
    graphics[idx].dataset.index = idx;
    // graphics[idx].setAttribute(
    //   "style",
    //   `background-image: url('./img/intro${idx + 1}.png')`
    // );
  });