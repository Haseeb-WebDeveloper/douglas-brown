"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Heart } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    metric: "4% → 2.2%",
    label: "Staff Sickness Reduction",
    color: "from-green-500/20 to-green-500/5"
  },
  {
    icon: Users,
    metric: "22% → 14%",
    label: "Staff Turnover Decrease",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    icon: Heart,
    metric: "62% → 73%",
    label: "Staff Engagement Increase",
    color: "from-purple-500/20 to-purple-500/5"
  }
];

export function Results() {
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
            Talent Retention Strategies That Really Work!
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven approach delivers measurable improvements in key retention metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-xl bg-background border border-border/50 group hover:border-primary/50 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <result.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">{result.metric}</div>
                <p className="text-muted-foreground">{result.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 