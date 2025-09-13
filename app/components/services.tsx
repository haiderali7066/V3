"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Server,
  Globe,
  Database,
  Smartphone,
  Rocket,
  ShoppingBag,
  Newspaper,
  Briefcase,
  GraduationCap,
  Users,
  AppWindow,
} from "lucide-react";

export default function ServicesSection() {
  const websiteTypes = [
    {
      title: "E-Commerce Stores",
      desc: "Custom online shops with payments, inventory, and analytics.",
      icon: ShoppingBag,
    },
    {
      title: "Blogs & Content Platforms",
      desc: "SEO-optimized blogs, news sites, and publishing platforms.",
      icon: Newspaper,
    },
    {
      title: "Business Websites",
      desc: "Corporate, portfolio, and landing pages to showcase your brand.",
      icon: Briefcase,
    },
    {
      title: "Educational Platforms",
      desc: "E-learning, course platforms, and interactive study tools.",
      icon: GraduationCap,
    },
    {
      title: "Social & Community Apps",
      desc: "Chat, forums, groups, and networking platforms with real-time features.",
      icon: Users,
    },
    {
      title: "Portfolio Websites",
      desc: "Work showcase & personal branding websites.",
      icon: AppWindow,
    },
  ];

  const services = [
    {
      title: "Full Stack Development (MERN)",
      desc: "Building scalable applications with MongoDB, Express.js, React, and Node.js.",
      icon: Server,
    },
    {
      title: "Next.js Development",
      desc: "High-performance, SEO-friendly web apps with Next.js, App Router, and API integration.",
      icon: Globe,
    },
    {
      title: "Svelte 5 Development",
      desc: "Lightweight, reactive, and fast frontends powered by the latest Svelte 5 ecosystem.",
      icon: Rocket,
    },
    {
      title: "REST & GraphQL APIs",
      desc: "Designing and implementing secure, efficient APIs with Express, Apollo, and GraphQL.",
      icon: Code,
    },
    {
      title: "Database Design",
      desc: "Schema modeling, optimization, and management with MongoDB, PostgreSQL, and Redis.",
      icon: Database,
    },
    {
      title: "Responsive & Mobile-First UI",
      desc: "Modern, user-friendly interfaces with Tailwind CSS, shadcn/ui, and responsive layouts.",
      icon: Smartphone,
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      {/* Websites First */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Services
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Tailored solutions for every industry and purpose
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
        {websiteTypes.map((site, index) => {
          const Icon = site.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card glass-shine bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 h-full rounded-2xl">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {site.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {site.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Services Second */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          End-to-end web solutions to bring your ideas to life
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card glass-shine bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 h-full rounded-2xl">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
