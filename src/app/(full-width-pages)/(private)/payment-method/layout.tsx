import PublicHeader from "@/components/header/PublicHeader";
import PublicFooter from "@/components/footer/PublicFooter";
import { ThemeProvider } from "@/context/ThemeContext";

export default function PaymentMethodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <PublicHeader />
        <main className="flex-1 w-full">
          {children}
        </main>
        <PublicFooter />
      </div>
    </ThemeProvider>
  );
}