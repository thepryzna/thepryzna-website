import React from "react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We understand the client’s brand, goals, and target audience to create the right strategy."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Our team designs a creative content and marketing plan tailored to the brand."
  },
  {
    number: "03",
    title: "Production",
    description: "We produce high-quality visuals, videos, and social media content."
  },
  {
    number: "04",
    title: "Launch & Growth",
    description: "We launch the campaign and continuously optimize to achieve better results."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase bg-orange-100 text-orange-700 rounded-full"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-zinc-900"
          >
            Our <span className="text-orange-600">Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-px bg-zinc-100 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="mb-8 relative">
                <div className="w-16 h-16 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center text-2xl font-display font-bold text-zinc-300 group-hover:text-orange-600 group-hover:border-orange-200 group-hover:shadow-xl group-hover:shadow-orange-600/5 transition-all duration-500">
                  {step.number}
                </div>
                {/* Mobile/Tablet Line */}
                <div className="lg:hidden absolute top-16 left-8 w-px h-8 bg-zinc-100 last:hidden" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-zinc-900 group-hover:text-orange-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
