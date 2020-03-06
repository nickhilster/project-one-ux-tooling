let $bar = document.querySelector('.progress')


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
})


window.addEventListener('mousemove', event=> {

  document.body.innerHTML += `<div class="dot" style="top:${event.clientY}px; left:${event.clientX}px;"></div>`

})