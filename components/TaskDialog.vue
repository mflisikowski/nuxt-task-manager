<script setup lang="ts">
import type { Task } from "@/server/schema";
import {
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  Dialog,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TaskForm from "@/components/TaskForm.vue";
import { ref } from "vue";

const props = defineProps<{
  task?: Task;
  triggerButton: {
    label?: string;
    icon: any;
    variant?: string;
    size?: string;
  };
  title: string;
}>();

const isOpen = ref(false);

function closeDialog() {
  isOpen.value = false;
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

      <TaskForm :task="task" @submit="closeDialog" @cancel="closeDialog" />
    </DialogContent>
  </Dialog>
</template>
