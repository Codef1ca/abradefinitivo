import { ReactNode } from "react";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div style={{ backgroundColor: '#FCF3EB' }}>
      <Head />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

