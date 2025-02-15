"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background mt-12">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[40%] -top-[40%] h-[80rem] w-[80rem] rounded-full bg-primary/5" />
        <div className="absolute -right-[35%] -top-[60%] h-[80rem] w-[80rem] rounded-full bg-secondary/5" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-border/40 bg-background/95 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
                </span>
                <span className="ml-2">We're ready to help you succeed</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
             Ready to transform your workplace and keep more top talent? {" "}
              {/* <span className="relative">
                <span className="relative z-10 text-primary">Reduce Absenteeism, and Skyrocket Your</span>
              </span> */}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-muted-foreground"
            >
             Boost Employee Retention, Reduce Absenteeism, and Skyrocket Your
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                variant="special"
                className="group text-[15px] font-medium tracking-wide"
              >
                Schedule a Free Consultation
                <ArrowRight className="transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:mt-0"
          >
            <div className="relative mx-auto max-w-[500px]">
              <div className="relative">
                {/* Image decorative elements */}
                <div className="absolute -inset-px rounded-lg border border-border/50" />
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 blur-sm" />
                
                {/* Main image container */}
                <div className="relative rounded-lg bg-card/50 p-1 backdrop-blur-sm">
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50" />
                  <img
                    src="/iStock_000009178000Medium.jpg"
                    alt="Hero Image"
                    className="relative rounded-md object-cover aspect-[3.5/3] w-full border border-border/50"
                  />
                </div>

             
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
