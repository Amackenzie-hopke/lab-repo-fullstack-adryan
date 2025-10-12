import {employeeData} from '../../data/Employees/employees' 
import './Employees.css'
import { useState } from "react";
import DepartmentList from '../../components/Employees/EmployeeList'
import type { Employee } from "../../data/Employees/employeeInterface";

import EmployeeFormHandler from '../../components/Employees/employeeForm';
import EmployeeSearch from '../../components/Employees/EnployeeSearch'


/*
Employee Page Function which renders and acts a parent to all employee componenets



*/

export function EmployeePage(){

    const [employees,setEmployees ] = useState<Employee[]>(employeeData);
   
    const [query, updateQuery] = useState("");

    const filteredEmployees = employees.filter(
        (employee)=>
            employee.name.toLowerCase().startsWith(query.toLowerCase()) ||
            employee.department.toLowerCase().startsWith(query.toLowerCase())
    );

    const addNewEmployee = (newEmployee: Employee) => {
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    };

    
  return(   
   <>
    <section>
    <h2>Employee Directory</h2>
    
    <EmployeeSearch 
      query={query}
      updateQuery={updateQuery}
    />
    <EmployeeFormHandler
      EmployeeCount={employees.length}
      onAddEmployee={addNewEmployee}
    />    
    <DepartmentList filteredEmployees={filteredEmployees}/>
    </section>
    </>
  );
}

      

