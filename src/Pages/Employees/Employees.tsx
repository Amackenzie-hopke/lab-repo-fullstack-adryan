import {employeeData} from '../../data/Employees/employees' 
import './Employees.css'
import { useState } from "react";
import DepartmentList from '../../components/Employees/EmployeeList'
import type { Employee } from "../../data/Employees/employeeInterface";

import { HandleEmployeeForm } from '../../components/Employees/employeeForm';

/* main calls departmentList function using employee data*/
export function EmployeePage(){


    const [employees,setEmployees ] = useState<Employee[]>(employeeData);

    const [query, updateQuery] = useState("");


    const addNewEmployee = (newEmployee: Employee) => {
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    };
  return(   
   <>
    <section>
    <h2>Employee Directory</h2>
    
    <input 
        id="searchBox"
        type="text" 
        placeholder="Search here" 
        value={query} 
        onChange={(employee)=>updateQuery(employee.target.value)}
    />
    <HandleEmployeeForm onAddEmployee={addNewEmployee} EmployeeCount={employees.length}/>
    <DepartmentList employees={employees} query={query}/>

    </section>
    </>
  );
}

      

