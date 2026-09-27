import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const sans = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Time Trail",
    template: "%s · Time Trail",
  },
  description:
    "A kids history app for ages 7–12: discover stories, walk an era timeline, and try short quizzes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-[color:var(--trail-ink)]">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <footer className="border-t border-[color:var(--trail-ink)]/10 bg-[color:var(--trail-sky)]/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-sm text-[color:var(--trail-ink)]/65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>Time Trail — real history for curious kids.</p>
            <p>Curated local stories. No account needed.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
