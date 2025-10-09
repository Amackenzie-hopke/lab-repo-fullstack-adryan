import employees from '../../data/Employees/employees.json'
import './Employees.css'
import { useState } from "react";
import DepartmentList from '../../components/Employees/EmployeeList'



/* main calls departmentList function using employee data*/
export function EmployeePage(){



const [query, updateQuery] = useState("");
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

    <DepartmentList employees={employees} query={query}/>

    </section>
    </>
  );
}

      

