import { NavbarDashboard, Sidebar } from "../components";

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Sidebar />

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <NavbarDashboard />
        </div>

        <div className="px-6 pt-6 2xl:container">{children}</div>
      </div>
    </>
  );
}
