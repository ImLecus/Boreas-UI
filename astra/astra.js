console.log("Compiling...");
var startTime = performance.now()
var fs = require("node:fs");

var configFile = JSON.parse(fs.readFileSync("./astra.config.json", "utf-8"));

var variables = "";
if(configFile.using.variables){
    variables = JSON.parse(fs.readFileSync("./variables.json","utf8"));
} 
var base = "";
if(configFile.using.base){
    base = fs.readFileSync("./base.css","utf-8");
}

var outputData = "";


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
outputData += "}";
//Base
outputData += base;

fs.writeFileSync("./output/output.css", outputData ,function(err){ if(err) throw err;});
var endTime = performance.now()
console.log(`Finished in ${(endTime - startTime).toFixed(0)}ms`)
