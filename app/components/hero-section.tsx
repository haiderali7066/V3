"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [text, setText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["Full Stack Developer", "Freelancer"]
  const typingSpeed = 80
  const deletingSpeed = 40
  const pauseBeforeDelete = 2000
  const pauseBeforeType = 500

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex]

      if (!isDeleting) {
        setText(currentText.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete)
        }
      } else {
        setText(currentText.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)

        if (charIndex === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
          setTimeout(() => {}, pauseBeforeType)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, texts])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <img
                src="/p.jpg"
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-up">
          Haider Ali
        </h1>

        <div className="text-2xl md:text-3xl text-cyan-300 mb-8 h-12 animate-fade-in-up animation-delay-200">
          {text}
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          Crafting digital experiences with cutting-edge technologies.
          Passionate about creating scalable, performant, and beautiful
          applications that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-600">
          <a href="#projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
          </a>
          <a href="/Haider-ali-cv.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              Download CV
            </Button>
          </a>
        </div>

        <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-800">
          {[
            { icon: Github, url: "https://github.com/haiderali7066" },
            { icon: Linkedin, url: "https://linkedin.com/in/haiderali7066" },
            { icon: Twitter, url: "https://twitter.com/dr.hadi" },
          ].map(({ icon: Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-cyan-400" />
      </div>
    </section>
  );
}
