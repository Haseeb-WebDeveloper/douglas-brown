"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, Users2, Target } from "lucide-react";

export function EmployeeExperience() {
  return (
    <section className="relative py-24 bg-muted/50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px]" />
        <div className="absolute h-full w-full [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-8 -top-8 w-16 h-16 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            
            <div className="relative space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Why Employee Experience Matters
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our success is due to a deep understanding of how the modern workplace has changed and the shifting needs of employees. Today, employees value many non-monetary factors besides salary, such as work-life balance, emotional health, career growth, and recognition for the most rewarding careers.
              </p>

              <div className="h-px w-full bg-gradient-to-r from-border via-primary/20 to-border" />

              <p className="text-lg text-muted-foreground leading-relaxed">
                When managers are equipped with proven processes, tools and techniques that drive retention they build strong relationships with employees and create thriving workplace cultures that inspire employees to continue the journey for the long haul.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Work-Life Balance",
                  color: "from-rose-500/20 to-rose-500/0"
                },
                {
                  icon: Lightbulb,
                  title: "Career Growth",
                  color: "from-amber-500/20 to-amber-500/0"
                },
                {
                  icon: Users2,
                  title: "Recognition",
                  color: "from-blue-500/20 to-blue-500/0"
                },
                {
                  icon: Target,
                  title: "Emotional Health",
                  color: "from-green-500/20 to-green-500/0"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-40`} />
                  <div className="relative h-full px-4 py-12 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm flex flex-col items-center justify-center text-center space-y-4 hover:border-primary/50 transition-colors duration-300">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 