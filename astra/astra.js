var fs = require("node:fs");
var shell = require("shelljs");
const child_process = require('node:child_process');
const { stdout } = require("node:process");

var configFile = JSON.parse(fs.readFileSync("./astra.config.json", "utf-8"));

console.log("Compiling...");
var startTime = performance.now()

var variables = "";
if(configFile.using.variables){
    variables = JSON.parse(fs.readFileSync("./variables.json","utf8"));
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
    outputData += fs.readFileSync("./base.css","utf-8");
}
//Utilities


fs.writeFileSync("./raw.css", outputData ,function(err){ if(err) throw err;});
child_process.exec(`purgecss --css ./raw.css --content ./*.html --output ${outputDir} -v true`,(err,stdout) => {
    if(err){ throw err;}
    else{console.log("Comando ejecutado", stdout)}
})
var endTime = performance.now()
console.log(`Finished in ${(endTime - startTime).toFixed(0)}ms`);

