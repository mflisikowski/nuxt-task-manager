<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="flex-1 flex-col space-y-8 p-8">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Task Management</h2>
      </div>

      <div>
        <Button variant="outline">Create</Button>
      </div>
    </div>
  </div>
</template>
