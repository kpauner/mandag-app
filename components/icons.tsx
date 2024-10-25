import {
  MessageCircle,
  Trash2,
  Settings2,
  Calendar,
  ChartLine,
  Home,
  Sparkles,
  Search,
} from "lucide-react";
export type IconProps = React.SVGProps<SVGSVGElement>;
const Icons = {
  home: Home,
  sparkles: Sparkles,
  search: Search,
  chartLine: ChartLine,
  calendar: Calendar,
  settings: Settings2,
  trash: Trash2,
  messageCircleQuestion: MessageCircle,
  google: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1-1.265.06a6 6 0 1 0 2.103 6.836l.001-.004h-3.66a1 1 0 0 1-.992-.883L13 13v-2a1 1 0 0 1 1-1h6.945a1 1 0 0 1 .994.89q.06.55.061 1.11c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"
      />
    </svg>
  ),
};

export default Icons;
