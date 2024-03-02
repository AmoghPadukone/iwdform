-- CreateTable
CREATE TABLE "Domain" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyDetails" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyLinkedin" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "companyWebsite" TEXT NOT NULL,

    CONSTRAINT "CompanyDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CompanyDetailsToDomain" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Domain_name_key" ON "Domain"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyDetails_emailAddress_key" ON "CompanyDetails"("emailAddress");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyDetailsToDomain_AB_unique" ON "_CompanyDetailsToDomain"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyDetailsToDomain_B_index" ON "_CompanyDetailsToDomain"("B");

-- AddForeignKey
ALTER TABLE "_CompanyDetailsToDomain" ADD CONSTRAINT "_CompanyDetailsToDomain_A_fkey" FOREIGN KEY ("A") REFERENCES "CompanyDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyDetailsToDomain" ADD CONSTRAINT "_CompanyDetailsToDomain_B_fkey" FOREIGN KEY ("B") REFERENCES "Domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;
