console.log("Compiling...");
var startTime = performance.now()
var fs = require("node:fs");
const PurgeCSS = require("purgecss");

var configFile = JSON.parse(fs.readFileSync("./astra.config.json", "utf-8"));

var variables = "";
if(configFile.using.variables){
    variables = JSON.parse(fs.readFileSync("./variables.json","utf8"));
} 
var base = "";
var baseLines = base.split("\n");
if(configFile.using.base){
    base = fs.readFileSync("./base.css","utf-8");
}

var outputData = "";
var outputDir = process.argv[2];
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
outputData += base;

//Utilities


//Purge


fs.writeFileSync(outputDir, outputData ,function(err){ if(err) throw err;});
var endTime = performance.now()
console.log(`Finished in ${(endTime - startTime).toFixed(0)}ms`);