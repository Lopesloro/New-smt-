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
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/about" },
  {
    key: "catalog",
    label: "Catálogo",
    children: [
      { label: "Bit Router", to: "/catalog/bit-router" },
      { label: "Sawing System", to: "/catalog/sawing" },
      { label: "Laser System", to: "/catalog/laser" },
      { label: "Outros & Suporte", to: "/catalog/others" },
    ],
  },
  { label: "Showroom", to: "/showroom" },
  { label: "Recursos", to: "/resources" },
  { label: "Contato", to: "/contact" },
];
