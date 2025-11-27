/*
This file contains repository functions that execute crud logic, these should be triggered by service layer functions only

this code currently only makes changes to a in memory typescript collection 
meaning it will re-render back to the static collection default upon a page reload

Current CRUD functions 
- get all (returns entire collection) 
- Create (pushes employee data) 
- update (tries to locate employee with requested index and replace employee object with matching id)
- delete (deletes a employee object in collection using splice and targetting by id)
*/


import type { Employee } from "../data/Employees/employeeInterface";
import type { BaseResponse } from "../types/BaseResponse";
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;



export async function getEmployees(token: string) {
  const employeeResponse: Response = await fetch(`${BASE_URL}/employees`,{
     headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!employeeResponse.ok) {
    throw new Error("Failed to fetch employees");
  }

  const json: BaseResponse<Employee[]> = await employeeResponse.json();
  return json.data;
}


export async function getEmployeeById(employeeId: string): Promise<Employee> {
  const employeeResponse: Response = await fetch(`${BASE_URL}/employees/${employeeId}`);

  if (!employeeResponse.ok) {
    throw new Error(`Failed to fetch Employee with id ${employeeId}`);
  }

  const json: BaseResponse<Employee> = await employeeResponse.json();
  return json.data;
}

export async function createEmployee(employee: Employee,token: string) {
  const { id, ...employeeData } = employee;

  const createResponse: Response = await fetch(`${BASE_URL}/employees/create`, {

    method: "POST",
    body: JSON.stringify({ ...employeeData }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`

    },
  });

  if (!createResponse.ok) {
    throw new Error(`Failed to create Employee`);
  }

  const json: BaseResponse<Employee> = await createResponse.json();
  return json.data;
}

