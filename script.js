//your JS code here. If required.
let num=document.querySelector('#number')
let btn=document.querySelector('#btn');
let output=document.querySelector('#output');
btn.addEventListener('click',()=>{
	  Promise.resolve(5)
	  .then((data) => {
       let result=data * 2;
	   output.innerText = `Result: ${result}`;
  }).then((data)=>{
		   let result=data-3;
		   output.innerText = `Result: ${result}`;
  }).then((data)=>{
		   let result=data/2;
		   output.innerText = `Result: ${result}`;
  }).then((data)=>{
		   let result=data+10;
		  output.innerText = `Result: ${result}`;
  })
})