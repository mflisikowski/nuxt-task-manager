<script setup lang="ts">
import { useTaskStore } from "@/stores/useTaskStore";
import { taskSchema } from "@/schemas/tasks";

// prettier-ignore
import { SelectTrigger, SelectContent, SelectValue, SelectItem, Select } from "@/components/ui/select";
// prettier-ignore
import { FormMessage, FormControl, FormField, FormLabel, FormItem, Form } from "@/components/ui/form";
import { tasksPriorities } from "@/lib/tasks-priorities";
import { tasksStatuses } from "@/lib/tasks-statuses";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { ref } from "vue";
import * as z from "zod";

const props = defineProps<{
  task?: z.infer<typeof taskSchema>;
}>();

const emit = defineEmits<{
  (e: "submit"): void;
  (e: "cancel"): void;
}>();

const taskStore = useTaskStore();

const formSchema = toTypedSchema(taskSchema);

type FormSchemaType = Partial<z.infer<typeof taskSchema>>;

const form = useForm<FormSchemaType>({
  validationSchema: formSchema,
  initialValues: {
    title: props.task?.title ?? "",
    description: props.task?.description ?? "",
    status: props.task?.status ?? tasksStatuses[0].value,
    priority: props.task?.priority ?? tasksPriorities[0].value,
  },
});

const isSubmitting = ref(false);

async function onSubmit(values: FormSchemaType) {
  isSubmitting.value = true;
  try {
    if (props.task) {
      await taskStore.editTask(props.task.id, values);
    } else {
      await taskStore.addTask(values as z.infer<typeof taskSchema>);
    }
    emit("submit");
  } catch (error) {
    console.error("Error submitting task:", error);
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <form @submit.prevent="form.handleSubmit(onSubmit)" class="space-y-8">
    <FormField v-slot="{ field }" name="title">
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
          <Input v-bind="field" placeholder="Enter task title" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ field }" name="description">
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <Textarea v-bind="field" placeholder="Enter task description" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ field }" name="status">
      <FormItem>
        <FormLabel>Status</FormLabel>
        <Select v-bind="field">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select task status" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem
              v-for="status in tasksStatuses"
              :key="status.value"
              :value="status.value"
            >
              {{ status.label }}
            </SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ field }" name="priority">
      <FormItem>
        <FormLabel>Priority</FormLabel>
        <Select v-bind="field">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select task priority" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem
              v-for="priority in tasksPriorities"
              :key="priority.value"
              :value="priority.value"
            >
              {{ priority.label }}
            </SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </FormField>

    <div class="flex justify-end space-x-4">
      <Button type="button" variant="outline" @click="emit('cancel')"
        >Cancel</Button
      >
      <Button type="submit" :disabled="isSubmitting">
        {{ props.task ? "Update" : "Add" }} Task
      </Button>
    </div>
  </form>
</template>
