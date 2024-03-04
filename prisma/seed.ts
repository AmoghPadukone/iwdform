const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedDomains(domains:any) {
  try {
    for (const domainName of domains) {
      await prisma.domain.create({
        data: {
          name: domainName,
        },
      });
      console.log(`Domain "${domainName}" seeded successfully.`);
    }
  } catch (error) {
    console.error('Error seeding domains:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Array of predefined domain names
const predefinedDomains = ['aiml', 'fullstack', 'dataanalyst', /* Add more domains here */];

// Call the seed function with the predefined domains
seedDomains(predefinedDomains);
