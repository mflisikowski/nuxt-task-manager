import { PrismaClient } from "@prisma/client";
import { TaskStatus, TaskPriority } from "@prisma/client";
import { Faker, pl } from '@faker-js/faker';

const faker = new Faker({
    locale: [pl],
});

const prisma = new PrismaClient();

const generateRandomTask = () => ({
    description: faker.lorem.paragraph(),
    priority: faker.helpers.arrayElement(Object.values(TaskPriority)),
    status: faker.helpers.arrayElement(Object.values(TaskStatus)),
    title: faker.lorem.sentence(),
});

async function main() {
    await prisma.task.deleteMany();

    const tasks = faker.helpers.multiple(generateRandomTask, { count: 100 });

    for (const task of tasks) {
        await prisma.task.create({
            data: task,
        });
    }

    console.log("Seed data inserted successfully.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

export { };
