<script setup lang="ts">
import type { TasksDataTableToolbarProps } from "@/types/tasks";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { computed } from "vue";

import DataTableFacetedFilter from "@/components/table/DataTableFacetedFilter.vue";
import DataTableViewOptions from "@/components/table/DataTableViewOptions.vue";

import { tasksPriorities } from "~/lib/tasks-priorities";
import { tasksStatuses } from "~/lib/tasks-statuses";
import { XIcon } from "lucide-vue-next";

const props = defineProps<TasksDataTableToolbarProps>();

const isFiltered = computed(
  () => props.table.getState().columnFilters.length > 0
);
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <Input
        :model-value="(table.getColumn('title')?.getFilterValue() as string) ?? ''"
        @input="table.getColumn('title')?.setFilterValue($event.target.value)"
        placeholder="Filter tasks..."
        class="h-8 w-[150px] lg:w-[250px]"
      />

      <DataTableFacetedFilter
        v-if="table.getColumn('status')"
        :options="tasksStatuses"
        :column="table.getColumn('status')"
        title="Status"
      />

      <DataTableFacetedFilter
        v-if="table.getColumn('priority')"
        :column="table.getColumn('priority')"
        :options="tasksPriorities"
        title="Priority"
      />

      <Button
        v-if="isFiltered"
        @click="table.resetColumnFilters()"
        variant="ghost"
        class="h-8 px-2 lg:px-3"
      >
        Reset
        <XIcon class="ml-2 h-4 w-4" />
      </Button>
    </div>

    <DataTableViewOptions :table="table" />
  </div>
</template>
