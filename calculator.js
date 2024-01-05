import {topla} from "./toplama.js"
import {carpma} from "./carpma.js"

let resultArray = [
  topla(2, 3),
  carpma(10, 5),
  carpma(10, 5),
];
 


let htmlRenderText = "Results:          ";
resultArray.forEach((element) => {
  htmlRenderText += element.functionName + ": " + element.result + "                 ";
});

document.getElementById("display").innerText = htmlRenderText;
