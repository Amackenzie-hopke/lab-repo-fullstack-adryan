import organizations from '../../../assets/data/Organization/Organization.json'
import './Organization.css'
import type {Organization} from '../../../assets/data/Organization/OrganizationInterface'

const Orgs = organizations.map((org:Organization)=>
    <div className= "OrganizationProfile">
            <h2>
            {org.role} 
            </h2>
            <h3>
            {org.name} 
            </h3>
            <h4>
            {org.description} 
            </h4>
    </div>
);

export function OrganizationPage (){
    return(
        <>
        <section className = 'Organization List'>
        <h2>
            Our Leaders
        </h2>
        {Orgs} 
        </section>
        </>
    );
};









export default OrganizationPage
