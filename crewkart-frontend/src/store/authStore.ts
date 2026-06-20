import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  _id: string; // Added ID so we know WHO is logged in
  name: string;
  email: string;
  role: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      setAuth: (user, token) => {
        set({ user, token });
      },

      logout: () => {
        set({ user: null, token: null });
      },
    }),
    {
      name: "crewkart_storage", // Name of the cookie/localStorage key
    }
  )
);