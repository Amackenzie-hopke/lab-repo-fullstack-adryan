import { useState } from "react";
import type { Employee } from "../data/Employees/employeeInterface";
import * as RecipeService from "../services/recipeService";
import { createEmployee } from "../apis/employeeRepo";


interface UseEntryEmployeeFormProps {
  EmployeeCount:number;
  onAddEmployee?: (employee:Employee)=> void;
}


export function useEntryForm({ EmployeeCount, onAddEmployee }: UseEntryEmployeeFormProps) {
  const [formEntry, setFormEntry] = useState<Employee>({
    id:"",
    name: "",
    department: "",
  });



const handleFormInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value} = event.target;
        setFormEntry({
            ...formEntry,
            [name]: value,
  });
}



const handleSubmit = async(event:React.FormEvent)=>{
    event.preventDefault()

    const newEmployee= {
            ...formEntry,  
            id: ((EmployeeCount ?? 0) + 1).toString()              
    };


    console.log("newEmployee", newEmployee);

    await createEmployee(newEmployee)

    setFormEntry({
    id:"",
    name: "",
    department:"",
    });
  }
return{
  formEntry,
  handleFormInput,
  handleSubmit
}

}



   
