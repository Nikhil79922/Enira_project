const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function DBconnection() {
  try {
    await prisma.$connect();
    console.log("Connected to MSSQL Database!");
  } catch (error) {
    console.error("Error occurred during DB connection:", error.message);
    console.error(error.stack); // Detailed stack trace
  }
}

module.exports = DBconnection;
