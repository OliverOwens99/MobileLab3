interface myInterface {
    myArray: Array<string>;

    addTask(task:string):number;
    listAllTask():void;
    deleteTask(task:string):number;
}

class myClass implements myInterface{
    myArray: Array<string> =[];

    addTask(task:string): number {
        this.myArray.push(task);
        console.log(task + "has been pushed to the array")
        return this.myArray.length;
    }
    listAllTask(): void {
        console.log(this.myArray);
    }

    deleteTask(task: string): number {
        let index = this.myArray.indexOf(task);
        this.myArray.splice(index,1);
        console.log(task +" has been deleted");
        return this.myArray.length;
    }
    

}
let classey = new myClass();
classey.addTask("ACDC");
classey.addTask("your a wizard larry");
classey.listAllTask();
classey.deleteTask("ACDC");
classey.listAllTask();