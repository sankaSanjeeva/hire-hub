import {
  ApplicationStatus,
  EmploymentType,
  ExperienceLevel,
  Gender,
  JobStatus,
  Role,
} from '@prisma/client';

export const GenderDisplay: Record<Gender, string> = {
  [Gender.FEMALE]: 'Female',
  [Gender.MALE]: 'Male',
  [Gender.OTHER]: 'Other',
};

export const RoleDisplay: Record<Role, string> = {
  [Role.COMPANY_ADMIN]: 'Company Admin',
  [Role.JOB_SEEKER]: 'Job Seeker',
  [Role.RECRUITER]: 'Recruiter',
  [Role.SYSTEM_ADMIN]: 'System Admin',
};

export const JobStatusDisplay: Record<JobStatus, string> = {
  [JobStatus.ACTIVE]: 'Active',
  [JobStatus.COMPLETE]: 'Completed',
  [JobStatus.DRAFT]: 'Draft',
};

export const EmploymentTypeDisplay: Record<EmploymentType, string> = {
  [EmploymentType.CONTRACT]: 'Contract',
  [EmploymentType.FREELANCE]: 'Freelance',
  [EmploymentType.FULL_TIME]: 'Full Time',
  [EmploymentType.INTERNSHIP]: 'Internship',
  [EmploymentType.PART_TIME]: 'Part Time',
};

export const ExperienceLevelDisplay: Record<ExperienceLevel, string> = {
  [ExperienceLevel.EXPERT]: 'Expert',
  [ExperienceLevel.FRESHER]: 'Fresher',
  [ExperienceLevel.INTERMEDIATE]: 'Intermediate',
  [ExperienceLevel.NONE]: 'No-experience',
};

export const ApplicationStatusDisplay: Record<ApplicationStatus, string> = {
  [ApplicationStatus.ACCEPTED]: 'Accepted',
  [ApplicationStatus.PENDING]: 'Pending',
  [ApplicationStatus.REJECTED]: 'Rejected',
};
