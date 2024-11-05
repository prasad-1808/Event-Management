-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "EventDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("mobile")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
