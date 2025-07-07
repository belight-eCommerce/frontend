import { Metadata } from "next";
import UserManagement from "@/components/user-management"

export const metadata: Metadata = {
  title: "User Management",
  description: "This is User Management page",
};

export default function UserManagementPage() {
  return (
    <UserManagement />
  );
}
