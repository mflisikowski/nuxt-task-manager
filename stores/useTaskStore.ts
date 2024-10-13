import type { TaskSchema } from "@/types/tasks";
import { TaskStatus } from "@prisma/client";
import { apiRequest } from "@/lib/api";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as TaskSchema[],
    isLoading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchTasks() {
      this.tasks = await apiRequest<TaskSchema[]>("/api/tasks");
    },

    async addTask(task: Omit<TaskSchema, "id">) {
      const newTask = await apiRequest<TaskSchema>("/api/tasks", "POST", task);
      this.tasks = [...this.tasks, newTask];
    },

    async editTask(id: string, updatedTask: Partial<TaskSchema>) {
      const editedTask = await apiRequest<TaskSchema>(
        `/api/tasks/${id}`,
        "PUT",
        updatedTask
      );
      this.tasks = this.tasks.map((t) => (t.id === id ? editedTask : t));
    },

    async deleteTask(id: string) {
      await apiRequest(`/api/tasks/${id}`, "DELETE");
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },
  },

  getters: {
    completedTasks: (state) =>
      state.tasks.filter((task) => task.status === TaskStatus.COMPLETED),
    incompleteTasks: (state) =>
      state.tasks.filter((task) => task.status !== TaskStatus.COMPLETED),
  },
});
