import { ReactNode } from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { TopMenu } from "@/components";

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
    <>
      <TopMenu email={data.user.email!} />
      <div className="w-full p-10 ">{children}</div>
    </>
  );
};

export default LayoutDashboard;
