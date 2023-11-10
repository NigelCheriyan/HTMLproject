
//Create object oriented todolist
//

function addItem(text){
    let newTask = document.createElement("li");
    let userInput = document.createTextNode(document.getElementById("userInput").value);
    let button = document.createElement('button')
    button.textContent = ' X';
    button.addEventListener('click', () => {document.getElementById("List").removeChild(newTask);});
    newTask.appendChild(userInput);
    newTask.appendChild(button);
    document.getElementById("List").appendChild(newTask);

}
function deleteItem(text){
    document.getElementById("List").removeChild(newTask);

}
/*class toDoItem{
  constructor(item){
    this.item = item;
  }
   newItem(
      let newTask = document.createElement("li");
      let userInput = document.createTextNode(this.item);
      newTask.appendChild(userInput);
      document.getElementById("List").appendChild(newTask);
    )
    deleteItem(
      document.getElementById("List").removeChild(newTask);


    )
};
*/
