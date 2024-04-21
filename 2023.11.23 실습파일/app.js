const io = new IntersectionObserver((entries, observer)=>{
    entries.forEach(el=>{
       if(el.isIntersecting){
        el.target.classList.add("active")
        }else{
            el.target.classList.remove("active")
        }
    })
})



const cards = document.querySelectorAll(".reval")
cards.forEach((card)=>io.observe(card))

