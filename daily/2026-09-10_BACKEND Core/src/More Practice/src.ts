interface Customer{
  readonly id:string,
  name:string
  phone?:string
}
const client:Customer={
  id:"5",
  name:"Maicol"
}

function add(a:number,b:number):number{
  return a+b;
}

type calculator = (a:number,b:number)=>number;
const substract:calculator=(a,b)=>a-b

type Transaction =
    {
      type: "SALE";
      amount: number;
    }
  | {
      type: "PAYMENT";
      amount: number;
    };

let miarray:string[]=["x","y"]
miarray.map((item)=>{
  return item+"ZZZ"
})

console.log(miarray.toString())