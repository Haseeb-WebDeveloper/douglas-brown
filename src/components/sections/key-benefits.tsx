"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  BarChart2, 
  Search, 
  Award,
  ArrowUpRight
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Enhanced Onboarding Process",
    description: "Transform your onboarding into a strategic advantage. Reduce first-year departures and accelerate employee productivity.",
    stats: "Reduce first-year turnover by up to 50%"
  },
  {
    icon: BarChart2,
    title: "More Efficient Operations",
    description: "Eliminate the costly revolving door effect. Build a stable, high-performing workforce that drives business growth.",
    stats: "Improve operational efficiency by 30%"
  },
  {
    icon: Search,
    title: "Advanced Analytical Diagnostics",
    description: "Identify root causes of turnover with our sophisticated diagnostic tools and data-driven insights.",
    stats: "Get 360° visibility into retention factors"
  },
  {
    icon: Award,
    title: "Improve Your Reputation",
    description: "Transform employees into brand ambassadors. 84% of job seekers prioritize company reputation in their job search.",
    stats: "Boost employer brand value by 40%"
  }
];

export function KeyBenefits() {
  return (
    <section className="relative py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Key Benefits of Our Approach
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive solution delivers measurable improvements across all aspects of employee retention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4">{benefit.description}</p>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-medium text-primary">{benefit.stats}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 