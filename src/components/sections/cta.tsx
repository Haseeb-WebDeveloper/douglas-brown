"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative pb-16 overflow-hidden">
      {/* Decorative background elements */}

      <div className="container max-w-6xl mx-auto  py-16 rounded-2xl px-4 bg-foreground/5 border border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto text-center"
        >
          <div className="inline-flex items-center rounded-full border border-border/40 bg-background/95 px-4 py-2 backdrop-blur mb-8">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-muted-foreground">
              Let's Discuss Your Retention Goals!
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-xl mx-auto">
            Let's Discuss Your Retention Goals!
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Schedule a No-Obligation Consultation
          </p>

          <Button variant="special" size="lg" className="group">
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
