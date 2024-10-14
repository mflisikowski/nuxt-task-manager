<script setup lang="ts">
import { PlusIcon } from "lucide-vue-next";
import TaskDialog from "@/components/TaskDialog.vue";
</script>

<template>
  <TaskDialog
    :triggerButton="{
      label: 'Add Task',
      icon: PlusIcon,
    }"
    title="Add New Task"
  />
</template>
