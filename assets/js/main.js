/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*=============== MENU HIDDEN ===============*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
 
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when click on each nav__link, will remove the show menu class
    navMenu.classList.remove('show-menu')

}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      },
  });
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // Check if the filed has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject === ''){
      // add and remove color
      contactMessage.classList.remove('color-blue')
      contactMessage.classList.add('color-red')

      // show message
      contactMessage.textContent = 'Write all the input fields ✉️'
    }else{
      // ServiceID - TemplateID - #form - publicKey
      emailjs.sendForm('service_ep2aa8o','template_15atcad','#contact-form', 'Imx7cxT0ovkCbjUGA')
          .then(() =>{
            // show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent ✔️'

            // remove message after 5 seconds
            setTimeout(() =>{
              contactMessage.textContent = '' 
            }, 5000)
          })
    }
}

contactForm.addEventListener('submit', sendEmail);
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const  scrollUp =document.getElementById('scroll-up')
  //When the scroll is higher than 350 viewport height, add the show scroll to the tag with the scroll up
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                                :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  delay: 200,
  //reset: true /* Animations repeat */
})

sr.reveal(`.home__data, .projects__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification__content, .services__card`, {interval: 100});
