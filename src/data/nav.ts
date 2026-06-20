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
      { label: "Surface Mounters", to: "/catalog/surface-mounters" },
      { label: "Printers", to: "/catalog/printers" },
      { label: "Dispensers", to: "/catalog/dispensers" },
      { label: "Inspection", to: "/catalog/inspection" },
      { label: "Hybrid Placer", to: "/catalog/hybrid-placer" },
      { label: "Software", to: "/catalog/software" },
      { label: "Feeders & Storage", to: "/catalog/accessories" },
    ],
  },
  { label: "Showroom", to: "/showroom" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];
