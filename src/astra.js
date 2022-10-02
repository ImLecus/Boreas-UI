const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
}
const redirect = href => {
    window.location.href = href;
}
const getPosition = element => {
    return new Vector2(element.getBoundingClientRect().x,element.getBoundingClientRect().y);
}
class Vector2{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
//Close button
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

//Input validation
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

//Gradient function
const Gradient = (mode,color1,color2,rotation = "") => {
    if(mode == "radial"){ rotation = "" }
    if(color1.toString().startsWith("--")){ color1 = `var(${color1})` }
    if(color2.toString().startsWith("--")){ color2 = `var(${color2})` }
    return(`${(mode == "linear")? "linear-gradient(" : "radial-gradient("}${(rotation == "")? "": rotation+","}${color1},${color2})`)
};
const BackgroundColor = (color) => {
    return(`${(color.startsWith("--"))? "var(" + color + ")": color}`)
}
const parseFunctionClass = (element,name) => {
    element = element.replace(name,"");
    element = element.replace("(","");
    element = element.replace(")","");
    return element;
}
//Applying CSS to the colour classes
Array.from(document.querySelectorAll("*")).forEach(e => {
    let c = e.getAttribute("class");
    if(c != null){
        c = c.toString();
        c.split(" ").forEach(groupElement => {
            if(groupElement.startsWith("gradient")){
                groupElement = parseFunctionClass(groupElement,"gradient");
                let attributes = groupElement.split(",");
                e.style.background = Gradient(attributes[0],attributes[1],attributes[2],attributes[3]);
            }
            else if(groupElement.startsWith("bg")){
                groupElement = parseFunctionClass(groupElement,"bg");
                e.style.backgroundColor = BackgroundColor(groupElement);
            }
            else if(groupElement.startsWith("span")){
                groupElement = parseFunctionClass(groupElement,"span");
                e.style.flexGrow = groupElement;
            }
        });
    }
});