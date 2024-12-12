'use client';

import { useActionState, useState } from 'react';
import {
  EmploymentType,
  ExperienceLevel,
  JobCategory,
  JobStatus,
} from '@prisma/client';
import { Tiptap } from '@/components';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  EmploymentTypeDisplay,
  ExperienceLevelDisplay,
} from '@/constants/enum-mapping';
import { Button } from '@/components/ui/button';
import { createJob } from '@/data/actions/create-job';
import { JobSchemaErrorType } from '@/validations/jobSchema';

const employmentTypes = Object.values(EmploymentType);
const experienceLevels = Object.values(ExperienceLevel);

const initialDescription =
  '<h2>Job Description</h2><p>This is a sample job description. Update this to match the job you are posting.</p><p></p><h2>Key Responsibilities</h2><ul><li><p>Responsibility 1</p></li><li><p>Responsibility 2</p></li></ul><p></p><h2>Professional Skills</h2><ul><li><p>Skills 1</p></li><li><p>Skills 2</p></li></ul>';

export default function CreateJobForm({
  categories,
}: {
  categories: JobCategory[];
}) {
  const [description, setDescription] = useState(initialDescription);
  const [state, createJobAction, pending] = useActionState(createJob, {
    data: {
      title: '',
      description: '',
      status: JobStatus.DRAFT,
      employmentType: EmploymentType.FULL_TIME,
      experienceLevel: ExperienceLevel.NONE,
      companyId: '',
      categoryId: '',
    },
    errors: {} as JobSchemaErrorType,
  });

  const action = (formData: FormData) => {
    formData.set('description', description);
    formData.set('status', JobStatus.DRAFT);
    formData.set('companyId', 'cm3r8gf0u0000m5u4pu4wgipb');
    createJobAction(formData);
  };

  return (
    <form action={action} className="space-y-10 rounded bg-theme/10 p-10">
      <div>
        <label htmlFor="title">Title*</label>
        <Input
          id="title"
          name="title"
          placeholder="Title"
          error={state.errors.fieldErrors?.title?.[0]}
          defaultValue={state.data?.title}
        />
      </div>

      <div className="flex gap-5">
        <div className="flex-1">
          <label htmlFor="employmentType">Employment Type*</label>
          <Select
            name="employmentType"
            defaultValue={state.data?.employmentType}
          >
            <SelectTrigger id="employmentType">
              <SelectValue placeholder="Select Employment Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Employment Type</SelectLabel>
                {employmentTypes.map((employmentType) => (
                  <SelectItem key={employmentType} value={employmentType}>
                    {EmploymentTypeDisplay[employmentType]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <label htmlFor="salary">Salary</label>
          <Input
            id="salary"
            name="salary"
            placeholder="Salary"
            type="number"
            error={state.errors.fieldErrors?.salary?.[0]}
            defaultValue={state.data?.salary}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="sameLocation" name="sameLocation" checked disabled />
        <label htmlFor="sameLocation">Use company location</label>
      </div>

      <div className="flex gap-5">
        <div className="flex-1">
          <label htmlFor="categoryId">Job Category*</label>
          <Select name="categoryId" defaultValue={state.data?.categoryId}>
            <SelectTrigger id="categoryId">
              <SelectValue placeholder="Select Job Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Job Category</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <label htmlFor="experienceLevel">Experience Level*</label>
          <Select
            name="experienceLevel"
            defaultValue={state.data?.experienceLevel}
          >
            <SelectTrigger id="experienceLevel">
              <SelectValue placeholder="Select Experience Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Experience Level</SelectLabel>
                {experienceLevels.map((experienceLevel) => (
                  <SelectItem key={experienceLevel} value={experienceLevel}>
                    {ExperienceLevelDisplay[experienceLevel]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tiptap
        content={initialDescription}
        onUpdate={({ editor }) => {
          const html = editor.getHTML().replace(/<p><\/p>/g, '<br>');
          setDescription(html);
        }}
      />

      <Button type="submit" disabled={pending} loading={pending}>
        Create Job
      </Button>
    </form>
  );
}
