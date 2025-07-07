"use client";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { forgotPasswordFormSchema, ForgotPasswordFormValue } from "@/types/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [success, setSuccess] = useState(false);
  const form = useForm({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  })
  const onSubmit = (data: ForgotPasswordFormValue) => {
    console.log(data);
    setSuccess(true);
  }

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Forgot Password
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email to reset your password!
            </p>
            {success ? (
              <p>
                A password reset link has been sent to your email. Please check your inbox and follow the instructions to reset your password.
              </p>
            ) : null}
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full" size="sm" type="submit">
                    Send Reset Link
                  </Button>
                </div>
              </form>
            </Form>
            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Remember your password? {""}
                <Link
                  href="/signin"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Go to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
