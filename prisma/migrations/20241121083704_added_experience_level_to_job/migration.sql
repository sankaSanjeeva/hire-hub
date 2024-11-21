/*
  Warnings:

  - Added the required column `experienceLevel` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('NONE', 'FRESHER', 'INTERMEDIATE', 'EXPERT');

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "experienceLevel" "ExperienceLevel" NOT NULL;
