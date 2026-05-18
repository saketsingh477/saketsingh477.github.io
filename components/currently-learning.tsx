"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const learningItems = [
  "STM32 register-level GPIO",
  "SPI DMA mode",
  "FreeRTOS semaphores",
  "ARM Cortex-M4 interrupt priority",
]

export function CurrentlyLearning() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="py-12 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-card border border-border rounded-lg p-6 md:p-8 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 100px,
                var(--primary) 100px,
                var(--primary) 101px
              )`
            }} />
          </div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
              <span className="text-primary font-mono text-sm font-semibold uppercase tracking-wider">
                Currently Mastering
              </span>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {learningItems.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="font-mono text-sm md:text-base text-foreground bg-secondary/50 border border-border px-3 py-2 rounded-lg"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
