import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password Page",
  description: "This is Forgot Password Page Admin Dashboard",
};

export default function ForgotPassword() {
  return <ForgotPasswordForm />;
}
