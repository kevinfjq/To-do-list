let totalTasks = 0;
let parent = document.getElementById("task-area");
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
        alert("Invalid! You can't create empty tasks.");
    }

    document.getElementById("input").value = "";
    
}

document.getElementById("add-button").addEventListener("click", stopFormDef);
document.getElementById("delete-all").addEventListener("click", stopFormDef);
document.getElementById("delete-done").addEventListener("click", stopFormDef);

function stopFormDef(evt){
    evt.preventDefault();
}

function deleteAll(){
    totalTasks = document.getElementById("task-area").childElementCount;
    let conf = confirm("Are you sure you want to delete all tasks?");
    if(conf){
        for(let i=0; i<totalTasks;i++){
            parent.removeChild(parent.lastChild);
        }
        totalTasks = 0;
    }
}

function deleteDone(){
    let conf = confirm("Are you sure you want to delete all done tasks?");
    if(conf){
        for(let i=0; i<totalTasks;i++){
            if(document.getElementById("task"+i)){
                let ischecked = document.getElementById("task"+i).checked;
                let temp = document.getElementById("task-container"+i);
                if(ischecked){
                    temp.remove();
                }
            }
        }
    }
}