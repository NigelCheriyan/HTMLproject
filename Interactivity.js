
function addItem(text){
    let newTask = document.createElement("li");
    let userInput = document.createTextNode(document.getElementById("userInput").value);
    newTask.appendChild(userInput);
    document.getElementById("List").appendChild(newTask);
}