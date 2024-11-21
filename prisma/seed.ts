import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const education = await prisma.jobCategory.upsert({
    where: { name: 'Education' },
    update: {},
    create: { name: 'Education' },
  });
  const sales = await prisma.jobCategory.upsert({
    where: { name: 'Sales' },
    update: {},
    create: { name: 'Sales' },
  });
  const healthcare = await prisma.jobCategory.upsert({
    where: { name: 'Healthcare' },
    update: {},
    create: { name: 'Healthcare' },
  });
  const retail = await prisma.jobCategory.upsert({
    where: { name: 'Retail' },
    update: {},
    create: { name: 'Retail' },
  });
  const agriculture = await prisma.jobCategory.upsert({
    where: { name: 'Agriculture' },
    update: {},
    create: { name: 'Agriculture' },
  });
  const art = await prisma.jobCategory.upsert({
    where: { name: 'Art' },
    update: {},
    create: { name: 'Art' },
  });
  const communication = await prisma.jobCategory.upsert({
    where: { name: 'Communication' },
    update: {},
    create: { name: 'Communication' },
  });
  const construction = await prisma.jobCategory.upsert({
    where: { name: 'Construction' },
    update: {},
    create: { name: 'Construction' },
  });
  const informationTechnology = await prisma.jobCategory.upsert({
    where: { name: 'Information Technology' },
    update: {},
    create: { name: 'Information Technology' },
  });

  const communicationSkill = await prisma.skill.upsert({
    where: { name: 'Communication' },
    update: {},
    create: { name: 'Communication' },
  });
  const teamwork = await prisma.skill.upsert({
    where: { name: 'Teamwork' },
    update: {},
    create: { name: 'Teamwork' },
  });
  const adaptability = await prisma.skill.upsert({
    where: { name: 'Adaptability' },
    update: {},
    create: { name: 'Adaptability' },
  });
  const leadership = await prisma.skill.upsert({
    where: { name: 'Leadership' },
    update: {},
    create: { name: 'Leadership' },
  });
  const selfManagement = await prisma.skill.upsert({
    where: { name: 'Self-management' },
    update: {},
    create: { name: 'Self-management' },
  });

  console.log({
    jobCategories: {
      education,
      sales,
      healthcare,
      retail,
      agriculture,
      art,
      communication,
      construction,
      informationTechnology,
    },
    skills: {
      communicationSkill,
      teamwork,
      adaptability,
      leadership,
      selfManagement,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
