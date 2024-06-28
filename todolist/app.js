const addTask=()=>{
    const taskInput=document.getElementById("taskInput");
    const taskList=document.getElementById("taskList");
    const taskText=taskInput.value.trim();

    if(taskInput!==""){
        const listItem=document.createElement("li");
        listItem.textContent=taskText;
        // delete button
        const deleteButton=document.createElement("span");
        deleteButton.textContent="Delete";
        deleteButton.className="delete";
        deleteButton.onclick=function(){
            taskList.removeChild(listItem);
        };
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value=""; // For next value 
    }
}
document.getElementById("taskInput").addEventListener("keypress", (e)=>{
    if(e.key==="Enter"){
        addTask();
    }
})