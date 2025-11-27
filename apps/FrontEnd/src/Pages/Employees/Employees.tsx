import './Employees.css'
import { useState } from "react";
import DepartmentList from '../../components/Employees/EmployeeList'
import type { Employee } from "../../data/Employees/employeeInterface";
import EmployeeFormHandler from '../../components/Employees/employeeForm';
import EmployeeSearch from '../../components/Employees/EnployeeSearch'
import { useEmployeesPage } from '../../hooks/useEmployeePage';
import { useAuth} from "@clerk/clerk-react";
import image2 from '../../assets/images/image2.png'; 
/*
Employee Page Function which renders and acts a parent to all employee componenets
 - creates a use state instance of the employees collection based off the static data we have (since we are not working with  persistent data )
 - implmemnts our search bars filter
 - executes components
*/



export function EmployeePage(){
    const { isSignedIn } = useAuth();

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
    {isSignedIn ? (
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
    ):(
      <>
      <h1>no sign in no entry {'>:(((('}</h1>
      <img src={image2} alt="nuhuh" />
      </>
    )}
  </>
  
  );
}

      

