import organizations from '../../data/Organization/Organization.json'
import type {Organization} from '../../data/Organization/OrganizationInterface'
import { useState } from "react" 

// creates a new function to use a boolean use state to expand and contract descriptions
function OrgDescription({org}: {org:Organization}) {
    // inititalizes our use state hook with a false value
    const [toggleDescription,setToggle] = useState(false);
    return (
        <>
        {
            // on button click call set toggle to update toggle description 
            // creates hide and show text for buttons associated with the boolean states
            // display the orgs description when toggle description is true (show)
        }
        <button onClick={()=>setToggle(!toggleDescription)}>
           {toggleDescription ?"Hide":"Show"} 
        </button>
        {toggleDescription &&<h4>{org.description}</h4>}
        </>
    );
}





const Orgs = organizations.map((org:Organization)=>
    <div className= "OrganizationProfile">
            <h2>
            {org.role} 
            </h2>
            <h3>
            {org.name} 
            </h3>
            <div>
                <h3 className='description-header'>
                    Description 
                </h3>
                <OrgDescription org={org} />
            </div>

    </div>
);






export default Orgs
