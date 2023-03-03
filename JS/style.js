document.addEventListener('DOMContentLoaded',(e)=>{
   
const element = document.querySelector('.choices');
  const choices = new Choices(element,{
    searchEnabled: false,
   
  })


  new Accordion('.accordion-list',{
    elementClass:'accordion',
    triggerClass: 'accordion-control',
    panelClass: 'accordion-content',
    activeClass:'accordion-active'
  
  });

  document.querySelectorAll('.section-4-accordion-btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.section-4-accordion-btn').forEach(function(btn){
    btn.classList.remove('btn__active')});
    e.currentTarget.classList.add('btn__active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
tabsBtn.classList.remove('tabs-item--active')});
document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');


});
});


const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  loop: true,
  spaceBetween:30,
  
  breakpoints: {
  
    // when window width is >= 1025px
    1025: {
      
      slidesPerView: 4,
      spaceBetween: 30,
    },
    
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
  slidesPerView:2.5,
  spaceBetween: 40,
    }},
  // пагинация
  pagination: {
  el:'.swiper-pagination',
  clickable: true,
  },
  // навигация
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  
  },
  
});

  document.querySelector('.header-btn-search').addEventListener('click',function(){
    document.querySelector('.header__form').classList.toggle('header__form__show')
  })

  document.querySelector('.header__form').addEventListener('submit',(e)=>{
    e.preventDefault()
  })

let validation = new JustValidate('#form',{
  errorLabelStyle: {
    color: '#D52B1E'
  }
})


let btn = document.querySelector('.section-2-button');
let item = document.querySelectorAll('.section-2__item');
btn.addEventListener('click', function(){
item.forEach(function(el) {
  el.classList.add('section-2__item-visible')});
})

validation.addField("#name", [
  {
    rule: 'required',
    errorMessage : 'Введите имя'
    
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage : 'Минимум 2 символа'
    
  },
])
.addField("#email", [
  {
    rule: 'required',
    errorMessage : 'Введите почту'
  },
  {
    rule: 'email',
    errorMessage : 'Ошибка в почте'
  },
])


  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');
  burger.addEventListener('click'
  ,function() {

  menu.classList.toggle('header__nav__active');
  document.body.classList.toggle('stop-scroll');

  }
  )
document.querySelector('.header__burger').addEventListener('click',function(){
  document.querySelector('.header-btn-close').classList.add('header-btn-close__active')
  })

  document.querySelector('.header-btn-close').addEventListener('click',function(){
   document.querySelector('.header__nav').classList.remove('header__nav__active')
  })

   document.querySelector('.header-btn-close').addEventListener('click',function(){
    document.body.classList.remove('stop-scroll')
   })

   document.querySelector('.header-item').addEventListener('click',function(){
    document.body.classList.remove('stop-scroll')
   })

   

   document.querySelector('.header__burger').addEventListener('click',()=>{
    document.querySelector('.header-nav-bottom').classList.toggle('header-nav-active-bottom')
    })
    document.querySelector('.header-btn-close').addEventListener('click',function(){
      document.querySelector('.header-nav-bottom').classList.remove('header-nav-active-bottom')
     })
     
   
  
     let btn_media = document.querySelector('.header-bottom-button-media');
let conteiner = document.querySelectorAll('.header-conteiner-bottom ');
btn_media.addEventListener('click', function(){
conteiner.forEach(function(el) {
  el.classList.toggle('visible-content-mobile')});
})

document.querySelector('.header-bottom-button-media').addEventListener('click',()=>{
  document.querySelector('.header-conteiner-bottom-content').classList.toggle('header-conteiner-bottom-content--active')
  })

  document.querySelector('.header-bottom-button-media').addEventListener('click',()=>{
    document.querySelector('.header-svg-320px').classList.toggle('header-svg-320px--active')
    })

    document.querySelectorAll('.input__check').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.section-5-tabs-item').forEach(function(tabsBtn){
tabsBtn.classList.remove('section-5-tabs-item--active')});
document.querySelector(`[data-target="${path}"]`).classList.add('section-5-tabs-item--active');

});
});










   


})
