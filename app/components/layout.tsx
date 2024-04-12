import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <aside className="w-[300px] py-4 h-[100vh] border-r-2 border-secondary">
        <h2 className="font-bold mb-4">Components</h2>
        <ul>
          <li>
            <Link href="/components/button">Button</Link>
          </li>
        </ul>
      </aside>
      <main className="py-4">{children}</main>
    </div>
  );
}
