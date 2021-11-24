const inputFirld = document.querySelector('.input1');
const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const Output = document.querySelector('.output');
button1.addEventListener('click',heading1);
button2.addEventListener('click',heading2);
button3.addEventListener('click',heading3);
function heading1(){
  console.log("yes")
  var input1 = inputFirld.value;
  
  Output.style.fontStyle = "italic"
  Output.innerText = input1;

}
function heading2(){
   console.log("yes")
  var input1 = inputFirld.value;
  var input2 = input1.charAt(0).toUpperCase() + input1.slice(1);
  Output.innerText= input2;
}
function heading3(){
  console.log("yes")
  var input1 = inputFirld.value;
  
  Output.style.textDecoration = "underline"
   Output.innerText = input1;

}