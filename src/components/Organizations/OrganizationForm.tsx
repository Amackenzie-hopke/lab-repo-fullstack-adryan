import type { Organization } from '../../data/Organization/OrganizationInterface';
import { useEntryForm } from "../../hooks/useEntryFormEmployee";
type FormEntry = Omit<Organization, "id">;

interface FormProps {
  formEntry: FormEntry;
  handleSubmit: (event: React.FormEvent) => void;
  handleFormInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Map<string, string>;
}

/*
Employee form defines our employye creation forms html structure and renders errors received from service validations through our hook

receives form entry, handleSubmit, HandleformInput and errors as parameters from the use form entry employee hook
*/
function OrganizationForm({ formEntry, handleSubmit, handleFormInput,errors}:FormProps) {
        return(
            <form className= "AddRoleForm" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add a new Role</legend>

                    
                        <label htmlFor="RoleField">
                            Roles Name
                        </label>
                        {errors.has("role") && (
                            <div className="error">{errors.get("role")}</div>
                        )}
                        <input 
                            type="text"
                            name="role"
                            id="RoleField"
                            value={formEntry.role} 
                            onChange={handleFormInput}
                            
                        />

                        
                        <label htmlFor="EmployeeDepartmentField">
                            Leaders Name
                        </label>
                        {errors.has("name") && (
                            <div className="error">{errors.get("name")}</div>
                        )} 
                        <input 
                            type="text"
                            name="name"
                            id="LeaderNameField"
                            value={formEntry.name} 
                            onChange={handleFormInput}
                        />


                        <label htmlFor="EmployeeDepartmentField">
                            Roles description
                        </label>
                        {errors.has("description") && (
                            <div className="error">{errors.get("description")}</div>
                        )} 
                        <input 
                            type="text"
                            name="description"
                            id="DescriptionField"
                            value={formEntry.description ?? ""} 
                            onChange={handleFormInput}
                        />

                </fieldset>
                <button  type="submit" className="employee-creation-button" >Add Employee</button>
            </form>
        );
        
    };




export function OrganizationFormHandler({count, onAdd }: { count: number; onAdd: (entry: Organization) => void; }) {
  const { formEntry, handleFormInput, handleSubmit, errors } = useEntryForm({
    count,
    type:"organization",
    onAdd
  });

    return(
    <OrganizationForm
      formEntry={formEntry as FormEntry}
      handleFormInput={handleFormInput}
      handleSubmit={handleSubmit}
      errors={errors}
    />

    )
}
export default OrganizationFormHandler