import Container from "../../componentes/Container";
import Logo from "../../componentes/Logo";
import Icon from "../../componentes/Icon";

export default function Footer() {
  return (
    <footer className="bg-(--brand-champagne) text-(--brand-ink)">
      <Container>
        {/* Main footer */}
        <div className="py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <Logo className="h-24 brightness-0 mx-auto lg:mx-0" />
            <p className="mt-6 text-(--brand-ink)/60 max-w-md leading-relaxed mx-auto lg:mx-0">
              Cuidando do seu sorriso com dedicação e carinho. 
              Atendimento humanizado e tratamentos de alta qualidade em Bom Jesus da Lapa.
            </p>
            
            {/* Social links */}
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-(--brand-ink)/10 transition-colors hover:bg-(--brand-wine) cursor-pointer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-(--brand-ink)/10 transition-colors hover:bg-(--brand-wine) cursor-pointer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold text-lg mb-6">Links rápidos</h4>
            <ul className="space-y-4">
              {["Início", "Sobre", "Especialidades", "Resultados", "Contato"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-(--brand-ink)/60 transition-colors hover:text-(--brand-ink) cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-(--brand-ink)/60">
              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <Icon name="bx-map" className="text-lg" />
                <span>Bom Jesus da Lapa - BA</span>
              </li>
              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <Icon name="bx-phone" className="text-lg" />
                <span>(77) 99808-5944</span>
              </li>
              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <Icon name="bx-time" className="text-lg" />
                <span>Seg a Sex • 08h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-(--brand-ink)/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-(--brand-ink)/40">
              © {new Date().getFullYear()} Dra. Ane Elise • Todos os direitos reservados
            </p>
            <p className="text-sm text-(--brand-ink)/40">
              CRO-BA 00000
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
