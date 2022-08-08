let totalTasks = 1;
function addTask(){

    let taskContent = document.getElementById("input").value;
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

    taskItem.append(taskHolder);
    taskItem.append(taskLabel);

    taskArea.appendChild(taskItem);
    

    totalTasks++;

    document.getElementById("input").value = "";
}

document.getElementById("add-button").addEventListener("click", stopFormDef, false);

function stopFormDef(evt){
    evt.preventDefault();
}

function deleteAll(){
    for(let i = 0; i<totalTasks;i++){
        let temp = getElementById("task"+(i+1));
        temp.remove();
    }
}