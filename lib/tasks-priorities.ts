import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "lucide-vue-next";
import { taskPriorityEnum } from "~/server/schema";
import { h } from "vue";

export const tasksPriorities = [
  {
    value: taskPriorityEnum.enumValues[0],
    label: "Low",
    icon: h(ArrowDownIcon),
  },
  {
    value: taskPriorityEnum.enumValues[1],
    label: "Medium",
    icon: h(ArrowRightIcon),
  },
  {
    value: taskPriorityEnum.enumValues[2],
    label: "High",
    icon: h(ArrowUpIcon),
  },
];
