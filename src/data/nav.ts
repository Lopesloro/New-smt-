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

import { categories } from "./categories";

// Catalog submenu = every family/category, generated from the catalog data.
const catalogChildren: NavLeaf[] = categories.map((c) => ({
  label: c.name,
  to: `/catalog/${c.slug}`,
}));

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    key: "catalog",
    label: "Catalog",
    children: catalogChildren,
  },
  { label: "Showroom", to: "/showroom" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];
