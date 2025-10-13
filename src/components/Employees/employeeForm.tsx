import type {Employee} from '../../data/Employees/employeeInterface'
import { useEntryForm } from "../../hooks/useEntryFormEmployee";
type FormEntry = Omit<Employee, "id">;

interface EmployeeFormProps {
  formEntry: FormEntry;
  handleSubmit: (event: React.FormEvent) => void;
  handleFormInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Map<string, string>;
}

/*
Employee form defines our employye creation forms html structure and renders errors received from service validations through our hook

receives form entry, handleSubmit, HandleformInput and errors as parameters from the use form entry employee hook
*/
function EmployeeForm({ formEntry, handleSubmit, handleFormInput,errors}:EmployeeFormProps) {
        return(
            <form className= "AddEmployeeForm" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add new employees</legend>

                    
                        <label htmlFor="EmployeeNameField">
                            Employee's Name
                        </label>
                        {errors.has("name") && (
                            <div className="error">{errors.get("name")}</div>
                        )}
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
                        {errors.has("department") && (
                            <div className="error">{errors.get("department")}</div>
                        )} 
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



/*
bridges the employee form with the useEntryForm hook for execution on the page component
    -  count is used by hook to generate id
    - on add is passed through hook as a callback fucntion which tells our hook when to create a object to match the object created in browser
    - type is passed to differentiate the form from the organization form in hook
*/
export function EmployeeFormHandler({count,onAdd,}:{count:number,onAdd:(emp: Employee) => void;}){
    const { formEntry, handleFormInput, handleSubmit,errors } = useEntryForm({
    count,
    type:"employee",
    onAdd
    });

    return(
        <EmployeeForm
        formEntry={formEntry as FormEntry}
        handleFormInput={handleFormInput}
        handleSubmit={handleSubmit}
        errors={errors}
    />

    )
}
export default EmployeeFormHandler