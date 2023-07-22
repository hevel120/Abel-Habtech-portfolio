/* show menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggel'),
      navClose = document.getElementById('nav-close')

  /*   menu show */
  if(navToggle){
    navToggle.addEventListener('click',()=>{
      navMenu.classList.add('show-menu')
    })
  }    

  /*   menu hidden */
  if(navClose){
    navClose.addEventListener('click',()=>{
      navMenu.classList.remove('show-menu')
    })
  }

  /*     remove menu mobile    */ 
  const navLink = document.querySelectorAll('.nav--link')

  const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))
      
  /*   chenge background header   */
  const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll', blurHeader)


  /*        show scroll up   */
  const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                   : scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)


  /*        scroll section activ link    */
  const sections = document.querySelectorAll('section[id]')

  const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop =current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      }else{
        sectionsClass.classList.remove('active-link')
      }
        
    })
  }
  window.addEventListener('scroll', scrollActive)


  //           email js      //
  const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

  const sendEmail = (e) =>{
    e.preventDefault()

      // service Id - templetID - #form - publickey //
    emailjs.sendForm('service_ep5rl0r', 'template_we26hiu', '#contact-form', 'BlCc1bB-HU8tVsU5N' )
      .then(() =>{
        contactMessage.textContent = 'Message sent successfully ✔'

        // remove message  //
        setTimeout(()  =>{
          contactMessage.textContent = ''
        }, 5000)

        //clear input message  //
        contactForm.reset()

      }, () =>{

        contactMessage.textContent = 'Message not sent (service error) ✖'
      })
  }  
  
  contactForm.addEventListener('submit', sendEmail)


  // scroll//
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: 400,
  })

  sr.reveal(`.home--content, .contact--container, .footer--container`)
  sr.reveal(`.home--image`, {origin: 'bottom'})
  sr.reveal(`.about--data, .skills--data`, {origin: 'left'})
  sr.reveal(`.about--image,.skills--content`, {origin: 'right'})
  sr.reveal(`.tabel--body`, {origin: 'bottom'})
  sr.reveal(`.services--card , .projects--card`,{interval: 100})