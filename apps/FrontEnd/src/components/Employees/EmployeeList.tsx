
import type { JSX } from "react";
import type {Employee} from '../../data/Employees/employeeInterface'

/*
sorts retrieved employees into department groupings 
*/
function SortEmployees(employees:Employee[]) {
    const sortedDepartments: {[key:string]:Employee[]} = {};
    employees.forEach((employee)=>{
        const key = employee.department
        if (!sortedDepartments[key]){
            sortedDepartments[key] = [];
        }
        sortedDepartments[key].push(employee)
    })

    return sortedDepartments;

}

/*
sorts retrieved employees into department groupings, assumes employees will be filtered by search bar as it 
receives the filtered data output too list

*/
function DepartmentList({ filteredEmployees}: { filteredEmployees: Employee[]; }) {


    const groupedEmployees = SortEmployees(filteredEmployees);
    
    const departmentSections: JSX.Element[] = [];

    for (const department in groupedEmployees) {
        const employeeItems: JSX.Element[] = [];
        groupedEmployees[department].forEach((employee) => {
            employeeItems.push(<h4 key={employee.id}>{employee.name}</h4>);
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
