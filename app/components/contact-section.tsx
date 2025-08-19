"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Send, Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="glass-card glass-shine bg-white/5 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Get In Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    required
                  />
                </div>
                <div className="h-52">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none h-full"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="glass-card glass-shine bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">
                      Haideraliqurban7066@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">+92 325 6036 838</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Lahore, Pakistan</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card glass-shine bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-400/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Hire Me Now!
                </h3>
                <p className="text-gray-300 mb-6">
                  Ready to start your project? Contact me directly through your
                  preferred platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() =>
                      window.open(
                        "https://wa.me/923256036838?text=Hello%20Haider!%20I%20want%20to%20discuss%20a%20project.",
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() =>
                      window.open(
                        "https://t.me/haideraliqurban?text=Hello%20Haider!%20I%20am%20interested%20in%20working%20with%20you.",
                        "_blank"
                      )
                    }
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
