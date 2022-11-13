const fs = require("node:fs");
const child_process = require('node:child_process');
const parse = require("node-html-parser").parse;
var configFile = JSON.parse(fs.readFileSync("./astra.config.json", "utf-8"));

console.log("Compiling...");
var startTime = performance.now();

var variables = "";
if(configFile.using.variables){
    variables = JSON.parse(fs.readFileSync("./json/variables.json","utf8"));
} 

var outputData = "";
var outputDir = configFile.defaultOutputFile;
if(process.argv[2] && process.argv[2].endsWith(".css")){
    outputDir = process.argv[2];
}

//CSS variables
outputData += ":root{\n";
for(let key in variables){ 
    if(configFile.included.variables[key]){
        variables[key] = configFile.included.variables[key];
    }
    outputData += `    --${key}: ${variables[key]}; \n`
}
for(let key in configFile.extra.variables){
    outputData += `    --${key}: ${configFile.extra.variables[key]}; \n`
}
outputData += "}\n";
//Base
if(configFile.using.base){
    outputData += fs.readFileSync("./css/base.css","utf-8");
}
//Utilities
if(configFile.using.utilities){
    outputData += fs.readFileSync("./css/utilities.css","utf-8");
}

//Function classes
var functionClassList = JSON.parse(fs.readFileSync("./json/function_classes.json","utf-8"));

fs.readdir("./",(err,data) => {
    if(err) throw err;
    let input = data.filter(d => d.endsWith(".html"));
    input.forEach(file => {
        let content = fs.readFileSync(file, "utf-8");
        let classes = parse(content).querySelectorAll("body *, body").filter(element => element.hasAttribute("class") && element.getAttribute("class").includes("("));
        classes.forEach(classElement => {
            let functionClasses = classElement.getAttribute("class").split(" ").filter(c => c.includes("("));
            functionClasses.forEach(functionClass => {
                let head = functionClass.substring(0,functionClass.indexOf("("));
                let body = functionClass.substring(functionClass.indexOf("(") + 1,functionClass.length - 1)
                let rule = "/* purgecss ignore */ \n" + functionClassList[head]
                                                        .replace("par1",body.startsWith("#")? `\\${body}` : body)
                                                        .replace("par2",body.startsWith("--")? `var(${body})`: body);
                outputData += rule;
            });
        })
    })
    fs.writeFileSync("./raw.css", outputData ,err => { if(err) throw err;});
});


child_process.exec(`purgecss --css ./raw.css --content ./*.html --output ${outputDir}`,err => {
    if(err){ throw err;}
    else{
        setTimeout(() => {
            fs.unlinkSync("./raw.css", () => {})
        },100);
        
    }
});
var endTime = performance.now();
console.log(`Finished in ${(endTime - startTime).toFixed(0)}ms`);