import { getUser } from "@/actions";
import { FormLogin } from "./components";
import { redirect } from "next/navigation";

export default async function Login() {
  const user = await getUser();
  if (user?.status === 200) redirect("/dashboard");

  return (
    <>
      <FormLogin />
    </>
  );
}
