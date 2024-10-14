import type { Task } from "@/server/schema";
import { taskStatusEnum } from "@/server/schema";
import { apiRequest } from "@/lib/api";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Task[],
    isLoading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchTasks() {
      this.tasks = await apiRequest<Task[]>("/api/tasks");
    },

    async addTask(task: Omit<Task, "id" | "createdAt" | "updatedAt">) {
      const newTask = await apiRequest<Task>("/api/tasks", "POST", task);
      this.tasks = [...this.tasks, newTask];
    },

    async editTask(id: string, updatedTask: Partial<Task>) {
      const editedTask = await apiRequest<Task>(
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
      state.tasks.filter(
        (task) => task.status === taskStatusEnum.enumValues[2]
      ),
    incompleteTasks: (state) =>
      state.tasks.filter(
        (task) => task.status !== taskStatusEnum.enumValues[2]
      ),
  },
});
