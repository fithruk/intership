import { create } from "zustand";

interface ThemeState {
  darkMode: boolean;
  toggle: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  darkMode: false,
  toggle: () => set((s) => ({ darkMode: !s.darkMode })),
}));

export { useThemeStore };
