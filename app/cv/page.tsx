"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
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
        <div className="max-w-[850px] mx-auto px-8 py-16 print:py-8 print:px-12">
          {/* Header */}
          <header className="text-center border-b-2 border-gray-800 pb-6 mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Saket Singh</h1>
            <p className="text-xl text-gray-700 font-medium mb-4">Embedded Engineer</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600">
              <span>Mumbai, India</span>
              <span>|</span>
              <span>+91 9334314811</span>
              <span>|</span>
              <a href="mailto:saketsingh477@gmail.com" className="text-blue-700 hover:underline print:text-gray-700">
                saketsingh477@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
              <a href="https://linkedin.com/in/saketsingh477" className="text-blue-700 hover:underline print:text-gray-700">
                linkedin.com/in/saketsingh477
              </a>
              <span>|</span>
              <a href="https://github.com/saketsingh477" className="text-blue-700 hover:underline print:text-gray-700">
                github.com/saketsingh477
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Professional Summary
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Results-driven Embedded Engineer with 3+ years of experience designing and developing embedded systems for industrial, IoT, and automotive applications. Proficient in bare-metal and RTOS-based firmware development across a range of microcontrollers and communication protocols. Adept at bridging hardware and software to deliver reliable, real-world solutions.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Work Experience
            </h2>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-gray-900">FEAST Software Private Limited</h3>
                  <p className="text-sm text-gray-600 italic">Senior Electronics Engineer</p>
                </div>
                <p className="text-sm text-gray-600 text-right">Sep 2025 – Present<br />Mumbai, India</p>
              </div>
              <ul className="text-sm text-gray-700 list-disc list-outside ml-4 space-y-1">
                <li>Worked on simulation and design automation projects for automotive, aerospace, and manufacturing industries.</li>
                <li>Contributed to product performance optimization using embedded and electronics engineering expertise.</li>
                <li>Collaborated with cross-functional teams to develop engineering solutions for client-specific requirements.</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-gray-900">Aniruddha Telemetry System Pvt Ltd.</h3>
                  <p className="text-sm text-gray-600 italic">Embedded Engineer</p>
                </div>
                <p className="text-sm text-gray-600 text-right">July 2022 – Aug 2025<br />Mumbai, India</p>
              </div>
              <ul className="text-sm text-gray-700 list-disc list-outside ml-4 space-y-1">
                <li>Designed and developed firmware for embedded systems using STM32, ESP32, Arduino, and Raspberry Pi platforms.</li>
                <li>Implemented communication protocols including UART, SPI, I2C, RS232, RS485, Modbus, BLE, Wi-Fi, MQTT, and Zigbee.</li>
                <li>Developed IoT-based monitoring and automation systems deployed in mining and transport industries.</li>
                <li>Integrated RFID, GPS, GSM, and sensor modules into end-to-end embedded solutions.</li>
                <li>Debugged and tested hardware-software interfaces using tools like Putty, Docklight, and Proteus.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Projects
            </h2>

            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-gray-900 text-sm">STM32 GPIO Driver – Bare-Metal using CMSIS</h3>
                <p className="text-xs text-gray-700">Developed a reusable GPIO peripheral driver using register-level programming (no HAL/CubeMX). Designed modular and scalable driver architecture with configurable mode, speed, output type, and pull-up/down settings.</p>
                <p className="text-xs text-gray-500 italic">Technologies: STM32, CMSIS, Bare-Metal, Embedded C</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm">EV Cruise Control – FreeRTOS Based</h3>
                <p className="text-xs text-gray-700">Built a cruise control system for an electric vehicle using FreeRTOS task scheduling and feedback-based speed regulation. Implemented inter-task communication using queues.</p>
                <p className="text-xs text-gray-500 italic">Technologies: FreeRTOS, Embedded C++, STM32</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm">ESP8266 AWS IoT – Environmental Monitoring</h3>
                <p className="text-xs text-gray-700">Connected ESP8266 with DHT sensor to collect temperature and humidity data and push it to AWS IoT Cloud via MQTT.</p>
                <p className="text-xs text-gray-500 italic">Technologies: ESP8266, DHT Sensor, AWS IoT, MQTT, C</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm">CEAT NSD – Tyre Monitoring System with BLE & OLED</h3>
                <p className="text-xs text-gray-700">Designed a real-time tyre monitoring system measuring Non-Skid Depth and tyre pressure. Transmitted live sensor data to Android app via BLE.</p>
                <p className="text-xs text-gray-500 italic">Technologies: XIAO nRF52840 Sense, TLV493D, XGZP6897D, BLE, Arduino IDE</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm">DigiMines – Smart Mine Monitoring System</h3>
                <p className="text-xs text-gray-700">Developed smart system for mining operations monitoring, tracking trips, material quantity, and shifter activities. Integrated GPS tracking and Zigbee communication with MQTT.</p>
                <p className="text-xs text-gray-500 italic">Technologies: EC200U Quectel, GPS, Zigbee, MQTT, Raspberry Pi Pico, Python, IoT</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm">DigiFlex – Automated Transport Management System</h3>
                <p className="text-xs text-gray-700">Developed complete transport management automation system covering weight measurement, SAP data entry, and vehicle tracking.</p>
                <p className="text-xs text-gray-500 italic">Technologies: ATmega2560, RFID, FACC Sensors, GSM, LAN, Embedded C</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Education
            </h2>

            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Bachelor of Engineering – Electrical & Electronics Engineering</h3>
                  <p className="text-xs text-gray-600">Shri Ram College of Technology, Bhopal</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">2022 – 2025</p>
                  <p className="text-xs text-gray-700 font-medium">CGPA: 8.28</p>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Diploma – Electrical and Electronics Engineering</h3>
                  <p className="text-xs text-gray-600">Govt. Polytechnic Jagannathpur, Jamshedpur</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">2019 – 2022</p>
                  <p className="text-xs text-gray-700 font-medium">Percentage: 86%</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Skills
            </h2>

            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="flex">
                <span className="font-bold text-gray-900 w-32 shrink-0">Programming:</span>
                <span className="text-gray-700">C, Embedded C, C++, Python, SQL, Bare Metal</span>
              </div>
              <div className="flex">
                <span className="font-bold text-gray-900 w-32 shrink-0">Software & Tools:</span>
                <span className="text-gray-700">Keil, STM32CubeIDE, Eagle, KiCad, Arduino IDE, VS Code, Proteus, Putty, Docklight, GitLab</span>
              </div>
              <div className="flex">
                <span className="font-bold text-gray-900 w-32 shrink-0">Protocols:</span>
                <span className="text-gray-700">UART, SPI, I2C, RS232, RS485, Ethernet, Modbus, BLE, Wi-Fi, MQTT, Zigbee</span>
              </div>
              <div className="flex">
                <span className="font-bold text-gray-900 w-32 shrink-0">Boards & MCUs:</span>
                <span className="text-gray-700">ESP32, Arduino, XIAO nRF52840, Raspberry Pi Pico W, PIC16F877A, STM32F103C8T6</span>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Coursework & Certifications
            </h2>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-bold text-gray-900 text-xs mb-1">Academic Projects:</h3>
                <ul className="text-xs text-gray-700 list-disc list-inside">
                  <li>RFID Based Attendance System</li>
                  <li>Wireless Voltage Detector</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xs mb-1">Online Certifications:</h3>
                <ul className="text-xs text-gray-700 list-disc list-inside">
                  <li>Introduction to ARM Cortex-M4</li>
                  <li>IoT with ESP32 Board</li>
                  <li>PCB Design with Eagle</li>
                </ul>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="font-bold text-gray-900 text-xs mb-1">Currently Learning:</h3>
              <p className="text-xs text-gray-700">STM32 Bare-Metal Driver Development (UART, SPI, I2C using CMSIS) • FreeRTOS • PCB Design with KiCad</p>
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              References
            </h2>
            <p className="text-sm text-gray-700">Available upon request.</p>
          </section>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0.5in;
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
