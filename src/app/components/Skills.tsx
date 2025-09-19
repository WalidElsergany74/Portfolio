"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiFigma,
  SiNpm,
  SiWebpack,
  SiStrapi,
  SiRedux,
  SiPostman,
} from "react-icons/si";

import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Terminal,
  GitBranch,
  Layers,
  Zap,
  Monitor,
  FileText,
  Settings,
  Cpu,
  Wrench,
  Database,
  Server,
  Key
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "React", icon: SiReact, color: "text-sky-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-600" },
      { name: "Zustand", icon: Layers, color: "text-amber-600" }, 
      { name: "Responsive Design", icon: Smartphone, color: "text-green-500" },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Prisma", icon: SiPrisma, color: "text-indigo-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "REST APIs", icon: Globe, color: "text-purple-500" },
      { name: "Axios", icon: Globe, color: "text-sky-600" }, // بديل لحد ما تجيب SVG
      { name: "Strapi", icon: SiStrapi, color: "text-indigo-600" },
    ],
  },
  {
    title: "Tools & Others",
    icon: Settings,
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "Framer Motion", icon: Zap, color: "text-pink-500" },
      { name: "Figma", icon: SiFigma, color: "text-pink-500" },
      { name: "VS Code", icon: Terminal, color: "text-blue-500" },
      { name: "Webpack", icon: SiWebpack, color: "text-blue-400" },
      { name: "NPM", icon: SiNpm, color: "text-red-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
     
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Skills & Technologies
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-lg border border-primary/20 p-4 sm:p-6 hover:shadow-lg transition-all duration-300 card-glow"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center p-3 sm:p-4 bg-muted/50 rounded-lg hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-colors glow-blue-soft"
                  >
                    <skill.icon className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-2 ${skill.color}`} />
                    <span className="text-xs sm:text-sm font-medium text-foreground text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
