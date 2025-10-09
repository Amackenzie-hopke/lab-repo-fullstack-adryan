import {useState} from "react"
import type {Employee} from '../../../assets/data/Employees/employeeInterface'

// i used following link as a source for my form handling
// https:stackoverflow.com/questions/66692085/better-way-of-handling-form-data-via-react-usestate?

import type {CollectionItem} from "../../../types/collection-item-interface" 

export function EmployeeForm({ formEntry, handleSubmit, handleFormInput}) {
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

export function HandleEmployeeForm({ onAddEmployee }: { onAddEmployee?: (employee: Employee) => void }) {
    
    const [formEntry, createEmployeeProfile] = useState<Employee>({ 
        name: "",
        department:"",
    });

   
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