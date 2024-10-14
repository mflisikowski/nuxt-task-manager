import type { Column, ColumnDef, Table } from "@tanstack/vue-table";
import type { taskSchema } from "@/schemas/tasks";
import type { z } from "zod";

export type TaskSchema = z.infer<typeof taskSchema>;
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
