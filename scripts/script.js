console.log('js vinculado')

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrolled = window.scrollY;

  // Adiciona ou remove a classe "scroll" no header dependendo do scroll da página
  if (scrolled > 0) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});


const toggleCircle = document.querySelector('.toggle-circle')

toggleCircle.addEventListener ('click', changeTheme)

function changeTheme(){
  changeColors()
  changeBodyBgImage()
  changeHeaderBgImage()
  changeDetailImage()
  changeRightImage()
  changeLinkedinImage()
  changeSkillsIcons ()
}


function changeColors() {
    const root = document.querySelector(":root")
    const body = document.querySelector('#body')
    if (body.dataset.theme === "blue"){
        root.style.setProperty("--primary-color", "#000C24")
        root.style.setProperty("--second-color", "#F8F8F8")
        root.style.setProperty("--third-color", "#1AC7E9")
        body.dataset.theme = "white" } 
     else {
        root.style.setProperty("--primary-color", "#F8F8F8")
        root.style.setProperty("--second-color", "#000C24")
        root.style.setProperty("--third-color", "#1AC7E9")
        body.dataset.theme = "blue"
    }
}

function changeHeaderBgImage(){
  const header = document.querySelector('#header')
  if(header.classList.contains('blue-header')){
    header.classList.remove('blue-header')
    header.classList.add('white-header')
  }else {
    header.classList.remove('white-header')
    header.classList.add('blue-header')
  }
}
 function changeDetailImage(){
  const detailImage = document.querySelector('#detail-image')
  if(detailImage.src.includes("/imgs/mancha-azul.png")) {
    detailImage.src = '/imgs/mancha-branca.png'
  }else{
    detailImage.src = '/imgs/mancha-azul.png'
  } 
 }


function changeBodyBgImage() {
    const body = document.querySelector('#body');
    
    if (body.classList.contains('blue-bg')) {
      body.classList.remove('blue-bg');
      body.classList.add('white-bg');
    } else {
      body.classList.remove('white-bg');
      body.classList.add('blue-bg');
    }
  }
 
  
  function changeRightImage(){
    const paintImage = document.querySelector('#paint-image')
    if(paintImage.src.includes("/imgs/relative-img-blue.png")) {
      paintImage.src = "/imgs/relative-img-white.png"
    }else{
      paintImage.src = "/imgs/relative-img-blue.png"
    } 
   }
  
   function changeLinkedinImage(){
    const linkedin = document.querySelector('#linkedin-image')
      if(linkedin.src.includes("/imgs/icons/linkedin-white.png")) {
        linkedin.src = "/imgs/icons/linkedin-blue.png"
      }else{
        linkedin.src = "/imgs/icons/linkedin-white.png"
      } 
    }
   
  function changeSkillsIcons() {
    const htmlIcon = document.querySelector('#html-icon')
    const skills = document.querySelector('.skills-icons')
    if(htmlIcon.src.includes ("/imgs/icons/htmlicon-bgblue.svg")){
      skills.innerHTML = ''
      skills.innerHTML = `                 <img id="html-icon" src="/imgs/icons/htmlicon.svg" alt="html-icon">
      <img src="/imgs/icons/cssicon.svg" alt="css-icon">
      <img src="/imgs/icons/giticon.svg" alt="git-icon">
      <img src="/imgs/icons/jsicon.svg" alt="js-icon">
      <img src="/imgs/icons/nodeicon.svg" alt="node-icon">
      <img src="/imgs/icons/reacticon.svg" alt="react-icon">
      <img src="/imgs/icons/csharpicon.svg" alt="c#-icon">   `
    }else{
      skills.innerHTML = ''
      skills.innerHTML = `                <img id="html-icon" src="/imgs/icons/htmlicon-bgblue.svg" alt="html-icon">
      <img src="/imgs/icons/cssicon-bgblue.svg" alt="css-icon">
      <img src="/imgs/icons/giticon-bgblue.svg" alt="git-icon">
      <img src="/imgs/icons/jsicon-bgblue.svg" alt="js-icon">
      <img src="/imgs/icons/nodeicon-bgblue.svg" alt="node-icon">
      <img src="/imgs/icons/reacticon-bgblue.svg" alt="react-icon">
      <img src="/imgs/icons/csharp-bgblue.svg" alt="c#-icon">   `
    }
  }
  
  

  // Menu responsivo
const icon = document.querySelector('#burguer')
const menu = document.querySelector('#menu-mobile')

icon.addEventListener ('click', clickMenu )

function clickMenu() {
    if (menu.style.display == 'block'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

