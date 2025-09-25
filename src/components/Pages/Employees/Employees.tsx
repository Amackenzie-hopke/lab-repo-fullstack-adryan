import type { JSX } from "react";
import employees from '../../../assets/data/employees.json'
import './Employees.css'
import type {Employee} from '../../../assets/data/employeeInterface'
import { useState } from "react";



/* main calls departmentList function using employee data*/
export function EmployeePage(){
// creates a search term item we will use to compare search to employees
  return(
    <>
    <section>
    <h2>Employee Directory</h2>
    <DepartmentList employees={employees}/>
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
function DepartmentList({ employees }: { employees: Employee[]; }) {

    const groupedEmployees = SortEmployees(employees);
    

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

