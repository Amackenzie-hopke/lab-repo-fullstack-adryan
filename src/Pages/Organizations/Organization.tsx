import './Organization.css'
import OrganizationsList from '../../components/Organizations/OrganizationsList';
import OrganizationFormHandler from "../../components/Organizations/OrganizationForm"
import { useState } from "react";
import type { Organization } from '../../data/Organization/OrganizationInterface';
import { organizationData } from '../../data/Organization/Organization';

export function OrganizationPage (){
    const [orgs,setOrgs ] = useState<Organization[]>(organizationData);

    

    const addNewOrg = (newOrganization: Organization) => {
        setOrgs((prevOrgs) => [...prevOrgs, newOrganization]);
    };

   

    return(
        <>
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
        </>
    );
};




export default OrganizationPage

