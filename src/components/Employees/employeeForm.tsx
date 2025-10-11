import {useState} from "react"
import type {Employee} from '../../data/Employees/employeeInterface'

type FormEntry = Omit<Employee, "id">;


interface EmployeeFormProps {
  formEntry: FormEntry;
  handleSubmit: (e: React.FormEvent) => void;
  handleFormInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function EmployeeForm({ formEntry, handleSubmit, handleFormInput}:EmployeeFormProps) {
    return(
        <form className= "AddEmployeeForm" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add new employees</legend>

                
                    <label htmlFor="EmployeeNameField">
                        Employee's Name
                    </label>
                    <input 
                        type="text"
                        name="name"
                        id="EmployeeNameField"
                        value={formEntry.name} 
                        onChange={handleFormInput}
                    />
                            
                    <label htmlFor="EmployeeDepartmentField">
                        Employee's Department
                    </label>
                    <input 
                        type="text"
                        name="department"
                        id="EmployeeDepartmentField"
                        value={formEntry.department} 
                        onChange={handleFormInput}
                    />
            </fieldset>
            <button  type="submit" className="employee-creation-button" >Add Employee</button>
        </form>
    );
};

export function HandleEmployeeForm({ onAddEmployee,EmployeeCount }: { onAddEmployee?: (employee: Employee) => void,EmployeeCount:number }) {
    
    const [formEntry, createEmployeeProfile] = useState<Employee>({ 
        id:"",
        name: "",
        department:"",
    });

    const handleSubmit = (event:React.FormEvent)=>{
        event.preventDefault()

        const newEmployee= {
                ...formEntry,  
                id: ((EmployeeCount ?? 0) + 1).toString()              
        };


        console.log("newEmployee", newEmployee);

        if (onAddEmployee) {
            onAddEmployee(newEmployee);
        }

        createEmployeeProfile({
        id:"",
        name: "",
        department:"",
        });
    }

    // handles extracting inputs from the form and converting data
    const handleFormInput = (game: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value} = game.target;
                createEmployeeProfile({
                    ...formEntry,
                    [name]: value,
            });
        }
   
    return(
        <EmployeeForm 
            formEntry={formEntry}
            handleSubmit={handleSubmit}
            handleFormInput={handleFormInput}
        />
    );
};

export function CreateEmployee({employee}: { employee: Employee }) {
    return(
        <div className ="departmentSection">
        <h3>{employee.department}</h3>
        {employee.name}
        </div>

    );
};



export default HandleEmployeeForm