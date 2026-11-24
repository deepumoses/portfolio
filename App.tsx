/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import NumberFlow, { NumberFlowGroup } from '@number-flow/react';
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Mail,
  Send,
  ArrowRight,
  Copy,
  Check,
  ArrowUpRight,
  Phone,
  Code2,
  Github,
  BookOpen,
} from 'lucide-react';
import ProjectCard from './components/ArtistCard';
import { Project } from './types';

import agenticAiImg from './src/assets/images/project_agentic_ai_1794820956429.jpg';
import ecommerceScaleImg from './src/assets/images/project_ecommerce_scale_1794820955910.jpg';
import techWritingImg from './src/assets/images/project_tech_writing_1794820956951.jpg';
import telecomSystemsImg from './src/assets/images/project_telecom_systems_1794820957590.jpg';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Amazon Concessions Platform',
    category: 'Enterprise & Cloud',
    filterKey: 'enterprise',
    year: 'Nov 2022 – Present',
    image: ecommerceScaleImg,
    summary:
      'Frontend applications and Tier-1/2 AWS microservices across 36+ countries and 22 business lines, impacting 100M+ customers.',
    description:
      "Engineered global-scale frontend applications and high-availability Tier-1/2 backend services for Amazon's Concessions business. Led 20+ feature launches, legacy and strict TypeScript migrations, latency optimizations, and end-to-end telemetry for DAG-based backend workflows.",
    stack: ['ReactJS', 'TypeScript', 'Java', 'AWS Lambda', 'DynamoDB', 'Amazon S3'],
    outcomes: [
      'Impacted 100M+ customers across 36+ countries and 22 business lines',
      'Led 20+ feature launches, legacy migrations, typestrict migrations, and latency gains',
      'Designed Tier-1/2 services with Java, AWS Lambda, DynamoDB, S3, and end-to-end DAG telemetry',
    ],
  },
  {
    id: '2',
    title: 'Agentic Developer Workflows',
    category: 'AI & Automation',
    filterKey: 'ai',
    year: '2024 – Present',
    image: agenticAiImg,
    summary:
      'Spearheading AI-assisted engineering adoption, custom agents, and spec-driven workflows to accelerate delivery and on-call.',
    description:
      'Championed AI-assisted engineering across teams by introducing Claude Code, custom agents, and spec-driven workflow automation—accelerating feature delivery, legacy TypeScript migrations, and operational on-call triage.',
    stack: ['Claude Code', 'Spec-Driven Dev', 'Workflow Automation', 'Kiro', 'Cline'],
    outcomes: [
      'Spearheaded custom agent workflows and AI adoption across engineering teams',
      'Improved on-call diagnostics and reduced repetitive operational toil via automation',
      'Paired GitHub Copilot, Kiro, and Cline with structured spec-driven development practices',
    ],
  },
  {
    id: '3',
    title: 'Verizon Device Onboarding Apps',
    category: 'E-Commerce & Accessibility',
    filterKey: 'ecommerce',
    year: 'Mar 2020 – Oct 2022',
    image: telecomSystemsImg,
    summary:
      'Three end-to-end e-commerce applications for device onboarding, migrating 15+ pages to lift conversion rates by 20%.',
    description:
      'Developed three complete e-commerce applications at Verizon enabling seamless customer device onboarding. Enforced strict web accessibility standards, migrated legacy architecture across 15+ pages, translated 100+ UI/UX designs, and mentored five junior engineers.',
    stack: ['ReactJS', 'Redux', 'Web Performance', 'Accessibility', 'Figma'],
    outcomes: [
      'Migrated legacy architecture across 15+ web pages, driving a 20% increase in conversion rates',
      'Translated 100+ UI/UX designs into pixel-perfect, accessible production interfaces',
      'Mentored 5 junior engineers while enforcing web performance and accessibility standards',
    ],
  },
  {
    id: '4',
    title: 'RBI Mortgage Self-Service Portal',
    category: 'Mortgage Banking Solutions',
    filterKey: 'ecommerce',
    year: 'Jul 2016 – Mar 2020',
    image: techWritingImg,
    summary:
      'Mortgage Self-Service web application built at Infosys for RBI mortgage services inside an Agile delivery team.',
    description:
      'Built a production Mortgage Self-Service web application for RBI mortgage services at Infosys. Delivered reliable, cross-browser customer interfaces using semantic HTML5, CSS3, JavaScript, and jQuery within an Agile engineering workflow.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Agile Development'],
    outcomes: [
      'Built an end-to-end Mortgage Self-Service web portal for RBI mortgage workflows',
      'Delivered production-ready UI modules within iterative Agile sprint cycles',
      'Established clean front-end engineering fundamentals across enterprise banking systems',
    ],
  },
];

interface ExperienceHighlight {
  label?: string;
  text: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: ExperienceHighlight[];
}

