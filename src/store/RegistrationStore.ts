import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useRegistrationStore = create<any>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      email: "",
      specialization: "",
      password: "",
      passwordConfirm: "",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setRegistrationData: (data: any) => set(data),
    }),
    {
      name: "registration-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useRegistrationStore;
