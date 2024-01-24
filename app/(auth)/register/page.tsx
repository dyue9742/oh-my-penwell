import UnsignedLayout from "@/app/(auth)/layout";
import SignIn from "./0/page";
import inst from "@/app/_lib/utils/axios_fetch";

export default function Register() {
  return (
    <UnsignedLayout>
      <SignIn inst={inst} />
    </UnsignedLayout>
  );
}
