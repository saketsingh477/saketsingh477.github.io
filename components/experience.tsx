"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    company: "FEAST Software",
    role: "Firmware Engineer",
    period: "Present",
    description: "Developing embedded firmware solutions for software and telemetry systems. Working with STM32 microcontrollers, FreeRTOS, and various communication protocols.",
  },
  {
    company: "Aniruddha Telemetry System",
    role: "Embedded Engineer",
    period: "Previous",
    description: "Designed and implemented embedded systems for telemetry and monitoring applications. Worked on sensor integration and real-time data processing.",
  },
  {
    company: "DigiMines / DigiFlex",
    role: "Project Engineer",
    period: "Project-based",
    description: "Delivered project-based embedded solutions including industrial monitoring systems, PCB design, and Zigbee mesh communication networks.",
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">02.</span>
            Experience
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:ml-8"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 mt-2 border-4 border-background" />
                  
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <span className="text-primary font-mono text-sm">{exp.period}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
