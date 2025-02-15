"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const statistics = [
  { value: "40%", label: "Loss in Productivity" },
  { value: "15-30%", label: "Employee Turnover Rate" },
  { value: "23%", label: "Leave Within First Year" },
  { value: "30%", label: "Searching for Opportunities" },
  { value: "55-70%", label: "Are Dissatisfied" },
  { value: "73%", label: "Report Decline in Morale" },
  { value: "69%", label: "Report Intensified Competition" },
];

export function Statistics() {
  return (
    <section className="relative py-24 bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Statistics Speak for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Themselves
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-3xl overflow-hidden">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-background p-8 hover:bg-muted/50 transition-colors duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-2 flex items-start justify-between">
                    <span className="text-4xl font-bold tracking-tight text-primary">
                      {stat.value}
                    </span>
                    <ArrowUpRight className="h-6 w-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-base text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-primary/5 via-primary/50 to-primary/5 translate-y-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
