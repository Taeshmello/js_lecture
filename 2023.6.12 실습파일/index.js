// 메인메뉴에 마우스 오버 시 => 서브메뉴가 아래로 펼쳐짐
// 메인메뉴에 마우스 아웃 시 => 서브메뉴가 사라짐

//메인메뉴
const mainMenu = document.querySelectorAll("#menu > ul > li")


//서브메뉴
const subMenu = document.querySelectorAll(".sub")

// 메인메뉴들에 2가지의 이벤트를 적용
mainMenu.forEach((el, idx)=>{

    // 메인메뉴에 마우스 오버 시 => 서브메뉴가 확장됨
    el.addEventListener("mouseover",()=>{
        //초기 서브메뉴의 높이: 0px
        // 서브메뉴의 갯수에 따라 서브메뉴의 높이값은ㅇ 달라짐
        // 서브메뉴의 높이: 서브메뉴의 갯수 x 각 서브메뉴의 높이
        // => 서브메뉴.children.length or 서브메뉴.children.elementCount
        // => 서브메뉴.children.length * (1. style.height, 2. offsetHeight, 3. getBoundingClientRect().height)
        
        console.log(subMenu[idx].children.length)

        //마우스 오버된 각 서브메뉴의 높이
        let sub_height = subMenu[idx].firstElementChild.offsetHeight;

        console.log(sub_height)

        //전체 서브멤뉴의 높이 = 서브메뉴의 갯수 * 각 서브메뉴의 높이

        subMenu[idx].style.height = `${subMenu[idx].children.length * sub_height}px`

        if(subMenu[idx].children.length == 0){
            (() => { console.warn = console.error = () => {}} )();
        }






    })

    // 메인메뉴에 마우스 아웃 시 => 서브메뉴가 사라짐
    el.addEventListener("mouseout",()=>{

        subMenu[idx].style.height = "0px";

    })
})