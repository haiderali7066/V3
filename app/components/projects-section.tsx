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
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "https://picsum.photos/id/237/400/250",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application with AI integration and smart responses.",
      image: "https://picsum.photos/id/238/400/250",
      technologies: ["React", "Node.js", "Socket.io", "OpenAI API"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with kanban boards and time tracking.",
      image: "https://picsum.photos/id/239/400/250",
      technologies: ["Vue.js", "Express.js", "MySQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Cryptocurrency Tracker",
      description:
        "Real-time cryptocurrency tracking with portfolio management and price alerts.",
      image: "https://picsum.photos/id/240/400/250",
      technologies: ["React Native", "Firebase", "CoinGecko API"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      title: "Social Media Analytics",
      description:
        "Comprehensive analytics platform with data visualization and reporting.",
      image: "https://picsum.photos/id/241/400/250",
      technologies: ["Angular", "Python", "Django", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "IoT Dashboard",
      description: "Real-time IoT device monitoring and control dashboard.",
      image: "https://picsum.photos/id/242/400/250",
      technologies: ["React", "MQTT", "InfluxDB", "Grafana"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      title: "Video Streaming Platform",
      description:
        "Netflix-like streaming platform with user authentication and video management.",
      image: "https://picsum.photos/id/243/400/250",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-red-500 to-pink-600",
    },
    {
      title: "Food Delivery App",
      description:
        "Mobile-first food delivery application with real-time tracking.",
      image: "https://picsum.photos/id/244/400/250",
      technologies: ["React Native", "Express.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Learning Management System",
      description:
        "Comprehensive LMS with course creation, progress tracking, and assessments.",
      image: "https://picsum.photos/id/245/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-cyan-500 to-purple-500",
    },
    {
      title: "Weather Forecast App",
      description:
        "Beautiful weather app with detailed forecasts and location-based alerts.",
      image: "https://picsum.photos/id/246/400/250",
      technologies: ["React Native", "OpenWeather API", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Fitness Tracking Platform",
      description:
        "Comprehensive fitness tracker with workout plans and progress analytics.",
      image: "https://picsum.photos/id/247/400/250",
      technologies: ["Vue.js", "Firebase", "Chart.js", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Real Estate Portal",
      description:
        "Modern real estate platform with virtual tours and property management.",
      image: "https://picsum.photos/id/248/400/250",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-violet-500 to-purple-600",
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
