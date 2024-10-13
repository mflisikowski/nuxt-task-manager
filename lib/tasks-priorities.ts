import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "lucide-vue-next";
import { TaskPriority } from "@prisma/client";
import { h } from "vue";

export const tasksPriorities = [
  {
    value: TaskPriority.LOW,
    label: "Low",
    icon: h(ArrowDownIcon),
  },
  {
    value: TaskPriority.MEDIUM,
    label: "Medium",
    icon: h(ArrowRightIcon),
  },
  {
    value: TaskPriority.HIGH,
    label: "High",
    icon: h(ArrowUpIcon),
  },
];
