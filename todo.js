
let ListContainer=document.getElementById("list");


let todoListParse=localStorage.getItem("todo");
let todoList=JSON.parse(todoListParse);
// todoList=[
//     {
//         text:"html",
//         id:0
//     },
//     {
//         text:"css",
//         id:1
//     }, 
//     {
//         text:"js",
//         id:2
//     },
//     {
//         text:"react",
//         id:3
//     }
// ];


let count=todoList.length;

function addToList(todo)
{
    // todoList.push(todo);
    let todoId="todo"+todo.id;
    let inputElementId="input"+todo.id;
    let checkboxId="check"+todo.id;
    let labelId="label"+todo.id;
    let deleteID="delete"+todo.id;
    


    let todoElement=document.createElement("li");
    todoElement.id=todoId;
    todoElement.classList.add("todo");
    ListContainer.appendChild(todoElement);



    let inputElement=document.createElement("input");
    inputElement.id=inputElementId;
    inputElement.type="checkbox";
    
    todoElement.appendChild(inputElement);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for",inputElementId);
    labelElement.id=labelId;
    labelElement.textContent=todo.text;
    let labelContainer=document.createElement("div");
    labelContainer.classList.add("label_container");
    labelContainer.appendChild(labelElement);

    todoElement.appendChild(labelContainer);


    let deleteIconContainer=document.createElement("div");
    deleteIconContainer.classList.add("delete_icon_container");

    let deleteIcon =document.createElement("i");
    deleteIcon.classList.add("material-icons");
    deleteIcon.style="font-size:22px";
    deleteIcon.textContent="delete";
    deleteIcon.classList.add("cursor");
    deleteIcon.id=deleteID;

    deleteIconContainer.appendChild(deleteIcon);

    todoElement.appendChild(deleteIconContainer);


    deleteIcon.onclick=function()
    {
        // console.log(todoId);
        // console.log(todoList);
        ListContainer.removeChild(todoElement);
       let index= todoList.findIndex(function(eachItem)
        {
           let eachItemId="todo"+eachItem.id;
            if(eachItemId===todoId)
            { 
                return true;
            }
            else    
            {
                
                return false;
            }
        });
        console.log(index);
        todoList.splice(index,1);
    }

}

for (let todo of todoList) 
{
    addToList(todo);
}

let addbtn=document.getElementById("add");
addbtn.onclick=function()
{
    let inputText=document.getElementById("writeTask").value;
    if(inputText=="")
    {
        alert("enter the task");
    }
    else
    {
        let newTodo=
        {
            text:inputText,
            id:count
        }
        count++;
        todoList.push(newTodo);
        addToList(newTodo);
        inputText.value="";
    }
    

}

let savebtn=document.getElementById("save");
savebtn.onclick=function()
{
    console.log("sai");
    localStorage.setItem("todo",JSON.stringify(todoList));
}