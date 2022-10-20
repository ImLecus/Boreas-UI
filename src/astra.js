const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
};
const redirect = href => {
    window.location.href = href;
};
const getClass = element =>{
    return element.getAttribute("class").toString();
};
const getPosition = element => {
    return new Vector2(element.getBoundingClientRect().x,element.getBoundingClientRect().y);
};
const getAllElements = () => {
    return Array.from(document.querySelectorAll("*"));
}
class Vector2{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
};
//Close button
Array.from(document.getElementsByClassName("close")).forEach(button =>  {
    button.addEventListener("click", () => {
        setInterval(function(){
            button.parentElement.style.opacity = parseFloat(getComputedStyle(button.parentElement).opacity - 0.1);
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
    if(mode == "radial"){ rotation = ""; }
    if(color1.toString().startsWith("--")){ color1 = `var(${color1})`; }
    if(color2.toString().startsWith("--")){ color2 = `var(${color2})`; }
    return(`${(mode == "linear")? "linear-gradient(" : "radial-gradient("}${(rotation == "")? "": rotation+","}${color1},${color2})`);
};
const parseFunctionClass = (e) => {
    return e.substring(e.indexOf("(") + 1 ,e.indexOf(")"));
}
//Function classes
const FunctionClass = (functionClass,element) => {
    let head = functionClass.substring(0, functionClass.indexOf("("));
    if(head && !head.includes("{")){
        let body = parseFunctionClass(functionClass);
        switch(head){
            default:
                console.error(`The "${head}" function class doesn't exist`);
                break;
            case "gradient":
                let attributes = body.split(",");
                element.style.background = Gradient(attributes[0],attributes[1],attributes[2],attributes[3]);
                break;
            case "bg":
                element.style.backgroundColor = `${(body.startsWith("--"))? "var(" + body + ")": body}`
                break;
            case "span":
                element.style.flexGrow = body;
                break;
            case "width":
                element.style.width = body;
                break;
            case "height":
                element.style.height = body;
                break;
            case "opacity":
                element.style.opacity = `${body}%`;
                break;  
            case "blur":
                element.style.filter = `blur(${body})`
                break;
            case "grayscale":
                element.style.filter = `grayscale(${body})`
                break;
            case "sepia":
                element.style.filter = `sepia(${body})`
                break;
                
            }
        } 
}

const getFunctionClasses = () => {
    getAllElements().filter(e => e.getAttribute("class") != null).forEach(element => {
        element.getAttribute("class").toString().split(" ").forEach(e => { 
            FunctionClass(e,element);
        });
    });
}



// Media classes

const mediaClasses = {
    queries:[
        "(prefers-color-scheme: dark)",
        "(prefers-color-scheme: light)",
        "(max-width: 600px)",
        "(max-width: 772px)",
        "(max-width: 968px)",
        "(max-width: 1200px)",
        "(max-width: 1440px)"
    ],
    names:[
        "dark", 
        "light",
        "xs",
        "s",
        "m",
        "l",
        "xl"
    ]
}

const getMediaClasses = () => {
    getAllElements().filter(e => e.hasAttribute("dark") || e.hasAttribute("light")).forEach(e => {
        let attr = mediaClasses.names.filter(c => c in e.attributes);
        attr.forEach(a => {
            if (window.matchMedia && window.matchMedia(mediaClasses.queries[mediaClasses.names.indexOf(a)]).matches) {
                let functions = e.getAttribute(a).toString().split(" ");
                functions.forEach(f => {
                    FunctionClass(f,e);
                })
            }
        });
    });  
}
document.addEventListener("DOMContentLoaded", event => {
    getFunctionClasses();
    getMediaClasses();
})
window.addEventListener(("resize"||"scroll"||"change"), event => {
    getFunctionClasses();
    getMediaClasses(); 
})