import UserProfile from "@/components/user-profile";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "",
};

export default function Profile() {
  return (
    <UserProfile />
  );
}
