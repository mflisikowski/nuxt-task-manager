<script setup lang="ts">
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<template>
  <TabsList>
    <TabsTrigger value="all"> All </TabsTrigger>
    <TabsTrigger value="high"> High </TabsTrigger>
    <TabsTrigger value="medium"> Medium </TabsTrigger>
    <TabsTrigger value="low"> Low </TabsTrigger>
    <TabsTrigger value="completed"> Completed </TabsTrigger>
    <TabsTrigger value="in-progress"> In Progress </TabsTrigger>
    <TabsTrigger value="to-do"> To Do </TabsTrigger>
  </TabsList>
</template>
