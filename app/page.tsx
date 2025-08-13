import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import SkillsSection from "./components/skills-section"
import ProjectsSection from "./components/projects-section"
import CompaniesSection from "./components/companies-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <CompaniesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
