"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Shield,
  Users,
  Brain,
  Heart,
  Zap,
  CheckCircle,
} from "lucide-react";

const bulletPoints = [
  "Lack of Recognition/Appreciation",
  "Mis-Communication Challenges",
  "Lack of Trust/Poor Relationship",
  "No Purpose/Meaning in Work",
  "Minimal Support, Empathy, Caring",
  "Generational Disconnects",
  "Micromanagement vs Needed Independence",
  "Psychological Safety",
];

export function ManagerImpact() {
  return (
    <section className="relative py-16 bg-background">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="max-w-2xl mx-auto text-3xl md:text-4xl font-bold mb-4">
              Are Your Managers{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Helping or Hurting
              </span>{" "}
              Your Retention Efforts?
            </h2>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Managers and employee disconnects are often cited as the #1
                  reason why employees quit. According to Business Leadership
                  Today,
                  <span className="font-semibold text-primary">
                    {" "}
                    50 to 75% of employees leave because of their manager
                  </span>{" "}
                  or reasons their manager had influence over.
                </p>
                <p>
                  But it's not entirely their fault, since managers aren't
                  getting the formal training and support resources they need to
                  improve employee retention.
                </p>
              </div>

              {/* Bullet Points Section */}
                <div className="flex items-center gap-2 text-primary mb-4">
                  <AlertCircle className="w-5 h-5" />
                  <h3 className="font-semibold">
                    Common Manager-Employee Disconnects
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {bulletPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-2 group"
                    >
                      <div className="mt-1 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/70 group-hover:scale-125 transition-transform duration-300" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {point}
                      </span>
                    </motion.div>
                  ))}
              </div>

              <div className="h-px w-full bg-gradient-to-r from-border via-primary/20 to-border" />

              <div className="bg-muted/50 p-6 rounded-xl border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground">
                    We cultivate retention-minded managers who strengthen
                    relationships and retain talent. With our specialized
                    training, they'll learn the exact steps and techniques to
                    creating a trust-rich culture, that elevates employee
                    satisfaction, loyalty, and commitment to excellence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative flex flex-col gap-4">
                <img
                  src="/team-smiling.jpg"
                  alt="Team Smiling"
                  className="rounded-lg shadow-xl aspect-[4/3] object-cover object-center"
                />
                <img
                  src="/team-smiling.jpg"
                  alt="Team Smiling"
                  className="rounded-lg shadow-xl aspect-[4/2] object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
