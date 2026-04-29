"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Car, Train, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "01 23 45 67 89",
    subtitle: "Du lundi au samedi, 8h-19h",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@quincaillerie-dupont.fr",
    subtitle: "Réponse sous 24h",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "12 Rue du Commerce",
    subtitle: "75001 Paris",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun-Sam : 8h-19h",
    subtitle: "Fermé le dimanche",
  },
]

const horaires = [
  { jour: "Lundi", heures: "8h00 - 19h00" },
  { jour: "Mardi", heures: "8h00 - 19h00" },
  { jour: "Mercredi", heures: "8h00 - 19h00" },
  { jour: "Jeudi", heures: "8h00 - 19h00" },
  { jour: "Vendredi", heures: "8h00 - 19h00" },
  { jour: "Samedi", heures: "8h00 - 19h00" },
  { jour: "Dimanche", heures: "Fermé" },
]

const faqs = [
  {
    question: "Proposez-vous la livraison ?",
    answer:
      "Oui, nous livrons dans un rayon de 30km autour de Paris. Livraison possible sous 24-48h selon disponibilité.",
  },
  {
    question: "Faites-vous des devis pour les professionnels ?",
    answer:
      "Absolument ! Nous établissons des devis gratuits sous 48h pour tous les professionnels. Tarifs préférentiels disponibles.",
  },
  {
    question: "Puis-je commander par téléphone ?",
    answer:
      "Oui, vous pouvez commander par téléphone et récupérer votre commande en magasin sous 2h (Click & Collect).",
  },
]

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Contactez-nous</h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Une question sur un produit ? Besoin d'un devis ? Notre équipe est à votre disposition pour vous aider.
                N'hésitez pas à nous contacter.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="bg-secondary py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item) => (
                <Card key={item.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-foreground font-medium">{item.content}</p>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Form and Map Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Envoyez-nous un message</h2>

                {formSubmitted ? (
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Message envoyé !</h3>
                      <p className="text-muted-foreground mb-6">
                        Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>Envoyer un autre message</Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Prénom *</Label>
                            <Input id="firstName" required placeholder="Jean" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Nom *</Label>
                            <Input id="lastName" required placeholder="Dupont" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" type="email" required placeholder="jean@exemple.fr" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Téléphone</Label>
                            <Input id="phone" type="tel" placeholder="06 12 34 56 78" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Objet *</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un objet" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="info">Demande d'information</SelectItem>
                              <SelectItem value="devis">Demande de devis</SelectItem>
                              <SelectItem value="commande">Suivi de commande</SelectItem>
                              <SelectItem value="sav">Service après-vente</SelectItem>
                              <SelectItem value="pro">Ouverture compte pro</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            required
                            placeholder="Décrivez votre demande..."
                            className="min-h-[150px]"
                          />
                        </div>

                        <Button type="submit" className="w-full">
                          Envoyer le message
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour répondre à
                          votre demande.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Map and Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Venez nous voir</h2>

                {/* Map placeholder */}
                <Card className="overflow-hidden">
                  <div className="relative aspect-[16/9] bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.3414966!3d48.8529717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e18a5f84801%3A0x6eb5daa624bdebd2!2sRue%20du%20Commerce%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1699000000000!5m2!1sfr!2sfr"
                      width="100%"
                      height="100%"
                      style={{ border: 0, position: "absolute", inset: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Carte de localisation"
                    />
                  </div>
                </Card>

                {/* Access info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Comment nous rejoindre</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Train className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">En métro</p>
                        <p className="text-sm text-muted-foreground">Ligne 1 - Châtelet (5 min à pied)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Car className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">En voiture</p>
                        <p className="text-sm text-muted-foreground">
                          Parking public à 100m - 2h gratuites pour nos clients
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Horaires */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Horaires d'ouverture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {horaires.map((h) => (
                        <li key={h.jour} className="flex justify-between text-sm">
                          <span className="text-foreground">{h.jour}</span>
                          <span
                            className={h.heures === "Fermé" ? "text-muted-foreground" : "text-foreground font-medium"}
                          >
                            {h.heures}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Questions fréquentes</h2>
              <p className="mt-4 text-lg text-muted-foreground">Retrouvez les réponses aux questions les plus posées</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
              Besoin d'une réponse rapide ?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Appelez-nous directement, notre équipe est disponible du lundi au samedi de 8h à 19h.
            </p>
            <Button variant="secondary" size="lg" className="mt-6">
              <Phone className="mr-2 h-4 w-4" />
              01 23 45 67 89
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
