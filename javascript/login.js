const form = document.querySelector(".login form");
const continueBtn = form.querySelector(".button input");
errorText = form.querySelector(".error-txt");
form.onsubmit = (e)=>{
    e.preventDefault();
}
continueBtn.onclick = ()=>{
    //Código Ajax (new)
     //console.log("How"); 
    let xhr = new XMLHttpRequest(); //Objecto XML
    xhr.open("POST", "php/login.php", true);
    xhr.onload = ()=>{
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200){
                let data = xhr.response;
                console.log(data);
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