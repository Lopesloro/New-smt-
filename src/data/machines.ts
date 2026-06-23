import type { Machine } from "./types";
import { yamahaMachines } from "./machines.yamaha";
import { mstechMachines } from "./machines.mstech";

/**
 * Equipment catalog — single source of truth (generic; brand not shown in UI).
 * Add new groups by creating a machines.<group>.ts file and spreading it here.
 */
export const machines: Machine[] = [
  ...yamahaMachines,
  ...mstechMachines.map((m) => ({ ...m, brand: "mstech" as const })),
];

export const getMachine = (slug: string) => machines.find((m) => m.slug === slug);

export const getMachinesByCategory = (categoryId: string) =>
  machines.filter((m) => m.category === categoryId);

export const getFeaturedMachines = () => machines.filter((m) => m.featured);

export const getRelatedMachines = (m: Machine, limit = 3) =>
  machines
    .filter((x) => x.slug !== m.slug && x.category === m.category)
    .slice(0, limit);
