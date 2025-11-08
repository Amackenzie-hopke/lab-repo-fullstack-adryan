import { useState,useEffect } from "react";

import { fetchEmployees } from "../services/EmployeeServices";

import type { Employee } from "../data/Employees/employeeInterface";

export function useEmployeesPage():[Employee[], React.Dispatch<React.SetStateAction<Employee[]>>]{
    const [employees,setEmployees ] = useState<Employee[]>([]);
   
    useEffect(() => {
      fetchEmployees().then(setEmployees);
    }, []);
    return [employees,setEmployees]
}