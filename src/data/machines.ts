import type { Machine } from "./types";
import { yamahaMachines } from "./machines.yamaha";

/**
 * Equipment catalog — single source of truth.
 * SMT Solutions (SMTS) represents the brands below. Add new brands by creating
 * a machines.<brand>.ts file and spreading it here.
 */
export const machines: Machine[] = [
  ...yamahaMachines,
];

export const getMachine = (slug: string) => machines.find((m) => m.slug === slug);

export const getMachinesByCategory = (categoryId: string) =>
  machines.filter((m) => m.category === categoryId);

export const getFeaturedMachines = () => machines.filter((m) => m.featured);

export const getRelatedMachines = (m: Machine, limit = 3) =>
  machines
    .filter((x) => x.slug !== m.slug && x.category === m.category)
    .slice(0, limit);
