import { FormLogin } from "@/components/auth/FormLogin";
import { GetSession } from "actions/auth";

export default async function Login() {
  await GetSession();
  return (
    <>
      <FormLogin />
    </>
  );
}
