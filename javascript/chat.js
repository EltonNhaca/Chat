const form = document.querySelector(".typing-area"), 
inputfield= form.querySelector(".inout-field"),
sendBtn = form.querySelector("button");

sendBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest(); //Objecto XML
    xhr.open("POST", "php/chat.php", true);
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