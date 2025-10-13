

import * as OrganizationRepo from "../apis/organizationRepo";
import type { Organization } from "../data/Organization/OrganizationInterface";

export async function fetchOrganizations() {
  const Organizations = await OrganizationRepo.getOrganizations();
  return Organizations;
}

export async function createNewOrganization(organization: Organization) {
  return await OrganizationRepo.createOrganization(organization);
}


 // ensures no role is less then three charcters and ensures duplicated roles cannot be created by iterating over organization data
export async function validateOrganization(organization: Organization) {
  const validationErrors = new Map<string, string>();

  if (organization.role?.trim().length < 3)  validationErrors.set("role", "role must Contain a minimum of three characters");
    
    const orgData = await OrganizationRepo.getOrganizations();

    const duplicate = orgData.some(org => org.role === organization.role);
    if (duplicate) {
        validationErrors.set("role", "Roles cannot be duplicates of each other");
    }


  return validationErrors;
}
