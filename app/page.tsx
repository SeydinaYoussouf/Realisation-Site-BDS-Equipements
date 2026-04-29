import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Wrench,
  Zap,
  Droplets,
  Hammer,
  TreeDeciduous,
  Shield,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const categories = [
  {
    name: "Outillage",
    description: "Outils à main et électroportatif",
    icon: Wrench,
    href: "/produits#outillage",
  },
  {
    name: "Électricité",
    description: "Câbles, prises et éclairage",
    icon: Zap,
    href: "/produits#electricite",
  },
  {
    name: "Plomberie",
    description: "Tuyaux, robinets et sanitaires",
    icon: Droplets,
    href: "/produits#plomberie",
  },
  {
    name: "Quincaillerie",
    description: "Visserie, serrurerie et fixations",
    icon: Hammer,
    href: "/produits#quincaillerie",
  },
  {
    name: "Jardin",
    description: "Outils et équipements de jardin",
    icon: TreeDeciduous,
    href: "/produits#jardin",
  },
  {
    name: "Sécurité",
    description: "Équipements de protection",
    icon: Shield,
    href: "/produits#securite",
  },
]

const stats = [
  { value: "35+", label: "Années d'expérience" },
  { value: "15 000+", label: "Références en stock" },
  { value: "5 000+", label: "Clients satisfaits" },
  { value: "100%", label: "Conseil personnalisé" },
]

const services = [
  "Découpe sur mesure",
  "Conseil personnalisé",
  "Livraison à domicile",
  "Click & Collect",
  "Devis gratuit",
  "Service après-vente",
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-foreground overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('/hardware-store-tools-workshop-professional-dark.jpg')` }}
          />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
                Votre quincaillerie de confiance
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl text-balance">
                L'expertise au service de vos projets
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed max-w-xl">
                Depuis 1985, nous accompagnons particuliers et professionnels avec des produits de qualité et des
                conseils d'experts pour tous vos travaux.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link href="/produits">
                    Découvrir nos produits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-secondary py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Nos univers produits</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Plus de 15 000 références pour répondre à tous vos besoins en bricolage et construction.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Link key={category.name} href={category.href}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <category.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/produits">
                  Voir tous nos produits
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Une histoire familiale, un savoir-faire reconnu
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Fondée en 1985 par la famille Dupont, notre quincaillerie est devenue une référence incontournable
                  dans le quartier. Trois générations se sont succédées, transmettant leur passion pour le métier et
                  leur engagement envers la qualité.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    <span className="text-foreground font-medium">Équipe de 12 experts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <span className="text-foreground font-medium">Label qualité commerce</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/a-propos">
                      En savoir plus sur nous
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/family-hardware-store-team-professional-french.jpg"
                  alt="L'équipe de la Quincaillerie Dupont"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/hardware-store-service-wood-cutting-professional.jpg"
                  alt="Service de découpe sur mesure"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Des services pour vous simplifier la vie
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Au-delà de nos produits, nous vous proposons une gamme complète de services pour vous accompagner dans
                  tous vos projets.
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <li key={service} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/services">
                      Découvrir nos services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Un projet en tête ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour vous conseiller et vous accompagner. Demandez un devis gratuit
              ou passez nous voir en magasin.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Nous contacter</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/produits">Parcourir le catalogue</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
