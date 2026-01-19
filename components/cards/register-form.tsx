"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

// Define zod schema
const fromSchema = z.object({
  email: z.string().email("Please input a valid email").min(1, "Email is required"),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Must contain at least one digit" })
    .regex(/[^a-zA-Z0-9]/, { message: "Must contain at least one symbol" }),
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control } = form;

  function loginSubmit(data: z.infer<typeof fromSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-full max-w-sm mt-5">
      <CardHeader>
        <div className="flex items-center justify-between ">
            <CardTitle>Login to your account</CardTitle>
            <Button variant="link" className="p-0 h-auto">Sign Up</Button>
        </div>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(loginSubmit)} className="space-y-6">
            <div className="flex flex-col gap-4">
              
              {/* Email Field Added Here */}
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <a href="#" className="text-sm underline-offset-4 hover:underline">
                            Forgot your password?
                        </a>
                    </div>
                    <FormControl>
                      <Input type="password" placeholder="***" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-2">
                <Button type="submit" className="w-full">
                Login
                </Button>
                <Button variant="outline" type="button" className="w-full">
                Login with Google
                </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}