const EXPERIENCE: Experience[] = [
  {
    company: 'Amazon',
    role: 'Frontend Engineer II',
    period: 'November 2022 – Present',
    location: 'Hyderabad, India',
    highlights: [
      {
        label: 'Global Scale & Impact',
        text: "Engineered frontend apps & microservices for Amazon's Concessions business across 36+ countries and 22 business lines, impacting 100M+ customers.",
      },
      {
        label: 'Technical Leadership',
        text: 'Led 20+ feature launches, legacy system migrations, typestrict migrations, and latency improvements.',
      },
      {
        label: 'Backend Engineering',
        text: 'Designed high-availability Tier-1/2 services using Java, AWS Lambda, DynamoDB, and S3 for high-volume customer service transactions and introduced end-to-end telemetry for DAG-based backend design.',
      },
      {
        label: 'AI Engineering & Productivity',
        text: 'Spearheaded Claude Code adoption, custom agents, and automated workflows to boost developer productivity and improve on-call across teams.',
      },
    ],
  },
  {
    company: 'Verizon',
    role: 'Frontend Developer',
    period: 'March 2020 – October 2022',
    location: 'Hyderabad, India',
    highlights: [
      {
        text: 'Developed 3 end-to-end e-commerce applications for seamless customer device onboarding.',
      },
      {
        text: 'Implemented web performance optimizations and enforced strict web accessibility standards.',
      },
      {
        text: 'Migrated legacy architecture across 15+ web pages, driving a 20% increase in conversion rates.',
      },
      {
        text: 'Translated 100+ UI/UX designs into pixel-perfect production code while mentoring 5 junior engineers.',
      },
    ],
  },
  {
    company: 'Infosys',
    role: 'Frontend Developer',
    period: 'July 2016 – March 2020',
    location: 'Chennai, India',
    highlights: [
      {
        label: 'Mortgage Banking Solutions',
        text: 'Built a Mortgage Self-Service web application for RBI mortgage services within an Agile team.',
      },
      {
        label: 'UI Engineering & Delivery',
        text: 'Delivered production-ready web interfaces using HTML, CSS, JavaScript, and jQuery.',
      },
    ],
  },
];

interface Pillar {
  id: string;
  index: string;
  label: string;
  title: string;
  tagline: string;
  detail: string;
  practices: string[];
}

const PILLARS: Pillar[] = [
  {
    id: 'frontend',
    index: '01',
    label: 'Frontend Architecture',
    title: 'Accessible, low-latency interfaces built to endure.',
    tagline: 'ReactJS, Next.js, TypeScript, Redux & Web Accessibility.',
    detail:
      'From translating 100+ Figma designs at Verizon to leading 20+ Amazon feature launches and typestrict migrations, every UI layer is engineered for predictable performance and inclusive accessibility.',
    practices: [
      'ReactJS, Next.js, TypeScript, Redux, and shadcn component systems',
      'Strict web accessibility compliance, latency optimization, and CucumberJS testing',
      'Legacy architecture migrations driving measurable conversion and reliability gains',
    ],
  },
  {
    id: 'backend',
    index: '02',
    label: 'Backend & AWS',
    title: 'High-availability Tier-1/2 microservices & DAG telemetry.',
    tagline: 'Java, Node.js, GraphQL, AWS Lambda, DynamoDB & S3.',
    detail:
      'Beyond the browser, I design and operate resilient serverless and Java microservices powering high-volume customer service transactions across 36+ countries and 22 business lines.',
    practices: [
      'Java, Node.js, GraphQL, and REST APIs for Tier-1/2 distributed services',
      'Serverless AWS architecture with AWS Lambda, DynamoDB, and Amazon S3',
      'End-to-end telemetry across DAG-based backend orchestration workflows',
    ],
  },
  {
    id: 'agentic',
    index: '03',
    label: 'Agentic AI Systems',
    title: 'Spec-driven workflows & custom engineering automation.',
    tagline: 'Claude Code, Kiro, Cline & GitHub Copilot across teams.',
    detail:
      'Spearheading practical AI-assisted engineering across teams—turning written specifications into repeatable, verifiable workflows that accelerate shipping and improve on-call health.',
    practices: [
      'Custom agent workflows and spec-driven development templates across teams',
      'Automated on-call triage, CI/CD verification, and legacy migration tooling',
      'Pragmatic adoption of Claude Code, Kiro, Cline, and GitHub Copilot',
    ],
  },
];

interface SkillGroup {
  category: string;
  items: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'Java', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend Engineering',
    items: ['ReactJS', 'Redux', 'Next.js', 'shadcn', 'TypeScript', 'Accessibility', 'cucumberjs'],
  },
  {
    category: 'Backend Engineering',
    items: ['GraphQL', 'Node.js', 'Java', 'REST APIs', 'Microservices'],
  },
  {
    category: 'Cloud & AWS',
    items: ['AWS Lambda', 'DynamoDB', 'Amazon S3', 'Serverless Architecture', 'Vercel'],
  },
  {
    category: 'Agentic AI & AI-Assisted Engineering',
    items: [
      'Claude Code',
      'Spec-Driven Development',
      'Workflow Automation',
      'GitHub Copilot',
      'Kiro',
      'Cline',
    ],
  },
  {
    category: 'Developer Tools & Practices',
    items: ['Git', 'CI/CD', 'Figma', 'Agile Development'],
  },
];

