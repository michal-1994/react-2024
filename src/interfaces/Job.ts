/** @format */

export interface Job {
  id?: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: JobCompany;
}

interface JobCompany {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}
