import { defineEventHandler, createError, readBody } from "h3";
import { Task, tasks } from "@/server/schema";
import db from "@/server/db";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<Task>(event);

    const existingTask = await db
      .select()
      .from(tasks)
      .where(eq(tasks.title, body.title))
      .limit(1);

    if (existingTask.length > 0) {
      return {
        message: "Task with this title already exists",
        task: existingTask[0],
      };
    }

    const [newTask] = await db
      .insert(tasks)
      .values({
        description: body.description,
        priority: body.priority,
        status: body.status,
        title: body.title,
      })
      .returning();

    return {
      message: "Task created successfully",
      task: newTask,
    };
  } catch (error) {
    console.error("Error creating task:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating task",
    });
  }
});
