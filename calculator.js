import {topla} from "./toplama.js"
 

let resultArray = [topla(2, 3)];



let htmlRenderText = "Results:          ";
resultArray.forEach((element) => {
  htmlRenderText += element.functionName + ": " + element.result + "                 ";
});

document.getElementById("display").innerText = htmlRenderText;
