  // IIFE: 즉시실행함수
  // 즉시 실행 함수는 단 한 번만 호출되며 다시 호출할 수 없음
  // 이 안에 들어있는 코드를 바로 실행하라

  //why?
  // -전역변수, 전역함수가 되지 않도록 방지(회피)
  // - 클로저: 외부 변수를 기억하고 외부변수에 접근할 수 있는 함수

  //인수(Argument): 함수를 호출할 때 건네주는 변수
  //인자(Parameter): 함수에서 정의되어 함수 내부에서 사용되는 변수 cf)매개변수,파라미터

  (() => {
    const step = document.querySelectorAll(".step");
    const graphic = document.querySelectorAll(".graphic-item");
    let catchIndex; //감지된 인덱스 번호

    const activeBg = (item, catchIndex) => {
      // 관찰대상 요소인(step) 감지가 된다면
      if (item.isIntersecting) {
        //관찰대상요소의 index와 일치하는 graphic에 visible 추가
        //ex) 1번째 step 감지 => graphic[0]
        graphic[catchIndex].classList.add("visible");
      } else {
        graphic[catchIndex].classList.remove("visible");
      }
    };

    //intersectionobserver 관찰자 등록
    const targetStep = new IntersectionObserver((enteries, observer) => {
      enteries.forEach((item) => {
        //관찰할 인덱스 번호를 전역변수인 catchIndex에 저장
        catchIndex = parseInt(enteries[0].target.dataset.index);

        //catchIndex => type: String
        // data-index = "1" => 문자
        // 문자 or 문자열을 숫자로 변환 => 1)곱하기 1 , 2) parseInt(), 3) Number()

        //관찰 대상 요소들과 인덱스 번호를 activeBG함수의 인수로 넘겨줌
        activeBg(item, catchIndex);
      });
    });

    step.forEach((el, idx) => {
      // Intersection Observer객체가 observe로 관찰하는 요소가 나타나거나 사라질때 콜백함수 실행
      // 관찰대상 등록 => .step 클래스를 가진 요소
      targetStep.observe(el);
      el.setAttribute("data-index", idx);
      graphic[idx].dataset.index = idx;
      graphic[idx].setAttribute(
        "style",
        `background-image: url('./img/intro${idx + 1}.png')`
      );
    });

    window.addEventListener("load", () => {
      setTimeout(() => scrollTo(0, 0), 100);
      graphic[0].classList.add("visible");
    });
  })();
