<script setup lang="ts">
import type { Task } from "@/server/schema";
import { PencilIcon } from "lucide-vue-next";
import TaskDialog from "@/components/TaskDialog.vue";

defineProps<{
  task: Task;
}>();
</script>

<template>
  <TaskDialog
    :task="task"
    :triggerButton="{
      icon: PencilIcon,
      variant: 'ghost',
      size: 'icon',
    }"
    title="Edit Task"
  />
</template>
