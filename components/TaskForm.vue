<script setup lang="ts">
import { taskSchema } from "@/schemas/tasks";

// prettier-ignore
import { SelectTrigger, SelectContent, SelectValue, SelectItem, Select } from "@/components/ui/select";
// prettier-ignore
import { FormMessage, FormControl, FormField, FormLabel, FormItem } from "@/components/ui/form";
import { tasksPriorities } from "@/lib/tasks-priorities";
import { tasksStatuses } from "@/lib/tasks-statuses";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";

import * as z from "zod";

const props = defineProps<{
  task?: z.infer<typeof taskSchema>;
}>();

const emit = defineEmits<{
  (e: "updateTask", task: FormSchemaType): void;
  (e: "addTask", task: FormSchemaType): void;
  (e: "cancel"): void;
}>();

const formSchema = toTypedSchema(
  taskSchema.omit({
    createdAt: true,
    updatedAt: true,
    id: true,
  })
);

type FormSchemaType = z.infer<typeof taskSchema>;

const form = useForm<FormSchemaType>({
  validationSchema: formSchema,
  initialValues: props.task,
});

const onSubmit = async (values: FormSchemaType) => {
  if (props.task) {
    emit("updateTask", { ...props.task, ...values });
  } else {
    emit("addTask", values);
  }
};
const handleSubmit = form.handleSubmit(onSubmit);
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-8">
    <FormField v-slot="{ field, errorMessage }" name="title">
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
          <Input
            placeholder="title"
            v-model="field.value"
            v-bind="field"
            type="text"
          />
        </FormControl>
        <FormMessage :message="errorMessage" />
      </FormItem>
    </FormField>

    <FormField v-slot="{ field, errorMessage }" name="description">
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <Textarea
            placeholder="Enter task description"
            v-model="field.value"
            v-bind="field"
          />
        </FormControl>
        <FormMessage :message="errorMessage" />
      </FormItem>
    </FormField>

    <FormField v-slot="{ field, errorMessage }" name="status">
      <FormItem>
        <FormLabel>Status</FormLabel>
        <Select v-model="field.value" v-bind="field">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select task status" />
            </SelectTrigger>
          </FormControl>
          <SelectContent class="bg-white">
            <SelectItem
              v-for="status in tasksStatuses"
              :key="status.value"
              :value="status.value"
            >
              {{ status.label }}
            </SelectItem>
          </SelectContent>
        </Select>
        <FormMessage :message="errorMessage" />
      </FormItem>
    </FormField>

    <FormField v-slot="{ field, errorMessage }" name="priority">
      <FormItem>
        <FormLabel>Priority</FormLabel>
        <Select v-model="field.value" v-bind="field">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select task priority" />
            </SelectTrigger>
          </FormControl>
          <SelectContent class="bg-white">
            <SelectItem
              v-for="priority in tasksPriorities"
              :key="priority.value"
              :value="priority.value"
            >
              {{ priority.label }}
            </SelectItem>
          </SelectContent>
        </Select>
        <FormMessage :message="errorMessage" />
      </FormItem>
    </FormField>

    <div class="flex justify-end space-x-4">
      <Button type="button" variant="outline" @click="emit('cancel')"
        >Cancel</Button
      >
      <Button
        :disabled="!form.isSubmitting || !form.meta.value.valid"
        variant="outline"
        type="submit"
      >
        {{ (props.task ? "Update" : "Add") + " Task" }}
      </Button>
    </div>
  </form>
</template>
