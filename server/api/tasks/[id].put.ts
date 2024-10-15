import { defineEventHandler, createError, readBody } from "h3";
import { Task, tasks } from "@/server/schema";
import db from "@/server/db";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;

  if (!id) {
    throw createError({
      statusMessage: "Invalid task ID",
      statusCode: 400,
    });
  }

  try {
    const body = await readBody<Task>(event);
    const [updatedTask] = await db
      .update(tasks)
      .set({
        description: body.description,
        priority: body.priority,
        status: body.status,
        title: body.title,
      })
      .where(eq(tasks.id, id))
      .returning();

    if (!updatedTask) {
      throw createError({
        statusMessage: "Task not found",
        statusCode: 404,
      });
    }

    return updatedTask;
  } catch (error) {
    console.error("Error updating task:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error updating task",
    });
  }
});
