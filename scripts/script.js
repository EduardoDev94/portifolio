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

   }
  
  
  
  
