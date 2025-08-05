import PublicFooter from "@/components/footer/PublicFooter";
import PublicHeader from "@/components/header/PublicHeader";

export default function SupplierLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <>
            <PublicHeader />
            {children}
            <PublicFooter />
        </>
    )
}