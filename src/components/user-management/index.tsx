"use client";

import PageBreadcrumb from '../common/PageBreadCrumb';
export default function UserManagement() {

  return (
    <div className="grid">
      <PageBreadcrumb pageTitle="User Management" />

      Users are managed here. You can view, edit, delete, and add users.
    </div>
  );
}