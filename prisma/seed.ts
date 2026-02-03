import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";


const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash("password123", 10);
  const user = await prisma.user.upsert({
    where: { email: "demo@deepenk.com" },
    update: {},
    create: {
      email: "demo@deepenk.com",
      password: hashed,
      name: "Demo User",
    },
  });
  console.log("Seeded user:", user.email);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
