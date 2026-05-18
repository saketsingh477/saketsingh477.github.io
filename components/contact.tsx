"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Whether it&apos;s a freelance project, a firmware problem, or a mentorship enquiry —
            reach out on any of the details below.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <a
              href="https://github.com/saketsingh477"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
            >
              <Github className="h-5 w-5 text-primary" />
              <span className="text-foreground text-sm font-medium">github.com/saketsingh477</span>
            </a>

            <a
              href="https://linkedin.com/in/saketsingh477"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="text-foreground text-sm font-medium">linkedin.com/in/saketsingh477</span>
            </a>

            <a
              href="mailto:saketsingh477@gmail.com"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-foreground text-sm font-medium">saketsingh477@gmail.com</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button asChild size="lg" className="min-w-[200px]">
              <a href="mailto:saketsingh477@gmail.com?subject=Project%20Enquiry">
                Hire me for a project
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px]">
              <a href="mailto:saketsingh477@gmail.com?subject=Mentorship%20Enquiry">
                Enquire about mentorship
              </a>
            </Button>
          </div>

          {/* Location Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-muted-foreground text-sm"
          >
            <MapPin className="h-4 w-4" />
            <span>
              Based in India · Available for remote freelance projects · Robotics Mentor at The
              Innovation Story
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
