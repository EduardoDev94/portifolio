console.log('js vinculado')

const toggleCircle = document.querySelector('.toggle-circle')



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
 
  
  
  
  
  
  
  
