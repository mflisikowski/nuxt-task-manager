<script setup lang="ts">
import type { BadgeVariants } from "@/components/ui/badge";

import { TableRow, TableCell } from "@/components/ui/table";

import TableActions from "@/components/table/TableActions.vue";
import TableBadge from "@/components/table/TableBadge.vue";

defineProps<{
  priority: {
    variant: BadgeVariants["variant"];
    label: string;
  };
  status: {
    variant: BadgeVariants["variant"];
    label: string;
  };
  description: string;
  title: string;
  id: string;
}>();
</script>

<template>
  <TableRow :id="id">
    <TableCell>{{ title }}</TableCell>
    <TableCell>{{ description }}</TableCell>

    <TableCell>
      <TableBadge :label="status.label" :variant="status.variant" />
    </TableCell>

    <TableCell>
      <TableBadge :label="priority.label" :variant="priority.variant" />
    </TableCell>

    <TableCell>
      <TableActions :id="id" />
    </TableCell>
  </TableRow>
</template>
