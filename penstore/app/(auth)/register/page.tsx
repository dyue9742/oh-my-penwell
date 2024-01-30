import { inst } from "@/app/_lib/util/axios-fetcher";
import Signin from "@/app/(auth)/register/0/page";
import UnsignedLayout from "@/app/(auth)/layout";

export default function Register() {
  return (
    <UnsignedLayout>
      <Signin inst={inst} />
    </UnsignedLayout>
  );
}
