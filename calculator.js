import {topla} from "./toplama.js"
import {carpma} from "./carpma.js"

let resultArray = [topla(2, 3),carpma(10,5)];
import { bolme } from "./bolme.js";

let resultArray = [
  topla(2, 3),
  carpma(10, 5),
  bolme(20,4)
];



let htmlRenderText = "Results:          ";
resultArray.forEach((element) => {
  htmlRenderText += element.functionName + ": " + element.result + "                 ";
});

document.getElementById("display").innerText = htmlRenderText;
