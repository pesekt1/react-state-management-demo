import { create } from "zustand";

interface AuthStore {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (username: string) => set({ user: username }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;
