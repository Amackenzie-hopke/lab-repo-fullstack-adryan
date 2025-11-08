import './Employees.css'
import { useState } from "react";
import DepartmentList from '../../components/Employees/EmployeeList'
import type { Employee } from "../../data/Employees/employeeInterface";
import EmployeeFormHandler from '../../components/Employees/employeeForm';
import EmployeeSearch from '../../components/Employees/EnployeeSearch'
import { useEmployeesPage } from '../../hooks/useEmployeePage';
/*
Employee Page Function which renders and acts a parent to all employee componenets
 - creates a use state instance of the employees collection based off the static data we have (since we are not working with  persistent data )
 - implmemnts our search bars filter
 - executes components
*/


export function EmployeePage(){
    const [employees,setEmployees ] = useEmployeesPage();
    const [query, updateQuery] = useState("");


    const addNewEmployee = (newEmployee: Employee) => {
      setEmployees(prev => [...prev, newEmployee]);
    };



    const filteredEmployees = employees.filter(
        (employee)=>
            employee.name.toLowerCase().startsWith(query.toLowerCase()) ||
            employee.department.toLowerCase().startsWith(query.toLowerCase())
    );


    
  return(   
   <>
    <section>
    <h2>Employee Directory</h2>
    
    <EmployeeSearch 
      query={query}
      updateQuery={updateQuery}
    />
    <EmployeeFormHandler
      count={employees.length}
      onAdd={addNewEmployee}
    />    
    <DepartmentList filteredEmployees={filteredEmployees}/>
    </section>
    </>
  );
}

      

