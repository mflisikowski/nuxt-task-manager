import { defineEventHandler, createError } from "h3";
import { tasks } from "@/server/schema";
import db from "@/server/db";

export default defineEventHandler(async (event) => {
  try {
    const allTasks = await db.select().from(tasks);
    return allTasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to get tasks",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});
