import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { CurrentlyLearning } from "@/components/currently-learning"
import { Services } from "@/components/services"
import { Mentorship } from "@/components/mentorship"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <CurrentlyLearning />
      <Services />
      <Mentorship />
      <Contact />
      <Footer />
    </main>
  )
}
