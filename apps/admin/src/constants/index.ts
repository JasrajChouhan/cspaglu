import { icon } from "@cspaglu/common/lib";

export const PATH = {
  HOME: "/",
  COURSES: "/courses",
  LESSONS: "/lessons",
  DASHBOARD: "/",
  "FEATURES-FLAG": "features-flag",
  USERS: "/users",
  SETTNGS: "/settings",
};

export const SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    href: PATH.DASHBOARD,
    icon: icon.LayoutDashboard,
  },
  {
    name: "Courses",
    href: PATH.COURSES,
    icon: icon.BookOpen,
  },
  {
    name: "Users",
    href: PATH.USERS,
    icon: icon.Users,
  },
  {
    name: "Features Flag",
    href: PATH["FEATURES-FLAG"],
    icon: icon.FlagIcon,
  },
  {
    name: "Settings",
    href: PATH.SETTNGS,
    icon: icon.Settings2Icon,
  },
];
