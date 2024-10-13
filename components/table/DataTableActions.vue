<script setup lang="ts">
import { MoreHorizontal } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
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
        <Button variant="ghost">Edit</Button>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Button variant="ghost">Delete</Button>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
