import { userStoreType } from "@/types/types";
import { create } from "zustand";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";

export const useUserStore = create<userStoreType>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string | null) => set({ token }),
    }),
    {
      name: "token-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
