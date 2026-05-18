"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CircuitBoard, Cpu, Code, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: CircuitBoard,
    title: "Custom Electronics & Prototyping",
    description:
      "End-to-end custom electronic equipment development — from initial concept and component selection to working prototype. Ideal for startups, research labs, and product teams who need a functional hardware proof-of-concept fast.",
  },
  {
    icon: Cpu,
    title: "PCB Design & Layout",
    description:
      "Schematic capture and multi-layer PCB design for embedded systems. Experience with STM32, ESP32, sensor modules, power management circuits, and industrial-grade layouts. Delivery includes fabrication-ready Gerber files.",
  },
  {
    icon: Code,
    title: "Firmware Development",
    description:
      "Bare-metal and RTOS-based firmware for ARM Cortex-M microcontrollers. Register-level peripheral drivers (I2C, SPI, UART, CAN), FreeRTOS task design, bootloaders, and IoT connectivity stacks (MQTT, AWS IoT).",
  },
  {
    icon: Wrench,
    title: "Embedded Problem Solving & Debugging",
    description:
      "Stuck on a hardware or firmware issue? Bring the actual problem. Systematic debugging using logic analyzers, oscilloscopes, and GDB — clock tree issues, peripheral misconfiguration, timing failures, and communication protocol faults diagnosed and resolved.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">05.</span>
            Services
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <p className="text-muted-foreground mt-4 mb-12 max-w-2xl">
            Freelance embedded systems services for startups, product teams, and research labs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Get in touch &rarr;
                </a>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-center"
          >
            <p className="text-lg md:text-xl font-medium text-foreground mb-4">
              Have a real problem to solve? Let&apos;s build it together.
            </p>
            <Button asChild size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
