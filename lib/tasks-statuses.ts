// prettier-ignore
import { CheckCircleIcon, CircleIcon, WatchIcon } from "lucide-vue-next";
import { taskStatusEnum } from "@/server/schema";
import { h } from "vue";

export const tasksStatuses = [
  {
    value: taskStatusEnum.enumValues[0],
    label: "Todo",
    icon: h(CircleIcon),
  },
  {
    value: taskStatusEnum.enumValues[1],
    label: "In Progress",
    icon: h(WatchIcon),
  },
  {
    value: taskStatusEnum.enumValues[2],
    label: "Done",
    icon: h(CheckCircleIcon),
  },
];
