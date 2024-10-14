import { defineEventHandler, createError } from "h3";
import { tasks } from "@/server/schema";
import { eq } from "drizzle-orm";
import db from "@/server/db";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;

  if (!id) {
    throw createError({
      statusMessage: "Invalid task ID",
      statusCode: 400,
    });
  }

  try {
    await db.delete(tasks).where(eq(tasks.id, id));
    return {
      message: "Task deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting task:", error);
    throw createError({
      statusMessage: "Task not found or error deleting task",
      statusCode: 500,
    });
  }
});
