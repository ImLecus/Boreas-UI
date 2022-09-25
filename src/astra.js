function copyToClipboard(text){
    navigator.clipboard.writeText(text);
}
function redirect(href){
    window.location.href = href;
}

Array.from(document.getElementsByClassName("close")).forEach(button =>  {
    button.addEventListener("click", () => {
        setInterval(function(){
            button.parentElement.style.opacity = parseFloat(getComputedStyle(button.parentElement).opacity - 0.1)
            if(getComputedStyle(button.parentElement).opacity <= 0){
                button.parentElement.remove();
            }
        },50);
    });
});
Array.from(document.getElementsByClassName("validation")).forEach(e =>  {
    e.addEventListener("input", () => {
        let isValid = false;
        switch(e.getAttribute("type")){
            case "mail":
                isValid = e.value.includes("@") && e.value.includes(".") ? true: false;
                break;
            case "checkbox":
                if(e.hasAttribute("required")){
                    isValid = e.checked;
                }
                else{
                    isValid = true;
                }
                break;
            default:
                isValid = e.value != "" ? true: false;
                break;
        }
        if(isValid){
            e.classList.add("valid");
            e.classList.remove("invalid");
            
        }
        else if(e.value != ""){
            e.classList.remove("valid");
            e.classList.add("invalid");
        }
        else{
            e.classList.remove("valid");
            e.classList.remove("invalid");
        }
    }); 
});



