import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignUp Page",
  description: "This is SignUp Page Admin Dashboard for authentication",
};

export default function SignUp() {
  return (
    <>
      <SignUpForm />
    </>
  );
}
