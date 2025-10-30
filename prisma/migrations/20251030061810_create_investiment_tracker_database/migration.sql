-- CreateEnum
CREATE TYPE "Months" AS ENUM ('JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER');

-- CreateTable
CREATE TABLE "investiment_goals" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "monthly_amount" DOUBLE PRECISION NOT NULL,
    "months" "Months"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "investiment_goals_pkey" PRIMARY KEY ("id")
);
