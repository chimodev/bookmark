const cross = document.querySelector(".close")
const menu = document.querySelector(".menu")

const modal = document.querySelector(".nav-modal")
const nav = document.querySelector(".nav-pc")

cross.addEventListener("click",()=>{
    modal.classList.add("inactive")
    nav.classList.remove("inactive")
})

menu.addEventListener("click",()=>{
    modal.classList.remove("inactive")
    nav.classList.add("inactive")
})

/* accordion */

document.getElementsByClassName
const qa = document.querySelectorAll(".qa")

qa.forEach((e) => {
    e.querySelector(".question").addEventListener("click",()=>{
        let answer = e.querySelector(".answer")

        console.log(answer.style.height)
        if(answer.style.height === "0px" || !answer.style.height){
            answer.style.height = answer.scrollHeight + "px"
        }else{
            answer.style.height = "0px"
        }
    })
});

/* scroll */

const left = document.querySelectorAll(".hd-left")
const right = document.querySelectorAll(".hd-right")
const down = document.querySelectorAll(".hd-down")

window.onscroll = () =>{
    left.forEach((el)=>{
        let top = el.getBoundingClientRect().top
        show(top,el)
    })
    right.forEach((el)=>{
        let top = el.getBoundingClientRect().top
        show(top,el)
    })
    down.forEach((el)=>{
        let top = el.getBoundingClientRect().top
        show(top,el)
    })
}

function show(top,el){
    if(top<=window.innerHeight){
        el.classList.add("show")
    }else{
        el.classList.remove("show")
    }
}

function scrollToEl(element){
    const header = document.querySelector("header").getBoundingClientRect().height
    const elTop = element.getBoundingClientRect().top
    const position = elTop +window.pageYOffset - header

    window.scrollTo({
        top: position,
        behavior: "smooth",
    })
}

function scAbout(){
    scrollToEl(document.getElementById("about"))
}

function scWork(){
    scrollToEl(document.getElementById("work"))
}

function scContact(){
    console.log(document.getElementById("contact").getBoundingClientRect().top)
    scrollToEl(document.getElementById("contact"))
}



const feat = document.querySelectorAll(".feature")

function showSlide(num){
    feat.forEach(e=>{
        e.classList.remove("active-ft")
    })
    feat[num].classList.add("active-ft")
}

console.log(feat)