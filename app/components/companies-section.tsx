"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CompaniesSection() {
  const companies = [
    {
      name: "Social Swirl",
      logo: "/logos/ss.jpg",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      name: "Trendtial",
      logo: "/logos/tr.jpg",
      gradient: "from-indigo-500 to-cyan-500",
    },
    {
      name: "Zenyx Solutions",
      logo: "/logos/zy.jfif",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Ehunar",
      logo: "/logos/eh.png",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const useCountUp = (end: number, duration: number, trigger: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!trigger) return;
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration, trigger]);

    return count;
  };

  const projects = useCountUp(50, 1500, startCount);
  const companiesCount = useCountUp(8, 1500, startCount);
  const years = useCountUp(5, 1500, startCount);
  const satisfaction = useCountUp(100, 1500, startCount);

  return (
    <section ref={sectionRef} id="companies" className="py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Companies I've Worked With
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by amazing companies to deliver exceptional digital
            solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card glass-shine hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                  <div
                    className={`w-20 h-28 rounded-lg bg-gradient-to-r ${company.gradient} p-1 mb-3 flex items-center justify-center`}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-20 max-w-full object-contain rounded-sm"
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center font-medium">
                    {company.name}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: projects, label: "Projects Completed" },
            { value: companiesCount, label: "Companies Worked" },
            { value: years, label: "Years Experience" },
            { value: satisfaction, label: "Client Satisfaction", suffix: "%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
                {stat.suffix || "+"}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
