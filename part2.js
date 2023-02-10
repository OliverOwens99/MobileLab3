var myArray = ["chop suey", "Ace of spades", "League of Lengends"];
var count = 0;
addTask("under the bridge");
listAllTasks();
deleteTask("chop suey");
listAllTasks();
function addTask(task) {
    myArray.push(task);
    console.log(task + " is in the array");
    return task.length;
}
function listAllTasks() {
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}
function deleteTask(task) {
    var index = myArray.indexOf(task);
    myArray.splice(index, 1);
    console.log(task + " has been deleted");
    return myArray.length;
}
