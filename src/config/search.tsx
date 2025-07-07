import { Page } from "@/types/Config";
import { Users, Layout, User, HelpCircle } from "lucide-react";

// Pages for searching
export const pages: Page[] = [
    {
        title: "Dashboard",
        href: "/",
        icon: <Layout className="h-4 w-4" />,
        section: "General",
        keywords: ["home", "overview", "stats", "metrics"]
    },
    {
        title: "Users",
        href: "/user-management",
        icon: <Users className="h-4 w-4" />,
        section: "Management",
        keywords: ["users", "accounts", "profiles", "members"]
    },
    {
        title: "Profile",
        href: "/profile",
        icon: <User className="h-4 w-4" />,
        section: "Management",
        keywords: ["user", "account", "profile", "member"]
    },
    {
        title: "Support",
        href: "/support",
        icon: <HelpCircle className="h-4 w-4" />,
        section: "System",
        keywords: ["configuration", "preferences", "setup", "options"]
    },
    // Add more pages as needed
];
