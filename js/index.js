let $bar = document.querySelector('.progress')
let $heading = document.querySelector('#heading')

window.addEventListener('scroll', event => {
  // Window height
  let windowH = window.innerHeight
  // Document height
  let documentH = document.documentElement.scrollHeight
  // How much has been scrolled
  let amtScrolled = window.scrollY
  // How much CAN be scrolled
  let ttlAvailable = documentH - windowH 
  // What percentage of the scrollable is scrolled
  let percent = amtScrolled / ttlAvailable  // 0.5

  // Take the decimal percentage and convert to /100%
  $bar.style.width = `${percent * 100}%`  // 50%
  $bar.textContent = `${Math.round(percent * 100)}%`


  if (percent >= 0.75) {
    $bar.style.backgroundColor = `green`
  } else if (percent >= 0.5) {
    $bar.style.backgroundColor = `teal`
  } else if (percent >= 0.25) {
    $bar.style.backgroundColor = `darkteal`
  } else {
    $bar.style.backgroundColor = `limegreen`
  }

  //////////////////////////////


  // How tall is the $heading?
  let hHeight = $heading.getBoundingClientRect().height

  // How far is the element from the top
  let hFromTop = $heading.getBoundingClientRect().top

  // console.log(hHeight, hFromTop, windowH)

  if (hFromTop < 0) {
    console.log('The element is above the viewport')
    $heading.classList.remove('show')
  } 
  else if (hFromTop < windowH - hHeight) {
    console.log('The element is in view')
    $heading.classList.add('show')
  } 
  else {
    console.log('The element is below the viewport')
    $heading.classList.remove('show')
  }




  // if (amtScrolled > h1Top + h1Height) {
  //   console.log('h1 is off the top')
  //   $heading.classList.add(`fixed`)
  // }


})


// window.addEventListener('mousemove', event=> {

//   document.body.innerHTML += `<div class="dot" style="top:${event.clientY}px; left:${event.clientX}px;"></div>`

// })