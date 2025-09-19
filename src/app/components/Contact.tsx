"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "walidemad998@gmail.com",
    href: "mailto:walidemad998@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+201008421723",
    href: "tel:+201008421723"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Mansoura, Egypt",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/WalidElsergany74",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/walid-elsergany-3937431b7/",
    label: "LinkedIn"
  },
 
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      console.log('🚀 Starting email send...');
      console.log('📊 Form data:', formData);
      console.log('⚙️ EmailJS config:', EMAILJS_CONFIG);

      const templateParams = {
        title: formData.subject,        // title parameter
        name: formData.name,            // name parameter
        email: formData.email,          // email parameter
        message: formData.message,      // message parameter
        time: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      console.log('📋 Template params:', templateParams);
      console.log('🔑 Service ID:', EMAILJS_CONFIG.serviceId);
      console.log('📝 Template ID:', EMAILJS_CONFIG.templateId);
      console.log('🔐 Public Key:', EMAILJS_CONFIG.publicKey);

      console.log('📧 Sending email...');
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );
      
      console.log('✅ Send result:', result);
      
      setSubmitStatus('success');
      setStatusMessage('✅ Message sent successfully to walidemad998@gmail.com! I will contact you soon.');
      console.log('✅ Email sent successfully!');
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } catch (error) {
      console.error('❌ Error sending email:', error);
      setSubmitStatus('error');
      
      // More specific error messages
      if (error instanceof Error) {
        console.error('❌ Error details:', {
          message: error.message,
          stack: error.stack,
          name: error.name
        });
        
        if (error.message.includes('EmailJS not configured')) {
          setStatusMessage('EmailJS not configured yet. Please set up environment variables first.');
        } else if (error.message.includes('Invalid email')) {
          setStatusMessage('Invalid email address. Please check the email you entered.');
        } else if (error.message.includes('Invalid service ID')) {
          setStatusMessage('Invalid Service ID. Please check EmailJS settings.');
        } else if (error.message.includes('Invalid template ID')) {
          setStatusMessage('Invalid Template ID. Please check EmailJS settings.');
        } else if (error.message.includes('Invalid public key')) {
          setStatusMessage('Invalid Public Key. Please check EmailJS settings.');
        } else {
          setStatusMessage(`Send error: ${error.message}`);
        }
      } else {
        console.error('❌ Unknown error:', error);
        setStatusMessage('An unexpected error occurred while sending the message. Please try again.');
      }

      // Hide error message after 8 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Feel free to reach out if you have any questions, want to collaborate, 
              or just want to say hello. I&apos;m always open to discussing new projects, 
              creative ideas, or opportunities to be part of your visions.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg bg-muted hover:bg-accent transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300 ${
                      focusedField === 'name' ? 'neon-border' : 'focus:ring-2 focus:ring-primary focus:border-transparent'
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300 ${
                      focusedField === 'email' ? 'neon-border' : 'focus:ring-2 focus:ring-primary focus:border-transparent'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300 ${
                    focusedField === 'subject' ? 'neon-border' : 'focus:ring-2 focus:ring-primary focus:border-transparent'
                  }`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300 resize-none ${
                    focusedField === 'message' ? 'neon-border' : 'focus:ring-2 focus:ring-primary focus:border-transparent'
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-lg flex items-center space-x-2 ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span>{statusMessage}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`w-full px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 glow-blue-soft ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
