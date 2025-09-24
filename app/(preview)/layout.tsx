import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-sdk-preview-pdf-support.vercel.app"),
  title: "PDF Support Preview",
  description: "Experimental preview of PDF support with the AI SDK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.className}`}>
      <body>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <div className="relative mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-4 sm:px-6">
            <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex h-14 items-center justify-end">
                <div className="flex items-center gap-1">
                  <ThemeToggle />
                </div>
              </div>
            </header>

            <main className="flex-1 py-6">{children}</main>

            <footer className="py-6 text-center text-xs text-muted-foreground">
              <span className="opacity-80">Built with Next.js, Tailwind CSS, and the AI SDK</span>
            </footer>
          </div>
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
