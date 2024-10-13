<script setup lang="ts">
// prettier-ignore
import type { ColumnFiltersState, SortingState, VisibilityState, RowSelectionState } from "@tanstack/vue-table";
import type { TasksDataTableProps } from "@/types/tasks";

// prettier-ignore
import { getFacetedUniqueValues, getPaginationRowModel } from "@tanstack/vue-table";
import { getFilteredRowModel, getFacetedRowModel } from "@tanstack/vue-table";
import { getSortedRowModel, getCoreRowModel } from "@tanstack/vue-table";
import { useVueTable, FlexRender } from "@tanstack/vue-table";

import { TableHeader, TableHead, TableBody } from "@/components/ui/table";
import { TableCell, TableRow, Table } from "@/components/ui/table";

import DataTablePagination from "@/components/table/DataTablePagination.vue";
import DataTableToolbar from "@/components/table/DataTableToolbar.vue";

import { ref } from "vue";

const props = defineProps<TasksDataTableProps>();

const columnVisibility = ref<VisibilityState>({});
const columnFilters = ref<ColumnFiltersState>([]);
const rowSelection = ref<RowSelectionState>({});
const sorting = ref<SortingState>([]);

const table = useVueTable({
  get data() {
    return props.data;
  },

  get columns() {
    return props.columns;
  },

  state: {
    get sorting() {
      return sorting.value;
    },
    get columnFilters() {
      return columnFilters.value;
    },
    get columnVisibility() {
      return columnVisibility.value;
    },
    get rowSelection() {
      return rowSelection.value;
    },
  },

  enableRowSelection: true,

  onSortingChange: (
    updater: SortingState | ((prev: SortingState) => SortingState)
  ) => {
    sorting.value =
      typeof updater === "function" ? updater(sorting.value) : updater;
  },

  onColumnFiltersChange: (
    updater:
      | ColumnFiltersState
      | ((prev: ColumnFiltersState) => ColumnFiltersState)
  ) => {
    columnFilters.value =
      typeof updater === "function" ? updater(columnFilters.value) : updater;
  },

  onColumnVisibilityChange: (
    updater: VisibilityState | ((prev: VisibilityState) => VisibilityState)
  ) => {
    columnVisibility.value =
      typeof updater === "function" ? updater(columnVisibility.value) : updater;
  },

  onRowSelectionChange: (
    updater:
      | RowSelectionState
      | ((prev: RowSelectionState) => RowSelectionState)
  ) => {
    rowSelection.value =
      typeof updater === "function" ? updater(rowSelection.value) : updater;
  },

  getFacetedUniqueValues: getFacetedUniqueValues(),
  getPaginationRowModel: getPaginationRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getFacetedRowModel: getFacetedRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getCoreRowModel: getCoreRowModel(),
});
</script>

<template>
  <div class="space-y-4">
    <DataTableToolbar :table="table" />
    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <template v-if="!table.getRowModel().rows?.length">
            <TableRow>
              <TableCell :colspan="columns.length" class="h-24 text-center">
                <div class="flex items-center justify-center">
                  <span class="mr-2">Loading...</span>
                </div>
              </TableCell>
            </TableRow>
          </template>

          <template v-else>
            <template v-if="table.getRowModel().rows?.length">
              <TableRow
                v-for="row in table.getRowModel().rows"
                :key="row.id"
                :data-state="row.getIsSelected() && 'selected'"
              >
                <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </TableCell>
              </TableRow>
            </template>

            <TableRow v-else>
              <TableCell :colspan="columns.length" class="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          </template>
        </TableBody>
      </Table>
    </div>

    <DataTablePagination :table="table" />
  </div>
</template>
