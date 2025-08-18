"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsSection() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning1, setIsTransitioning1] = useState(false);
  const [isTransitioning2, setIsTransitioning2] = useState(false);

    const projects = [
  {
    title: "Marketing Website",
    description:
      "A sleek and responsive marketing website with smooth animations and modern UI components.",
    image: "https://marketing-site-pearl-three.vercel.app/preview.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://marketing-site-pearl-three.vercel.app/",
    githubUrl: "#",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "E-Commerce Website",
    description:
      "Fully functional e-commerce platform with shopping cart, checkout, and responsive design.",
    image: "https://02-ecommerce-site.vercel.app/preview.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://02-ecommerce-site.vercel.app/",
    githubUrl: "#",
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Business Website",
    description:
      "Professional business landing page showcasing services, portfolio, and contact details.",
    image: "https://haiderali7066.github.io/00Business-site/preview.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://haiderali7066.github.io/00Business-site/",
    githubUrl: "#",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Fidelity Website",
    description:
      "Modern and interactive corporate-style site with smooth scrolling and animations.",
    image: "https://03-fidelity-site.vercel.app/preview.png",
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://03-fidelity-site.vercel.app/",
    githubUrl: "#",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    title: "Deployment Test Website",
    description:
      "A sample project deployed to demonstrate hosting and frontend performance.",
    image: "https://deploy-five-livid.vercel.app/preview.png",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://deploy-five-livid.vercel.app/",
    githubUrl: "#",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and contact information.",
    image: "https://haiderali7066.github.io/portfolio/preview.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://haiderali7066.github.io/portfolio/",
    githubUrl: "#",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Traveling Website",
    description:
      "A beautifully designed travel-themed landing page with location highlights and gallery.",
    image: "https://traveling-site-cgpa.vercel.app/preview.png",
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://traveling-site-cgpa.vercel.app/",
    githubUrl: "#",
    gradient: "from-red-500 to-pink-600",
  },
];


  const CARD_WIDTH = 304;
  const TRANSITION_DURATION = 500;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex1((prev) => (prev + 1) % projects.length);
      setCurrentIndex2(
        (prev) => (prev - 1 + projects.length) % projects.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <div className="flex-shrink-0 w-72 mx-2">
      <div className=" border-purple-700 border-2 rounded-sm glass-shine h-full duration-500 shadow-md">
        <div className="relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`}
          ></div>
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-44 object-cover"
          />
        </div>
        <CardContent className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-3 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-white/10 text-cyan-300 border-cyan-400/30 text-xs"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge
                  variant="secondary"
                  className="bg-white/10 text-gray-400 border-gray-400/30 text-xs"
                >
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex gap-2 mt-auto">
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-xs flex-1"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Demo
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-cyan-400 text-cyan-400 bg-transparent text-xs flex-1"
            >
              <Github className="w-3 h-3 mr-1" />
              Code
            </Button>
          </div>
        </CardContent>
      </div>
    </div>
  );

  const handleNavigation = (direction: "left" | "right", row: 1 | 2) => {
    if ((row === 1 && isTransitioning1) || (row === 2 && isTransitioning2))
      return;
    setIsAutoPlaying(false);
    if (row === 1) {
      setIsTransitioning1(true);
      setCurrentIndex1((prev) =>
        direction === "left"
          ? (prev - 1 + projects.length) % projects.length
          : (prev + 1) % projects.length
      );
      setTimeout(() => setIsTransitioning1(false), TRANSITION_DURATION);
    } else {
      setIsTransitioning2(true);
      setCurrentIndex2((prev) =>
        direction === "left"
          ? (prev - 1 + projects.length) % projects.length
          : (prev + 1) % projects.length
      );
      setTimeout(() => setIsTransitioning2(false), TRANSITION_DURATION);
    }
    setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  const getInfiniteProjects = (_startIndex: number, reverse = false) => {
    const tripleProjects = [...projects, ...projects, ...projects];
    return reverse ? tripleProjects.reverse() : tripleProjects;
  };

  return (
    <section id="projects" className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing my latest work and innovative solutions
          </p>
        </div>

        <div className="space-y-8">
          {/* First Row */}
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 border-white/30 text-white z-20 backdrop-blur-sm"
              onClick={() => handleNavigation("left", 1)}
              disabled={isTransitioning1}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 border-white/30 text-white z-20 backdrop-blur-sm"
              onClick={() => handleNavigation("right", 1)}
              disabled={isTransitioning1}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    (currentIndex1 + projects.length) * CARD_WIDTH
                  }px)`,
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {getInfiniteProjects(0).map((project, index) => (
                  <ProjectCard key={`row1-${index}`} project={project} />
                ))}
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 border-white/30 text-white z-20 backdrop-blur-sm"
              onClick={() => handleNavigation("left", 2)}
              disabled={isTransitioning2}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 border-white/30 text-white z-20 backdrop-blur-sm"
              onClick={() => handleNavigation("right", 2)}
              disabled={isTransitioning2}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    (currentIndex2 + projects.length) * CARD_WIDTH
                  }px)`,
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {getInfiniteProjects(0, true).map((project, index) => (
                  <ProjectCard key={`row2-${index}`} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
