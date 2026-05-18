"use client"

import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            <span className="font-mono">© {new Date().getFullYear()}</span> Saket Singh. Built with Next.js & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/saketsingh477"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/saketsingh477"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
