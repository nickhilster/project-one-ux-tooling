// Carousel
var carouselSlide = document.querySelector(".carousel__slide");
var carouselItems = document.querySelectorAll(".carousel__item");
var carouselDots = document.querySelectorAll(".carousel__dots > li");

// Buttons
var prevBtn = document.querySelector(".carousel__button--prev");
var nextBtn = document.querySelector(".carousel__button--next");

// Counter
var Item_length = carouselDots.length;
var size = carouselItems[0].clientWidth;
var progress = false; // prevent double click on arrow
var easeInOutExpo = "cubic-bezier(.71,.37,.22,.98)";
var counter = {
    value: 1,
    increment: function () {
        this.setValue(this.value + 1);
    },
    decrement: function () {
        this.setValue(this.value - 1);
    },
    setValue: function (newVal) {
        if (this.value <= 0 || this.value >= carouselItems.length - 1 || !!progress)
            return;
        if (
            this.value === newVal ||
            newVal < 0 ||
            newVal > carouselItems.length - 1
        )
            return;

        carouselDots[this.value - 1].classList.remove("slide-active");
        this.value = newVal;

        if (this.value === 0)
            carouselDots[Item_length - 1].classList.add("slide-active");
        else if (this.value === carouselItems.length - 1)
            carouselDots[0].classList.add("slide-active");
        else carouselDots[this.value - 1].classList.add("slide-active");

        progress = true;
        carouselSlide.style.transition = `transform 1s ${easeInOutExpo}`;
        carouselSlide.style.transform = `translateX(${-size * this.value}px)`;
        resetTimer();
    }
};

var carousel_interval = setInterval(() => {
    counter.increment();
}, 4000);

var resetTimer = function () {
    clearInterval(carousel_interval);
    carousel_interval = setInterval(() => {
        counter.increment();
    }, 4000);
};

carouselSlide.style.transform = `translateX(${-size * counter.value}px)`;

window.addEventListener("resize", function (e) {
    size = carouselItems[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-size * counter.value}px)`;
});

prevBtn.addEventListener("click", function (e) {
    counter.decrement();
});

nextBtn.addEventListener("click", function (e) {
    counter.increment();
});

carouselSlide.addEventListener("transitionend", function (e) {
    carouselSlide.style.transition = "";
    progress = false;

    if (
        carouselItems[counter.value].classList.contains("carousel__item--cloned")
    ) {
        if (counter.value === 0) counter.value = carouselItems.length - 2;
        else counter.value = 1;

        carouselSlide.style.transform = `translateX(${-size * counter.value}px)`;
    }
});

carouselDots.forEach((dot, index) => {
    let dot_button = dot.querySelector("button");

    dot_button.addEventListener("click", function (e) {
        counter.setValue(index + 1);
    });
});



const sections=document.querySelectorAll('.fullviewport');
const sectionsPos={};

sections.forEach((section)=>{
  sectionsPos[section.id]=section.offsetTop;
});

window.onscroll=()=>{
  var scrollPos=document.documentElement.scrollTop || document.body.scrollTop;
  for(var id in sectionsPos){
    if(sectionsPos[id]<=scrollPos+100){
      var style=getComputedStyle(document.querySelector(`.fullviewport[id*=${id}]`))
      var color=style.backgroundColor;
      console.log(color);
      document.querySelector('.active').style.color="#ffffff";
       document.querySelector('.active').classList.remove('active'); document.querySelector(`a[href*=${id}]`).classList.add('active');
      document.querySelector(`a[href*=${id}]`).style.color=color;
    }
  }
}



const $story = document.querySelector('.handbook')

                                                                                
let windW = document.documentElement.getBoundingClientRect().width
let windH = document.documentElement.getBoundingClientRect().height
let storW = $story.scrollWidth
let storH = $story.scrollHeight
let storyW = storW - windW
let storyH = windH - storH


document.documentElement.style.height = `${storyH + storyW - windW}px`;

window.addEventListener('scroll', (event) => {
    // let winH = document.documentElement.clientHeight
    {
    let top = $story.getBoundingClientRect().top
    let bottom = $story.getBoundingClientRect().bottom

   {
                $story.style.transform = `translateX(${window.scrollY * -1}px)`
        }
    }
})


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }