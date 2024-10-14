<script setup lang="ts">
import type { Task } from "@/server/schema";

import { useTaskStore } from "@/stores/useTaskStore";
import EditTaskButton from "@/components/EditTaskButton.vue";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-vue-next";

defineProps<{
  task: Task;
}>();

const taskStore = useTaskStore();

const deleteTask = async (id: string) => {
  if (confirm("Are you sure you want to delete this task?")) {
    await taskStore.deleteTask(id);
  }
};
</script>

<template>
  <div class="flex gap-2 items-center">
    <EditTaskButton :task="task" />

    <Button variant="ghost" @click="deleteTask(task.id)">
      <TrashIcon class="h-4 w-4 text-red-500" />
    </Button>
  </div>
</template>
