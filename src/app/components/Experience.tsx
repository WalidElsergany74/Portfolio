"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Functo Software House",
    location: "Remote",
    type: "Internship",
    duration: "01/2025 - 03/2025",
    description: "Built responsive React.js apps from Figma designs with cross-device compatibility. Developed dashboards & e-commerce platforms with SEO and performance best practices.",
    responsibilities: [
      "Built responsive React.js applications from Figma designs",
      "Developed dashboards and e-commerce platforms",
      "Implemented SEO and performance best practices",
      "Collaborated in Agile team environment with sprints and code reviews"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Figma", "Git"],
    icon: Briefcase,
    color: "text-blue-500"
  },
  {
    id: 2,
    title: "Front-End Developer",
    company: "Freelancing | Mostaql",
    location: "Remote",
    type: "Freelance",
    duration: "10/2024 - Present",
    description: "Built reusable UI components with React.js, Next.js, and Tailwind CSS. Integrated RESTful APIs for real-time data updates and delivered tailored client solutions.",
    responsibilities: [
      "Built reusable UI components with React.js, Next.js, and Tailwind CSS",
      "Integrated RESTful APIs for real-time data updates",
      "Delivered tailored client solutions on time and within scope",
      "Maintained high code quality and performance standards"
    ],
    technologies: ["React.js", "Next.js", "TailwindCSS", "TypeScript", "REST APIs", "JavaScript"],
    icon: Briefcase,
    color: "text-green-500"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in web development and continuous learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-background border-4 border-primary rounded-full flex items-center justify-center z-10">
                  <experience.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${experience.color}`} />
                </div>

                {/* Content card */}
                <div className={`ml-12 sm:ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card rounded-lg border border-primary/20 p-6 hover:shadow-lg transition-all duration-300 card-glow"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {experience.company}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.duration}
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        experience.type === 'Internship' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : experience.type === 'Freelance'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}>
                        {experience.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
