const ipBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const addButton=document.getElementById("addButton");
const checkButton=document.getElementById("")
addButton.addEventListener("click",()=>
{
    if(ipBox.value===''){
        alert("Add a task dummy");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=ipBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    ipBox.value='';
    saveData();
})
listContainer.addEventListener("click",(e)=>
{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();