import { create } from "zustand";

type Theme = "light" | "dark";

interface UIState {
  drawerOpen: boolean;
  expanded: Record<string, boolean>;
  theme: Theme;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  openDrawer: () => void;
  toggleExpanded: (key: string) => void;
  setExpanded: (key: string, value: boolean) => void;
  setTheme: (theme: Theme) => void;
}

export const useUI = create<UIState>((set) => ({
  drawerOpen: false,
  expanded: {},
  theme: "light",
  toggleDrawer: () => set((s) => ({ drawerOpen: !s.drawerOpen })),
  closeDrawer: () => set({ drawerOpen: false }),
  openDrawer: () => set({ drawerOpen: true }),
  toggleExpanded: (key) =>
    set((s) => ({ expanded: { ...s.expanded, [key]: !s.expanded[key] } })),
  setExpanded: (key, value) =>
    set((s) => ({ expanded: { ...s.expanded, [key]: value } })),
  setTheme: (theme) => {
    document.documentElement.dataset.theme = theme;
    set({ theme });
  },
}));
