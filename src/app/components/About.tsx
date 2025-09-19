"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "text-sky-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
];

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            About Me - Frontend Developer
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
              Expert React & Next.js Developer
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              I&apos;m a dedicated React and Next.js developer with a passion for creating beautiful, 
              functional, and user-friendly web applications. With expertise in modern 
              JavaScript frameworks, TypeScript, and a keen eye for design, I transform ideas into 
              digital experiences that users love. Specializing in React development, Next.js applications, and TypeScript.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest web technologies. When I&apos;m not coding, you can find me exploring 
              new design trends, contributing to open-source projects, or learning new 
              technologies to enhance my React and Next.js development skills.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 sm:p-4 bg-card rounded-lg border border-primary/20 card-glow"
              >
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1 text-glow">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Skills icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-4 sm:p-6 bg-card rounded-lg border border-primary/20 hover:shadow-lg transition-all duration-300 card-glow"
              >
                <skill.icon className={`w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 ${skill.color}`} />
                <span className="text-xs sm:text-sm font-medium text-foreground text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
