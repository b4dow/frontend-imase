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
      <main className=" mx-auto container my-10">{children}</main>
      <Footer />
    </>
  );
}
