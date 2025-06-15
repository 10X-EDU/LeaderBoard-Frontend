import ProtectedRoute from "@/components/ProtectedRoute";
import type { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default layout;
