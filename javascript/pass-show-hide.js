

const pswrdfield = document.querySelector(".form .field input[type='password']");
const toogleBtn = document.querySelector(".form .field i");


toogleBtn.onclick = ()=>{
    
  if(pswrdfield.type == "password"){
    pswrdfield.type="text";
    toogleBtn.classList.add("active");
  }else{
    pswrdfield.type= "password";
    toogleBtn.classList.remove("active");
  }
}