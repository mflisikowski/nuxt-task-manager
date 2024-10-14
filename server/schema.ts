import { pgTable, uuid, varchar, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const taskStatusEnum = pgEnum("task_status", [
  "TO_DO",
  "IN_PROGRESS",
  "COMPLETED",
]);

export const taskPriorityEnum = pgEnum("task_priority", [
  "LOW",
  "MEDIUM",
  "HIGH",
]);

export const taskDescriptionSchema = varchar("description", { length: 255 });
export const taskPrioritySchema = taskPriorityEnum("priority").notNull();
export const taskStatusSchema = taskStatusEnum("status").notNull();
export const taskTitleSchema = varchar("title", { length: 255 }).notNull();

export const tasks = pgTable("tasks", {
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  description: taskDescriptionSchema,
  priority: taskPrioritySchema,
  status: taskStatusSchema,
  title: taskTitleSchema,
  id: uuid("id").primaryKey().defaultRandom(),
});

export type Task = typeof tasks.$inferSelect;
