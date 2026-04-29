import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "Produits", href: "/produits" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ],
  categories: [
    { name: "Outillage", href: "/produits#outillage" },
    { name: "Plomberie", href: "/produits#plomberie" },
    { name: "Électricité", href: "/produits#electricite" },
    { name: "Quincaillerie", href: "/produits#quincaillerie" },
    { name: "Jardin", href: "/produits#jardin" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground text-primary font-bold text-xl">
                Q
              </div>
              <div>
                <div className="text-lg font-semibold">Quincaillerie Dupont</div>
                <div className="text-xs opacity-80">Depuis 1985</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de bricolage et de construction. Expertise et conseil
              personnalisé depuis plus de 35 ans.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Nos rayons</h3>
            <ul className="space-y-2">
              {navigation.categories.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>12 Rue du Commerce, 75001 Paris</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@quincaillerie-dupont.fr</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Lun-Sam : 8h-19h</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm opacity-60">
            © {new Date().getFullYear()} Quincaillerie Dupont. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
