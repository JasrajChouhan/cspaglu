export interface NavbarItemType {
  name: string;
  isDropdown?: boolean;
  href?: string;
}

export const navbarItemsData: NavbarItemType[] = [
  { name: "Courses", isDropdown: true },
  { name: "Pricing", href: "/pricing" },
  { name: "Community", isDropdown: true },
  { name: "About us", href: "/about-us" },
];

export const PATH = {
  HOME: "/",
  PRICING: "/pricing",
  "ABOUS-US": "about-us",
  COURSES: "/courses",
};
