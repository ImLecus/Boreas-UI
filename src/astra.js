const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
};
const redirect = (href) => {
    window.location.href = href;
};
const getClass = (element) => {
    return element.getAttribute("class").toString();
};
const getPosition = (element) => {
    return new Vector3(element.getBoundingClientRect().x, element.getBoundingClientRect().y, element.style.zIndex);
};
const getAllElements = () => {
    return Array.from(document.querySelectorAll("*"));
};
//Close button
var buttons = Array.from(document.querySelectorAll(".close"));
buttons.forEach(button => {
    button.addEventListener("click", () => {
        setInterval(() => {
            if (button.parentElement) {
                button.parentElement.style.opacity = (parseFloat(getComputedStyle(button.parentElement).opacity) - 0.1).toString();
                if (parseFloat(getComputedStyle(button.parentElement).opacity) <= 0) {
                    button.parentElement.remove();
                }
            }
        }, 50);
    });
});
//Input validation
var validations = Array.from(document.querySelectorAll(".validation"));
validations.forEach(v => {
    v.addEventListener("input", () => {
        let isValid = false;
        switch (v.getAttribute("type")) {
            case "mail":
                isValid = v.value.includes("@") && v.value.includes(".") ? true : false;
                break;
            case "checkbox":
                if (v.hasAttribute("required")) {
                    isValid = v.checked;
                }
                else {
                    isValid = true;
                }
                break;
            default:
                isValid = v.value != "" ? true : false;
                break;
        }
        if (isValid) {
            v.classList.add("valid");
            v.classList.remove("invalid");
        }
        else if (v.value != "") {
            v.classList.remove("valid");
            v.classList.add("invalid");
        }
        else {
            v.classList.remove("valid");
            v.classList.remove("invalid");
        }
    });
});
//Gradient function
const Gradient = (mode, color1, color2, rotation = "") => {
    if (mode == "radial") {
        rotation = "";
    }
    if (color1.toString().startsWith("--")) {
        color1 = `var(${color1})`;
    }
    if (color2.toString().startsWith("--")) {
        color2 = `var(${color2})`;
    }
    return (`${(mode == "linear") ? "linear-gradient(" : "radial-gradient("}${(rotation == "") ? "" : "calc(" + rotation + "),"}${color1},${color2})`);
};
//Shadow function
const Shadow = (offsetX, offsetY, blurRadius = "0", color = "black") => {
    return (`drop-shadow(${offsetX} ${offsetY} ${blurRadius} ${color})`);
};
//Function classes
const parseFunctionClass = (functionClass) => {
    return functionClass.substring(functionClass.indexOf("(") + 1, functionClass.indexOf(")"));
};
const functionClasses = {
    "gradient": function (element, attributes) {
        element.style.background = Gradient(attributes[0], attributes[1], attributes[2], attributes[3]);
    },
    "shadow": function (element, attributes) {
        element.style.filter = Shadow(attributes[0], attributes[1], attributes[2], attributes[3]);
    },
    "bg": function (element, attributes) {
        element.style.backgroundColor = `${(attributes[0].startsWith("--")) ? "var(" + attributes[0] + ")" : attributes[0]}`;
    },
    "color": function (element, attributes) {
        element.style.color = attributes[0];
    },
    "span": function (element, attributes) {
        element.style.flexGrow = attributes[0];
    },
    "width": function (element, attributes) {
        element.style.width = attributes[0];
    },
    "height": function (element, attributes) {
        element.style.height = attributes[0];
    },
    "opacity": function (element, attributes) {
        element.style.opacity = `${attributes[0]}%`;
    },
    "blur": function (element, attributes) {
        element.style.filter = `blur(${attributes[0]})`;
    },
    "grayscale": function (element, attributes) {
        element.style.filter = `grayscale(${attributes[0]})`;
    },
    "sepia": function (element, attributes) {
        element.style.filter = `sepia(${attributes[0]})`;
    },
    "borderColor":function(element,attributes){
        element.style.borderColor = attributes[0];
    }
};
const FunctionClass = (functionClass, element) => {
    let head = functionClass.substring(0, functionClass.indexOf("("));
    if (head && head in functionClasses) {
        functionClasses[head](element, parseFunctionClass(functionClass).split(","));
    }
};
const getFunctionClasses = () => {
    getAllElements().filter(e => e.hasAttribute("class")).forEach(element => {
        let eClass = element.getAttribute("class");
        eClass.toString().split(" ").forEach(e => {
            FunctionClass(e, element);
        });
    });
};
// Media classes
const mediaClasses = {
    "dark": "(prefers-color-scheme: dark)",
    "light": "(prefers-color-scheme: light)",
    "xl": "(max-width: 1440px)",
    "l": "(max-width: 1200px)",
    "m": "(max-width: 968px)",
    "s": "(max-width: 772px)",
    "xs": "(max-width: 600px)"
};
const getMediaClasses = () => {
    getAllElements().forEach(e => {
        let attr = Object.keys(mediaClasses).filter(c => c in e.attributes);
        attr.forEach(a => {
            if (window.matchMedia && window.matchMedia(Object.values(mediaClasses)[Object.keys(mediaClasses).indexOf(a)]).matches) {
                let getAttribute = e.getAttribute(a);
                let functions = getAttribute.toString().split(" ");
                functions.forEach(f => {
                    FunctionClass(f, e);
                });
            }
        });
    });
};
const getClasses = () => {
    getFunctionClasses();
    getMediaClasses();
};
document.addEventListener(("DOMContentLoaded" || "load"), event => {
    getClasses();
});
addEventListener(("resize" || "scroll" || "change"), event => {
    getClasses();
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    getClasses();
});
