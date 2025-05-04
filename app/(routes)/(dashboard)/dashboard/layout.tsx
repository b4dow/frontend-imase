import { ReactNode } from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components";

interface Props {
  children: ReactNode;
}

const LayoutDashboard = async ({ children }: Props) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar />
      <div className="w-full p-10 ">{children}</div>
    </div>
  );
};

export default LayoutDashboard;
