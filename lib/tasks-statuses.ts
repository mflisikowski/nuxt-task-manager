// prettier-ignore
import { CheckCircleIcon, CircleIcon, WatchIcon } from "lucide-vue-next";
import { TaskStatus } from "@prisma/client";
import { h } from "vue";

export const tasksStatuses = [
  {
    value: TaskStatus.TO_DO,
    label: "Todo",
    icon: h(CircleIcon),
  },
  {
    value: TaskStatus.IN_PROGRESS,
    label: "In Progress",
    icon: h(WatchIcon),
  },
  {
    value: TaskStatus.COMPLETED,
    label: "Done",
    icon: h(CheckCircleIcon),
  },
];
