import { ReactNode } from "react";
import { Footer, Navbar } from "components/ui";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
