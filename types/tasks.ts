import type { Column, ColumnDef, Table } from "@tanstack/vue-table";
import type { taskIDSchema, taskSchema } from "@/schemas/tasks";
import type { z } from "zod";

export type { TaskPriority, TaskStatus } from "@prisma/client";
export type TaskSchema = z.infer<typeof taskSchema>;
export type TaskID = z.infer<typeof taskIDSchema>;

export interface TasksDataTableProps {
  columns: ColumnDef<TaskSchema, any>[];
  data: TaskSchema[];
}

export interface TasksDataTableFacetedFilter {
  column?: Column<TaskSchema, any>;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: Component;
  }[];
}

export interface TasksDataTableComponentProps {
  table: Table<TaskSchema>;
}

export type TasksDataTableViewOptionsProps = TasksDataTableComponentProps;
export type TasksDataTablePaginationProps = TasksDataTableComponentProps;
export type TasksDataTableToolbarProps = TasksDataTableComponentProps;
