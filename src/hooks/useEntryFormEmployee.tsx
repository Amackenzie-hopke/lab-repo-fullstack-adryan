import { useState } from "react";
import type { Employee } from "../data/Employees/employeeInterface";
import * as EmployeeService from "../services/EmployeeServices";


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

  const [errors, setErrors] = useState<Map<string, string>>(new Map());


  const handleFormInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value} = event.target;


      setErrors(foundErrors => {
        const newErrors = new Map(foundErrors);
        newErrors.delete(name);
        return newErrors;
      });

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

      const errors = await EmployeeService.validateEmployee(newEmployee);
      if (errors.size > 0) {
          console.log("Validation errors:", errors);
          setErrors(errors);
          return; 
      }

      console.log("newEmployee", newEmployee);

      await EmployeeService.createNewEmployee(newEmployee);
      
      if (onAddEmployee) {
        onAddEmployee(newEmployee); 
      }

      setFormEntry({
        id:"",
        name: "",
        department:"",
        });
      setErrors(new Map());
    }

    return{
      formEntry,
      handleFormInput,
      handleSubmit,
      errors
  }
}



   
