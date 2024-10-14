import db from "./db";
import { tasks, taskStatusEnum, taskPriorityEnum, type Task } from "./schema";
import { Faker, pl } from "@faker-js/faker";

const faker = new Faker({
  locale: [pl],
});

const generateRandomTask = (): Omit<
  Task,
  "id" | "createdAt" | "updatedAt"
> => ({
  description: faker.lorem.paragraph().substring(0, 255),
  priority: faker.helpers.arrayElement(taskPriorityEnum.enumValues),
  status: faker.helpers.arrayElement(taskStatusEnum.enumValues),
  title: faker.lorem.sentence().substring(0, 255),
});

async function main() {
  try {
    await db.delete(tasks);

    const tasksData = faker.helpers.multiple(generateRandomTask, {
      count: 100,
    });

    await db.insert(tasks).values(tasksData);

    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

main();
