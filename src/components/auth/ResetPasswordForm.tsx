"use client";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { resetPasswordFormSchema, ResetPasswordFormValue } from "@/types/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useRouter } from "next/navigation";
import { useResetPassword } from "@/hooks/auth/useAuth";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

export default function ResetPasswordForm({ customHeading = true }: { customHeading?: boolean }) {

  const router = useRouter();
  const { mutate, isPending } = useResetPassword();
  const form = useForm({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  const [formState, setFormState] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  const onSubmit = (data: ResetPasswordFormValue) => {
    mutate({
      token: new URLSearchParams(window.location.search).get("token") || "",
      newPassword: data.password,
    }, {
      onSuccess: () => {
        form.reset();
        router.push("/signin");
      },
    })
  }


  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          {customHeading && (
            <div className="mb-5 sm:mb-8">
              <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                Reset Password
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter new password to reset!
              </p>
            </div>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <FormField
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl className="">
                        <div className="relative">
                          <Input
                            {...field}
                            type={formState.showPassword ? "text" : "password"}
                            placeholder="Enter new password"
                          />
                          <span
                            onClick={() => setFormState({ ...formState, showPassword: !formState.showPassword })}
                            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                          >
                            {formState.showPassword ? (
                              <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                            ) : (
                              <EyeClosedIcon className="fill-gray-500 dark:fill-gray-400" />
                            )}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={formState.showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                          />
                          <span
                            onClick={() => setFormState({ ...formState, showConfirmPassword: !formState.showConfirmPassword })}
                            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                          >
                            {formState.showConfirmPassword ? (
                              <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                            ) : (
                              <EyeClosedIcon className="fill-gray-500 dark:fill-gray-400" />
                            )}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {customHeading && (
                  <div className="flex items-center justify-between">
                    <Link
                      href="/signin"
                      className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                    >
                      Go back to login
                    </Link>
                  </div>
                )}
                <div>
                  <Button className="w-full" size="sm" disabled={isPending} type="submit">
                    {isPending ? "Resetting..." : "Reset Password"}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
