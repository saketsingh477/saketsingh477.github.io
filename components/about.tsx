"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">01.</span>
            About Me
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="mt-8 text-muted-foreground leading-relaxed space-y-4">
            <p className="text-base md:text-lg">
              I&apos;m an embedded firmware engineer with hands-on experience in{" "}
              <span className="text-primary">STM32 bare-metal development</span>,{" "}
              <span className="text-primary">FreeRTOS</span>,{" "}
              <span className="text-primary">IoT systems</span>, and{" "}
              <span className="text-primary">industrial automation</span>.
            </p>
            <p className="text-base md:text-lg">
              I work at the register level — writing CMSIS drivers, configuring peripherals without HAL abstraction, and building real-time systems from scratch.
            </p>
            <p className="text-base md:text-lg">
              Currently deepening expertise in{" "}
              <span className="font-mono text-sm bg-secondary px-2 py-1 rounded">STM32 GPIO</span>,{" "}
              <span className="font-mono text-sm bg-secondary px-2 py-1 rounded">SPI</span>,{" "}
              <span className="font-mono text-sm bg-secondary px-2 py-1 rounded">I2C</span>, and{" "}
              <span className="font-mono text-sm bg-secondary px-2 py-1 rounded">UART</span>{" "}
              at the LL/register level.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
