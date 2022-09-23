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

