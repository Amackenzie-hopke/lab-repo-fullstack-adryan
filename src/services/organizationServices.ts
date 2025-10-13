

import * as OrganizationRepo from "../apis/organizationRepo";
import type { Organization } from "../data/Organization/OrganizationInterface";

export async function fetchOrganizations() {
  const Organizations = await OrganizationRepo.getOrganizations();
  return Organizations;
}

export async function createNewOrganization(organization: Organization) {
  return await OrganizationRepo.createOrganization(organization);
}


 
export async function validateOrganization(organization: Organization) {
  const validationErrors = new Map<string, string>();

  if (organization.role?.trim().length < 3)  validationErrors.set("role", "role must Contain a minimum of three characters");
  


  return validationErrors;
}
