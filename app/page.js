import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import HeroSection from "@/components/hero";
import { features } from "@/data/features";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";
import { auth } from "@clerk/nextjs/server";

export default async function LandingPage() {
  const { userId } = await auth();

  return (
    <div className="overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-background to-background/80 -z-10 pointer-events-none opacity-70"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10 pointer-events-none"></div>

      {/* Hero Section */}
      <HeroSection userId={userId} />

      {/* Features Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 -z-10"></div>
        <div className="absolute top-z0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center max-w-3xl">
              Powerful Features for Your Career Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-16 md:py-24">
        <div className="absolute inset-0 bg-muted/30 skew-y-3 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative -skew-y-3">
            {[
              { value: "50+", label: "Industries Covered" },
              { value: "1000+", label: "Interview Questions" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "AI Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-md border border-border/50 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-background/90 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center max-w-xl mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-center text-lg max-w-2xl">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
              {howItWorks.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-background shadow-lg border border-border/50 flex items-center justify-center mb-6 z-10">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">{item.icon}</div>
                  </div>
                  <span className="absolute -top-2 right-0 md:right-auto md:left-0 bg-primary text-primary-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-xl mb-3">
                    {index === 0 ? "Personalized Kickoff" : item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-center text-lg max-w-2xl mt-4">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/70 last:border-0"
                >
                  <AccordionTrigger className="text-left py-5 hover:text-primary transition-colors">
                    {faq.question.replace(/sensai/gi, "CareerCraft")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer.replace(/sensai/gi, "CareerCraft")}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
