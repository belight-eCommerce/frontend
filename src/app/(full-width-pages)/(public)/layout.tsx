export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                Header lies here
            </header>
            <main className="flex-1 grid">
                {children}
            </main>
            <footer>
                footer lies here
            </footer>
        </div>
    )
}