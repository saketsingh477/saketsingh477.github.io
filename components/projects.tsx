"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "STM32 GPIO Bare-Metal Driver",
    tags: ["STM32F4", "CMSIS", "Bare-Metal", "ARM Cortex-M4", "C", "Embedded C"],
    description: "Custom GPIO peripheral driver for STM32F4 written entirely at the CMSIS register level — no HAL abstraction. Implements input/output mode configuration, alternate function mapping, output speed and pull-up/pull-down control, and external interrupt (EXTI) handling. Designed to demonstrate deep understanding of ARM Cortex-M4 peripheral architecture.",
    github: "https://github.com/saketsingh477/STM32_GPIO_Driver",
    readme: "https://github.com/saketsingh477/STM32_GPIO_Driver#readme",
  },
  {
    title: "EV Cruise Control System",
    tags: ["Embedded C", "Control Systems", "STM32"],
    description: "Embedded control system for electric vehicle cruise control — speed regulation using PID logic with real-time sensor feedback.",
    github: "https://github.com/saketsingh477",
  },
  {
    title: "ESP8266 AWS IoT",
    tags: ["ESP8266", "MQTT", "AWS IoT", "C"],
    description: "IoT device firmware connecting ESP8266 to AWS IoT Core over MQTT for sensor data publishing and remote command execution.",
    github: "https://github.com/saketsingh477",
  },
  {
    title: "DigiMines Industrial System",
    tags: ["Zigbee", "Industrial Automation", "PCB Design"],
    description: "Industrial monitoring system for mining environment — sensor data acquisition, Zigbee mesh communication, and PCB design.",
  },
  {
    title: "CEAT NSD Firmware",
    tags: ["STM32", "FreeRTOS", "UART", "I2C"],
    description: "Production firmware for CEAT's NSD project — real-time task scheduling with FreeRTOS, peripheral drivers, and serial communication stack.",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">03.</span>
            Projects
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,200,0.1)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <span className="font-mono text-primary text-sm">{`</>`}</span>
                      </div>
                      {project.status && (
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.readme && (
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                          <a
                            href={project.readme}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} README`}
                          >
                            <FileText className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
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
