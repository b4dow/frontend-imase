import { Footer } from "@/components/Footer";
import { NavbarList } from "@/components/Navbar/NavbarList/";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarList />
      <main className="  my-10">{children}</main>
      <Footer />
    </>
  );
}
