import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "This is Reset Password Page Admin Dashboard",
};

export default function ResetPassword() {
  return <ResetPasswordForm />;
}
