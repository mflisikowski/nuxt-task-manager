import { TaskStatus, TaskPriority } from "@prisma/client";
import { z } from "zod";

export const taskPrioritySchema = z.nativeEnum(TaskPriority);
export const taskStatusSchema = z.nativeEnum(TaskStatus);

export const taskDescriptionSchema = z.string().min(1).max(255).nullable();
export const taskTitleSchema = z.string().min(1).max(255);
export const taskIDSchema = z.string().uuid();

export const taskSchema = z.object({
  id: taskIDSchema,
  title: taskTitleSchema,
  description: taskDescriptionSchema,
  priority: taskPrioritySchema,
  status: taskStatusSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});
