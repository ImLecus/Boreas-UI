var fs = require("node:fs")
var configFile = JSON.parse(fs.readFileSync("./astra.config.json", "utf-8"));



var variables = "";
if(configFile.using.variables){
    variables = JSON.parse(fs.readFileSync("./variables.json","utf8"));
} 

var outputData = "";
function closeBrackets(){
    outputData += "}";
}

//CSS variables
outputData += ":root{\n";
for(let key in variables){ 
    if(configFile.included.variables[key]){
        console.log("There are modifications")
        variables[key] = configFile.included.variables[key];
    }
    outputData += `    --${key}: ${variables[key]}; \n`
}
for(let key in configFile.extra.variables){
    outputData += `    --${key}: ${configFile.extra.variables[key]}; \n`
}
closeBrackets();




var output = fs.writeFileSync("./output/output.css", outputData ,function(err){ if(err) throw err;});

console.log("Creating CSS file...");
