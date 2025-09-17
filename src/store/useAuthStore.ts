import { create } from "zustand";

interface AuthStore {
  isAuth: boolean;
  name: string;
  signUp: (name: string) => void;
  signOut: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isAuth: false,
  name: "",
  signUp: (name: string) => set(() => ({ isAuth: true, name })),
  signOut: () => set(() => ({ isAuth: false, name: "" })),
}));

export { useAuthStore };
