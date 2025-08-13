"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
// import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const placeholderLogo = "https://picsum.photos/40/40";

  // --------------------------
  // SKILLS CATEGORIES
  // --------------------------
  const skills = {
    "Tech Stack (MERN)": [
      {
        name: "MongoDB",
        level: 90,
        color: "from-green-600 to-green-800",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Express.js",
        level: 88,
        color: "from-gray-500 to-gray-700",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "React",
        level: 95,
        color: "from-cyan-400 to-blue-500",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        level: 92,
        color: "from-green-500 to-green-700",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
    Frameworks: [
      {
        name: "Next.js",
        level: 90,
        color: "from-gray-700 to-black",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        level: 95,
        color: "from-cyan-400 to-cyan-600",
        logo: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
      },
      {
        name: "Express.js",
        level: 88,
        color: "from-gray-500 to-gray-700",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Vue.js",
        level: 85,
        color: "from-green-400 to-green-600",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
    ],
    "Libraries & Tools": [
      {
        name: "Redux",
        level: 85,
        color: "from-purple-500 to-purple-700",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Framer Motion",
        level: 80,
        color: "from-pink-500 to-purple-600",
        logo: "https://img.icons8.com/?size=100&id=XKFRdQOs24QU&format=png&color=000000",
      },

      {
        name: "Git",
        level: 90,
        color: "from-orange-400 to-orange-600",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        level: 90,
        color: "from-gray-800 to-black",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Postman",
        level: 85,
        color: "from-orange-500 to-orange-700",
        logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
    ],
    "Databases & Cloud": [
      {
        name: "MongoDB",
        level: 90,
        color: "from-green-600 to-green-800",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "AWS",
        level: 82,
        color: "from-orange-400 to-orange-600",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        level: 90,
        color: "from-blue-600 to-blue-800",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Redis",
        level: 80,
        color: "from-red-500 to-red-700",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },

      {
        name: "Docker",
        level: 88,
        color: "from-blue-500 to-blue-700",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
  };

  // --------------------------
  // EXTRA TECHNOLOGIES
  // --------------------------
  const extraTechnologies = [
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Redux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Framer Motion",
      logo: "https://img.icons8.com/?size=100&id=XKFRdQOs24QU&format=png&color=000000",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Material UI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Shadcn/UI",
      logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    },
    {
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "NextAuth.js",
      logo: "https://next-auth.js.org/img/logo/logo-sm.png",
    },
    {
      name: "Prisma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    },
  ];


  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Professional",
    "Meta Frontend Developer",
    "MongoDB Certified Developer",
    "Docker Certified Associate",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-fade-in-up");
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current
      ?.querySelectorAll(".skill-card")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mastering the latest technologies to build exceptional digital
            experiences
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(skills).map(
            ([category, skillList], categoryIndex) => (
              <Card
                key={category}
                className="skill-card glass-card glass-shine hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <div key={skill.name} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center p-1">
                              <Image
                                src={skill.logo || placeholderLogo}
                                alt={skill.name}
                                width={32}
                                height={32}
                                title={skill.name}
                              />
                            </div>
                            <span className="text-white font-medium text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-cyan-400 text-xs">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${
                                categoryIndex * 200 + index * 100
                              }ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>

        {/* Technologies Showcase */}
        <Card className="skill-card glass-card glass-shine mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Technologies I Work With
            </h3>

            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {[...skills["Tech Stack (MERN)"], ...extraTechnologies]
                .filter(
                  (tech, index, self) =>
                    index === self.findIndex((t) => t.name === tech.name)
                )
                .map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="group flex flex-col items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center p-2 mb-2 group-hover:bg-white/20 transition-all duration-300">
                      <Image
                        src={tech.logo || placeholderLogo}
                        alt={tech.name}
                        width={48}
                        height={48}
                        title={tech.name}
                      />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="skill-card glass-card glass-shine">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Certifications
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  variant="secondary"
                  className=" bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border-cyan-400/30 px-4 py-2 text-sm hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 rounded-sm "
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {cert}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
