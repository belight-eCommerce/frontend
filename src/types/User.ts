import React from 'react';
import { z } from 'zod';

export interface Column<T> {
  id: string;
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  headerClassName?: string;
  cellClassName?: string;
}

export interface Action<T> {
  label: string;
  onClick: (row: T) => void;
  icon?: React.ReactNode;
  className?: string;
}

export interface User {
  id: string;
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  role?: string;
  status?: 'active' | 'inactive' | 'suspended' | 'pending' | 'banned';
  address?: string;
  createdAt: Date;
  deletedAt?: Date | null;
  updatedAt: Date;
  lastLogin?: Date | null;
  isSuperAdmin: boolean;
}

// change password schema
export const changePasswordSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string().min(8, "New Password must be at least 8 characters long"),
  confirmNewPassword: z.string().min(8, "Confirm New Password must be at least 8 characters long"),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Passwords do not match",
  path: ["confirmNewPassword"],
});


// Extended form validation schema to match User type
export const addUserFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(5, 'Please enter a valid phone number'),
  role: z.string().min(1, 'Please enter a valid role/Position'),
  status: z.string().min(1, 'Please enter a valid status').optional(),
  isSuperAdmin: z.boolean(),
});

export type UserFormValue = z.infer<typeof addUserFormSchema>;
export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;