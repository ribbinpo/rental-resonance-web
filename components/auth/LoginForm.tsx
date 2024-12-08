"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginValidation,
  LoginValidation,
} from "@/services/validation/login.validation";
import { authLoginAction } from "@/actions/auth/login.action";
import { ErrorHandler } from "@/utils/response";
import { useRouter } from "@/i18n/routing";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


export default function LoginForm() {
  const t = useTranslations("Auth");
  const router = useRouter();
  const form = useForm<LoginValidation>({
    resolver: zodResolver(loginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginValidation) => {
    try {
      const response = await authLoginAction(data);
      console.log("Response:", response);
      toast.success("Login successful");
      router.push("/");
    } catch (error: unknown) {
      if (error && typeof error === "object" && "message" in error) {
        const message = (JSON.parse(error.message as string) as ErrorHandler)
          .message;
        toast.error(message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("login.email")}</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  {...field}
                />
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
              <FormLabel>{t("login.password")}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  autoCapitalize="none"
                  autoComplete="current-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          {t("login.submit")}
        </Button>
      </form>
    </Form>
  );
}
