<script setup lang="ts">
import { PlusCircle } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
</script>

<template>
  <Button size="sm" class="h-7 gap-1">
    <PlusCircle class="h-3.5 w-3.5" />
    <span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Add Task </span>
  </Button>
</template>
