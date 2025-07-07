import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignIn Page",
  description: "This is SignIn Page Admin Dashboard for authentication",
};

export default function SignIn() {
  return <SignInForm />;
}
