
import type { JSX } from "react";
import type {Employee} from '../../data/Employees/employeeInterface'


function SortEmployees(employees:Employee[]) {
    const sortedDepartments: {[key:string]:Employee[]} = {};
    employees.forEach((employee)=>{
        if (!sortedDepartments[employee.department]){
            sortedDepartments[employee.department] = [];
        }
        sortedDepartments[employee.department].push(employee)
    })

    return sortedDepartments;

}
function DepartmentList({ employees,query }: { employees: Employee[];query:string; }) {
    const filteredEmployees = employees.filter(
        (employee)=>
            employee.name.toLowerCase().startsWith(query.toLowerCase()) ||
            employee.department.toLowerCase().startsWith(query.toLowerCase())
    );

    const groupedEmployees = SortEmployees(filteredEmployees);
    
    const departmentSections: JSX.Element[] = [];

    for (const department in groupedEmployees) {
        const employeeItems: JSX.Element[] = [];
        groupedEmployees[department].forEach((employee) => {
            employeeItems.push(<h4>{employee.name}</h4>);
    });

    departmentSections.push(
        <div className ="departmentSection" key={department}>
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
export default DepartmentList
