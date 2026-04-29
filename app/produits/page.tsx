import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wrench, Zap, Droplets, Hammer, TreeDeciduous, Shield, Search, Package, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "outillage",
    name: "Outillage",
    description: "Outils à main, électroportatif et accessoires pour tous vos travaux",
    icon: Wrench,
    productCount: 2500,
    image: "/tools-professional-workshop-organized-display.jpg",
    featured: true,
    subcategories: ["Outils à main", "Électroportatif", "Mesure et traçage", "Rangement atelier"],
  },
  {
    id: "electricite",
    name: "Électricité",
    description: "Câbles, prises, interrupteurs et solutions d'éclairage",
    icon: Zap,
    productCount: 1800,
    image: "/electrical-supplies-cables-switches-professional.jpg",
    featured: true,
    subcategories: ["Câbles et fils", "Prises et interrupteurs", "Éclairage", "Tableaux électriques"],
  },
  {
    id: "plomberie",
    name: "Plomberie",
    description: "Tuyauterie, robinetterie et équipements sanitaires",
    icon: Droplets,
    productCount: 2200,
    image: "/plumbing-supplies-pipes-fittings-professional.jpg",
    featured: true,
    subcategories: ["Tuyaux et raccords", "Robinetterie", "Sanitaires", "Chauffage"],
  },
  {
    id: "quincaillerie",
    name: "Quincaillerie",
    description: "Visserie, boulonnerie, serrurerie et fixations",
    icon: Hammer,
    productCount: 4500,
    image: "/hardware-screws-bolts-organized-storage.jpg",
    featured: false,
    subcategories: ["Visserie", "Boulonnerie", "Serrurerie", "Fixations murales"],
  },
  {
    id: "jardin",
    name: "Jardin",
    description: "Outils, arrosage et équipements pour l'extérieur",
    icon: TreeDeciduous,
    productCount: 1200,
    image: "/garden-tools-outdoor-equipment-display.jpg",
    featured: false,
    subcategories: ["Outils de jardin", "Arrosage", "Mobilier extérieur", "Clôtures"],
  },
  {
    id: "securite",
    name: "Sécurité",
    description: "Équipements de protection individuelle et collective",
    icon: Shield,
    productCount: 800,
    image: "/safety-equipment-protection-gear-professional.jpg",
    featured: false,
    subcategories: ["EPI", "Signalisation", "Extincteurs", "Premiers secours"],
  },
]

const featuredProducts = [
  {
    name: "Perceuse-visseuse 18V",
    brand: "Bosch Professional",
    price: "189,00 €",
    originalPrice: "219,00 €",
    image: "/cordless-drill-professional-bosch-18v.jpg",
    rating: 4.8,
    reviews: 124,
    badge: "Promo",
  },
  {
    name: "Coffret clés à cliquet",
    brand: "Facom",
    price: "149,00 €",
    image: "/ratchet-set-professional-facom-tools.jpg",
    rating: 4.9,
    reviews: 89,
    badge: "Best-seller",
  },
  {
    name: "Niveau laser croix",
    brand: "Stanley",
    price: "79,00 €",
    image: "/laser-level-stanley-professional-cross.jpg",
    rating: 4.6,
    reviews: 56,
    badge: null,
  },
  {
    name: "Scie sauteuse 800W",
    brand: "Makita",
    price: "159,00 €",
    image: "/jigsaw-makita-professional-800w-power.jpg",
    rating: 4.7,
    reviews: 78,
    badge: "Nouveau",
  },
]

export default function ProduitsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Notre catalogue
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Plus de 15 000 références pour répondre à tous vos besoins en bricolage, construction et aménagement.
              </p>
            </div>

            {/* Search bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher un produit, une marque..."
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">Nos univers</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div key={category.id} id={category.id}>
                  <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-background">
                          <category.icon className="h-5 w-5" />
                          <span className="text-xl font-bold">{category.name}</span>
                        </div>
                      </div>
                      {category.featured && (
                        <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">Populaire</Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Package className="h-4 w-4" />
                        <span>{category.productCount.toLocaleString()} produits</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.subcategories.slice(0, 3).map((sub) => (
                          <Badge key={sub} variant="secondary" className="text-xs">
                            {sub}
                          </Badge>
                        ))}
                        {category.subcategories.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{category.subcategories.length - 3}
                          </Badge>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        Explorer {category.name.toLowerCase()}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-muted py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Produits phares</h2>
              <Button variant="ghost" className="hidden sm:flex">
                Voir tout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <Card key={product.name} className="group hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg bg-secondary">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.badge && (
                      <Badge
                        className={`absolute top-3 left-3 ${
                          product.badge === "Promo"
                            ? "bg-accent text-accent-foreground"
                            : product.badge === "Best-seller"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
                    <h3 className="font-medium text-foreground line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews} avis)</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="text-lg font-bold text-foreground">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button className="w-full mt-4">Voir le produit</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline">
                Voir tous les produits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground text-center mb-8">
              Nos marques partenaires
            </h2>
            <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 lg:grid-cols-6 items-center justify-items-center opacity-60">
              {["Bosch", "Makita", "Stanley", "Facom", "Grohe", "Legrand"].map((brand) => (
                <div
                  key={brand}
                  className="text-xl font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Notre équipe peut vous aider à trouver le produit idéal ou passer une commande spéciale.
            </p>
            <Button variant="secondary" size="lg" className="mt-6" asChild>
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
