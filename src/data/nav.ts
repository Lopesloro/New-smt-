export interface NavLeaf {
  label: string;
  to: string;
}

export interface NavGroup {
  key: string;
  label: string;
  children: NavLeaf[];
}

export type NavItem = NavLeaf | NavGroup;

export const isNavGroup = (item: NavItem): item is NavGroup =>
  (item as NavGroup).children !== undefined;

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    key: "catalog",
    label: "Catalog",
    children: [
      { label: "Bit Router", to: "/catalog/bit-router" },
      { label: "Sawing System", to: "/catalog/sawing" },
      { label: "Laser System", to: "/catalog/laser" },
      { label: "Others & Support", to: "/catalog/others" },
    ],
  },
  { label: "Showroom", to: "/showroom" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];
