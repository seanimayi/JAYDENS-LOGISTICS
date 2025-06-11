import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; //  Fix the typo in the import

const prisma = new PrismaClient();

async function main() {
  const admins = [
    {
      name: "Alase Bamidele Emmanuel",
      email: "ceo@example.com", //  Must not be empty if used in "where"
      password: bcrypt.hashSync("jlhe@2222", 10),
      role: "Chief Executive Officer",
      date: new Date(),
    },
    {
      name: "Akinade Adeyinka Micheal",
      email: "logistics@example.com",
      password: bcrypt.hashSync("jlhe@2224", 10),
      role: "Director, Logistics and Educational services", //  Remove invisible special char
      date: new Date(),
    },
    {
      name: "Falayi Olufemi Abiodun",
      email: "hr@example.com",
      password: bcrypt.hashSync("jlhe@2226", 10),
      role: "Executive director Human Resources and Education",
      date: new Date(),
    },
  ];

  for (const admin of admins) {
    await prisma.admin_Table.upsert({
      where: { email: admin.email }, //  Needs unique non-empty email
      update: {}, // You can define updates if needed
      create: {
        full_name: admin.name,
        email: admin.email,
        password: admin.password,
        role: admin.role,
        create_at: admin.date, //  Make sure your Prisma schema uses "created_at"
      },
    });
  }
}

main()
  .then(() => {
    console.log("Seeding completed successfully.");
    return prisma.$disconnect();
  })
  .catch((error) => {
    console.error("Error during seeding:", error);
    return prisma.$disconnect();
  });
