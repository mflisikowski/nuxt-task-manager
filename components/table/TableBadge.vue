<script setup lang="ts">
import type { BadgeVariants } from "@/components/ui/badge";
import { Badge } from "@/components/ui/badge";

defineProps<{
  variant: BadgeVariants["variant"];
  label: string;
}>();
</script>

<template>
  <Badge :variant="variant">
    {{ label }}
  </Badge>
</template>
