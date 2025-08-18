"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import Image from "next/image";
import { useUserLogin } from "@/hooks/auth/useAuth";
import { Eye, EyeOff } from "lucide-react";
import { UserRole } from "@/store/slices/auth.slice";

const loginSchema = z.object({
  username: z.string().min(2).max(100, "Please enter a valid username"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export default function SupplierLoginPage() {

  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useUserLogin(UserRole.SELLER);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    login(data)
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_2fr]">


      <div
        className="hidden md:flex md:items-center lg:items-start justify-center lg:justify-end p-8 lg:pt-24 lg:pr-4 relative"
      >
        <Image
          src="/images/product/supplier-login.png"
          alt="Supplier Login Visual"
          fill
          style={{ objectFit: "contain" }}
          priority
          className="p-12 md:p-4 lg:p-12"
        />
      </div>


      <div
        className="flex items-center md:items-center lg:items-start justify-center lg:justify-start p-8 lg:pt-38 lg:pl-4 lg:pr-24"
      >
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 tracking-tight">MAALIIFU</h2>
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight">WELCOME BACK</h1>
          <h3 className="text-lg font-semibold mb-8 tracking-tight">SUPPLIER LOGIN</h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Username" className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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

              <div className="flex items-center justify-between">
                <Link href="#" className="text-sm text-blue-700 hover:underline">Forgot Password?</Link>
              </div>

              <Button type="submit" disabled={isPending} className="w-full bg-blue-900 hover:bg-blue-800 text-white rounded-full py-3 text-base font-semibold">
                {isPending ? "Signing You in..." : "SIGN IN"}
              </Button>
            </form>
          </Form>

          <div className="mt-8 text-center text-sm text-gray-600">
            Don&apos;t Have an Account?{' '}
            <Link href="/supplier/registration" className="font-semibold text-black hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 