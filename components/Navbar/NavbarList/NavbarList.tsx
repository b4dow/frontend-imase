import { Navbar } from "@/components/Navbar";
import { NavbarMobile } from "@/components/Navbar";
import Image from "next/image";

export function NavbarList() {
  return (
    <>
      <div className="bg-black/95">
        <nav className="container flex items-center justify-between py-5 mx-auto px-5">
          <div>
            <Image
              src="/logo-oficial.webp"
              alt="Logo"
              width={100}
              height={50}
            />
          </div>
          <div>
            <div className="hidden items-center justify-between sm:flex">
              <Navbar />
            </div>
            <div className="flex items-center justify-between  sm:hidden">
              <NavbarMobile />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
