let totalTasks = 0;
function addTask(){
    let taskContent = document.getElementById("input").value.trim();
    if(taskContent){
        let taskArea = document.getElementById("task-area");

        let taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", "task"+totalTasks);
        taskLabel.className = "label"
        taskLabel.innerHTML = taskContent;

        let taskHolder = document.createElement("input");
        taskHolder.setAttribute("type", "checkbox");
        taskHolder.setAttribute("id", "task"+totalTasks);
        taskHolder.className = "task";

        let taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.setAttribute("id", "task-container"+totalTasks);

        taskItem.append(taskHolder);
        taskItem.append(taskLabel);

        taskArea.appendChild(taskItem);
        

        totalTasks++;
    }
    else{
        alert("Invalid! You can't create empty tasks");
    }

    document.getElementById("input").value = "";
    
}

document.getElementById("add-button").addEventListener("click", stopFormDef, false);
document.getElementById("delete-all").addEventListener("click", stopFormDef, false);

function stopFormDef(evt){
    evt.preventDefault();
}

function deleteAll(){
    let conf = confirm("Are you sure you want to delete all tasks?");
    if(conf){
        for(let i = 0; i<totalTasks; i++){
            let temp = document.getElementById("task-container"+i);
            temp.remove();
        }
        totalTasks = 0;
    }
       
}

