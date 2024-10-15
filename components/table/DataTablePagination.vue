<script setup lang="ts">
import type { TasksDataTablePaginationProps } from "@/types/tasks";

// prettier-ignore
import { SelectContent, SelectTrigger, SelectValue, SelectItem, Select } from "@/components/ui/select";
// prettier-ignore
import { ChevronRight, ChevronLeft, ArrowRight, ArrowLeft } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

const props = defineProps<TasksDataTablePaginationProps>();

const tableInfo = computed(() => ({
  selectedRowsCount: props.table.getFilteredSelectedRowModel().rows.length,
  totalFilteredRowsCount: props.table.getFilteredRowModel().rows.length,
  paginationPageSize: props.table.getState().pagination.pageSize,
  currentPage: props.table.getState().pagination.pageIndex + 1,
  totalPages: props.table.getPageCount(),
}));

const PAGE_SIZE_OPTIONS = [5, 10, 20, 30, 40, 50];

const pagination = {
  goToPreviousPage: () => props.table.previousPage(),
  goToFirstPage: () => props.table.setPageIndex(0),
  goToNextPage: () => props.table.nextPage(),
  goToLastPage: () => props.table.setPageIndex(tableInfo.value.totalPages - 1),
  setPageSize: (value: string) => props.table.setPageSize(Number(value)),
};
</script>

<template>
  <div class="flex items-center justify-between px-2">
    <div class="flex items-center space-x-6 lg:space-x-8 ml-auto">
      <div class="flex items-center space-x-2">
        <p class="text-sm font-medium">Rows per page</p>

        <Select
          :model-value="`${tableInfo.paginationPageSize}`"
          @update:model-value="pagination.setPageSize"
        >
          <SelectTrigger class="h-8 w-[70px]">
            <SelectValue :placeholder="`${tableInfo.paginationPageSize}`" />
          </SelectTrigger>
          <SelectContent side="top" class="bg-white">
            <SelectItem
              v-for="pageSize in PAGE_SIZE_OPTIONS"
              :value="`${pageSize}`"
              :key="pageSize"
            >
              {{ pageSize }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div
        class="flex w-[100px] items-center justify-center text-sm font-medium"
      >
        Page {{ tableInfo.currentPage }} of {{ tableInfo.totalPages }}
      </div>

      <div class="flex items-center space-x-2">
        <Button
          variant="outline"
          class="hidden h-8 w-8 p-0 lg:flex"
          :disabled="!props.table.getCanPreviousPage()"
          @click="pagination.goToFirstPage"
        >
          <span class="sr-only">Go to first page</span>
          <ArrowLeft class="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          class="h-8 w-8 p-0"
          :disabled="!props.table.getCanPreviousPage()"
          @click="pagination.goToPreviousPage"
        >
          <span class="sr-only">Go to previous page</span>
          <ChevronLeft class="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          class="h-8 w-8 p-0"
          :disabled="!props.table.getCanNextPage()"
          @click="pagination.goToNextPage"
        >
          <span class="sr-only">Go to next page</span>
          <ChevronRight class="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          class="hidden h-8 w-8 p-0 lg:flex"
          :disabled="!props.table.getCanNextPage()"
          @click="pagination.goToLastPage"
        >
          <span class="sr-only">Go to last page</span>
          <ArrowRight class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</template>
