const form = document.querySelector(".signup form");
const continueBtn = form.querySelector(".button input");
errorText = form.querySelector(".error-txt");
form.onsubmit = (e)=>{
    e.preventDefault();
}
continueBtn.onclick = ()=>{
    //Código Ajax (new)
     //console.log("How"); 
    let xhr = new XMLHttpRequest(); //Objecto XML
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=>{
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200){
                let data = xhr.response;
                if(data == "sucesso"){
                    location.href = "users.php";
                }else{
                    errorText.textContent = data;
                    errorText.style.display = "block";
                }
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}