
import { organizationData } from "../data/Organization/Organization";
import type { Organization } from "../data/Organization/OrganizationInterface";

export function getOrganizations() {
  return organizationData;
}


export async function createOrganization(organization: Organization) {
  organizationData.push(organization);
  return organization;
}

export async function updateOrganization(organization: Organization) {
  const index = organizationData.findIndex((org) => org.id === organization.id);

  if (index !== -1) {
    throw new Error(`Failed to update recipe with ${organization}`);
  }

  organizationData[index] = organization;
  return organizationData[index];
}

export async function deleteOrganization(organization: Organization) {
  const index = organizationData.findIndex(org => org.id === organization.id);

  if (index !== -1) {
    organizationData.splice(index, 1);
  }

  return organization;
}


