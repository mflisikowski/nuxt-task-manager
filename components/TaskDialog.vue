<script setup lang="ts">
import type { Task } from "@/server/schema";

// prettier-ignore
import { DialogContent, DialogTrigger, DialogHeader, DialogTitle, Dialog } from "@/components/ui/dialog";
import { useTaskStore } from "@/stores/useTaskStore";
import { Button } from "@/components/ui/button";
import TaskForm from "@/components/TaskForm.vue";

import { ref } from "vue";

defineProps<{
  task?: Task;
  triggerButton: {
    variant?: string;
    label?: string;
    size?: string;
    icon: any;
  };
  title: string;
}>();

defineEmits<{
  (e: "add-task", task: Task): void;
  (e: "update-task", task: Task): void;
  (e: "cancel"): void;
}>();

const isOpen = ref(false);
const taskStore = useTaskStore();

function closeDialog() {
  isOpen.value = false;
}

async function handleAddTask(task: Task) {
  await taskStore.addTask(task);
  await taskStore.fetchTasks();
  closeDialog();
}

async function handleUpdateTask(task: Task) {
  await taskStore.updateTask(task.id, task);
  await taskStore.fetchTasks();
  closeDialog();
}
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger asChild>
      <Button variant="default" size="default">
        <component
          :is="triggerButton.icon"
          class="h-4 w-4"
          :class="{ 'mr-2': triggerButton.label }"
        />
        {{ triggerButton.label }}
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[425px] bg-white p-4 rounded-md lg:max-w-lg">
      <DialogHeader>
        <DialogTitle>{{ title }}</DialogTitle>
      </DialogHeader>

      <TaskForm
        @add-task="handleAddTask"
        @update-task="handleUpdateTask"
        @cancel="closeDialog"
        :task="task"
      />
    </DialogContent>
  </Dialog>
</template>
