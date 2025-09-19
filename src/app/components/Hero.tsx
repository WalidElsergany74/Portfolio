"use client";

import { motion } from "framer-motion";
import {  CodeXml, Download, Github, Laptop, Linkedin, Mail} from "lucide-react";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

export function Hero() {
  const handleDownloadCV = () => {
    // Create a link to download CV
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // You'll need to add your CV file to the public folder
    link.download = "Walid_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="md:min-h-screen min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8 lg:mb-10"
            >
              <span className="text-base sm:text-lg text-primary font-medium drop-shadow-sm">Hello, I&apos;m</span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-bold text-white mt-2 mb-2 sm:mb-3 lg:mb-4 drop-shadow-lg text-glow">
                Walid Elsergany
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-gray-300 mb-3 sm:mb-4 lg:mb-5 drop-shadow-md">
                React & Next.js Developer | TypeScript Expert
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-sm">
                Professional Frontend Developer creating beautiful, responsive, and user-friendly web applications using React, Next.js, TypeScript, and modern web technologies. Available for hire.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
            >
            <motion.a
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  href="https://wa.me/201008421723"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 sm:px-8 py-2.5 sm:py-3 
             bg-primary text-white 
             rounded-lg text-sm sm:text-base font-semibold 
             shadow-lg glow-blue transition-all
             hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]
             inline-block text-center"
>
  Hire Me
</motion.a>
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={handleDownloadCV}
  className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 
             border-2 border-primary/50 rounded-lg 
             text-xs sm:text-sm md:text-base font-semibold text-white 
             hover:bg-primary/10 hover:border-primary/70 
             transition-colors flex items-center justify-center gap-2"
>
  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
  Download CV
</motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/WalidElsergany74"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-lg bg-gray-800/50 hover:bg-primary/20 hover:border-primary/50 border border-gray-700/50 transition-colors glow-blue-soft backdrop-blur-sm"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/walid-elsergany-3937431b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 md:p-4 rounded-lg bg-gray-800/50 hover:bg-primary/20 hover:border-primary/50 border border-gray-700/50 transition-colors glow-blue-soft backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:walidemad998@gmail.com"
                className="p-2 sm:p-3 md:p-4 rounded-lg bg-gray-800/50 hover:bg-primary/20 hover:border-primary/50 border border-gray-700/50 transition-colors glow-blue-soft backdrop-blur-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/201008421723"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 md:p-4 rounded-lg bg-gray-800/50 hover:bg-primary/20 hover:border-primary/50 border border-gray-700/50 transition-colors glow-blue-soft backdrop-blur-sm"
                aria-label="WhatsApp"
              >
                <BsWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Image/Animation */}
         <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0"
>
  <div className="relative flex items-center justify-center">
    {/* صورة البروفايل */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative photoBg rounded-full overflow-hidden 
                 w-[380px] h-[380px] sm:w-[420px] sm:h-[420px] md:w-[450px] md:h-[450px] lg:w-[420px] lg:h-[420px] flex items-center justify-center z-10"
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* خلفية متدرجة للصورة */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full z-0"></div>
      
      {/* تأثير إضافي للخلفية */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/15 to-transparent blur-sm z-0"></div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image
          src="/walid1.png"
          alt="Walid Elsergany - Professional Frontend Developer specializing in React, Next.js, and TypeScript"
          width={400}
          height={400}
          className="object-cover rounded-full w-[360px] h-[360px] sm:w-[400px] sm:h-[400px] md:w-[430px] md:h-[430px] lg:w-[400px] lg:h-[400px]"
          style={{ 
            objectPosition: 'center center',
            objectFit: 'cover'
          }}
          priority
          sizes="(max-width: 640px) 340px, (max-width: 768px) 360px, (max-width: 1024px) 380px, 400px"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
    </motion.div>

    {/* الدايرة المتحركة حوالين الصورة */}
    <motion.svg 
      className={"w-[460px] h-[460px] sm:w-[490px] sm:h-[490px] md:w-[520px] md:h-[520px] lg:w-[460px] lg:h-[460px] absolute"}
      fill={"transparent"}
      viewBox={"0 0 506 506"}
      xmlns={"http://www.w3.org/2000/svg"}
      >
        {/* الدايرة الخارجية */}
        <motion.circle 
        className={"md:block hidden"}
          cx={"253"} 
          cy={"253"} 
          r={"222"} 
          stroke="url(#gradient1)"
          strokeWidth={"3"}
          strokeLinejoin={"round"}
          strokeLinecap={"round"}
          initial={{strokeDasharray : "24 10 0 0"}}
          animate={{
            strokeDasharray : ["15 120 25 25" , "16 25 92 72" , "4 220 22 22"],
            rotate : ["120 360"]
          }}
          transition={{
            duration : 20,
            repeat : Infinity,
            repeatType : "reverse"
          }}
        />
        <motion.circle 
        className={"md:hidden block"}
          cx={"253"} 
          cy={"253"} 
          r={"212"} 
          stroke="url(#gradient1)"
          strokeWidth={"3"}
          strokeLinejoin={"round"}
          strokeLinecap={"round"}
          initial={{strokeDasharray : "24 10 0 0"}}
          animate={{
            strokeDasharray : ["15 120 25 25" , "16 25 92 72" , "4 220 22 22"],
            rotate : ["120 360"]
          }}
          transition={{
            duration : 20,
            repeat : Infinity,
            repeatType : "reverse"
          }}
        />
        
        {/* الدايرة الداخلية */}
        <motion.circle 
          cx={"253"} 
          cy={"253"} 
          r={"180"} 
          stroke="url(#gradient2)"
          strokeWidth={"2"}
          strokeLinejoin={"round"}
          strokeLinecap={"round"}
          initial={{strokeDasharray : "0 0 0 0"}}
          animate={{
            strokeDasharray : ["0 0 0 0", "50 50 50 50", "0 0 0 0"],
            rotate : ["0 360"]
          }}
          transition={{
            duration : 15,
            repeat : Infinity,
            ease: "linear"
          }}
        />
        
        {/* تعريف التدرجات */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="25%" stopColor="rgba(59, 130, 246, 0.6)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="75%" stopColor="rgba(59, 130, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
          </linearGradient>
        </defs>
      </motion.svg>

    {/* العناصر الطايرة */}
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-accent rounded-lg flex items-center justify-center z-20 glow-blue-soft"
    >
      <span className="text-lg sm:text-xl md:text-2xl">
        <CodeXml className="text-primary" />
      </span>
    </motion.div>

    <motion.div
      animate={{
        y: [0, 20, 0],
        rotate: [0, -5, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
      className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-secondary rounded-full flex items-center justify-center z-20 glow-blue-soft"
    >
      <span className="text-sm sm:text-base md:text-lg">
        <Laptop className="text-primary" />
      </span>
    </motion.div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}
