// EmailJS Configuration
// You need to replace these values with your actual EmailJS credentials
// Get these from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_u08fgfd',
  
  // Your EmailJS template ID
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_r7o21no',
  
  // Your EmailJS public key
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '6vCK7HlpBQfiEIZ_E',
  
  // Your email address where you want to receive messages
  toEmail: 'walidemad998@gmail.com'
};

// Template parameters that will be sent to EmailJS
// These match the "Contact Us" template parameters
export interface EmailTemplateParams extends Record<string, unknown> {
  title: string;      // Subject of the message
  name: string;       // Sender's name
  email: string;      // Sender's email
  message: string;    // Message content
  time: string;       // Timestamp when message was sent
}
