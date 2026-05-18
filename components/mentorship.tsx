"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, Cog, Zap, Box, Terminal, Microchip } from "lucide-react"

const subjects = [
  {
    icon: Bot,
    title: "Robotics & Automation",
    description: "Arduino, servo control, sensor integration, autonomous systems",
  },
  {
    icon: Cog,
    title: "Mechatronics",
    description: "Combining mechanical design with embedded control systems",
  },
  {
    icon: Zap,
    title: "Junior Electronics",
    description: "Fundamentals, breadboarding, circuit reading, component identification",
  },
  {
    icon: Box,
    title: "3D Design & Printing",
    description: "CAD modelling for functional mechanical parts (enclosures, mounts, brackets)",
  },
  {
    icon: Terminal,
    title: "Python Programming",
    description: "From syntax basics to hardware interfacing with MicroPython and Raspberry Pi",
  },
  {
    icon: Microchip,
    title: "Embedded Systems Foundation",
    description: "Introduction to microcontrollers, registers, and real-time thinking",
  },
]

export function Mentorship() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="mentorship" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">06.</span>
            Mentorship
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Intro Text */}
            <div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I mentor students and early-career engineers at{" "}
                <span className="text-primary font-medium">The Innovation Story</span> as a
                Robotics Mentor.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My teaching philosophy is simple:{" "}
                <span className="text-foreground font-medium">learn by building real things</span>.
                Whether you&apos;re picking up Python for the first time or designing your first
                PCB, I&apos;ll help you get from zero to working project.
              </p>
            </div>

            {/* Subject Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subjects.map((subject, index) => (
                <motion.div
                  key={subject.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <subject.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm">{subject.title}</h3>
                      <p className="text-muted-foreground text-xs mt-1">{subject.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 text-center text-muted-foreground text-sm border-t border-border pt-8"
          >
            Currently mentoring at{" "}
            <span className="text-primary">The Innovation Story</span> — open to workshops,
            college sessions, and one-on-one guidance.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
