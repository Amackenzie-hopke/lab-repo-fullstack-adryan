/*
Defines the the search bar component for employee page receives the query and update query usestate from the employee page function
*/
interface EmployeeSearchProps {
  query: string;
  updateQuery: (value: string) => void;
}


export function EmployeeSearch({query,updateQuery}:EmployeeSearchProps){
  return(   
   <>
    <input 
        id="searchBox"
        type="text" 
        placeholder="Search here" 
        value={query} 
        onChange={(event)=>updateQuery(event.target.value)}
    />
    </>
  );
}
export default EmployeeSearch
      

