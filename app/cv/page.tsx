"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowLeft, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* Print-hidden navigation */}
      <div className="print:hidden fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
        <Button asChild variant="outline" size="sm">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
        </Button>
        <Button onClick={handlePrint} size="sm">
          <Download className="h-4 w-4 mr-2" />
          Save as PDF
        </Button>
      </div>

      {/* CV Content */}
      <div className="min-h-screen bg-white text-gray-900 print:bg-white">
        <div className="max-w-[850px] mx-auto px-8 py-16 print:py-6 print:px-10">
          
          {/* Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">SAKET SINGH</h1>
            <p className="text-lg text-gray-700 font-medium mt-1">Embedded Systems Engineer</p>
            
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" />
                <span>+91 9334314811</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" />
                <a href="mailto:saketsingh477@gmail.com" className="hover:text-gray-900 print:text-gray-600">
                  saketsingh477@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin className="h-3.5 w-3.5" />
                <a href="https://linkedin.com/in/saketsingh477" className="hover:text-gray-900 print:text-gray-600">
                  linkedin.com/in/saketsingh477
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="h-3.5 w-3.5" />
                <a href="https://github.com/saketsingh477" className="hover:text-gray-900 print:text-gray-600">
                  github.com/saketsingh477
                </a>
              </div>
            </div>
            
            <div className="h-px bg-gray-300 mt-4" />
          </header>

          {/* Professional Summary */}
          <section className="mb-5">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Results-driven Embedded Systems Engineer with 3+ years of hands-on experience designing and developing embedded systems for industrial IoT, automotive, and monitoring applications. Proficient in bare-metal and RTOS-based firmware development across STM32, ESP32, and various microcontroller platforms. Strong expertise in communication protocols (UART, SPI, I2C, Modbus, MQTT, BLE) and end-to-end hardware-software integration. Passionate about building reliable, real-world embedded solutions.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-5">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
              Professional Experience
            </h2>

            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-900">Senior Electronics Engineer</h3>
                <span className="text-sm text-gray-600">Sep 2025 – Present</span>
              </div>
              <p className="text-sm text-gray-600 mb-1.5">FEAST Software Private Limited, Mumbai</p>
              <ul className="text-sm text-gray-700 list-disc list-outside ml-4 space-y-0.5">
                <li>Lead simulation and design automation projects for automotive, aerospace, and manufacturing clients</li>
                <li>Optimize product performance leveraging embedded systems and electronics engineering expertise</li>
                <li>Collaborate with cross-functional teams to deliver client-specific engineering solutions</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-900">Embedded Engineer</h3>
                <span className="text-sm text-gray-600">Jul 2022 – Aug 2025</span>
              </div>
              <p className="text-sm text-gray-600 mb-1.5">Aniruddha Telemetry System Pvt Ltd., Mumbai</p>
              <ul className="text-sm text-gray-700 list-disc list-outside ml-4 space-y-0.5">
                <li>Designed firmware for STM32, ESP32, Arduino, and Raspberry Pi platforms for industrial applications</li>
                <li>Implemented UART, SPI, I2C, RS232/RS485, Modbus, BLE, Wi-Fi, MQTT, and Zigbee protocols</li>
                <li>Developed IoT monitoring systems deployed across mining and transportation industries</li>
                <li>Integrated RFID, GPS, GSM modules into complete embedded solutions</li>
                <li>Performed hardware-software debugging using Putty, Docklight, and Proteus</li>
              </ul>
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-5">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
              Key Projects
            </h2>

            <div className="grid grid-cols-1 gap-2.5">
              <div className="border-l-2 border-gray-300 pl-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 text-sm">STM32 GPIO Driver – Bare-Metal CMSIS</h3>
                  <span className="text-xs text-gray-500">STM32F4, CMSIS, Embedded C</span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5">Developed reusable GPIO peripheral driver using register-level programming without HAL. Modular architecture with configurable mode, speed, output type, and pull settings.</p>
              </div>

              <div className="border-l-2 border-gray-300 pl-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 text-sm">EV Cruise Control System</h3>
                  <span className="text-xs text-gray-500">FreeRTOS, STM32, C++</span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5">Built cruise control for EV using FreeRTOS task scheduling with feedback-based speed regulation and inter-task queue communication.</p>
              </div>

              <div className="border-l-2 border-gray-300 pl-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 text-sm">CEAT NSD – Tyre Monitoring System</h3>
                  <span className="text-xs text-gray-500">nRF52840, BLE, Arduino</span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5">Designed real-time tyre monitoring measuring Non-Skid Depth and pressure with BLE data transmission to Android app.</p>
              </div>

              <div className="border-l-2 border-gray-300 pl-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 text-sm">DigiMines – Smart Mine Monitoring</h3>
                  <span className="text-xs text-gray-500">Quectel, GPS, Zigbee, MQTT, RPi Pico</span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5">Developed smart mining operations monitoring system for trip tracking, material quantity, and shifter activities with GPS and Zigbee integration.</p>
              </div>

              <div className="border-l-2 border-gray-300 pl-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 text-sm">DigiFlex – Transport Management System</h3>
                  <span className="text-xs text-gray-500">ATmega2560, RFID, GSM, Embedded C</span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5">Built complete transport automation covering weight measurement, SAP data entry, and vehicle tracking.</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-5">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
              Technical Skills
            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-sm">
              <div>
                <span className="font-semibold text-gray-800">Languages:</span>
                <span className="text-gray-600 ml-1">C, Embedded C, C++, Python, SQL</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Protocols:</span>
                <span className="text-gray-600 ml-1">UART, SPI, I2C, RS232/485, Modbus, BLE, MQTT</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Platforms:</span>
                <span className="text-gray-600 ml-1">STM32, ESP32, Arduino, RPi Pico, nRF52840</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Tools:</span>
                <span className="text-gray-600 ml-1">STM32CubeIDE, Keil, KiCad, Eagle, Proteus, Git</span>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-5">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
              Education
            </h2>

            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">B.E. Electrical & Electronics Engineering</h3>
                  <p className="text-xs text-gray-600">Shri Ram College of Technology, Bhopal</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600">2022 – 2025</span>
                  <p className="text-xs text-gray-700 font-medium">CGPA: 8.28</p>
                </div>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Diploma in Electrical & Electronics Engineering</h3>
                  <p className="text-xs text-gray-600">Govt. Polytechnic Jagannathpur, Jamshedpur</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600">2019 – 2022</span>
                  <p className="text-xs text-gray-700 font-medium">86%</p>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
              Certifications & Continuous Learning
            </h2>

            <div className="text-sm text-gray-700">
              <p><span className="font-semibold text-gray-800">Completed:</span> Introduction to ARM Cortex-M4 | IoT with ESP32 | PCB Design with Eagle</p>
              <p className="mt-1"><span className="font-semibold text-gray-800">Currently Learning:</span> STM32 Bare-Metal Driver Development (UART, SPI, I2C via CMSIS) | FreeRTOS | KiCad PCB Design</p>
            </div>
          </section>

        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0.4in;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </>
  )
}
