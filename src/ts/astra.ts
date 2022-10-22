const copyToClipboard = (text:string) => {
    navigator.clipboard.writeText(text);
}
const redirect = (href:string) => {
    window.location.href = href;
}
const getClass = (element:any) => {
    return element.getAttribute("class").toString();
}
class Vector2{
    constructor(x:number = 0, y:number = 0){
        var x = x;
        var y = y;
    }
}
class Vector3{
    constructor(x:number = 0, y:number = 0, z:number = 0){
        var x = x;
        var y = y;
        var z = z;
    }
}
const getPosition = (element:any) => {
    return new Vector3(element.getBoundingClientRect().x,element.getBoundingClientRect().y,element.style.zIndex);
};
const get3DPosition = (element:any) => {getPosition(element);}
const get2DPosition = (element:any) => {
    return new Vector2(element.getBoundingClientRect().x,element.getBoundingClientRect().y);
}
const getAllElements = () => {
    return Array.from(document.querySelectorAll<HTMLElement>("*"));
}

//Close button
var buttons = Array.from(document.querySelectorAll(".close"));
buttons.forEach(button =>  {
    button.addEventListener("click", () => {
        setInterval(() => {
            if(button.parentElement){
              button.parentElement.style.opacity = (parseFloat(getComputedStyle(button.parentElement).opacity) - 0.1).toString();
                if(parseFloat(getComputedStyle(button.parentElement).opacity) <= 0){
                    button.parentElement.remove();
                }  
            }
        },50);
    });
});

//Input validation
var validations = Array.from(document.querySelectorAll<HTMLInputElement>(".validation"));
validations.forEach(v =>  {
    v.addEventListener("input", () => {
        let isValid = false;
        switch(v.getAttribute("type")){
            case "mail":
                isValid = v.value.includes("@") && v.value.includes(".") ? true: false;
                break;
            case "checkbox":
                if(v.hasAttribute("required")){
                    isValid = v.checked;
                }
                else{
                    isValid = true;
                }
                break;
            default:
                isValid = v.value != "" ? true: false;
                break;
        }
        if(isValid){
            v.classList.add("valid");
            v.classList.remove("invalid");
        }
        else if(v.value != ""){
            v.classList.remove("valid");
            v.classList.add("invalid");
        }
        else{
            v.classList.remove("valid");
            v.classList.remove("invalid");
        }
    }); 
});

//Gradient function
const Gradient = (mode:string,color1:string,color2:string,rotation:string = "") => {
    if(mode == "radial"){ rotation = ""; }
    if(color1.toString().startsWith("--")){ color1 = `var(${color1})`; }
    if(color2.toString().startsWith("--")){ color2 = `var(${color2})`; }
    return(`${(mode == "linear")? "linear-gradient(" : "radial-gradient("}${(rotation == "")? "": rotation+","}${color1},${color2})`);
};

//Function classes

const parseFunctionClass = (functionClass:string) => {
    return functionClass.substring(functionClass.indexOf("(") + 1 ,functionClass.indexOf(")"));
}

const FunctionClass = (functionClass:string,element:HTMLElement) => {
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
    getAllElements().filter(e => e.hasAttribute("class")).forEach(element => {
        let eClass:any = element.getAttribute("class");
        eClass.toString().split(" ").forEach(e => { 
            FunctionClass(e,element);
        });
    });
}

// Media classes

const mediaClasses = {
    queries:[
        "(prefers-color-scheme: dark)",
        "(prefers-color-scheme: light)",
        "(max-width: 1440px)",
        "(max-width: 1200px)",
        "(max-width: 968px)",
        "(max-width: 772px)",
        "(max-width: 600px)"
    ],
    names:[
        "dark", 
        "light",
        "xl",
        "l",
        "m",
        "s",
        "xs"
    ]
};

const getMediaClasses = () => {
    getAllElements().forEach(e => {
        let attr = mediaClasses.names.filter(c => c in e.attributes);
        attr.forEach(a => {
            if (window.matchMedia && window.matchMedia(mediaClasses.queries[mediaClasses.names.indexOf(a)]).matches) {
                let getAttribute:any = e.getAttribute(a);
                let functions = getAttribute.toString().split(" ");
                functions.forEach(f => {
                    FunctionClass(f,e);
                })
            }
        });
    });  
}

const getClasses = () =>{
    getFunctionClasses();
    getMediaClasses();
}

document.addEventListener(("DOMContentLoaded"||"load"), event => {
    getClasses();
})
addEventListener(("resize"||"scroll"||"change"), event => {
    getClasses();
})
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    getClasses();
})

export {};