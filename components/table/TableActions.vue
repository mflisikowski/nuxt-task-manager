<script setup lang="ts">
import { MoreHorizontal } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

const props = defineProps<{
  id: string;
}>();

const handleEdit = () => {
  console.log("edit", props.id);
};

const handleDelete = () => {
  console.log("delete", props.id);
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button aria-haspopup="true" variant="ghost" size="icon">
        <MoreHorizontal class="h-4 w-4" />
        <span class="sr-only">Toggle menu</span>
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent class="bg-white">
      <DropdownMenuItem>
        <Button variant="ghost" @click="handleEdit">Edit</Button>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Button variant="ghost" @click="handleDelete">Delete</Button>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
