import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Heart, Target, Clock, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

const timeline = [
  {
    year: "1985",
    title: "Fondation",
    description:
      "Pierre Dupont ouvre la première quincaillerie dans le quartier, avec une passion pour le conseil et le service client.",
  },
  {
    year: "1995",
    title: "Première expansion",
    description: "Extension du magasin et création du rayon électricité. L'équipe passe à 5 collaborateurs.",
  },
  {
    year: "2005",
    title: "Transmission familiale",
    description: "Marie Dupont reprend les rênes de l'entreprise et modernise l'offre avec les nouvelles technologies.",
  },
  {
    year: "2015",
    title: "Nouvelle ère",
    description: "Rénovation complète du magasin, lancement du Click & Collect et développement des services pro.",
  },
  {
    year: "2023",
    title: "Aujourd'hui",
    description:
      "Plus de 15 000 références, 12 collaborateurs experts et une clientèle fidèle de particuliers et professionnels.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "Le bricolage et la quincaillerie sont notre métier depuis trois générations. Cette passion se transmet à chaque client.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Nous connaissons nos clients, leurs projets et leurs besoins. Chaque visite est l'occasion d'un échange personnalisé.",
  },
  {
    icon: Target,
    title: "Expertise",
    description:
      "Notre équipe est formée en continu pour vous apporter les meilleurs conseils techniques sur tous vos projets.",
  },
  {
    icon: Award,
    title: "Qualité",
    description:
      "Nous sélectionnons rigoureusement nos fournisseurs pour vous garantir des produits fiables et durables.",
  },
]

const team = [
  {
    name: "Marie Dupont",
    role: "Gérante",
    description: "À la tête de l'entreprise depuis 2005, Marie perpétue les valeurs familiales avec modernité.",
    image: "/team-marie-dupont-manager-portrait.jpg",
  },
  {
    name: "Thomas Martin",
    role: "Responsable Outillage",
    description: "Expert en outillage électroportatif, Thomas conseille les pros depuis 15 ans.",
    image: "/team-thomas-martin-tools-expert.jpg",
  },
  {
    name: "Sophie Bernard",
    role: "Responsable Électricité",
    description: "Électricienne de formation, Sophie maîtrise toutes les normes et solutions du secteur.",
    image: "/team-sophie-bernard-electrical-expert.jpg",
  },
  {
    name: "Laurent Petit",
    role: "Responsable Plomberie",
    description: "Plombier-chauffagiste de métier, Laurent apporte son expertise terrain à nos clients.",
    image: "/team-laurent-petit-plumbing-expert.jpg",
  },
]

const stats = [
  { value: "1985", label: "Année de création" },
  { value: "3", label: "Générations" },
  { value: "12", label: "Collaborateurs" },
  { value: "15 000+", label: "Références" },
]

export default function AProposPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-foreground overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('/hardware-store-interior-professional-display.jpg')` }}
          />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-background sm:text-5xl">Notre histoire</h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Depuis 1985, la Quincaillerie Dupont accompagne les bricoleurs et professionnels du quartier. Une
                histoire de famille, de passion et de savoir-faire transmis de génération en génération.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
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

        {/* Story Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Notre ADN</span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Une entreprise familiale ancrée dans son quartier
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Tout a commencé en 1985 lorsque Pierre Dupont, passionné de bricolage et ancien menuisier, a décidé
                  d'ouvrir sa propre quincaillerie. Son objectif : offrir un service de proximité avec des conseils
                  d'expert.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Trois générations plus tard, la passion reste intacte. Marie Dupont, sa petite-fille, dirige
                  aujourd'hui l'entreprise avec la même philosophie : le conseil, la qualité et la relation humaine au
                  cœur de chaque échange.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span>Lun-Sam : 8h-19h</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>Paris 1er</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/founder-pierre-dupont-vintage-hardware-store.jpg"
                  alt="Pierre Dupont, fondateur"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Plus de 35 ans d'histoire
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">Les étapes clés de notre développement</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="relative">
                    <div
                      className={`md:flex md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      <div className="md:w-1/2 md:px-8">
                        <Card className={`${index % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"} max-w-md`}>
                          <CardContent className="p-6">
                            <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Nos valeurs</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Des principes qui guident notre action au quotidien et font notre différence
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Notre équipe</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                12 passionnés à votre service, chacun expert dans son domaine
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden group">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Venez nous rencontrer
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Poussez la porte de notre magasin et découvrez une équipe passionnée, prête à vous accompagner dans tous
              vos projets.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Nous trouver
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/produits">Voir nos produits</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
