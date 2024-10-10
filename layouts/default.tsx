import { Head } from "./head";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({ children }) {
  return (
    <div style={{ backgroundColor: '#FCF3EB' }}>
      <Head />
      <Navbar />
      <main>{children}</main>
      
    </div>
  );
}

