"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let TaskA = {
    id: 1,
    tittle: "primera",
    completed: false,
    priority: "low",
    tags: ["xd"]
};
let TaskB = {
    id: 1,
    tittle: "segunda",
    completed: false,
    priority: "high",
    tags: ["xd"]
};
let TaskC = {
    id: 1,
    tittle: "tercera",
    completed: true,
    priority: "low",
    tags: ["xd"]
};
let TaskD = {
    id: 1,
    tittle: "cuarta",
    completed: false,
    priority: "high",
    tags: ["xd"]
};
let TaskE = {
    id: 1,
    tittle: "ultima",
    completed: true,
    priority: "low",
    tags: ["xd"]
};
let everyTask = [TaskA, TaskB, TaskC, TaskD, TaskE];
const getCompletedTasks = (AllTasks) => {
    let completedTasks = [];
    AllTasks.forEach(element => {
        if (element.completed) {
            completedTasks.push(element);
        }
    });
    return completedTasks;
};
let completed = getCompletedTasks(everyTask);
for (let index = 0; index < completed.length; index++) {
    const element = completed[index];
    console.log("element " + index + ",Tarea: " + element?.tittle);
}
//# sourceMappingURL=index.js.map