<script setup lang="ts">
import { TableHeader, TableRow, TableHead } from "@/components/ui/table";
</script>

<template>
  <TableHeader>
    <TableRow>
      <TableHead> Title </TableHead>
      <TableHead> Description </TableHead>
      <TableHead> Status </TableHead>
      <TableHead> Priority </TableHead>
      <TableHead>
        <span class="sr-only">Actions</span>
      </TableHead>
    </TableRow>
  </TableHeader>
</template>
