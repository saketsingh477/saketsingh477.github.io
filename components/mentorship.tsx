"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, Cog, Zap, Box, Terminal, Microchip, Quote, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  const scrollToSubjects = () => {
    document.getElementById("subject-cards")?.scrollIntoView({ behavior: "smooth" })
  }

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

          {/* Title and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-center"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              Robotics Mentor at <span className="text-primary">The Innovation Story</span>
            </h3>
            <p className="text-muted-foreground mt-2 text-lg">
              Helping students build real things — from their first LED blink to autonomous robots
            </p>
          </motion.div>

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
            <div id="subject-cards" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          {/* Testimonial Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 p-6 rounded-xl bg-card border border-border relative"
          >
            <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
            <blockquote className="text-center px-8">
              <p className="text-muted-foreground italic text-lg leading-relaxed">
                &ldquo;I believe the fastest way to learn embedded systems is to break something, debug it, and understand why it broke. That&apos;s the approach I bring to every mentorship session.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-foreground font-medium">
                — Saket Singh, Robotics Mentor, The Innovation Story
              </footer>
            </blockquote>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:saketsingh477@gmail.com?subject=Mentorship Enquiry">
                <Mail className="h-4 w-4" />
                Book a mentorship session
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={scrollToSubjects}>
              <ArrowDown className="h-4 w-4" />
              View mentorship subjects
            </Button>
          </motion.div>

          {/* Availability Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 text-center text-muted-foreground text-sm"
          >
            <span className="font-medium text-foreground">Available for:</span> One-on-one sessions · College workshops · School robotics clubs · Weekend bootcamps
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
