import { defineEventHandler } from "h3";
import prisma from "@/lib/prisma";

export default defineEventHandler(async () => {
  try {
    const tasks = await prisma.task.findMany();
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error fetching tasks",
    });
  }
});
