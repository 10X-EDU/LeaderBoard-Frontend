import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const usePasswordStore = create<any>()(
    persist(
        (set) => ({
            email: "",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setEmail: (reset: string) => set(() => ({ email: reset })),
        }),
        {
            name: "refresh-password-storage",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export default usePasswordStore;
