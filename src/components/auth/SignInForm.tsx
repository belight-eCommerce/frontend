"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { useLogin } from "@/hooks/auth/useAuth";
// import { EyeCloseIcon, EyeIcon } from "@/icons";
import { LoginCredentials, loginFormSchema } from "@/types/Auth";
import Link from "next/link";
import React, { useState } from "react";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { RequiredInput } from "../common/RequiredInput";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignInForm() {
  const [isChecked, setIsChecked] = useState(false);

  const form = useForm<LoginCredentials>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending } = useLogin();

  const onSubmit = (data: LoginCredentials) => {
    login(data);
  }

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email<RequiredInput /></FormLabel>
                        <Input placeholder="info@gmail.com" type="email" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password<RequiredInput /></FormLabel>
                        <div className="relative">
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                          {/* <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                          >
                            {showPassword ? (
                              <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                            ) : (
                              <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                            )}
                          </span> */}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Checkbox checked={isChecked} onChange={setIsChecked} />
                      <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                        Keep me logged in
                      </span>
                    </div>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div>
                    <Button type="submit" className="w-full" size="sm" disabled={isPending}>
                      {isPending ? "Signing in..." : "Sign in"}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div >
  );
}
