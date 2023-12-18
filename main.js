let myst = document.getElementById("btn1");
let mystTow = document.getElementById("hello");
let myInputOne = document.getElementById('input1');
let myInputTwo = document.getElementById('input2');
let myselectOne = document.getElementById('select1');
window.onload = function () {
    myInputOne.focus()
};
myst.onclick= function (){
let div1 = document.getElementById("b1")
div1.textContent =  `Hello ${myInputOne.value}`
// div1.style.display="flex"

}

const sizePicker1 = document.getElementById('range1');
const output1 = document.querySelector(".output1");
// update sizepicker output value

sizePicker1.oninput = () => {
    output1.textContent = sizePicker1.value +` %`;
  };

  const sizePicker2 = document.getElementById('range2');
const output2 = document.querySelector(".output2");
// update sizepicker output value

sizePicker2.oninput = () => {
    output2.textContent = sizePicker2.value +` %`;
  };

  const sizePicker3 = document.getElementById('range3');
const output3 = document.querySelector(".output3");
// update sizepicker output value

sizePicker3.oninput = () => {
    output3.textContent = sizePicker3.value +` %`;
  };


  const sizePicker4 = document.getElementById('range4');
const output4 = document.querySelector(".output4");
// update sizepicker output value

sizePicker4.oninput = () => {
    output4.textContent = sizePicker4.value +` %`;
  };

  const sizePicker5 = document.getElementById('range5');
const output5 = document.querySelector(".output5");
// update sizepicker output value

sizePicker5.oninput = () => {
    output5.textContent = sizePicker5.value +` %`;
  };

  const sizePicker6 = document.getElementById('range6');
const output6 = document.querySelector(".output6");
// update sizepicker output value

sizePicker6.oninput = () => {
    output6.textContent = sizePicker6.value +` %`;
  };

  const sizePicker7 = document.getElementById('range7');
const output7 = document.querySelector(".output7");
// update sizepicker output value

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
// update sizepicker output value

sizePicker9.oninput = () => {
    output9.textContent = sizePicker9.value +` %`;
  };

  const finalButt = document.querySelector(".ip2");
  const bttOutput = document.querySelector(".bttoutput");
var total = parseInt(sizePicker1.value) + parseInt(sizePicker2.value) + parseInt(sizePicker3.value) + parseInt(sizePicker4.value) + parseInt(sizePicker5.value) + parseInt(sizePicker6.value) + parseInt(sizePicker7.value) + parseInt(sizePicker8.value) + parseInt(sizePicker9.value)
var average = total/9
  finalButt.onclick = () => {
    bttOutput.textContent = `total score of ${myInputOne.value} is ${Math.floor((parseInt(sizePicker1.value) + parseInt(sizePicker2.value) + parseInt(sizePicker3.value) + parseInt(sizePicker4.value) + parseInt(sizePicker5.value) + parseInt(sizePicker6.value) + parseInt(sizePicker7.value) + parseInt(sizePicker8.value) + parseInt(sizePicker9.value))/9)} %`;

   
  };
//   sizePicker.addEventListener ("input",(e) => {
//     if (e.target.name ==="range"){
//         output.textContent = sizePicker.value +` %`;}
//       })

// myst.addEventListener( "click",function (){
//     let div1 = document.getElementById("b1")
//     div1.innerHTML =  `student name is : ${myInputOne.value}`    
//     })

let num1 = document.getElementById("range1").value
let num2 = document.getElementById("range2").value
let num3 = document.getElementById("range3").value
let num4 = document.getElementById("range4").value
let num5 = document.getElementById("range5").value
let num6 = document.getElementById("range6").value
let num7 = document.getElementById("range7").value
let num8 = document.getElementById("range8").value
let num9 = document.getElementById("range9").value

// const tick = ()=>{
//     const element =document.createElementNS(
// <div className= "container">
//     <h1>Current Time</h1>
//     <p>{setInterval(() => {
//       new Date().toLocaleDateString()  
//     }, 1000) }</p>
// </div>)
// mystTow.appendChild(element)

// }
// let clock = document.getElementsByTagName("p");

// let i = setInterval(() => {
//     new Date().toLocaleDateString()  
//   }, 1000) ;
//   clock.
// mystTow.style.color = "red";
// mystTow.style.fontWeight= "bold"
// mystTow.style.padding = "20px 20px 30px"

// myst.style.color = "red"
// myst.style.fontWeight= "bold"
// myst.onclick = function () {
//     name = `Hello ${myInputOne.value},  GOOD LUCK`;
//      mystTow.prepend(name);
//      myInputOne.blur();

// };
