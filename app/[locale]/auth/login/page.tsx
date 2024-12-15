import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  const t = useTranslations("Auth");

  return (
    <main className="container flex h-[calc(100vh-4rem)] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{t("login.title")}</CardTitle>
          <CardDescription>{t("login.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <p className="text-sm text-center text-muted-foreground">
            {t("login.noAccount")}{" "}
            <a href="/auth/register" className="text-primary hover:underline">
              {t("login.register")}
            </a>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
