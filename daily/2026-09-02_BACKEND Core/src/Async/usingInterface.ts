import type {Customer} from "./interface"

export class CustomerService{

    async findById(id:string): Promise<Customer | null> {
        if (id==='123'){
            return {id:"123", name:"pedro",email:"Myemail"}
        }
        return null;
    }
}
