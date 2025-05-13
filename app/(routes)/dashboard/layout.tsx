import { ReactNode } from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";

interface Props {
  children: ReactNode;
}

const Layout = async ({ children }: Props) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/auth/login");
  }

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarTrigger />
      <main className="w-full m-10">{children}</main>
    </SidebarProvider>
  );
};
export default Layout;
