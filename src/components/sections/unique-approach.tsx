"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Bottom-up approach focusing on employee needs",
  "Data-driven insights and solutions",
  "Customized retention strategies",
  "Measurable results and ROI",
  "Continuous improvement framework"
];

export function UniqueApproach() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-[10%] top-[20%] w-[40%] aspect-square rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-[15%] bottom-[10%] w-[50%] aspect-square rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Our Revolutionary Bottom-Up Approach
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
            At Manage2Retain, our groundbreaking approach for employee retention focuses on the manager, team, and employee work environment (the core of retention) rather than top-down corporate programs or HR initiatives that may be ineffective or only a piece of the puzzle.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
            Imagine the relief and peace of mind, with a high functioning work environment where managers and employees resolve frustrations, support one another and build rewarding connections so you no longer stress over constant employee turnover, staff shortages, and dissatisfaction. 
            </p>

            {/* <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div> */}

            <Button variant="special" size="lg" className="group">
                Let's Get Started
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/10 to-primary/10" />
              <img
                src="/team-smiling.jpg"
                alt="Our Approach"
                className="relative z-10 rounded-lg shadow-xl aspect-[4/4] object-cover object-center"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 