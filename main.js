//lets add all the elements
const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value; // this will get the user entered value
    if(userData.trim() != 0){ //if the user values arent only spaces
          addBtn.classList.add("active"); // activate the button
    }else{
        addBtn.classList.remove("active"); // unactivate the button
    }
} 

showTasks();

//if user clicks on the add button
 addBtn.onclick = ()=>{
    let userData = inputBox.value; // this will get the user entered value
    let getlocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getlocalStorage == null){ //if localStorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getlocalStorage); //transforming json string to js object
    }
    listArr.push(userData );
    localStorage.getItem("New Todo", JSON.stringify(listArr)) //transforming js object to  json
    showTasks();
 }

 function showTasks(){
    let getlocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getlocalStorage == null){ //if localStorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getlocalStorage); //transforming json string to js object
    }
    let newLitag = '';
    listArr.forEach((element, index) => {
        newLitag += '<li> ${element} <span><i class="fa fa-trash"></i></span></li>';
    });
    todoList.innerHTML = newLitag;
}