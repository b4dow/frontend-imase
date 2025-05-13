import { Toaster } from "components/ui";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}
export const Provider = ({ children }: ProviderProps) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
