'use client';

import PageBreadcrumb from "../common/PageBreadCrumb";
import UserMetaCard from "./UserMetaCard";
import UserInfoCard from "./UserInfoCard";

export default function UserProfile() {

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
            <PageBreadcrumb pageTitle="Profile" />
            <div className="space-y-6">
                <UserMetaCard />
                <UserInfoCard />
            </div>
        </div>
    );
}