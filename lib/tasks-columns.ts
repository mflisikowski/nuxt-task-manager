import type { TaskSchema } from "@/types/tasks";
import type { ColumnDef } from "@tanstack/vue-table";

import TableActions from "@/components/table/DataTableActions.vue";
import { tasksPriorities } from "@/lib/tasks-priorities";
import { tasksStatuses } from "@/lib/tasks-statuses";
import { Badge } from "@/components/ui/badge";

import { h } from "vue";

export const columns: ColumnDef<TaskSchema>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = tasksStatuses.find((status) => {
        return status.value === row.getValue("status");
      });

      if (!status) {
        return null;
      }

      return h(Badge, () => [
        h(status.icon, { class: "h-4 w-4" }),
        status.label,
      ]);
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = tasksPriorities.find(
        (priority) => priority.value === row.getValue("priority")
      );

      if (!priority) {
        return null;
      }

      return h(Badge, () => [
        h(priority.icon, { class: "h-4 w-4" }),
        priority.label,
      ]);
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => h(TableActions, { task: row.original }),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const createdAt = new Date(row.getValue("createdAt"));
      return h(Badge, () => [createdAt.toLocaleString()]);
    },
    sortingFn: "datetime",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      const updatedAt = new Date(row.getValue("updatedAt"));
      return h(Badge, () => [updatedAt.toLocaleString()]);
    },
    sortingFn: "datetime",
  },
];
