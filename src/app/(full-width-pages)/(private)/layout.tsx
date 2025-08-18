import PublicFooter from "@/components/footer/PublicFooter";
import PublicHeader from "@/components/header/PublicHeader";
import { ThemeProvider } from "@/context/ThemeContext";
import { QueryProvider } from "@/providers/QueryProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <PublicHeader />
            <main className="flex-1 grid">
              {children}
            </main>
            <PublicFooter />
          </div>
        </ThemeProvider>
      </QueryProvider>
    </ReduxProvider>
  );
} 