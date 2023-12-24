let myst = document.getElementById("btn1");
let mystTow = document.getElementById("hello");
let myInputOne = document.getElementById('input1');
let myInputTwo = document.getElementById('input2');
let myselectOne = document.getElementById('select1');
window.onload = function () {
    myInputOne.focus()
};
let div1 = document.getElementById("b1")

myst.onclick= function (){
div1.innerHTML =  `Hello ${myInputOne.value}`

}
const reset = document.getElementById('reset');
reset.onclick= function (){
  div1.innerHTML =  ""
  }

const sizePicker1 = document.getElementById('range1');
const output1 = document.querySelector(".output1");

sizePicker1.oninput = () => {
    output1.textContent = sizePicker1.value +` %`;
  };

  const sizePicker2 = document.getElementById('range2');
const output2 = document.querySelector(".output2");

sizePicker2.oninput = () => {
    output2.textContent = sizePicker2.value +` %`;
  };

  const sizePicker3 = document.getElementById('range3');
const output3 = document.querySelector(".output3");

sizePicker3.oninput = () => {
    output3.textContent = sizePicker3.value +` %`;
  };


  const sizePicker4 = document.getElementById('range4');
const output4 = document.querySelector(".output4");

sizePicker4.oninput = () => {
    output4.textContent = sizePicker4.value +` %`;
  };

  const sizePicker5 = document.getElementById('range5');
const output5 = document.querySelector(".output5");

sizePicker5.oninput = () => {
    output5.textContent = sizePicker5.value +` %`;
  };

  const sizePicker6 = document.getElementById('range6');
const output6 = document.querySelector(".output6");

sizePicker6.oninput = () => {
    output6.textContent = sizePicker6.value +` %`;
  };

  const sizePicker7 = document.getElementById('range7');
const output7 = document.querySelector(".output7");

sizePicker7.oninput = () => {
    output7.textContent = sizePicker7.value +` %`;
  };

  const sizePicker8 = document.getElementById('range8');
const output8 = document.querySelector(".output8");
// update sizepicker output value

sizePicker8.oninput = () => {
    output8.textContent = sizePicker8.value +` %`;
  };

  const sizePicker9 = document.getElementById('range9');
const output9 = document.querySelector(".output9");

sizePicker9.oninput = () => {
    output9.textContent = sizePicker9.value +` %`;
  };

  let finalButt = document.querySelector(".ip2");
  let bttOutput = document.querySelector(".bttoutput");
var total = parseInt(sizePicker1.value) + parseInt(sizePicker2.value) + parseInt(sizePicker3.value) + parseInt(sizePicker4.value) + parseInt(sizePicker5.value) + parseInt(sizePicker6.value) + parseInt(sizePicker7.value) + parseInt(sizePicker8.value) + parseInt(sizePicker9.value)
var average = total/9
  finalButt.onclick = () => {
    bttOutput.textContent = `Total Score of ${myInputOne.value} is ${Math.floor((parseInt(sizePicker1.value) + parseInt(sizePicker2.value) + parseInt(sizePicker3.value) + parseInt(sizePicker4.value) + parseInt(sizePicker5.value) + parseInt(sizePicker6.value) + parseInt(sizePicker7.value) + parseInt(sizePicker8.value) + parseInt(sizePicker9.value))/9)} %`;   
  };

  let resetBtn = document.getElementById("ip1")
resetBtn.onclick = ()=>{

}
