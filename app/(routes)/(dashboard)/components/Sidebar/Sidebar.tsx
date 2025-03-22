import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Logout } from "../Logout/Logout";
import { SidebarRoutes } from "../SidebarRoutes/SidebarRoutes";
import { getUser } from "@/actions";

export const Sidebar = async () => {
  const user = await getUser();

  if (user?.status === 401) redirect("/auth/login");
  return (
    <div className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="py-4 flex justify-center">
          <Link href="#">
            <Image
              src="/logo-oficial.webp"
              width={100}
              height={100}
              alt="tailus logo"
            />
          </Link>
        </div>

        <div className="mt-4 text-center">
          <Image
            src="/cat.webp"
            width={30}
            height={30}
            alt="cat"
            className=" m-auto rounded-full object-cover w-16 h-16"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {user?.username}
          </h5>
          <span className="hidden text-gray-400 lg:block">{user?.email}</span>
        </div>
      </div>
      <SidebarRoutes />
      <Logout />
    </div>
  );
};
