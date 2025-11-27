import { useState,useEffect } from "react";

import { fetchEmployees } from "../services/EmployeeServices";

import type { Employee } from "../data/Employees/employeeInterface";
import { useAuth } from "@clerk/clerk-react";


export function useEmployeesPage():[Employee[], React.Dispatch<React.SetStateAction<Employee[]>>]{
    
  const [employees,setEmployees ] = useState<Employee[]>([]);
    const { getToken } = useAuth();

    useEffect(() => {
      (async()=>{
        const token = await getToken();
        if(!token) return;
        const data = await fetchEmployees(token);
        setEmployees(data);
      })();
    }, [getToken]);
    return [employees,setEmployees]
}