import MainLayoutProvider from "@/components/layouts/main";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <MainLayoutProvider>{children}</MainLayoutProvider>;
}
