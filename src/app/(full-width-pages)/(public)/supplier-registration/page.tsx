"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button/Button";
import Select from "@/components/form/Select";
import Checkbox from "@/components/form/input/Checkbox";

const categories = [
  { value: "handmade", label: "Handmade Crafts" },
  { value: "pottery", label: "Pottery" },
  { value: "woodwork", label: "Woodwork" },
  { value: "decor", label: "Home Decor" },
  { value: "jewelry", label: "Jewelry" },
  // Add more as needed
];

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "et", label: "Ethiopia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  // Add more as needed
];

const supplierRegistrationSchema = z.object({
  brandName: z.string()
    .min(2, "Brand name must be at least 2 characters")
    .regex(/^[A-Za-z0-9 ]+$/, "Brand name can only contain letters and numbers"),
  fullName: z.string()
    .min(2, "Full name must be at least 2 characters")
    .regex(/^[A-Za-z ]+$/, "Full name can only contain letters (A-Z, a-z)"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters"),
  category: z.string().min(1, "Please select a category"),
  country: z.string().min(1, "Please select a country"),
  agree: z.boolean().refine(val => val === true, { message: "You must agree to the terms" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SupplierRegistrationFormValues = z.infer<typeof supplierRegistrationSchema>;

export default function SupplierRegistrationPage() {
  const form = useForm<SupplierRegistrationFormValues>({
    resolver: zodResolver(supplierRegistrationSchema),
    defaultValues: {
      brandName: "",
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      category: "",
      country: "",
      agree: false,
    },
  });

  const onSubmit = (data: SupplierRegistrationFormValues) => {
    // TODO: Add submit logic
    alert("Supplier registration submitted! (Demo)\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 py-10 px-2">
      <div className="w-full max-w-6xl p-8">
        <h1 className="text-2xl font-serif font-semibold mb-2 text-gray-800">BECOME A SUPPLIER</h1>
        <p className="mb-8 text-gray-500">Join Maalifu to sell your handmade or niche products globally.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="brandName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type Here" className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type Here" className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Type Here" className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Type Here" className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select
                        options={categories}
                        placeholder="Select"
                        onChange={field.onChange}
                        defaultValue={field.value}
                        className="bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Select
                        options={countries}
                        placeholder="Select"
                        onChange={field.onChange}
                        defaultValue={field.value}
                        className="bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="agree"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2 mt-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onChange={field.onChange}
                        id="agree"
                        label="Agree to Terms & Conditions"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-2">
              <Button
                type="submit"
                className="w-64 bg-blue-900 hover:bg-blue-800 text-white rounded-full py-3 text-base font-semibold"
                disabled={!form.watch("agree")}
              >
                REGISTER AS SUPPLIER
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
} 