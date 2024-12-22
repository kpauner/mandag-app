import {
  MessageCircle,
  Trash2,
  Settings2,
  Calendar,
  ChartLine,
  Home,
  Sparkles,
  Search,
  ChevronLeft,
  ChevronRight,
  Loader2Icon,
  ClipboardList,
  Utensils,
  Dumbbell,
  TreePalm,
  PanelRight,
  PanelLeft,
  Clock,
  X,
  Plus,
  ChartColumnBig,
  ImageOff,
} from "lucide-react";
export type IconProps = React.SVGProps<SVGSVGElement>;
const Icons = {
  home: Home,
  task: ClipboardList,
  meal: Utensils,
  workout: Dumbbell,
  leisure: TreePalm,
  other: Sparkles,
  sparkles: Sparkles,
  search: Search,
  chartLine: ChartLine,
  calendar: Calendar,
  settings: Settings2,
  trash: Trash2,
  messageCircleQuestion: MessageCircle,
  chevronleft: ChevronLeft,
  chevronright: ChevronRight,
  loader: Loader2Icon,
  panelright: PanelRight,
  panelleft: PanelLeft,
  clock: Clock,
  close: X,
  plus: Plus,
  analytics: ChartColumnBig,
  imageOff: ImageOff,
  logo: ({ ...props }: IconProps) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 337 109"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_264_2)">
        <path d="M65.1627 35.2727C68.0143 37.1515 70.2895 39.6212 71.9884 42.6818C73.6872 45.7424 74.5366 49.0909 74.5366 52.7273V80.0909H65.1627V52.7273C65.1627 51.1515 64.8593 49.6667 64.2526 48.2727C63.6459 46.8788 62.8116 45.6515 61.7498 44.5909C60.6881 43.5303 59.4594 42.697 58.064 42.0909C56.6685 41.4848 55.182 41.1818 53.6045 41.1818C52.027 41.1818 50.5253 41.4848 49.0995 42.0909C47.6737 42.697 46.4299 43.5303 45.3682 44.5909C44.3064 45.6515 43.4721 46.8788 42.8654 48.2727C42.2587 49.6667 41.9553 51.1515 41.9553 52.7273V80.0909H32.5813V52.7273C32.5813 51.1515 32.278 49.6667 31.6712 48.2727C31.0645 46.8788 30.2303 45.6515 29.1685 44.5909C28.1067 43.5303 26.8781 42.697 25.4826 42.0909C24.0871 41.4848 22.6007 41.1818 21.0232 41.1818C19.4457 41.1818 17.944 41.4848 16.5182 42.0909C15.0924 42.697 13.8486 43.5303 12.7868 44.5909C11.725 45.6515 10.8908 46.8788 10.2841 48.2727C9.67733 49.6667 9.37396 51.1515 9.37396 52.7273V80.0909H0V31.8182H9.37396V35.2727C11.0728 34.1818 12.9082 33.3333 14.88 32.7273C16.8519 32.1212 18.8996 31.8182 21.0232 31.8182C23.1467 31.8182 25.1944 32.1212 27.1663 32.7273C29.1382 33.3333 30.9432 34.1818 32.5813 35.2727C34.3409 36.4242 35.9184 37.8788 37.3138 39.6364C38.6486 37.9394 40.1958 36.4848 41.9553 35.2727C43.6541 34.1818 45.4895 33.3333 47.4614 32.7273C49.4332 32.1212 51.4809 31.8182 53.6045 31.8182C55.728 31.8182 57.7758 32.1212 59.7476 32.7273C61.7195 33.3333 63.5245 34.1818 65.1627 35.2727Z" />
        <path d="M102.704 32.0909C106.033 32.0909 109.166 32.7273 112.108 34C115.043 35.2727 117.622 37 119.829 39.1818C122.036 41.3636 123.78 43.9394 125.054 46.9091C126.329 49.8788 126.966 53.0303 126.966 56.3636V79.9091H117.592V75.5C115.529 77.0606 113.254 78.2879 110.766 79.1894C108.278 80.0909 105.609 80.5379 102.757 80.5379C99.4201 80.5379 96.2803 79.9015 93.3377 78.6288C90.395 77.3561 87.8316 75.6288 85.6474 73.447C83.4631 71.2652 81.734 68.7046 80.4598 65.7652C79.1857 62.8258 78.5486 59.6894 78.5486 56.3561C78.5486 53.0227 79.1857 49.8712 80.4523 46.9015C81.7264 43.9318 83.448 41.3561 85.6322 39.1743C87.8088 36.9924 90.3723 35.2652 93.3073 33.9924C96.2424 32.7197 99.3822 32.0833 102.712 32.0833L102.704 32.0909ZM102.75 71.1818C104.812 71.1818 106.739 70.7879 108.529 69.9924C110.318 69.197 111.881 68.1288 113.216 66.7879C114.55 65.447 115.612 63.8788 116.401 62.0758C117.19 60.2803 117.584 58.3712 117.584 56.3561C117.584 54.3409 117.19 52.3485 116.401 50.5455C115.612 48.75 114.55 47.1743 113.216 45.8333C111.881 44.4924 110.318 43.4243 108.529 42.6288C106.739 41.8333 104.812 41.4394 102.75 41.4394C100.687 41.4394 98.7603 41.8333 96.9705 42.6288C95.1806 43.4243 93.6183 44.4924 92.2835 45.8333C90.9487 47.1743 89.8869 48.75 89.0981 50.5455C88.3094 52.3409 87.915 54.2803 87.915 56.3561C87.915 58.4318 88.3094 60.2727 89.0981 62.0758C89.8869 63.8712 90.9487 65.447 92.2835 66.7879C93.6183 68.1288 95.1806 69.197 96.9705 69.9924C98.7603 70.7879 100.687 71.1818 102.75 71.1818Z" />
        <path d="M164.909 35.1818C167.791 37.1212 170.074 39.6212 171.757 42.6818C173.441 45.7424 174.283 49.0909 174.283 52.7273V80.0909H164.909V52.7273C164.909 51.1515 164.606 49.6515 163.991 48.2273C163.384 46.803 162.543 45.5606 161.481 44.5C160.412 43.4394 159.183 42.6061 157.78 42C156.377 41.3939 154.89 41.0909 153.305 41.0909C151.72 41.0909 150.211 41.3939 148.785 42C147.352 42.6061 146.123 43.4394 145.084 44.5C144.045 45.5606 143.226 46.803 142.619 48.2273C142.012 49.6515 141.709 51.1515 141.709 52.7273V80.0909H132.335V31.7273H141.709L141.777 35.1818C143.416 34.0909 145.221 33.2424 147.2 32.6364C149.172 32.0303 151.22 31.7273 153.351 31.7273C155.482 31.7273 157.522 32.0303 159.501 32.6364C161.473 33.2424 163.278 34.0909 164.924 35.1818H164.909Z" />
        <path d="M227.705 56.0909C227.705 59.4242 227.083 62.5455 225.84 65.4545C224.596 68.3636 222.882 70.9091 220.698 73.0909C218.513 75.2727 215.965 76.9848 213.053 78.2273C210.141 79.4697 207.016 80.0909 203.679 80.0909C200.342 80.0909 197.217 79.4697 194.305 78.2273C191.393 76.9848 188.844 75.2727 186.66 73.0909C184.476 70.9091 182.762 68.3636 181.518 65.4545C180.274 62.5455 179.652 59.4242 179.652 56.0909C179.652 52.7576 180.274 49.6364 181.518 46.7273C182.762 43.8182 184.476 41.2727 186.66 39.0909C188.844 36.9091 191.393 35.197 194.305 33.9545C197.217 32.7121 200.342 32.0909 203.679 32.0909C206.47 32.0909 209.094 32.5303 211.551 33.4091C214.008 34.2879 216.269 35.5151 218.331 37.0909V0H227.705V56.0909ZM203.724 70.7273C205.719 70.7273 207.607 70.3485 209.397 69.5909C211.18 68.8333 212.742 67.7879 214.069 66.4545C215.404 65.1212 216.443 63.5606 217.201 61.7727C217.96 59.9848 218.339 58.0909 218.339 56.0909V56C218.339 54 217.96 52.1212 217.201 50.3636C216.443 48.6061 215.404 47.0606 214.069 45.7273C212.742 44.3939 211.18 43.3485 209.397 42.5909C207.615 41.8333 205.727 41.4545 203.724 41.4545C201.722 41.4545 199.834 41.8333 198.051 42.5909C196.269 43.3485 194.707 44.3939 193.38 45.7273C192.052 47.0606 190.991 48.6212 190.202 50.4091C189.413 52.197 189.026 54.0909 189.026 56.0909C189.026 58.0909 189.421 59.9848 190.202 61.7727C190.991 63.5606 192.045 65.1212 193.38 66.4545C194.707 67.7879 196.269 68.8333 198.051 69.5909C199.834 70.3485 201.73 70.7273 203.724 70.7273Z" />
        <path d="M255.865 32.0909C259.195 32.0909 262.327 32.7273 265.269 34C268.205 35.2727 270.783 37 272.99 39.1818C275.197 41.3636 276.941 43.9394 278.216 46.9091C279.49 49.8788 280.127 53.0303 280.127 56.3636V79.9091H270.753V75.5C268.69 77.0606 266.415 78.2879 263.927 79.1894C261.44 80.0909 258.77 80.5379 255.918 80.5379C252.581 80.5379 249.441 79.9015 246.499 78.6288C243.556 77.3561 240.993 75.6288 238.809 73.447C236.624 71.2652 234.895 68.7046 233.621 65.7652C232.347 62.8258 231.71 59.6894 231.71 56.3561C231.71 53.0227 232.347 49.8712 233.613 46.9015C234.888 43.9318 236.609 41.3561 238.793 39.1743C240.97 36.9924 243.533 35.2652 246.468 33.9924C249.404 32.7197 252.543 32.0833 255.873 32.0833L255.865 32.0909ZM255.911 71.1818C257.974 71.1818 259.9 70.7879 261.69 69.9924C263.48 69.197 265.042 68.1288 266.377 66.7879C267.712 65.447 268.773 63.8788 269.562 62.0758C270.351 60.2803 270.745 58.3712 270.745 56.3561C270.745 54.3409 270.351 52.3485 269.562 50.5455C268.773 48.75 267.712 47.1743 266.377 45.8333C265.042 44.4924 263.48 43.4243 261.69 42.6288C259.9 41.8333 257.974 41.4394 255.911 41.4394C253.848 41.4394 251.921 41.8333 250.132 42.6288C248.342 43.4243 246.779 44.4924 245.445 45.8333C244.11 47.1743 243.048 48.75 242.259 50.5455C241.471 52.3409 241.076 54.2803 241.076 56.3561C241.076 58.4318 241.471 60.2727 242.259 62.0758C243.048 63.8712 244.11 65.447 245.445 66.7879C246.779 68.1288 248.342 69.197 250.132 69.9924C251.921 70.7879 253.848 71.1818 255.911 71.1818Z" />
        <path d="M326.238 81.8182C327.33 81.8788 328.506 82.1667 329.75 82.6818C330.993 83.197 332.169 84 333.261 85.0909C334.353 86.1818 335.248 87.5758 335.953 89.2727C336.651 90.9697 337 93.0303 337 95.4545C337 97.8788 336.636 100.045 335.908 101.773C335.18 103.5 334.27 104.894 333.178 105.955C332.085 107.015 330.902 107.788 329.628 108.273C328.354 108.758 327.171 109 326.079 109H303.418C301.233 108.939 299.079 108.636 296.956 108.091C294.832 107.545 292.921 106.697 291.222 105.545C289.523 104.394 288.143 102.97 287.081 101.273C286.02 99.5758 285.489 97.5758 285.489 95.2727H294.863C294.863 96.2652 295.303 97.053 296.182 97.6364C297.062 98.2273 298.04 98.6591 299.102 98.9394C300.164 99.2197 301.613 99.447 303.44 99.6364H325.889C327.042 99.5152 327.626 98.1364 327.626 95.5C327.626 94.5833 327.55 93.8258 327.399 93.25C327.247 92.6667 327.065 92.2197 326.852 91.9167C326.64 91.6061 326.443 91.4091 326.261 91.3182C326.079 91.2273 325.958 91.1818 325.897 91.1818H303.418C301.233 91.1818 299.079 90.9091 296.956 90.3636C294.832 89.8182 292.921 88.9849 291.222 87.8636C289.523 86.7424 288.143 85.3333 287.081 83.6364C286.02 81.9394 285.489 79.9091 285.489 77.5455C285.489 75 286.141 72.8182 287.445 71C288.75 69.1818 290.403 67.7273 292.405 66.6364C290.889 64.8182 289.705 62.7727 288.856 60.5C288.007 58.2273 287.582 55.8182 287.582 53.2727C287.582 50.3636 288.128 47.6364 289.22 45.0909C290.312 42.5455 291.814 40.3182 293.725 38.4091C295.636 36.5 297.851 35 300.369 33.9091C302.887 32.8182 305.602 32.2727 308.514 32.2727H332.45V41.6364H326.079C327.171 43.3333 328.02 45.1667 328.627 47.1364C329.234 49.1061 329.537 51.1515 329.537 53.2727C329.537 56.0606 329.022 58.697 327.99 61.1818C326.951 63.6667 325.556 65.8333 323.788 67.6818C322.021 69.5303 319.928 71.0303 317.494 72.1818C315.059 73.3333 312.473 74 309.735 74.1818H298.602C297.623 74.4849 296.759 74.9091 296 75.4545C295.242 76 294.863 76.697 294.863 77.5455C294.863 78.5758 295.303 79.3636 296.182 79.9091C297.062 80.4546 298.018 80.8788 299.057 81.1818C300.088 81.4849 301.522 81.697 303.342 81.8182H326.238ZM308.514 41.6364C306.937 41.6364 305.435 41.9394 304.009 42.5455C302.583 43.1515 301.355 43.9849 300.323 45.0455C299.292 46.1061 298.473 47.3485 297.866 48.7727C297.259 50.197 296.956 51.697 296.956 53.2727C296.956 54.8485 297.259 56.3485 297.866 57.7727C298.473 59.197 299.292 60.4243 300.323 61.4546C301.355 62.4849 302.583 63.303 304.009 63.9091C305.435 64.5152 306.937 64.8182 308.514 64.8182C310.092 64.8182 311.669 64.5152 313.065 63.9091C314.46 63.303 315.689 62.4849 316.75 61.4546C317.812 60.4243 318.646 59.197 319.253 57.7727C319.86 56.3485 320.163 54.8485 320.163 53.2727C320.163 51.697 319.86 50.197 319.253 48.7727C318.646 47.3485 317.812 46.1061 316.75 45.0455C315.689 43.9849 314.46 43.1515 313.065 42.5455C311.669 41.9394 310.152 41.6364 308.514 41.6364Z" />
      </g>
      <defs>
        <clipPath id="clip0_264_2">
          <rect width="337" height="109" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
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
} as const;

export default Icons;
