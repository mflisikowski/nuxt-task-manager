<script setup lang="ts">
import { TableBody, Table } from "@/components/ui/table";

import AddTaskButton from "@/components/AddTaskButton.vue";
import TableHeader from "@/components/table/TableHeader.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import TableRow from "@/components/table/TableRow.vue";
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col p-4">
    <div class="flex flex-col space-y-14">
      <header class="flex h-14 items-center gap-4 bg-background px-4">
        <Breadcrumb />

        <div class="ml-auto flex items-center gap-2">
          <AddTaskButton />
        </div>
      </header>

      <main class="grid flex-1 items-start gap-4">
        <Table>
          <TableHeader />
          <TableBody>
            <TableRow
              v-for="i in 10"
              :priority="{ variant: 'default', label: 'Low' }"
              :status="{ variant: 'default', label: 'To Do' }"
              :description="`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`"
              :title="`Task ${i}`"
              :key="i"
              :id="i.toString()"
            />
          </TableBody>
        </Table>
      </main>
    </div>
  </div>
</template>
