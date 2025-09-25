import type { JSX } from "react";
import employees from '../../../assets/data/employees.json'
import './Employees.css'
import type {Employee} from '../../../assets/data/employeeInterface'
import { useState } from "react";



/* main calls departmentList function using employee data*/
export function EmployeePage(){
// creates a use state instance with a string we call query that will hold searches
// and a function i called updatequery that we can use to re render our page with the updated state
const [query, updateQuery] = useState("");
  return(
    <>
    <section>
    <h2>Employee Directory</h2>
    {/* 
    - creates a input field which will be our searchbox on the dom 
    - uses the text string type
    - value is set to our use state query variable to allow us to pass it off
    - on change updates the pages state by calling update query with the search query value
    */}
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

      
/* function using employee interface to sort employees into a new json grouped by department structure is as follows:
Departmentname = {name:.department:}*/
function SortEmployees(employees:Employee[]) {
    const sortedDepartments: {[key:string]:Employee[]} = {};
    // for each employee create a new department array, push emmployee data objects to coresponding array
    employees.forEach((employee)=>{
        if (!sortedDepartments[employee.department]){
            sortedDepartments[employee.department] = [];
        }
        sortedDepartments[employee.department].push(employee)
    })

    return sortedDepartments;

}
/* function to create react elements dynamically using employee interface against employee data.
utilizes sort employees function to seperate json logic from browser component logic.*/
function DepartmentList({ employees,query }: { employees: Employee[];query:string; }) {
    // filters employees by name or department string checking if it starts with the same as the query
    const filteredEmployees = employees.filter(
        (employee)=>
            employee.name.toLowerCase().startsWith(query.toLowerCase()) ||
            employee.department.toLowerCase().startsWith(query.toLowerCase())
    );

    // uses the sort employees function on our filtered employees
    const groupedEmployees = SortEmployees(filteredEmployees);
    

    // for each department group found in sorted json push all of its employees as h4 elemnts too a employee jsx array container
    const departmentSections: JSX.Element[] = [];

    for (const department in groupedEmployees) {
        const employeeItems: JSX.Element[] = [];
        groupedEmployees[department].forEach((employee) => {
            employeeItems.push(<h4>{employee.name}</h4>);
    });

    departmentSections.push(
        <div className ="departmentSection">
        <h3>{department}</h3>
        {employeeItems}
        </div>
  );
}

    return(
        <>
            {departmentSections}
        </>
        );

}

