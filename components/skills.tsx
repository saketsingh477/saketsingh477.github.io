"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillsLeft = [
  { name: "Embedded C / C++", level: 85 },
  { name: "STM32 CMSIS / Bare-Metal", level: 80 },
  { name: "FreeRTOS", level: 75 },
  { name: "I2C / SPI / UART / CAN", level: 80 },
  { name: "PCB Design", level: 70 },
  { name: "ARM Cortex-M4 Architecture", level: 75 },
]

const skillsRight = [
  { name: "MQTT / AWS IoT", level: 75 },
  { name: "Zigbee / Industrial Automation", level: 70 },
  { name: "STM32CubeIDE / Keil uVision", level: 80 },
  { name: "PLC / SCADA", level: 65 },
  { name: "Git / GitHub", level: 75 },
  { name: "Logic Analyzer / Oscilloscope", level: 70 },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-mono text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
        />
      </div>
    </div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">04.</span>
            Skills
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Firmware & Hardware
              </h3>
              {skillsLeft.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Protocols & Tools
              </h3>
              {skillsRight.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
