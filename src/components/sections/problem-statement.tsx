"use client";

import { motion } from "framer-motion";
import { DollarSign, TrendingDown, Users } from "lucide-react";

export function ProblemStatement() {
  return (
    <section className="relative py-20 bg-foreground/5">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 w-[70%] h-[50%] bg-gradient-to-br from-primary/5 to-transparent opacity-30" />
        <div className="absolute right-0 bottom-0 w-[50%] h-[70%] bg-gradient-to-tl from-secondary/5 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            The High Cost of Employee Turnover
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you're like many organizations, you've seen significant workplace
            change, increased workforce demands, and your biggest employee
            challenges are now talent retention and absenteeism. Frequent staff
            turnover leads to financial strain on businesses across all
            industries. Studies show average turnover cost is between{" "}
            <span className="font-semibold text-primary">
              $30,000-50,000 per lost employee
            </span>{" "}
            in both direct and indirect costs (recruitment efforts, including
            overtime, temporary staff, constant training, lost productivity, and
            more).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: DollarSign,
              title: "Direct Costs",
              description:
                "Recruitment expenses, overtime pay, and temporary staffing needs",
            },
            {
              icon: Users,
              title: "Training Impact",
              description:
                "Constant onboarding and training requirements for new hires",
            },
            {
              icon: TrendingDown,
              title: "Lost Productivity",
              description:
                "Decreased efficiency and performance during transition periods",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-lg border border-border/50 bg-background backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg font-medium leading-relaxed">
            At Manage2Retain, we'll create a customized action plan to ensure
            you keep top talent, foster employee loyalty, drive engagement, and
            ensure success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
