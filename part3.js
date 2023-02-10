var myClass = /** @class */ (function () {
    function myClass() {
        this.myArray = [];
    }
    myClass.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log(task + "has been pushed to the array");
        return this.myArray.length;
    };
    myClass.prototype.listAllTask = function () {
        console.log(this.myArray);
    };
    myClass.prototype.deleteTask = function (task) {
        var index = this.myArray.indexOf(task);
        this.myArray.splice(index, 1);
        console.log(task + " has been deleted");
        return this.myArray.length;
    };
    return myClass;
}());
var classey = new myClass();
classey.addTask("ACDC");
classey.addTask("your a wizard larry");
classey.listAllTask();
classey.deleteTask("ACDC");
classey.listAllTask();
