import { useState } from "react";
import type { Employee } from "../data/Employees/employeeInterface";
import type { Organization } from "../data/Organization/OrganizationInterface";

import * as EmployeeService from "../services/EmployeeServices";
import * as OrganizationService from "../services/organizationServices";
import { useAuth } from "@clerk/clerk-react";


interface UseEntryFormProps {
  count: number;
  type: "employee" | "organization";
  onAdd?: (entry: Employee | Organization) => void;
}

/*
useentryform hook is a Form handler for employee and organization creation via a form
handles 
  - front end logic for the form depedning on the form type recieved from component
  - returning errors for components to display
  - our use state logic for the form
  - for submision behaviour such as preventing default behaviour and claling our creation service.
*/

export function useEntryForm({type,onAdd }: UseEntryFormProps) {
  const { getToken } = useAuth();

  const formType = type ==="employee" ? 
    { id: "", name: "", department: "" } :
    { id: "", role: "", name: "", description: "" };
  
  
  const [formEntry, setFormEntry] = useState<Employee|Organization>(formType);

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




      const entry= {
              ...formEntry,              
      };

      if (type ==="employee"){
        const token = await getToken();
        if (!token) return;
        const employeeErrors = await EmployeeService.validateEmployee(entry as Employee);
        if (employeeErrors.size > 0) {
            console.log("Validation errors:", employeeErrors);
            setErrors(employeeErrors);
            return; 
        }


        console.log("newEmployee", entry);
        await EmployeeService.createNewEmployee(entry as Employee,token);
        if (onAdd) {
          onAdd(entry); 
        }

      }else{
        const OrganizationErrors = await OrganizationService.validateOrganization(entry as Organization);
        if (OrganizationErrors.size > 0) {
            console.log("Validation errors:", OrganizationErrors);
            setErrors(OrganizationErrors);
            return; 
        }
        console.log("neworg", entry);
        await OrganizationService.createNewOrganization(entry as Organization);
        if (onAdd) {
          onAdd(entry); 
        }


      setFormEntry(formType);
      setErrors(new Map());
    }
  }
    return{
      formEntry,
      handleFormInput,
      handleSubmit,
      errors
  }
}



   
