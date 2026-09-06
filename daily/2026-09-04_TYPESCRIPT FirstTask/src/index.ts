type Task= {
 readonly id:number,
 tittle: string,
 completed: boolean,
 priority: "low"|"medium"|"high",
 tags:string[]
}

let TaskA: Task={
    id:1,
    tittle:"primera",
    completed:false,
    priority:"low",
    tags:["xd"]
}
let TaskB: Task={
    id:1,
    tittle:"segunda",
    completed:false,
    priority:"high",
    tags:["xd"]
}
let TaskC: Task={
    id:1,
    tittle:"tercera",
    completed:true,
    priority:"low",
    tags:["xd"]
}
let TaskD: Task={
    id:1,
    tittle:"cuarta",
    completed:false,
    priority:"high",
    tags:["xd"]
}
let TaskE: Task={
    id:1,
    tittle:"ultima",
    completed:true,
    priority:"low",
    tags:["xd"]
}

let everyTask: Task[]=[TaskA,TaskB,TaskC,TaskD,TaskE];

const getCompletedTasks=(AllTasks:Task[]):Task[]=>{

    return [TaskE]
}
