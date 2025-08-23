"use client";

import { useState, useEffect } from "react";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

// Separate project arrays
const fullStackProjects = [
  {
    title: "Entrepreneur Web",
    description:
      "A clean and modern marketing website tailored for entrepreneurs, showcasing products and services with responsive design and animations.",
    image: "/projects/f.PNG",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://entrepreneur-web.vercel.app/",
    githubUrl: "https://github.com/haiderali7066/entrepreneur-web",
    gradient: "from-orange-500 to-rose-600",
  },
  {
    title: "Portfolio V3",
    description:
      "Your personal portfolio showcasing featured projects, skills, and contact form with smooth UI/UX animations.",
    image: "/projects/p.PNG",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://v3-flame-beta.vercel.app/",
    githubUrl: "https://github.com/haiderali7066/V3",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Fullstack Blog App",
    description:
      "A full-featured blog platform with authentication, post creation/editing, and MongoDB-backed API. Fully responsive UI and SEO-friendly.",
    image: "/projects/b.PNG",
    technologies: ["MERN", "JWT", "Cloudinary", "Tailwind CSS"],
    liveUrl: "https://blog-frontend-h7yp.vercel.app/",
    githubUrl: "https://github.com/haiderali7066/BlogFrontend",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Fullstack Tasker App",
    description:
      "A productivity web app for managing daily tasks, built with MERN stack and JWT auth. Includes user registration, task CRUD, and filters.",
    image: "/projects/t.PNG",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://fullstack-tasker-app.vercel.app/",
    githubUrl: "https://github.com/haiderali7066/Fullstack-tasker-app",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "E-commerce Store",
    description:
      "A productivity web app for managing daily tasks, built with MERN stack and JWT auth. Includes user registration, task CRUD, and filters.",
    image: "https://fullstack-tasker-app.vercel.app/preview.PNG",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://fullstack-tasker-app.vercel.app/",
    githubUrl: "https://github.com/haiderali7066/Fullstack-tasker-app",
    gradient: "from-blue-500 to-cyan-600",
  },
];


const earlyBuildsProjects = [
  {
    title: "Business Website",
    description:
      "A sleek business landing page featuring services, testimonials, and contact information. Fully responsive with smooth scrolling.",
    image: "/projects/B2.PNG",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://haiderali7066.github.io/00Business-site/",
    githubUrl: "https://github.com/haiderali7066/00Business-site",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Traveling Website",
    description:
      "A vibrant travel landing page with animated sections, destination highlights, and modern design.",
    image: "/projects/tl.PNG",
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://traveling-site-cgpa.vercel.app/",
    githubUrl: "https://github.com/haiderali7066/traveling-site",
    gradient: "from-red-500 to-pink-600",
  },
  {
    title: "Portfolio V2",
    description:
      "An earlier version of my developer portfolio showcasing skills and sample projects using pure HTML/CSS/JS.",
    image: "/projects/v2.PNG",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://haiderali7066.github.io/v2/",
    githubUrl: "https://github.com/haiderali7066/v2",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Restaurant Website",
    description:
      "Single-page restaurant UI featuring a hero section, menu, and reservation call to action.",
    image: "/projects/re.PNG",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://01-restaurant-site.vercel.app/",
    githubUrl: "https://github.com/haiderali7066/01Restaurant-site",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    title: "Marketing Site",
    description:
      "A responsive, modern marketing page built with Vite + React. Includes animations and scroll-based transitions.",
    image: "/projects/m.PNG",
    technologies: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://marketing-site-pearl-three.vercel.app/",
    githubUrl: "https://github.com/haiderali7066/Marketing-site",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    title: "Landing Pages Collection",
    description:
      "A creative set of landing page templates using clean HTML/CSS, built to showcase different styles and layouts.",
    image: "/projects/l.PNG",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://deploy-five-livid.vercel.app/",
    githubUrl: "https://github.com/haiderali7066/Landing-pages",
    gradient: "from-green-500 to-lime-600",
  },
];


const CARD_WIDTH = 304;
const TRANSITION_DURATION = 500;

export default function ProjectsSection() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning1, setIsTransitioning1] = useState(false);
  const [isTransitioning2, setIsTransitioning2] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex1((prev) => (prev + 1) % fullStackProjects.length);
      setCurrentIndex2(
        (prev) =>
          (prev - 1 + earlyBuildsProjects.length) % earlyBuildsProjects.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNavigation = (direction: "left" | "right", row: 1 | 2) => {
    if ((row === 1 && isTransitioning1) || (row === 2 && isTransitioning2))
      return;
    setIsAutoPlaying(false);
    if (row === 1) {
      setIsTransitioning1(true);
      setCurrentIndex1((prev) =>
        direction === "left"
          ? (prev - 1 + fullStackProjects.length) % fullStackProjects.length
          : (prev + 1) % fullStackProjects.length
      );
      setTimeout(() => setIsTransitioning1(false), TRANSITION_DURATION);
    } else {
      setIsTransitioning2(true);
      setCurrentIndex2((prev) =>
        direction === "left"
          ? (prev - 1 + earlyBuildsProjects.length) % earlyBuildsProjects.length
          : (prev + 1) % earlyBuildsProjects.length
      );
      setTimeout(() => setIsTransitioning2(false), TRANSITION_DURATION);
    }
    setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  const getInfiniteProjects = (
    data: typeof fullStackProjects,
    reverse = false
  ) => {
    const tripleProjects = [...data, ...data, ...data];
    return reverse ? tripleProjects.reverse() : tripleProjects;
  };

  const ProjectCard = ({
    project,
  }: {
    project: (typeof fullStackProjects)[0];
  }) => (
    <div className="flex-shrink-0 w-72 mx-2">
      <div className="border-purple-700 border-2 rounded-sm glass-shine h-full duration-500 shadow-md">
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
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-xs"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Demo
              </Button>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full border-cyan-400 text-cyan-400 bg-transparent text-xs"
              >
                <Github className="w-3 h-3 mr-1" />
                Code
              </Button>
            </a>
          </div>
        </CardContent>
      </div>
    </div>
  );

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

        <div className="space-y-14">
          {/* Row 1 – Full Stack */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 ml-3">
              Full Stack
            </h3>
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
                      (currentIndex1 + fullStackProjects.length) * CARD_WIDTH
                    }px)`,
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  {getInfiniteProjects(fullStackProjects).map(
                    (project, index) => (
                      <ProjectCard key={`fs-${index}`} project={project} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 – Early Builds */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 ml-3">
              Front End
            </h3>
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
                      (currentIndex2 + earlyBuildsProjects.length) * CARD_WIDTH
                    }px)`,
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  {getInfiniteProjects(earlyBuildsProjects, true).map(
                    (project, index) => (
                      <ProjectCard key={`eb-${index}`} project={project} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
