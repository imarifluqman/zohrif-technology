"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  BrainCircuit,
  Code2,
  Smartphone,
  Layers,
  Zap,
  Lightbulb,
  Shield,
  Eye,
  TrendingUp,
  Handshake,
  Cpu,
  Users,
  GitBranch,
  MessageSquare,
  HeartHandshake,
  Star,
  Quote,
  Check,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  // Technology Tabs State
  const [activeTechTab, setActiveTechTab] = useState("all");

  const techCategories = [
    { id: "all", label: "All Tech" },
    { id: "ai", label: "AI & Data" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "databases", label: "Databases" },
    { id: "cloud", label: "Cloud & DevOps" },
  ];

  const technologies = [
    // AI
    { name: "OpenAI", category: "ai", icon: "🤖" },
    { name: "Claude", category: "ai", icon: "🧠" },
    { name: "Gemini", category: "ai", icon: "✨" },
    { name: "LangGraph", category: "ai", icon: "🕸️" },
    { name: "OpenAI Agents SDK", category: "ai", icon: "⚡" },
    { name: "MCP", category: "ai", icon: "🔌" },
    { name: "Vector Databases", category: "ai", icon: "📐" },
    // Frontend
    { name: "React", category: "frontend", icon: "⚛️" },
    { name: "Next.js", category: "frontend", icon: "▲" },
    { name: "TypeScript", category: "frontend", icon: "TS" },
    { name: "Tailwind CSS", category: "frontend", icon: "🎨" },
    // Backend
    { name: "Node.js", category: "backend", icon: "🟢" },
    { name: "Express.js", category: "backend", icon: "🚂" },
    { name: "Python", category: "backend", icon: "🐍" },
    { name: "FastAPI", category: "backend", icon: "⚡" },
    // Databases
    { name: "MongoDB", category: "databases", icon: "🍃" },
    { name: "PostgreSQL", category: "databases", icon: "🐘" },
    { name: "MySQL", category: "databases", icon: "🐬" },
    // Cloud
    { name: "Docker", category: "cloud", icon: "🐳" },
    { name: "AWS", category: "cloud", icon: "☁️" },
    { name: "DigitalOcean", category: "cloud", icon: "🌊" },
    { name: "Vercel", category: "cloud", icon: "▲" },
  ];

  const filteredTechnologies =
    activeTechTab === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeTechTab);

  // Testimonials State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Zohrif Technology transformed our idea into a fully functional SaaS platform. Their execution, velocity, and technical architecture were outstanding.",
      author: "Sarah Jenkins",
      role: "CTO",
      company: "OptimaHealth",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
    },
    {
      quote: "Their AI automation solutions and voice AI agents significantly improved our business operations, cutting down customer support latency by 70%.",
      author: "Alex Rivers",
      role: "Founder",
      company: "DevFlow SaaS",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120",
    },
    {
      quote: "Professional team, excellent communication, and outstanding results. They operate as a true long-term technical partner rather than just an agency.",
      author: "Marcus Chen",
      role: "Director of Operations",
      company: "LogixGlobal",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
    },
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="relative overflow-hidden pt-24">
      {/* Dev Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, subheadline, CTAs */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Trusted Technology Partner for Startups & Growing Businesses
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
              >
                Building <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent glow-text">AI-Powered</span> Software That Helps Businesses Scale
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
              >
                Zohrif Technology develops custom web applications, mobile apps, AI agents, automation solutions, and modern SaaS products that help businesses grow faster and operate smarter.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-[#070a13] bg-[#10b981] hover:bg-[#059669] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
                >
                  Explore Services
                </a>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6 border-t border-white/5"
              >
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Core Specializations
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "AI Solutions",
                    "Custom Software",
                    "Mobile Applications",
                    "SaaS Platforms",
                    "Business Automation",
                  ].map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Visual Tech Display */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Glowing Background Glows */}
              <div className="absolute w-72 h-72 rounded-full bg-emerald-500/10 filter blur-3xl" />
              
              {/* Interactive Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl p-6 shadow-2xl relative z-10"
              >
                {/* Window buttons */}
                <div className="flex items-center gap-1.5 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="ml-auto text-[10px] text-slate-500 font-mono">zohrif-ai-agent.sh</div>
                </div>

                {/* Simulated AI Workflow */}
                <div className="space-y-4 font-mono text-xs text-left">
                  <div className="flex gap-2">
                    <span className="text-emerald-500">$</span>
                    <span className="text-slate-300">zohrif-agent --init</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-2 text-slate-400">
                    <p className="text-emerald-400">⚡ Initializing multi-agent network...</p>
                    <p>✓ Orchestrator connected</p>
                    <p>✓ Vector DB initialized (10.2k nodes)</p>
                    <p>✓ LangGraph pipelines ready</p>
                  </div>
                  
                  {/* Visual graph snippet */}
                  <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                        <BrainCircuit className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">Gemini 1.5 Pro</p>
                        <p className="text-[9px] text-slate-500">Autonomous workflow routing</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">
                      99.4% Acc
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2">
                    <span>Performance metrics</span>
                    <span className="text-emerald-400 font-bold">Latency: 140ms</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating element 1 */}
              <div className="absolute top-10 right-4 w-24 h-24 bg-emerald-500/5 border border-emerald-500/10 rounded-full flex items-center justify-center animate-float pointer-events-none">
                <Code2 className="w-6 h-6 text-emerald-500/50" />
              </div>
              {/* Floating element 2 */}
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-blue-500/5 border border-blue-500/10 rounded-xl flex items-center justify-center animate-float-delayed pointer-events-none">
                <Zap className="w-5 h-5 text-blue-500/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-20 lg:py-32 relative border-t border-white/5 bg-[#080b14]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: About Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Transforming Ideas Into Powerful Digital Products
              </h2>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  At Zohrif Technology, we help businesses turn innovative ideas into scalable digital products. We specialize in AI-powered solutions, web and mobile development, SaaS applications, and intelligent automation systems.
                </p>
                <p>
                  Our mission is to empower businesses with modern technology that drives growth, improves efficiency, and creates exceptional user experiences.
                </p>
                <p>
                  Whether you're launching a startup, building an enterprise platform, or integrating AI into your operations, our team delivers reliable, secure, and future-ready solutions.
                </p>
              </div>
            </div>

            {/* Right: Core Values Cards */}
            <div className="lg:col-span-5">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6 text-left">
                Our Core Values
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Innovation",
                    desc: "Leveraging cutting-edge research to solve business challenges.",
                    icon: Lightbulb,
                    color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
                  },
                  {
                    title: "Quality",
                    desc: "Writing clean, maintainable code backed by rigorous testing pipelines.",
                    icon: Shield,
                    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
                  },
                  {
                    title: "Transparency",
                    desc: "Maintaining clear, ongoing communication with full project visibility.",
                    icon: Eye,
                    color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
                  },
                  {
                    title: "Scalability",
                    desc: "Architecting systems designed to handle growing traffic and workloads.",
                    icon: TrendingUp,
                    color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
                  },
                  {
                    title: "Long-Term Partnership",
                    desc: "Supporting your growth beyond deployment through ongoing maintenance.",
                    icon: Handshake,
                    color: "text-pink-400 bg-pink-400/10 border-pink-400/20",
                  },
                ].map((value, idx) => (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-4 p-4 rounded-xl border border-white/5 bg-[#0b0f19] hover:border-emerald-500/20 hover:bg-[#0b0f19]/90 transition-all duration-300 text-left"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border shrink-0 ${value.color}`}>
                      <value.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">{value.title}</h4>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              What We Do Best
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We leverage top engineering talent and artificial intelligence to design, build, and scale custom technology products.
            </p>
          </div>

          {/* Grid Layout for 5 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "AI & Agentic AI Solutions",
                desc: "Build intelligent systems that automate workflows, improve productivity, and enhance customer experiences.",
                icon: BrainCircuit,
                features: [
                  "AI Chatbots",
                  "Voice AI Agents",
                  "Multi-Agent Systems",
                  "RAG Applications",
                  "AI Workflow Automation",
                  "Custom AI Solutions",
                ],
              },
              {
                id: 2,
                title: "Web Application Development",
                desc: "Scalable and high-performance web applications tailored to your business needs.",
                icon: Code2,
                features: [
                  "Next.js Development",
                  "React Applications",
                  "Node.js Backend",
                  "Custom Dashboards",
                  "REST APIs",
                  "Full-Stack Solutions",
                ],
              },
              {
                id: 3,
                title: "Mobile App Development",
                desc: "Cross-platform mobile applications that deliver exceptional user experiences.",
                icon: Smartphone,
                features: [
                  "React Native Apps",
                  "Android Development",
                  "iOS Development",
                  "Real-Time Applications",
                  "API Integration",
                  "App Maintenance",
                ],
              },
              {
                id: 4,
                title: "SaaS Development",
                desc: "Build scalable SaaS products from MVP to enterprise-grade solutions.",
                icon: Layers,
                features: [
                  "Subscription Systems",
                  "User Management",
                  "Analytics Dashboards",
                  "Payment Integration",
                  "Admin Panels",
                  "Cloud Deployment",
                ],
              },
              {
                id: 5,
                title: "Business Automation",
                desc: "Automate repetitive tasks and streamline operations using modern technologies.",
                icon: Zap,
                features: [
                  "Workflow Automation",
                  "CRM Integration",
                  "API Integration",
                  "Internal Tools",
                  "Reporting Systems",
                  "Process Optimization",
                ],
              },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between text-left h-full group ${
                  idx === 3 || idx === 4 ? "md:col-span-1 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-6">
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/55 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  
                  {/* Features List */}
                  <ul className="space-y-2 pt-4 border-t border-white/5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Arrow at bottom */}
                <div className="pt-6 mt-6 flex items-center text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors gap-1 group-hover:gap-2 duration-300 cursor-pointer">
                  <span>Inquire service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 lg:py-32 relative border-t border-white/5 bg-[#080b14]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">Why Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Businesses Choose Zohrif Technology
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We focus on clean code, modern stacks, and intelligent features that bring tangible return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI-First Approach",
                desc: "We leverage cutting-edge AI technologies to create smarter, autonomous business solutions that save time.",
                icon: Cpu,
              },
              {
                title: "Expert Team",
                desc: "Experienced developers and cloud architects focused on delivering modular, scalable software products.",
                icon: Users,
              },
              {
                title: "Scalable Architecture",
                desc: "Solutions designed for massive scaling, optimized performance, and zero downtime configurations.",
                icon: GitBranch,
              },
              {
                title: "Transparent Process",
                desc: "Clear communication, regular sprint updates, and complete project pipeline visibility.",
                icon: MessageSquare,
              },
              {
                title: "Fast Delivery",
                desc: "Efficient Agile processes that deliver features iteratively without compromising security or quality.",
                icon: Zap,
              },
              {
                title: "Ongoing Support",
                desc: "Continuous technical maintenance, security patches, upgrades, and prompt dedicated support.",
                icon: HeartHandshake,
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-2xl border border-white/5 bg-[#0b0f19] hover:border-emerald-500/20 transition-all duration-300 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4 text-emerald-400">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg mb-2">{card.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEVELOPMENT PROCESS */}
      <section id="process" className="py-20 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">Our Pipeline</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Development Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We translate complexity into execution using a transparent 6-step lifecycle.
            </p>
          </div>

          {/* Timeline Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
            {[
              {
                step: "01",
                name: "Discovery",
                desc: "Understanding goals, target market, constraints, and business requirements.",
              },
              {
                step: "02",
                name: "Strategy",
                desc: "Creating a technical roadmap, defining the tech stack, and detailing architecture.",
              },
              {
                step: "03",
                name: "Design",
                desc: "Building user-friendly, responsive interfaces and detailed interactive wireframes.",
              },
              {
                step: "04",
                name: "Development",
                desc: "Developing secure, modular, and maintainable software based on Scrum sprints.",
              },
              {
                step: "05",
                name: "Testing",
                desc: "Ensuring top performance, manual and automated unit testing, and code audits.",
              },
              {
                step: "06",
                name: "Launch & Support",
                desc: "Cloud deployment, CI/CD pipeline hookups, monitoring, and ongoing patches.",
              },
            ].map((proc, idx) => (
              <motion.div
                key={proc.step}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-left p-6 rounded-2xl bg-[#0b0f19] border border-white/5 hover:border-emerald-500/20 group"
              >
                {/* Glow bar at top of card */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/10 to-emerald-500/0 group-hover:from-emerald-500/80 transition-all duration-500" />
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-emerald-500/20 group-hover:text-emerald-500/80 transition-colors duration-300">
                    {proc.step}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 group-hover:bg-emerald-500 group-hover:scale-125 transition-all duration-300" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{proc.name}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{proc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGIES SECTION */}
      <section id="technologies" className="py-20 lg:py-32 relative border-t border-white/5 bg-[#080b14]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Tech Stack</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Technologies We Use
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We work with the industry's most robust and modern programming languages, libraries, and cloud services.
            </p>
          </div>

          {/* Tech category selector tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTechTab(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                  activeTechTab === cat.id
                    ? "bg-emerald-500 border-emerald-500 text-[#070a13] hover:bg-emerald-400"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid display */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredTechnologies.map((tech) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={tech.name}
                  className="p-4 rounded-xl border border-white/5 bg-[#0b0f19] flex flex-col items-center justify-center gap-3 hover:border-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all duration-300 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE */}
      <section className="py-20 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Target Markets</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Industries We Serve
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our team builds custom systems optimized for specific industry regulations, user cohorts, and performance requirements.
              </p>
            </div>

            {/* Right Column: Tags */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-3">
                {[
                  "Startups",
                  "SaaS",
                  "E-Commerce",
                  "Education",
                  "Healthcare",
                  "Real Estate",
                  "Finance",
                  "Logistics",
                  "Professional Services",
                ].map((ind) => (
                  <div
                    key={ind}
                    className="px-5 py-3 rounded-full border border-white/5 bg-[#0b0f19] hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 text-sm font-semibold text-slate-300"
                  >
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-20 lg:py-32 relative border-t border-white/5 bg-[#080b14]/50 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/5 filter blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Success Stories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              What Clients Say
            </h2>
          </div>

          {/* Testimonial Box */}
          <div className="relative glass-panel p-8 sm:p-12 rounded-3xl border border-white/5">
            {/* Quote marks */}
            <Quote className="absolute top-8 left-8 w-16 h-16 text-emerald-500/5" />

            <div className="space-y-8 text-center sm:text-left">
              {/* Stars */}
              <div className="flex justify-center sm:justify-start gap-1">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-2xl text-slate-200 font-medium leading-relaxed italic">
                "{testimonials[activeTestimonial].quote}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].author}
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                  />
                  <div className="text-left">
                    <p className="text-sm font-bold text-white">
                      {testimonials[activeTestimonial].author}
                    </p>
                    <p className="text-xs text-slate-400">
                      {testimonials[activeTestimonial].role} at{" "}
                      <span className="text-emerald-400 font-semibold">
                        {testimonials[activeTestimonial].company}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevTestimonial}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500 transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextTestimonial}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500 transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION */}
      <section className="py-16 sm:py-24 relative border-t border-white/5 overflow-hidden">
        {/* Glow */}
        <div className="absolute right-[-10%] top-[20%] w-[350px] h-[350px] rounded-full bg-emerald-500/10 filter blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0c1221] to-[#05070d] border border-white/10 text-center space-y-8 shadow-2xl relative">
            {/* Outline highlight effect */}
            <div className="absolute inset-0 border border-emerald-500/10 rounded-3xl pointer-events-none" />

            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you're launching a startup, automating operations, or building an AI-powered platform, Zohrif Technology is ready to help.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-[#070a13] bg-[#10b981] hover:bg-[#059669] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 cursor-pointer"
              >
                Schedule a Free Consultation
                <Calendar className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" className="py-20 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Info details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Connect</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Let's Discuss Your Project
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Have an idea or a specific technical problem? Fill out the inquiry form to book a strategy call with our engineers.
                </p>
              </div>

              {/* Info contacts */}
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Direct Email</h3>
                    <p className="text-slate-400 text-sm mt-1">
                      <a href="mailto:hello@zohrif.com" className="hover:text-emerald-400 transition-colors">
                        hello@zohrif.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Our Location</h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Pakistan (Serving clients worldwide)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
