import employees from '../../assets/data/employees.json'
import './Main.css'
import type {Employee} from '../../assets/data/employeeInterface'

/* main calls departmentList function using employee data*/
export function Main(){
  return(
    <>
    <main>
    <DepartmentList employees={employees}/>
    </main>
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
function DepartmentList({ employees }: { employees: Employee[] }) {
    const groupedEmployees = SortEmployees(employees);
    const departmentSections: JSX.Element[] = [];
    // for each department group found in sorted json push all of its employees as li elemnts too a employee jsx array container
    for (const department in groupedEmployees) {
        const employeeItems: JSX.Element[] = [];
        groupedEmployees[department].forEach((employee, index) => {
            employeeItems.push(<li>{employee.name}</li>);
    });

    departmentSections.push(
        <div className ="departmentSection">
        <h3>{department}</h3>
        <ul>{employeeItems}</ul>
        </div>
  );
}

    return(
        <>
            {departmentSections}
        </>
        );

}

