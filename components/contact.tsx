"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`
    window.location.href = `mailto:saketsingh477@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary border-border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary border-border"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-secondary border-border"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary border-border resize-none"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:saketsingh477@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm">saketsingh477@gmail.com</span>
                </a>

                <a
                  href="tel:+919334314811"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-sm">+91 9334314811</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-sm">India · Available for remote work</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/saketsingh477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/saketsingh477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <p className="text-muted-foreground text-sm leading-relaxed">
                I&apos;m currently available for freelance work and exciting embedded systems
                projects. Feel free to reach out if you have a project in mind or just want
                to connect!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
