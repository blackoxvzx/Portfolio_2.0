// Site configuration
// Replace placeholder values with your own content

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Shimwa Landry | Software Developer",
  description: "Full-stack software developer based in Rwanda specializing in frontend and backend development. Creating modern, scalable web applications.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Shimwa Landry",
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  contactLabel: "Contact Me",
  contactHref: "#contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Shimwa Landry",
  roles: ["Frontend Developer", "Backend Developer", "Full Stack Engineer", "Based in Rwanda"],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "I'm Shimwa Landry, a passionate software developer based in Rwanda. I specialize in creating modern, responsive, and scalable web applications. With expertise in both frontend and backend technologies, I deliver complete solutions that help businesses grow and succeed in the digital world. I am committed to writing clean, maintainable code and staying up-to-date with the latest industry trends.",
  experienceValue: "2+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "15+", label: "finished Projects" },
    { value: "10+", label: "Satisfied Clients" },
    { value: "100%", label: "Client Satisfaction" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "Coding workspace" },
    { src: "/images/about-2.jpg", alt: "Development process" },
    { src: "/images/about-3.jpg", alt: "Team collaboration" },
    { src: "/images/about-4.jpg", alt: "Modern technology" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Services",
  heading: "What I Can Do For You",
  services: [
    {
      iconName: "Layout",
      title: "Frontend Development",
      description: "Creating beautiful, responsive, and interactive user interfaces using modern frameworks like React, Vue, and Next.js. I focus on performance, accessibility, and user experience.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Server",
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js, Python, and databases. I ensure secure, scalable, and efficient backend solutions.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "Code",
      title: "Full Stack Solutions",
      description: "End-to-end web application development from concept to deployment. I handle both frontend and backend to deliver complete, cohesive products.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Smartphone",
      title: "Responsive Design",
      description: "Ensuring your website looks and works perfectly on all devices - from desktops to tablets and mobile phones. Mobile-first approach for optimal performance.",
      image: "/images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Portfolio",
  heading: "Featured Projects",
  description: "A selection of my recent work showcasing my skills in frontend and backend development. Each project represents a unique challenge and creative solution.",
  projects: [
    {
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      year: "2024",
      image: "/images/portfolio-1.jpg",
      featured: true,
    },
    {
      title: "Dashboard Analytics",
      category: "Frontend Development",
      year: "2024",
      image: "/images/portfolio-2.jpg",
    },
    {
      title: "Mobile Banking App",
      category: "Backend Development",
      year: "2023",
      image: "/images/portfolio-3.jpg",
    },
    {
      title: "Portfolio Website",
      category: "Frontend Development",
      year: "2023",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "API Integration System",
      category: "Backend Development",
      year: "2024",
      image: "/images/portfolio-5.jpg",
    },
  ],
  cta: {
    label: "Have a project in mind?",
    heading: "Let's Work Together",
    linkText: "Get in Touch",
    linkHref: "#contact",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonials",
  heading: "What Clients Say",
  testimonials: [
    {
      quote: "Landry delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and professional.",
      author: "Jean Pierre",
      role: "CEO",
      company: "TechStart Rwanda",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote: "Working with Landry was a game-changer for our business. He understood our vision perfectly and transformed it into a beautiful, functional web application.",
      author: "Marie Claire",
      role: "Marketing Director",
      company: "GrowthHub",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "Highly skilled developer with great communication skills. Landry delivered the project on time and the quality of work was outstanding. Highly recommended!",
      author: "David Mutabazi",
      role: "Founder",
      company: "Digital Solutions",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Frontend Developer", "Backend Developer", "Full Stack Engineer"],
  heading: "Ready to Build Something Amazing?",
  description: "I'm always excited to work on new projects and help businesses achieve their digital goals. Let's discuss how I can help bring your ideas to life.",
  buttonText: "Get In Touch",
  buttonHref: "mailto:landryishimwe29@gmail.com",
  email: "landryishimwe29@gmail.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Shimwa Landry",
  description: "Software developer based in Rwanda, specializing in frontend and backend development. Creating modern, scalable web applications for businesses worldwide.",
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Frontend Development", href: "#services" },
        { label: "Backend Development", href: "#services" },
        { label: "Full Stack Solutions", href: "#services" },
        { label: "Responsive Design", href: "#services" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "landryishimwe29@gmail.com", href: "mailto:landryishimwe29@gmail.com" },
        { label: "+250 793 762 521", href: "tel:+250793762521" },
        { label: "Kigali, Rwanda", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Github", href: "https://github.com", label: "GitHub" },
    { iconName: "Linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { iconName: "Twitter", href: "https://twitter.com", label: "Twitter" },
    { iconName: "Instagram", href: "https://instagram.com", label: "Instagram" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to my newsletter for the latest updates on my projects and tech insights.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2024 Shimwa Landry. All rights reserved.",
  credit: "Designed & Developed with passion in Rwanda",
};
