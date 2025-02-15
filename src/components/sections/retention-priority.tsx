"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Compass, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RetentionPriority() {
  return (
    <section className="relative py-24 bg-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] opacity-20 bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] opacity-20 bg-gradient-radial from-secondary/20 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Why Prioritizing Employee Retention is Your Key for Success
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                While strong acquisition efforts are needed, a focus on talent retention strategies is equally important. Yet often CEOs, executives and managers don't know how to ensure employees stick around.
              </p>
              <p className="leading-relaxed">
                Without effective retention strategies, you'll continue to drive up costs, disrupt operations, and ultimately threaten organizational sustainability. Unless employee' needs are met and they see a future with your organization, they're at high risk of leaving.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-muted/50 p-6 rounded-lg border border-border/50"
            >
              <p className="font-medium text-foreground">
                Manage2Retain helps you overcome your retention challenges, disengagement, ineffective leadership and poor onboarding processes with our groundbreaking strategies.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="mt-4">
              <img src="/Retention-Diagnostic-3.jpg" alt="Retention Priority" className="w-full h-auto aspect-[4/4] object-contain rounded-sm bg-white " />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 