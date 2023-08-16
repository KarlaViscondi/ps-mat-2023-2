/*
  Warnings:

  - A unique constraint covering the columns `[plates]` on the table `Car` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "imported" SET DEFAULT false,
ALTER COLUMN "selling_date" DROP NOT NULL,
ALTER COLUMN "selling_price" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Car_plates_key" ON "Car"("plates");
