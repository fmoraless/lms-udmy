const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Mathematics" },
        { name: "Physics" },
        { name: "Chemistry" },
        { name: "Biology" },
        { name: "History" },
        { name: "Geography" },
      ],
    });
    console.log("Categories seeded successfully");
  } catch (error) {
    console.error("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
