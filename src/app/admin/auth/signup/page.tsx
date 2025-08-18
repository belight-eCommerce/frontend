import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Maalifu Ecommerce",
  description: "This is the registration page for Maalifu Ecommerce",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
