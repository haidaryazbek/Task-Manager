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
        <button id="edit" class="edit" onclick="edit(this.parentElement)">edit</button>
        <button id="delete" class="delete" onclick="this.parentElement.parentElement.removeChild(this.parentElement)">X</button>
    </div>`;
    input.value="";
    }
});
function edit(task){
    const text=task.getElementsByTagName("input");
    const edit=task.getElementsByTagName("button")
    if(text[0].disabled){
        text[0].disabled=false;
        text[0].style="background-color:white;";
        edit[0].innerText="done";
    }
    else{
        text[0].disabled=true;
        text[0].style="background-color:rgb(219, 166, 250);";
        edit[0].innerText="edit";



    }
}

