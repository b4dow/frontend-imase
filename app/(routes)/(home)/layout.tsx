import { Footer, Navbar } from "@/components";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">{children}</main>
      <Footer />
    </>
  );
}
