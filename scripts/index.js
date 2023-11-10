const addtask=document.getElementById("add");
const input=document.getElementById("input");
const validation=document.getElementById("validation");
const tasks=document.getElementById("tasks");

let count=0;
//adding the task
addtask.addEventListener("click",function(){
    if(input.value==""){
        validation.textContent="Please Enter Task Name !!!";
    }
    else {
        validation.textContent="";
        tasks.innerHTML +=`            <div class="task">
        <input type="text" value="`+input.value+`" class="text" id="text" disabled/>
        <input type="checkbox" class="checkbox"/>
        <button id="edit" class="edit" onclick="edit()">edit</button>
        <button id="delete" class="delete" onclick="this.parentElement.parentElement.removeChild(this.parentElement)">X</button>
    </div>`;
    input.value="";
    }
});

