let inputbox=document.getElementById("input");
let container=document.getElementById("list-container");

function addTask(){
    if(inputbox.value===""){
        alert("Write something to add the task")

    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        container.appendChild(li);
       
        inputbox.value="";
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
  }
  savedata()
}
container.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("Checked");
        savedata()
        
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
    
},false)
function savedata(){
    localStorage.setItem("data",container.innerHTML);
}
function showTask(){
    container.innerHTML=localStorage.getItem("data");
}
showTask();



