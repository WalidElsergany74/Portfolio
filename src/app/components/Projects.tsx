"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Patient Care",
    description: "Built a full-stack healthcare system with secure authentication, role-based dashboards, and real-time booking. Features appointment scheduling with conflict prevention, doctor specialization filters, editable profiles with Cloudinary, and multilingual support.",
    image: "/patient.jpg",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui", "Cloudinary", "PostgreSQL" , "i18" , "Prisma" , "Server Action" , "Next Auth"],
    demoUrl: "https://patient-care-zeta.vercel.app/ar",
    githubUrl: "https://github.com/WalidElsergany74/Patient-care",
    date: "03/2025 - 04/2025",
    featured: true,
    credentials: {
      doctor: "dr1@gmail.com | 123456789",
      admin: "walidemad998@gmail.com | 123456789"
    }
  },
  {
    id: 2,
    title: "Wassally – Delivery Management",
    description: "Developed a full logistics solution for internal delivery companies. Implemented 3 user roles: Call Center, Delivery Agent, and Admin with real-time updates, role-based dashboards, and scalable architecture.",
    image: "/wassally.jpg",
    techStack: ["Next.js", "Strapi", "TailwindCSS", "Zustand", "React Query", "WebSocket", "Shadcn/ui" , "Server Action" , "REST API"],
    demoUrl: "https://wassally-next-js-rqjh.vercel.app/login",
    githubUrl: "https://github.com/WalidElsergany74/Wassally-Next.js",
    date: "08/2025 - 09/2025",
    featured: true,
    credentials: {
      callCenter: "call@gmail.com | 123456789",
      courier: "courier@gmail.com | 123456789",
      admin: "admin@gmail.com | 123456789"
    }
  },
  {
    id: 3,
    title: "ShopCo – E-Commerce Clothing",
    description: "Built a full-stack e-commerce platform with Next.js & Strapi, featuring Clerk authentication and Stripe payments. Implemented shopping cart, product variations, order tracking, and admin dashboard.",
    image: "/shopco.jpg",
    techStack: ["Next.js", "Strapi", "Clerk", "Stripe", "TailwindCSS", "TypeScript", "REST API","Server Action"],
    demoUrl: "https://github.com/WalidElsergany74/Shopco-next",
    githubUrl: "https://shopco-next-eight.vercel.app/",
    date: "10/2024 - 11/2024",
    featured: true
  },
  {
    id: 4,
    title: "Utopia – Social Media",
    description: "Developed a high-performance social app with Next.js, Prisma, and PostgreSQL, featuring secure authentication (NextAuth) and modern UI. Core features: profiles, likes, comments, follows, and real-time notifications.",
    image: "/utopia.jpg",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "TailwindCSS", "TypeScript" ,"Next Auth"],
    demoUrl: "https://utopia-demo.com",
    githubUrl: "https://github.com/walid/utopia",
    date: "12/2024 - 1/2025",
    featured: true
  },
  {
    id: 5,
    title: "Fast Pizza – Food Delivery",
    description: "Built a pizza delivery app with React and TailwindCSS. Features include adding products to cart, price calculation, delivery information form with name and address, geolocation integration for location selection, and simple order management.",
    image: "/pizza.png",
    techStack: ["React", "TailwindCSS", "Redux Toolkit", "Geolocation API",],
    demoUrl: "https://fast-pizza-gamma-two.vercel.app/",
    githubUrl: "https://github.com/WalidElsergany74/fast-pizza-react",
    date: "2023",
    featured: true
  },
  {
    id: 6,
    title: "E-Shop – E-Commerce Store",
    description: "Built a complete e-commerce platform with React and TailwindCSS. Features include adding products to cart, order calculation, Stripe payment integration, shipping information form, order tracking with status updates, product reviews and ratings, and comprehensive admin dashboard for site management.",
    image: "/eshop.png",
    techStack: ["React", "TailwindCSS", "Stripe", "Redux Toolkit", "Admin Dashboard"],
    demoUrl: "https://eshop-9e618.web.app/home",
    githubUrl: "https://github.com/WalidElsergany74/eShop-commerce-react-firebase",
    date: "2024",
    featured: true
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-lg border border-primary/20 overflow-hidden hover:shadow-lg transition-all duration-300 group card-glow"
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Image fill src={project.image} alt="projectimage.."/>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex-1 pr-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Demo Credentials */}
                {project.credentials && (
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs font-semibold text-foreground mb-2">
                      Demo Credentials:
                    </h4>
                    <div className="space-y-1">
                      {Object.entries(project.credentials).map(([role, credential]) => (
                        <div key={role} className="text-xs text-muted-foreground">
                          <span className="font-medium capitalize">{role}:</span> {credential}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2 sm:space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors glow-blue-soft"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-3 sm:px-4 py-2 border border-primary/30 rounded-lg text-xs sm:text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-colors glow-blue-soft"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

     
      </div>
    </section>
  );
}
