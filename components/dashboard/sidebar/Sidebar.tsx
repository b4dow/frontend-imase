import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="w-1/3 bg-black opacity-80 h-screen flex flex-col items-center ">
      <div className="w-30 h-30 bg-white rounded-full mt-10" />
      <div className="mt-20 space-y-10 flex flex-col items-center">
        <li className="list-none">
          <Link href="/dashboard" className="text-white text-xl  ">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard/servicios" className="text-white text-xl  ">
            Servicios
          </Link>
        </li>
      </div>
    </div>
  );
};
