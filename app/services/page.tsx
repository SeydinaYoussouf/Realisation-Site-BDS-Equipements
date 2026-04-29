import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Scissors,
  Truck,
  ShoppingBag,
  MessageSquare,
  Wrench,
  FileText,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Scissors,
    title: "Découpe sur mesure",
    description:
      "Service de découpe de bois, métal, verre et plastique selon vos dimensions exactes. Découpe droite ou en angle avec finitions soignées.",
    features: ["Bois et dérivés", "Métal et alu", "Verre et plexi", "Finitions précises"],
    image: "/service-wood-cutting-precise-measurement.jpg",
  },
  {
    icon: Truck,
    title: "Livraison à domicile",
    description:
      "Livraison de vos achats directement chez vous ou sur votre chantier. Service disponible dans un rayon de 30km autour de Paris.",
    features: ["Livraison express", "Rayon 30km", "Rdv flexible", "Suivi commande"],
    image: "/delivery-service-van-hardware-materials.jpg",
  },
  {
    icon: ShoppingBag,
    title: "Click & Collect",
    description:
      "Commandez en ligne ou par téléphone et récupérez votre commande en magasin sous 2h. Gain de temps garanti.",
    features: ["Prêt en 2h", "Commande en ligne", "Réservation téléphone", "Sans file d'attente"],
    image: "/click-collect-store-pickup-counter.jpg",
  },
  {
    icon: MessageSquare,
    title: "Conseil personnalisé",
    description:
      "Notre équipe d'experts vous accompagne dans vos projets. Conseils techniques, choix des matériaux et méthodes de pose.",
    features: ["Experts métier", "Conseils gratuits", "Démonstrations", "Support projet"],
    image: "/professional-advice-hardware-store-expert.jpg",
  },
  {
    icon: Wrench,
    title: "Service après-vente",
    description:
      "Garantie et service après-vente sur tous nos produits. Réparation, échange et prise en charge des garanties fabricant.",
    features: ["Garantie étendue", "Réparations", "Échanges", "Pièces détachées"],
    image: "/after-sales-service-repair-tools.jpg",
  },
  {
    icon: FileText,
    title: "Devis gratuit",
    description:
      "Devis personnalisé gratuit pour vos projets de grande envergure. Tarifs préférentiels pour les professionnels.",
    features: ["Devis sous 48h", "Sans engagement", "Tarifs pros", "Suivi projet"],
    image: "/quote-estimate-professional-calculation.jpg",
  },
]

const advantages = [
  {
    icon: Clock,
    title: "Rapidité",
    description: "Services express pour répondre à vos urgences",
  },
  {
    icon: Shield,
    title: "Qualité",
    description: "Travail soigné et matériel professionnel",
  },
  {
    icon: MessageSquare,
    title: "Écoute",
    description: "Une équipe à votre écoute pour vous conseiller",
  },
]

const testimonials = [
  {
    quote: "Service de découpe impeccable. Précision au millimètre et finitions parfaites. Je recommande vivement !",
    author: "Jean-Pierre M.",
    role: "Artisan menuisier",
  },
  {
    quote:
      "Livraison rapide et équipe très professionnelle. Le chauffeur a même aidé à décharger les matériaux lourds.",
    author: "Sophie L.",
    role: "Particulier",
  },
  {
    quote: "Le Click & Collect est un vrai gain de temps. Ma commande était prête en moins d'une heure.",
    author: "Marc D.",
    role: "Bricoleur passionné",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Des services pour vous simplifier la vie
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Au-delà de nos produits, nous vous proposons une gamme complète de services pour vous accompagner à
                chaque étape de vos projets. De la découpe sur mesure à la livraison, notre équipe est à votre
                disposition.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">Demander un devis</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  asChild
                >
                  <Link href="#services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="bg-secondary py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {advantages.map((advantage) => (
                <div key={advantage.title} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <advantage.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Tous nos services</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Une gamme complète de prestations pour vous accompagner dans tous vos projets de bricolage et
                construction.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service) => (
                <Card key={service.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <service.icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-1.5 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ce que disent nos clients
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">La satisfaction de nos clients est notre priorité</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-accent fill-accent" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-foreground mb-4 leading-relaxed">"{testimonial.quote}"</blockquote>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pro Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Espace Professionnels</span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Des services dédiés aux pros
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Artisans, entreprises du bâtiment, collectivités : bénéficiez de tarifs préférentiels, d'un compte
                  dédié et de services adaptés à vos besoins professionnels.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Tarifs professionnels négociés",
                    "Compte client avec facilités de paiement",
                    "Livraison prioritaire sur chantier",
                    "Conseiller dédié",
                    "Devis sous 24h",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/contact">
                      Ouvrir un compte pro
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/professional-contractor-hardware-store-partnership.jpg"
                  alt="Services professionnels"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Besoin d'un service particulier ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques. Notre équipe trouvera la solution adaptée à votre
              projet.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Nous contacter</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                01 23 45 67 89
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
