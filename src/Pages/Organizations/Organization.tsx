import './Organization.css'
import Orgs from '../../components/Organizations/OrganizationsList';


export function OrganizationPage (){
    return(
        <>
        <section className = 'Organization-List'>
        <h2>
            Our Leaders
        </h2>
        {Orgs} 
        </section>
        </>
    );
};




export default OrganizationPage
