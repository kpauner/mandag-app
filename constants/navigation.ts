import Icons from "@/components/icons";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";
export const navigation = {
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Analytics",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  events: [
    {
      title: "Tasks",
      url: "#",
      icon: Icons.task,
    },
    {
      title: "Workouts",
      url: "#",
      icon: Icons.workout,
    },
    {
      title: "Meals",
      url: "#",
      icon: Icons.meal,
    },
    {
      title: "Leisure",
      url: "#",
      icon: Icons.leisure,
    },
  ],
};
