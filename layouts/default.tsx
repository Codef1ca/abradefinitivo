import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="" style={{ backgroundColor: '#FCF3EB' }}>
      <Head />
      <Navbar />
      <main className="">
        {children}
      </main>
      <footer className="footer">
        <hr className="linea-footer"></hr>
      <div className="resto-footer">
          <Link>
            <img src="/assets/logo-footer.png" alt="Logo-f" className="logo-f" /> 
          </Link>
          <div className="texto">
          <span className="derechos">© 2024 Abra de Sol - Todos los derechos reservados.
          <br></br>Diseñado por FICA Team</span>
          </div>
          <div className="redes">
          <Link>
            <img src="/assets/ig-footer.png" alt="Logo" className="logo-fr"/> 
          </Link>
          <Link>
            <img src="/assets/fb-footer.png" alt="Logo" className="logo-fr"/> 
          </Link>
          <Link>
            <img src="/assets/wpp-footer.png" alt="Logo" className="logo-fr"/> 
          </Link>
          </div>
          </div>

      </footer>
    </div>
  );
}
