import type {Employee} from '../../data/Employees/employeeInterface'
import { useEntryForm } from "../../hooks/useEntryFormEmployee";
type FormEntry = Omit<Employee, "id">;

import * as useEntryform from "../../hooks/useEntryFormEmployee";
interface EmployeeFormProps {
  formEntry: FormEntry;
  handleSubmit: (event: React.FormEvent) => void;
  handleFormInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function EmployeeFormTemplate({ formEntry, handleSubmit, handleFormInput}:EmployeeFormProps) {
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



function CreateEmployee({employee}: { employee: Employee }) {
    return(
        <div className ="departmentSection">
        <h3>{employee.department}</h3>
        {employee.name}
        </div>

    );
};

function EmployeeForm(){
if (EmployeeFormTemplate){
    CreateEmployee
    await 
}


}


export default 