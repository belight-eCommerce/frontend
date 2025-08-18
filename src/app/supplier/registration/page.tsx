"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button/Button";
import { Eye, EyeOff } from "lucide-react";
import { useRegisterSupplier } from "@/hooks/auth/useAuth";
import { useRouter } from "next/navigation";

// Define the schema for the new data structure
const supplierRegistrationSchema = z.object({
  firstName: z.string()
    .min(2, "First name must be at least 2 characters")
    .regex(/^[A-Za-z ]+$/, "First name can only contain letters"),
  lastName: z.string()
    .min(2, "Last name must be at least 2 characters")
    .regex(/^[A-Za-z ]+$/, "Last name can only contain letters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters").optional(),
  role: z.literal("seller"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

// Infer the type from the schema for type safety
export type SupplierRegistrationFormValues = z.infer<typeof supplierRegistrationSchema>;

// The `useForm` hook now uses the updated schema
// and default values that match the new structure.
export default function SupplierRegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate: register, isPending } = useRegisterSupplier();
  const router = useRouter();

  const form = useForm<SupplierRegistrationFormValues>({
    resolver: zodResolver(supplierRegistrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: "seller",
    },
  });

  const onSubmit = (data: SupplierRegistrationFormValues) => {
    register(data, {
      onSuccess: () => {
        router.push("/supplier/login")
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 py-10 px-2">
      <div className="w-full max-w-6xl p-8">
        <h1 className="text-2xl font-serif font-semibold mb-2 text-gray-800">BECOME A SUPPLIER</h1>
        <p className="mb-8 text-gray-500">Join Maalifu to sell your handmade or niche products globally.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* First Name Field */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type Here" className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last Name Field */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type Here" className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Type Here" className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Number Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Type Here" className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Type Here"
                          className="bg-white pr-10" // Add padding for the icon
                          {...field}
                        />
                      </FormControl>
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 focus:outline-none"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password Field */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Type Here"
                          className="bg-white pr-10" // Add padding for the icon
                          {...field}
                        />
                      </FormControl>
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 focus:outline-none"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-2">
              <Button
                type="submit"
                className="w-64 bg-blue-900 hover:bg-blue-800 text-white rounded-full py-3 text-base font-semibold"
                disabled={isPending}
              >
                {isPending ? "Registering..." : "REGISTER AS SUPPLIER"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div >
  );
} 