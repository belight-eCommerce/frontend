import PublicFooter from "@/components/footer/PublicFooter";
import PublicHeader from "@/components/header/PublicHeader";
import { QueryProvider } from "@/providers/QueryProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";

export default function SupplierLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            <QueryProvider>
                <PublicHeader />
                {children}
                <PublicFooter />
            </QueryProvider>
        </ReduxProvider>
    )
}
