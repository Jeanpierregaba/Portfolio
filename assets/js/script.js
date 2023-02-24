const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
  // get current scroll position
  let scrollY = window.pageYOffset;
  // now we loop through sections to get height, top and ID values for each
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.icon a[href*=' + sectionId +']').classList.add("active")
    }else{
      document.querySelector('.icon a[href*=' + sectionId +']').classList.remove("active")
    }
  })
    
}

const menuHamburger = document.querySelector(".menu-ham")
        const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })