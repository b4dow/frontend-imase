import { Footer } from "@/components/Footer";
import { NavbarList } from "@/components/NavbarList/";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarList />
      <main className=" mx-auto my-10 max-w-7xl">{children}</main>
      <Footer />
    </>
  );
}
