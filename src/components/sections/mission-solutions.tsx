"use client";

import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  GraduationCap, 
  Users, 
  Workflow,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: ClipboardCheck,
    title: "Retention Diagnostics & Analytics",
    description: "Comprehensive analysis of your retention challenges and opportunities."
  },
  {
    icon: GraduationCap,
    title: "Manager Education/Training",
    description: "Equip your leaders with the skills to build and retain high-performing teams."
  },
  {
    icon: Users,
    title: "Employee Engagement Programs",
    description: "Create meaningful connections and foster a culture of belonging."
  },
  {
    icon: Workflow,
    title: "Customized Processes & Workshops",
    description: "Tailored solutions that address your unique organizational needs."
  }
];

export function MissionSolutions() {
  return (
    <section className="relative py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Why Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe that every organization deserves a thriving workplace where talent flourishes. 
            Our mission is to transform employee retention from a challenge into your competitive advantage.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
} 