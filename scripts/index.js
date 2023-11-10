const addtask=document.getElementById("add");
const input=document.getElementById("input");
const validation=document.getElementById("validation");
const tasks=document.getElementById("tasks");

let count=0;

addtask.addEventListener("click",function(){
    if(input.value==""){
        validation.textContent="Please Enter Task Name !!!";
    }
    else {
        validation.textContent="";
        tasks.innerHTML +=`<div class='task'>
        <p class='text'>`+input.value+`</p>
        <input type='checkbox' class='checkbox'/>
        <button id='delete' class='checkbox' onclick="this.parentElement.parentElement.removeChild(this.parentElement)">X</button>
    </div>`;
    input.value="";
    }
});

