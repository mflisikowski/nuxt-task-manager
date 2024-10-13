<script setup lang="ts">
import AddTaskButton from "@/components/AddTaskButton.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import DataTable from "@/components/table/DataTable.vue";

import { useTaskStore } from "@/stores/useTaskStore";
import { columns } from "@/lib/tasks-columns";

import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);

onMounted(() => {
  taskStore.fetchTasks();
});
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
        <DataTable :columns="columns" :data="tasks" />
      </main>
    </div>
  </div>
</template>
