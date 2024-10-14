import { createSelectSchema } from "drizzle-zod";
import { tasks } from "@/server/schema";

export const taskSchema = createSelectSchema(tasks);
