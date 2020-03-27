let $bar = document.querySelector('.progress')


window.addEventListener('scroll', event=> {
let winH = window.innerHeight

let documentH = document.documentElement.scrollHeight

let amntScrolled = window.scrollY

let ttlAvailable = documentH - winH

let percent = amntScrolled / ttlAvailable //0.5
//change the width of the progress element
$bar.style.width = `${percent * 100}%`

})