const MARQUEE_ITEMS = [
  'AMAZON CONCESSIONS',
  '36+ COUNTRIES',
  '100M+ CUSTOMERS',
  'TIER-1/2 AWS SERVICES',
  'VERIZON E-COMMERCE',
  '+20% CONVERSION LIFT',
  'REACT & TYPESCRIPT',
  'SPEC-DRIVEN AI WORKFLOWS',
];

type FilterValue = 'all' | 'enterprise' | 'ai' | 'ecommerce';

const FILTER_OPTIONS: Array<{ value: FilterValue; label: string }> = [
  { value: 'all', label: 'All works' },
  { value: 'enterprise', label: 'Enterprise & Cloud' },
  { value: 'ai', label: 'AI & Automation' },
  { value: 'ecommerce', label: 'E-Commerce & FinTech' },
];

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [activePillarId, setActivePillarId] = useState<string>('frontend');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const proofRef = useRef<HTMLDivElement>(null);
  const isProofInView = useInView(proofRef, { once: true, amount: 0.2 });
  const credentialsRef = useRef<HTMLDivElement>(null);
  const isCredentialsInView = useInView(credentialsRef, { once: true, amount: 0.3 });

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.filterKey === activeFilter);

  const activePillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  const navigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % PROJECTS.length
        : (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setMobileMenuOpen(false);
        return;
      }
      if (!selectedProject) return;
      if (e.key === 'ArrowLeft') navigateProject('prev');
      if (e.key === 'ArrowRight') navigateProject('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 68;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('sonicdeepak@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      window.location.href = 'mailto:sonicdeepak@gmail.com';
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:sonicdeepak@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#D4F765] selection:text-black">
      {/* TOP NAVIGATION: Monochrome 3-Zone Contract */}
      <header className="sticky top-0 z-40 h-16 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-[1280px] mx-auto h-full px-6 md:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Clean Monochrome Wordmark */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[20px] fw-540 tracking-[-0.02em] text-black whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-[4px]"
          >
            Deepak Moses
          </a>

          {/* Zone 2: 4 Single-line Nav Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-[16px] fw-480 tracking-[-0.10px] text-black"
            aria-label="Primary navigation"
          >
            {[
              { id: 'systems', label: 'Systems' },
              { id: 'work', label: 'Work' },
              { id: 'experience', label: 'Experience' },
              { id: 'skills', label: 'Skills' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="hover:underline underline-offset-4 decoration-black transition-opacity whitespace-nowrap shrink-0 cursor-pointer bg-transparent border-0 py-1 px-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Black Pill CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full bg-black text-white text-[15px] fw-480 tracking-[-0.10px] whitespace-nowrap shrink-0 transition-transform duration-150 active:scale-[0.98] cursor-pointer"
            >
              Get in touch
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden w-11 h-11 rounded-full bg-[#F5F5F5] text-black flex items-center justify-center cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MARQUEE STRIP: Inverse Black Ribbon */}
      <div
        className="h-9 bg-black text-white overflow-hidden flex items-center border-b border-black"
        aria-label="Engineering highlights ticker"
      >
        <div className="flex whitespace-nowrap animate-marquee will-change-transform">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {MARQUEE_ITEMS.map((item, idx) => (
                <span
                  key={`${dup}-${idx}`}
                  className="inline-flex items-center gap-6 px-6 font-mono text-[12px] tracking-[0.60px] uppercase text-white"
                >
                  <span>{item}</span>
                  <span aria-hidden="true">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Full-Canvas White Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 top-16 z-30 bg-white px-6 py-10 flex flex-col justify-between md:hidden border-t border-[#EAEAEA]"
          >
            <div className="flex flex-col gap-5">
              {[
                { id: 'systems', label: 'Systems & Architecture' },
                { id: 'work', label: 'Selected Works' },
                { id: 'experience', label: 'Work Experience' },
                { id: 'skills', label: 'Skills & Education' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-[32px] fw-340 tracking-[-0.02em] text-black pb-4 border-b border-[#EAEAEA] cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full min-h-[48px] rounded-full bg-black text-white text-[18px] fw-480 cursor-pointer"
              >
                Get in touch
              </button>
              <div className="flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.6px] text-black">
                <span>Hyderabad, India</span>
                <a href="mailto:sonicdeepak@gmail.com" className="underline">
                  sonicdeepak@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="top">
        {/* SECTION 1: WHITE CANVAS HERO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Editorial Column */}
              <div className="lg:col-span-7">
                <p className="font-mono text-[13px] md:text-[14px] leading-[1.3] tracking-[0.54px] uppercase text-black mb-6">
                  FRONTEND ENGINEER II · AMAZON · HYDERABAD
                </p>

                <h1 className="text-[48px] sm:text-[64px] lg:text-[86px] fw-340 leading-[1.0] tracking-[-0.02em] text-black text-balance">
                  Engineering resilient systems at global scale.
                </h1>

                <p className="mt-7 text-[20px] fw-330 leading-[1.4] tracking-[-0.14px] text-black max-w-2xl">
                  Frontend Engineer II at Amazon building Concessions web apps and Tier-1/2 AWS microservices across 36+ countries—impacting 100M+ customers while spearheading custom agents and spec-driven workflows.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToSection('work')}
                    className="min-h-[48px] px-7 py-2.5 rounded-full bg-black text-white text-[18px] fw-480 tracking-[-0.10px] inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 transition-transform duration-150 active:scale-[0.98] cursor-pointer"
                  >
                    <span>Explore selected work</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('experience')}
                    className="min-h-[48px] px-7 pt-2 pb-2.5 rounded-full bg-white border border-black text-black text-[18px] fw-480 tracking-[-0.10px] inline-flex items-center justify-center whitespace-nowrap shrink-0 transition-transform duration-150 active:scale-[0.98] cursor-pointer"
                  >
                    Work experience
                  </button>
                </div>
              </div>

              {/* Right Pastel Editorial Collage (No Coding Interface) */}
              <div className="lg:col-span-5">
                <div className="bg-[#F7F3E8] rounded-[24px] p-6 md:p-8 grid grid-cols-2 gap-4">
                  <div className="bg-[#D4F765] rounded-[12px] p-5 flex flex-col justify-between min-h-[168px] -rotate-[1deg]">
                    <span className="font-mono text-[11px] tracking-[0.6px] uppercase text-black">
                      Amazon Concessions
                    </span>
                    <div>
                      <div className="text-[28px] fw-540 leading-tight tracking-[-0.02em] text-black tabular-nums">
                        36+ Countries
                      </div>
                      <p className="mt-1 text-[14px] fw-330 leading-[1.35] text-black">
                        22 business lines at global scale
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#D9C2FF] rounded-[12px] p-5 flex flex-col justify-between min-h-[168px] rotate-[1.2deg]">
                    <span className="font-mono text-[11px] tracking-[0.6px] uppercase text-black">
                      AWS Microservices
                    </span>
                    <div>
                      <div className="text-[26px] fw-540 leading-tight tracking-[-0.02em] text-black">
                        Tier-1/2 DAG
                      </div>
                      <p className="mt-1 text-[14px] fw-330 leading-[1.35] text-black">
                        Java, Lambda, DynamoDB &amp; S3
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#B8F2D6] rounded-[12px] p-5 flex flex-col justify-between min-h-[168px] rotate-[0.8deg]">
                    <span className="font-mono text-[11px] tracking-[0.6px] uppercase text-black">
                      Verizon Onboarding
                    </span>
                    <div>
                      <div className="text-[28px] fw-540 leading-tight tracking-[-0.02em] text-black tabular-nums">
                        100+ Designs
                      </div>
                      <p className="mt-1 text-[14px] fw-330 leading-[1.35] text-black">
                        3 e-commerce apps · 5 mentees
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FFC6E3] rounded-[12px] p-5 flex flex-col justify-between min-h-[168px] -rotate-[1.1deg]">
                    <span className="font-mono text-[11px] tracking-[0.6px] uppercase text-black">
                      AI Automation
                    </span>
                    <div>
                      <div className="text-[26px] fw-540 leading-tight tracking-[-0.02em] text-black">
                        Spec-Driven
                      </div>
                      <p className="mt-1 text-[14px] fw-330 leading-[1.35] text-black">
                        Custom agents &amp; on-call velocity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width Animated NumberFlow Proof Strip */}
            <NumberFlowGroup>
              <div
                ref={proofRef}
                className="mt-16 pt-10 border-t border-[#D9D9D9] grid grid-cols-2 lg:grid-cols-4 gap-8"
              >
                <div>
                  <div className="text-[40px] md:text-[52px] fw-340 leading-[1.05] tracking-[-0.02em] text-black tabular-nums">
                    <NumberFlow
                      value={isProofInView ? 100 : 0}
                      suffix="M+"
                      transformTiming={{ duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                      spinTiming={{ duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </div>
                  <p className="mt-2 font-mono text-[12px] tracking-[0.6px] uppercase text-black">
                    Customers across 36+ countries
                  </p>
                </div>

                <div>
                  <div className="text-[40px] md:text-[52px] fw-340 leading-[1.05] tracking-[-0.02em] text-black tabular-nums">
                    <NumberFlow
                      value={isProofInView ? 20 : 0}
                      suffix="+"
                      transformTiming={{ duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                      spinTiming={{ duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </div>
                  <p className="mt-2 font-mono text-[12px] tracking-[0.6px] uppercase text-black">
                    Amazon feature launches led
                  </p>
                </div>

                <div>
                  <div className="text-[40px] md:text-[52px] fw-340 leading-[1.05] tracking-[-0.02em] text-black tabular-nums">
                    <NumberFlow
                      value={isProofInView ? 20 : 0}
                      prefix="+"
                      suffix="%"
                      transformTiming={{ duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                      spinTiming={{ duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </div>
                  <p className="mt-2 font-mono text-[12px] tracking-[0.6px] uppercase text-black">
                    Conversion lift across 15+ pages
                  </p>
                </div>

                <div>
                  <div className="text-[40px] md:text-[52px] fw-340 leading-[1.05] tracking-[-0.02em] text-black tabular-nums">
                    <NumberFlow
                      value={isProofInView ? 10 : 0}
                      suffix="+"
                      transformTiming={{ duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                      spinTiming={{ duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </div>
                  <p className="mt-2 font-mono text-[12px] tracking-[0.6px] uppercase text-black">
                    Years shipping production systems
                  </p>
                </div>
              </div>
            </NumberFlowGroup>
          </div>
        </section>

        {/* SECTION 2: LIME COLOR-BLOCK — SYSTEMS & ARCHITECTURE */}
        <section id="systems" className="py-12 md:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-0 md:px-12">
            <div className="bg-[#D4F765] rounded-none md:rounded-[24px] px-6 py-12 md:p-12 lg:p-16 text-black">
              <div className="max-w-3xl">
                <p className="font-mono text-[14px] md:text-[16px] leading-[1.3] tracking-[0.54px] uppercase text-black mb-4">
                  SYSTEMS &amp; ARCHITECTURE
                </p>
                <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] fw-340 leading-[1.1] tracking-[-0.015em] text-black text-balance">
                  How complex systems stay fast and legible.
                </h2>
                <p className="mt-5 text-[20px] fw-330 leading-[1.4] tracking-[-0.14px] text-black">
                  Select a discipline to inspect the frontend architecture, AWS microservices, and automated AI workflows behind my production engineering.
                </p>
              </div>

              {/* Pill Tab Selector (Selected = Black Primary, Default = White Secondary) */}
              <div
                className="mt-10 flex flex-wrap items-center gap-3"
                role="tablist"
                aria-label="Engineering disciplines"
              >
                {PILLARS.map((pillar) => {
                  const isSelected = pillar.id === activePillarId;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActivePillarId(pillar.id)}
                      className={`min-h-[44px] px-6 py-2.5 rounded-full text-[16px] fw-480 tracking-[-0.10px] whitespace-nowrap shrink-0 transition-transform duration-150 active:scale-[0.98] cursor-pointer ${
                        isSelected
                          ? 'bg-black text-white'
                          : 'bg-white text-black'
                      }`}
                    >
                      {pillar.index} · {pillar.label}
                    </button>
                  );
                })}
              </div>

              {/* White Editorial Spec Panel Inside Lime Block */}
              <div className="mt-8 bg-white rounded-[24px] p-7 md:p-10 border border-[#D9D9D9] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <div className="font-mono text-[12px] tracking-[0.6px] uppercase text-black mb-3">
                    DISCIPLINE {activePillar.index}
                  </div>
                  <h3 className="text-[26px] fw-540 leading-[1.3] tracking-[-0.26px] text-black">
                    {activePillar.title}
                  </h3>
                  <p className="mt-4 text-[18px] fw-320 leading-[1.45] tracking-[-0.26px] text-black">
                    {activePillar.detail}
                  </p>
                </div>

                <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-[#EAEAEA]">
                  <div className="font-mono text-[12px] tracking-[0.6px] uppercase text-black mb-5">
                    CORE ENGINEERING PRACTICES
                  </div>
                  <ul className="divide-y divide-[#EAEAEA]">
                    {activePillar.practices.map((practice, idx) => (
                      <li
                        key={idx}
                        className="py-4 first:pt-0 last:pb-0 flex items-start gap-3.5 text-[18px] fw-320 leading-[1.45] tracking-[-0.26px] text-black"
                      >
                        <span
                          className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-1"
                          aria-hidden="true"
                        >
                          <Check className="w-4 h-4 text-[#0FA958]" strokeWidth={2.5} />
                        </span>
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHITE CANVAS — SELECTED WORKS TEMPLATE GRID */}
        <section id="work" className="py-12 md:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div>
                <p className="font-mono text-[14px] leading-[1.3] tracking-[0.54px] uppercase text-black mb-3">
                  SELECTED CASE STUDIES
                </p>
                <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] fw-340 leading-[1.1] tracking-[-0.015em] text-black">
                  Selected works
                </h2>
              </div>

              {/* Pill Filter Controls (Black Active / White Hairline Inactive) */}
              <div
                className="flex flex-wrap items-center gap-2"
                role="group"
                aria-label="Filter selected works by category"
              >
                {FILTER_OPTIONS.map((option) => {
                  const isActive = activeFilter === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setActiveFilter(option.value)}
                      aria-pressed={isActive}
                      className={`min-h-[44px] px-5 py-2 rounded-full text-[15px] fw-480 tracking-[-0.10px] whitespace-nowrap shrink-0 transition-transform duration-150 active:scale-[0.98] cursor-pointer ${
                        isActive
                          ? 'bg-black text-white'
                          : 'bg-white text-black border border-[#D9D9D9] hover:border-black'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: DEEP NAVY COLOR-BLOCK — WORK EXPERIENCE */}
        <section id="experience" className="py-12 md:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-0 md:px-12">
            <div className="bg-[#141436] text-white rounded-none md:rounded-[24px] px-6 py-12 md:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
                <div className="max-w-2xl">
                  <p className="font-mono text-[14px] leading-[1.3] tracking-[0.54px] uppercase text-white mb-4">
                    WORK EXPERIENCE
                  </p>
                  <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] fw-340 leading-[1.1] tracking-[-0.015em] text-white text-balance">
                    Ten years shipping products at scale.
                  </h2>
                </div>
                <p className="text-[18px] fw-320 leading-[1.45] tracking-[-0.26px] text-white max-w-sm">
                  From RBI mortgage banking portals at Infosys to global Amazon Concessions systems across 36+ countries.
                </p>
              </div>

              <div className="border-b border-white/20">
                {EXPERIENCE.map((exp) => (
                  <div
                    key={`${exp.company}-${exp.period}`}
                    className="py-10 border-t border-white/20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
                  >
                    <div className="lg:col-span-4">
                      <div className="font-mono text-[12px] tracking-[0.6px] uppercase text-white tabular-nums">
                        {exp.period}
                      </div>
                      <h3 className="mt-3 text-[32px] fw-540 leading-[1.15] tracking-[-0.02em] text-white">
                        {exp.company}
                      </h3>
                      <div className="mt-1.5 text-[18px] fw-480 text-white">
                        {exp.role}
                      </div>
                      <div className="mt-1 font-mono text-[12px] tracking-[0.6px] uppercase text-white">
                        {exp.location}
                      </div>
                    </div>

                    <div className="lg:col-span-8">
                      <ul className="space-y-4">
                        {exp.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3.5 text-[18px] fw-320 leading-[1.45] tracking-[-0.26px] text-white"
                          >
                            <span
                              className="w-2 h-2 rounded-full bg-[#D4F765] shrink-0 mt-2.5"
                              aria-hidden="true"
                            />
                            <span>
                              {item.label && (
                                <strong className="fw-540 text-white">
                                  {item.label}:{' '}
                                </strong>
                              )}
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CORAL COLOR-BLOCK — SKILLS & EDUCATION */}
        <section id="skills" className="py-12 md:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-0 md:px-12">
            <div className="bg-[#FF9D7E] text-black rounded-none md:rounded-[24px] px-6 py-12 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                {/* Left Skills Matrix */}
                <div className="lg:col-span-7">
                  <p className="font-mono text-[14px] leading-[1.3] tracking-[0.54px] uppercase text-black mb-4">
                    TECHNICAL CAPABILITIES
                  </p>
                  <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] fw-340 leading-[1.1] tracking-[-0.015em] text-black text-balance">
                    Frontend craft, AWS cloud, and agentic tooling.
                  </h2>

                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SKILL_GROUPS.map((group) => (
                      <div
                        key={group.category}
                        className="bg-white rounded-[16px] p-6 border border-[#D9D9D9]"
                      >
                        <div className="font-mono text-[12px] leading-tight tracking-[0.6px] uppercase text-black mb-3">
                          {group.category}
                        </div>
                        <p className="text-[16px] fw-330 leading-[1.45] tracking-[-0.14px] text-black">
                          {group.items.join(' · ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Education & Credentials Card */}
                <div className="lg:col-span-5" ref={credentialsRef}>
                  <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#D9D9D9]">
                    <div className="text-[64px] md:text-[76px] fw-340 leading-none tracking-[-0.03em] text-black tabular-nums">
                      <NumberFlow
                        value={isCredentialsInView ? 10 : 0}
                        suffix="+"
                        transformTiming={{ duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                        spinTiming={{ duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                      />
                    </div>
                    <div className="mt-3 font-mono text-[12px] tracking-[0.6px] uppercase text-black">
                      Years engineering production web systems
                    </div>

                    <div className="my-7 h-px bg-[#EAEAEA]" />

                    <div className="space-y-6">
                      <div>
                        <div className="font-mono text-[12px] tracking-[0.6px] uppercase text-black">
                          Education
                        </div>
                        <div className="mt-1.5 text-[20px] fw-540 text-black">
                          B.E. Computer Science
                        </div>
                        <div className="text-[16px] fw-330 text-black tabular-nums">
                          Sathyabama University, Chennai · 2012 – 2016
                        </div>
                      </div>

                      <div>
                        <div className="font-mono text-[12px] tracking-[0.6px] uppercase text-black">
                          Current Role
                        </div>
                        <div className="mt-1.5 text-[20px] fw-540 text-black">
                          Frontend Engineer II — Amazon
                        </div>
                        <div className="text-[16px] fw-330 text-black">
                          Hyderabad · Concessions &amp; Tier-1/2 Services
                        </div>
                      </div>

                      <div>
                        <div className="font-mono text-[12px] tracking-[0.6px] uppercase text-black">
                          Direct Contact
                        </div>
                        <div className="mt-1.5 text-[16px] fw-330 text-black tabular-nums">
                          +91 8056257970
                        </div>
                        <div className="text-[16px] fw-330 text-black">
                          sonicdeepak@gmail.com
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#EAEAEA] flex flex-wrap items-center gap-2.5">
                      <a
                        href="https://github.com/deepumoses"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[40px] px-4 py-2 rounded-full bg-black text-white text-[14px] fw-480 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://codepen.io/dpkmos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[40px] px-4 py-2 rounded-full bg-white border border-black text-black text-[14px] fw-480 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                      >
                        <span>CodePen</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://medium.com/@dpkmos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[40px] px-4 py-2 rounded-full bg-white border border-black text-black text-[14px] fw-480 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                      >
                        <span>Medium</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: LILAC PROMO BANNER + LIME CONTACT COLOR-BLOCK */}
        <section id="contact" className="py-12 md:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            {/* Lilac Inline Promo Banner with Single Magenta Promo Pill */}
            <div className="bg-[#D9C2FF] rounded-[8px] px-6 py-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="font-mono text-[12px] tracking-[0.6px] uppercase text-black">
                  WRITING ON MEDIUM
                </span>
                <p className="text-[16px] fw-330 leading-[1.45] text-black">
                  Actionable field notes on frontend architecture, React systems, and AI developer workflows.
                </p>
              </div>
              <a
                href="https://medium.com/@dpkmos"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#E11D84] text-white text-[15px] fw-480 tracking-[-0.10px] inline-flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 transition-transform duration-150 active:scale-[0.98]"
              >
                <span>Read on Medium</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Signature Lime Contact Form Color-Block */}
          <div className="max-w-[1280px] mx-auto px-0 md:px-12">
            <div className="bg-[#D4F765] rounded-none md:rounded-[24px] px-6 py-12 md:p-12 lg:p-16 text-black">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                <div className="lg:col-span-5">
                  <p className="font-mono text-[14px] leading-[1.3] tracking-[0.54px] uppercase text-black mb-4">
                    GET IN TOUCH
                  </p>
                  <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] fw-340 leading-[1.08] tracking-[-0.02em] text-black text-balance">
                    Building with purpose? Let&rsquo;s talk.
                  </h2>
                  <p className="mt-5 text-[18px] fw-320 leading-[1.45] tracking-[-0.26px] text-black">
                    Open to conversations on global-scale frontend architecture, AWS serverless services, and agentic developer workflows.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="min-h-[44px] px-5 py-2.5 rounded-full bg-white text-black text-[15px] fw-480 tracking-[-0.10px] inline-flex items-center gap-2 whitespace-nowrap shrink-0 transition-transform duration-150 active:scale-[0.98] cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-4 h-4 text-[#0FA958]" />
                          <span>Copied sonicdeepak@gmail.com</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy email address</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-black/15 space-y-2.5 text-[16px] fw-330 text-black">
                    <div className="flex items-center gap-2.5 tabular-nums">
                      <Phone className="w-4 h-4 shrink-0" />
                      <span>8056257970</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 shrink-0" />
                      <a href="mailto:sonicdeepak@gmail.com" className="hover:underline">
                        sonicdeepak@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 shrink-0" />
                      <a
                        href="https://medium.com/@dpkmos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        medium.com/@dpkmos
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form Inputs on Lime Surface */}
                <form
                  onSubmit={handleContactSubmit}
                  className="lg:col-span-7 bg-white rounded-[24px] p-6 md:p-10 border border-[#D9D9D9] space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[16px] fw-480 text-black mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full min-h-[48px] px-3.5 py-3 bg-white border border-[#D9D9D9] rounded-[8px] text-[18px] fw-320 text-black placeholder:text-black/45 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-shadow"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[16px] fw-480 text-black mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full min-h-[48px] px-3.5 py-3 bg-white border border-[#D9D9D9] rounded-[8px] text-[18px] fw-320 text-black placeholder:text-black/45 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-shadow"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[16px] fw-480 text-black mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief note about your project or inquiry..."
                      className="w-full p-3.5 bg-white border border-[#D9D9D9] rounded-[8px] text-[18px] fw-320 text-black placeholder:text-black/45 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-shadow resize-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="min-h-[48px] px-7 py-2.5 rounded-full bg-black text-white text-[18px] fw-480 tracking-[-0.10px] inline-flex items-center gap-2 transition-transform duration-150 active:scale-[0.98] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? 'Preparing email…' : 'Send message'}</span>
                      <Send className="w-4 h-4" />
                    </button>

                    {formSubmitted && (
                      <span className="text-[15px] fw-480 text-black">
                        Email draft opened in your mail client.
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 7: WHITE EDITORIAL FOOTER */}
      <footer className="bg-white text-black border-t border-[#EAEAEA] py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-[#EAEAEA]">
            <div>
              <div className="text-[28px] fw-540 tracking-[-0.02em] text-black">
                Deepak Moses
              </div>
              <p className="mt-3 text-[16px] fw-330 leading-[1.45] tracking-[-0.14px] text-black">
                Frontend Engineer II at Amazon. Engineering global web apps, AWS microservices, and automated developer workflows.
              </p>
            </div>

            <div>
              <div className="font-mono text-[12px] tracking-[0.6px] uppercase text-black mb-4">
                Navigation
              </div>
              <ul className="space-y-2.5 text-[16px] fw-330">
                {[
                  { id: 'systems', label: 'Systems & Architecture' },
                  { id: 'work', label: 'Selected Works' },
                  { id: 'experience', label: 'Work Experience' },
                  { id: 'skills', label: 'Skills & Education' },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className="hover:underline underline-offset-4 cursor-pointer bg-transparent border-0 p-0 text-left text-black"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-[12px] tracking-[0.6px] uppercase text-black mb-4">
                Selected Work
              </div>
              <ul className="space-y-2.5 text-[16px] fw-330">
                {PROJECTS.map((project) => (
                  <li key={project.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="hover:underline underline-offset-4 cursor-pointer bg-transparent border-0 p-0 text-left text-black"
                    >
                      {project.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-[12px] tracking-[0.6px] uppercase text-black mb-4">
                Connect
              </div>
              <ul className="space-y-2.5 text-[16px] fw-330">
                <li>
                  <a
                    href="https://github.com/deepumoses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline underline-offset-4"
                  >
                    <Github className="w-4 h-4" />
                    <span>github.com/deepumoses</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/dpkmos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline underline-offset-4"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>codepen.io/dpkmos</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/@dpkmos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline underline-offset-4"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>medium.com/@dpkmos</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sonicdeepak@gmail.com"
                    className="inline-flex items-center gap-2 hover:underline underline-offset-4"
                  >
                    <Mail className="w-4 h-4" />
                    <span>sonicdeepak@gmail.com</span>
                  </a>
                </li>
                <li className="inline-flex items-center gap-2 tabular-nums">
                  <Phone className="w-4 h-4" />
                  <span>8056257970</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[12px] tracking-[0.6px] uppercase text-black">
            <span>&copy; 2026 Deepak Moses. All rights reserved.</span>
            <span>Hyderabad, India</span>
          </div>
        </div>
      </footer>

      {/* CASE STUDY MODAL (Monochrome Editorial Lightbox) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[24px] shadow-[0_24px_64px_rgba(0,0,0,0.22)]"
            >
              {/* Modal Top Bar */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-[#EAEAEA]">
                <div className="flex items-center gap-2 font-mono text-[12px] tracking-[0.6px] uppercase text-black tabular-nums">
                  <span>{selectedProject.category}</span>
                  <span aria-hidden="true">/</span>
                  <span>{selectedProject.year}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigateProject('prev')}
                    aria-label="Previous case study"
                    className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-black hover:text-white text-black flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateProject('next')}
                    aria-label="Next case study"
                    className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-black hover:text-white text-black flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close case study"
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer ml-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 bg-[#F5F5F5] p-6 flex items-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-[4/3] md:aspect-auto md:h-full object-cover rounded-[8px]"
                  />
                </div>

                <div className="md:col-span-7 p-6 md:p-10">
                  <h3
                    id="case-study-title"
                    className="text-[32px] md:text-[38px] fw-540 leading-[1.1] tracking-[-0.02em] text-black text-balance"
                  >
                    {selectedProject.title}
                  </h3>

                  <p className="mt-4 text-[18px] fw-320 leading-[1.45] tracking-[-0.26px] text-black">
                    {selectedProject.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#EAEAEA]">
                    <div className="font-mono text-[12px] tracking-[0.6px] uppercase text-black mb-4">
                      Key Outcomes
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.outcomes.map((outcome, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[16px] fw-330 leading-[1.45] text-black"
                        >
                          <Check className="w-4 h-4 text-[#0FA958] shrink-0 mt-1" strokeWidth={2.5} />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#EAEAEA] flex flex-wrap items-center justify-between gap-4">
                    <div className="font-mono text-[12px] tracking-[0.4px] uppercase text-black">
                      {selectedProject.stack.join(' · ')}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProject(null);
                        scrollToSection('contact');
                      }}
                      className="min-h-[44px] px-5 py-2 rounded-full bg-black text-white text-[15px] fw-480 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Discuss this work</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
