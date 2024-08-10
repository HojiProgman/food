let btn1 = document.querySelectorAll('.tabheader__item')
btn1.forEach((item , i) => {
    item.onclick = () => {

        btn1.forEach(acbtn => {
            acbtn.classList.remove('tabheader__item_active')
        })
        item.classList.add('tabheader__item_active')
        show(i)
    }

})
let content = document.querySelectorAll('.tabcontent')

function show (idx = 0) {
    content.forEach((item) => item.classList.add('hide'))
    content[idx].classList.remove('hide')
    content[idx].classList.add('show', 'fade')
}

show()

let prev = document.querySelector(".offer__slider-prev");
let next = document.querySelector(".offer__slider-next");
let slides = document.querySelectorAll(".offer__slide");
let currentView = document.querySelector("#current");
let totalView = document.querySelector("#total");

let slideIndex = 0;

function slideShow(index) {
  if (index > slides.length - 1) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => slide.classList.add("fade", "hide"));
  slides[slideIndex].classList.remove("hide");
  currentView.textContent =
    slideIndex  >= 10 ? slideIndex : `0${slideIndex + 1}`;
}

slideShow();

prev.onclick = () => {
  slideIndex--;
  slideShow(slideIndex);
};
next.onclick = () => {
  slideIndex++;
  slideShow(slideIndex);
};

let mw = document.querySelector(".modal");
let mw_close = document.querySelector(".modal__close");
let btns = document.querySelectorAll(".btn");
let inps = document.querySelectorAll(".modal__input");
btns.forEach((btn) => {
  btn.onclick = () => {
    mw.classList.remove("hide", "fade");
    mw.classList.add("show", "fade");
  };
});

mw_close.onclick = () => {
  mw.classList.remove("show", "fade");
  mw.classList.add("hide", "fade");
};
















































// // let leftChange = document.querySelector('.offer__slider-prev')
// // let rightChange = document.querySelector('.offer__slider-next')
// // let img = document.querySelectorAll('.offer__slide')


// // console.log(leftChange);


// // function shomImg (itemImg){
    
// // rightChange.onclick = (index) => {

// //     img.forEach(each => each.classList.add('hide'))
// //     console.log(img);
// //     img[index].classList.remove('hide')
// //     img[index].classList.add('show', 'fade')
// // }
// // }
// // shomImg()
// const prev = document.querySelector(".offer__slider-prev");
// const next = document.querySelector(".offer__slider-next");
// const slides = document.querySelectorAll(".offer__slide");
// function slideShow(n) {
//     if (n > slides.length - 1) {
//       slideIndex = 0;
//     }
//     if (n < 0) {
//       slideIndex = slides.length - 1;
//     }
//     slides.forEach((slide) => slide.classList.add("fade", "hide"));
//     slides[slideIndex].classList.remove("hide");
//     currentView.innerHTML =
//       slideIndex + 1 >= 10 ? slideIndex + 1 : `0${slideIndex + 1}`;
//   }
  
//   slideShow();
// // const currentView = document.querySelector("#current");
// // const totalView = document.querySelector("#total");
// let slideIndex = 0

// prev.onclick = () => {
//     slideIndex--;
//     slideShow(slideIndex);
//   };
//   next.onclick = () => {
//     slideIndex++;
//     slideShow(slideIndex);
//   };
  
// //   const mw = document.querySelector(".modal");
// //   const mw_close = document.querySelector("[data-close]");
// // //   const btns = document.querySelectorAll("[data-modal]");
// // //   const inps = document.querySelectorAll(".modal__input");
// // //   btns.forEach((btn) => {
// // //     btn.onclick = () => {
// // //       mw.classList.remove("hide", "fade");
// // //       mw.classList.add("show", "fade");
// // //     };
// // //   });
  
// // //   mw_close.onclick = () => {
// // //     mw.classList.remove("show", "fade");
// // //     mw.classList.add("hide", "fade");
// // //     inps.forEach((inp) => (inp.value = ""));
// // //   };
  
// // //   document.body.onkeydown = (e) => {
// // //     if (mw.classList.contains("show")) {
// // //       if (e.keyCode === 27) {
// // //         mw.classList.remove("show", "fade");
// // //         mw.classList.add("hide", "fade");
// // //         inps.forEach((inp) => (inp.value = ""));
// // //       }
// // //     }
// // //   };
