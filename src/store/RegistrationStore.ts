import { RegistrationDataType } from "@/types/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useRegistrationStore = create<any>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      setRegistrationData: (data: any) => set(data),
    }),
    {
      name: "registration-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useRegistrationStore;
