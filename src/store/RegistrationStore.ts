import { RegistrationDataType } from "@/types/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


const useRegistrationStore = create<RegistrationDataType & {
    setRegistrationData: (data: RegistrationDataType) => void
}>()(
    persist((set) => ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        setRegistrationData: (data: RegistrationDataType) => set(data),
    }),
        {
            name: 'registration-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useRegistrationStore;