// Inside your existing src/app/layout.tsx
// ... other imports and code ...
import PublicHeader from "@/components/header/PublicHeader"; // Make sure this import exists
import PublicFooter from "@/components/header/PublicFooter"; // Make sure this import exists
// ...

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="YOUR_BODY_CLASSES"> {/* Adjust your body classes as needed */}
        {/* Make sure ThemeProvider wraps these if you need it */}
        {/* <ThemeProvider> */}
          <div className="flex flex-col min-h-screen"> {/* This wrapper helps with sticky footer */}
            <PublicHeader /> {/* Add this line */}
            <main className="flex-1 w-full mx-auto"> {/* This main tag is important */}
              {children}
            </main>
            <PublicFooter /> {/* Add this line */}
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}