import './Organization.css'
import OrganizationsList from '../../components/Organizations/OrganizationsList';
import OrganizationFormHandler from "../../components/Organizations/OrganizationForm"
import { useState } from "react";
import type { Organization } from '../../data/Organization/OrganizationInterface';
import { organizationData } from '../../data/Organization/Organization';
import { useAuth} from "@clerk/clerk-react";
import image2 from '../../assets/images/image2.png';

export function OrganizationPage (){
    const { isSignedIn } = useAuth();

    
    const [orgs,setOrgs ] = useState<Organization[]>(organizationData);

    const addNewOrg = (newOrganization: Organization) => {
        setOrgs((prevOrgs) => [...prevOrgs, newOrganization]);
    };

    return(
        <>
        {isSignedIn ? (
        <section className = 'Organization-List'>
        <h2>
            Our Leaders
        </h2>
        <OrganizationFormHandler
            count={orgs.length}
            onAdd={addNewOrg}
        />
        <OrganizationsList organizations={orgs} />
        </section>
        ):(
        <>
        <h1>no sign in no entry <br />{'>:(((('}</h1>
        <img src={image2} alt="nuhuh" />
        </>
    )}
        </>
    );
};



  
      
export default OrganizationPage

