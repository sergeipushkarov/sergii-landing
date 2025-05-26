"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  MapPin,
  ExternalLink,
  Users,
  Target,
  Palette,
  Lightbulb,
  Zap,
  Eye,
  Heart,
  HeartPulse,
  Compass,
  Layers,
  Search,
  PenTool,
  Rocket,
  Check,
  Mail,
  Linkedin,
  Globe,
  ArrowUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Starfield from "@/components/Starfield"
import { ProjectCarousel } from "@/components/ProjectCarousel"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo1.svg" alt="pshkrv logo" className="w-15 h-10" />
          </div>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <Link href="#services" className="text-sm text-gray-700 hover:text-black transition-colors">
                Services
              </Link>
              <Link href="#work" className="text-sm text-gray-700 hover:text-black transition-colors">
                Work
              </Link>
              <Link href="#approach" className="text-sm text-gray-700 hover:text-black transition-colors">
                Approach
              </Link>
            </nav>
            <Button variant="outline" className="rounded-full border-2 border-black bg-black text-white hover:bg-white hover:text-black whitespace-nowrap" asChild>
              <Link href="#contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
<section
  className="py-16 sm:py-24 lg:py-32 relative overflow-hidden min-h-screen flex items-center"
  style={{
    backgroundImage: 'linear-gradient(120deg, #151a2b 60%, #232946 100%)',
    position: 'relative',
    isolation: 'isolate',
  }}
>
  <Starfield />
  {/* Grid Background */}
  <div 
    className="absolute inset-0 opacity-10 pointer-events-none"
    style={{
      backgroundImage: 'linear-gradient(to right, #c7d2e5 1px, transparent 1px), linear-gradient(to bottom, #c7d2e5 1px, transparent 1px)',
      backgroundSize: '60px 60px',
    }}
  />
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-3 gap-12 items-center">
      <div className="lg:col-span-2 max-w-5xl">
        <div className="flex items-center gap-2 text-sm text-gray-200 mb-8">
          <Compass className="w-4 h-4 text-gray-100" />
          <span>Service & Strategic Design Consultancy</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-light mb-12 text-white leading-tight tracking-tight">
          Connecting the dots between human needs and business impact
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed" data-component-name="LandingPage">
          Over 15 years designing impactful solutions across healthcare, retail, and luxury hospitality—turning complex challenges into measurable results.
        </p>
        <div className="flex items-center gap-2 text-gray-300 mb-12">
          <MapPin className="w-4 h-4 text-gray-200" />
          <span className="text-sm">Based in Milan, working globally</span>
        </div>
        <Link
          href="#services"
          className="inline-flex items-center px-10 py-5 border-2 border-white/90 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group text-lg leading-tight"
        >
          <span className="text-xl text-white">Explore</span>
          <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform text-white" />
        </Link>
      </div>

            {/* Right side - thinner column */}
            <div className="relative h-[600px] hidden lg:block">
              {/* Empty container for future content */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="w-full">
            <div className="mb-20 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-black" />
                <h2 className="text-xl font-semibold text-black">Services</h2>
              </div>
              <p className="text-xl text-gray-600">
                Multidisciplinary approach bridging strategic thinking with design execution—creating solutions that
                address immediate needs and long-term goals.
              </p>
            </div>

            {/* Mobile horizontal scroll container */}
            <div className="lg:hidden relative w-full pb-8 -mx-6">
              {/* Fade effect on the right side */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10">
                <div className="absolute right-4 bottom-4 flex items-center gap-1 text-gray-400 text-xs">
                  <span>Swipe</span>
                  <ArrowRight className="w-3 h-3 animate-bounce-horizontal" />
                </div>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
                <div className="flex gap-6 w-max pl-6">
                  {[
                    {
                      icon: <Users className="w-10 h-10 text-black" />,
                      title: 'Service Design & Innovation',
                      description: 'Reimagining how organizations deliver value through orchestrated experiences spanning digital and physical touchpoints.',
                      items: [
                        'End-to-end customer journey mapping',
                        'Service blueprinting & ecosystem design',
                        'Touchpoint optimization & integration',
                        'Digital service tools & platforms'
                      ]
                    },
                    {
                      icon: <Target className="w-10 h-10 text-black" />,
                      title: 'Strategic Design Consulting',
                      description: 'Applying design methodologies to complex business challenges, aligning organizational capabilities with evolving market needs.',
                      items: [
                        'Design-led innovation workshops',
                        'Business model innovation',
                        'Digital transformation strategy',
                        'Cross-functional alignment'
                      ]
                    },
                    {
                      icon: <Palette className="w-10 h-10 text-black" />,
                      title: 'Experience Design Building',
                      description: 'Crafting cohesive brand experiences that resonate emotionally and functionally across all touchpoints.',
                      items: [
                        'Digital product design',
                        'Physical/digital experience integration',
                        'Design systems & language',
                        'Prototyping & testing'
                      ]
                    }
                  ].map((service, index) => (
                    <div key={index} className="w-[85vw] flex-shrink-0 snap-start bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="mb-6">
                        <div className="mb-2">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-light text-black">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <ul className="space-y-0 text-sm text-gray-600 divide-y divide-gray-200">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                            <Check className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop grid layout */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-12 w-full">
              <div>
                <div className="mb-6">
                  <div className="mb-2">
                    <Users className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-light text-black">Service Design & Innovation</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Reimagining how organizations deliver value through orchestrated experiences spanning digital and
                  physical touchpoints.
                </p>
                <ul className="space-y-0 text-sm text-gray-600 divide-y divide-gray-400">
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    End-to-end customer journey mapping
                  </li>
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    Service blueprinting & ecosystem design
                  </li>
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    Touchpoint optimization & integration
                  </li>
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    Digital service tools & platforms
                  </li>
                </ul>
              </div>

              <div>
                <div className="mb-6">
                  <div className="mb-2">
                    <Target className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-light text-black">Strategic Design Consulting</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Applying design methodologies to complex business challenges, aligning organizational capabilities
                  with evolving market needs.
                </p>
                <ul className="space-y-0 text-sm text-gray-600 divide-y divide-gray-400">
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    Design-led innovation workshops
                  </li>
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    Business model innovation
                  </li>
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    Digital transformation strategy
                  </li>
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    Cross-functional alignment
                  </li>
                </ul>
              </div>

              <div>
                <div className="mb-6">
                  <div className="mb-2">
                    <Palette className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-light text-black">Experience Design Building</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Crafting cohesive brand experiences that resonate emotionally and functionally across all touchpoints.
                </p>
                <ul className="space-y-0 text-sm text-gray-600 divide-y divide-gray-400">
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    Digital product design
                  </li>
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    Physical/digital experience integration
                  </li>
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    Design systems & language
                  </li>
                  <li className="flex items-center gap-2 py-3 first:pt-0 last:pb-0">
                    <Check className="w-4 h-4 text-gray-400" />
                    Prototyping & testing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 sm:py-24 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="w-full">
            <div className="mb-20 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-black" />
                <h2 className="text-xl font-semibold text-black">Selected work</h2>
              </div>
              <p className="text-xl text-gray-600">
                Projects demonstrating strategic design thinking and cross-disciplinary collaboration.
              </p>
            </div>

            <div className="space-y-24 sm:space-y-40 w-full">
              {/* Project 1 */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">
                {/* Text content - comes first on mobile, stays on left on desktop */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Globe className="w-4 h-4" />
                    <span>Retail Transformation</span>
                  </div>
                  <h3 className="text-3xl font-light text-black mb-6">Reimagining Technical Retail Experience</h3>
                  
                  {/* Mobile image - only shows on mobile */}
                  <div className="lg:hidden mb-8 -mx-6">
                    <ProjectCarousel 
                      images={[
                        { src: "/slider1/1.png", alt: "Technical Retail Experience Project 1" },
                        { src: "/slider1/2.png", alt: "Technical Retail Experience Project 2" },
                        { src: "/slider1/3.png", alt: "Technical Retail Experience Project 3" },
                        { src: "/slider1/4.png", alt: "Technical Retail Experience Project 4" },
                        { src: "/slider1/5.png", alt: "Technical Retail Experience Project 5" },
                        { src: "/slider1/6.png", alt: "Technical Retail Experience Project 6" },
                        { src: "/slider1/7.png", alt: "Technical Retail Experience Project 7" },
                      ]}
                      className="rounded-none"
                    />
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A comprehensive transformation for a major tech retailer, redefining its role in a rapidly evolving market. Grounded in in-depth customer research, the project reshaped the brand from the inside out—across identity, space, and service.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    The result: a new visual identity, redesigned retail environments, purpose-built digital tools, and a connected online-offline experience that feels seamless to customers.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 flex-shrink-0" />
                        <strong className="whitespace-nowrap">Scope:</strong>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">Brand strategy</span>
                        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">service design</span>
                        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">digital tools</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 flex-shrink-0" />
                        <strong className="whitespace-nowrap">Impact:</strong>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200 whitespace-nowrap">40% engagement increase</span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200 whitespace-nowrap">25% conversion improvement</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Desktop image - only shows on desktop */}
                <div className="hidden lg:block order-1 lg:order-2">
                  <ProjectCarousel 
                    images={[
                      { src: "/slider1/1.png", alt: "Technical Retail Experience Project 1" },
                      { src: "/slider1/2.png", alt: "Technical Retail Experience Project 2" },
                      { src: "/slider1/3.png", alt: "Technical Retail Experience Project 3" },
                      { src: "/slider1/4.png", alt: "Technical Retail Experience Project 4" },
                      { src: "/slider1/5.png", alt: "Technical Retail Experience Project 5" },
                      { src: "/slider1/6.png", alt: "Technical Retail Experience Project 6" },
                      { src: "/slider1/7.png", alt: "Technical Retail Experience Project 7" },
                    ]} 
                    className="h-[400px] w-full"
                  />
                </div>
              </div>

              {/* Project 2 */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">
                {/* Desktop image - only shows on desktop */}
                <div className="hidden lg:block">
                  <ProjectCarousel 
                    images={[
                      { src: "/slider2/1.png", alt: "Healthcare Innovation Project 1" },
                      { src: "/slider2/2.png", alt: "Healthcare Innovation Project 2" },
                      { src: "/slider2/3.png", alt: "Healthcare Innovation Project 3" },
                      { src: "/slider2/4.png", alt: "Healthcare Innovation Project 4" }
                    ]} 
                    className="h-[400px] w-full"
                  />
                </div>
                
                {/* Text content - comes first on mobile, stays on right on desktop */}
                <div className="order-2 lg:order-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <HeartPulse className="w-4 h-4" />
                    <span>Healthcare Innovation</span>
                  </div>
                  <h3 className="text-3xl font-light text-black mb-6">Transforming Patient Experience</h3>
                  
                  {/* Mobile image - only shows on mobile */}
                  <div className="lg:hidden -mx-6 mt-8">
                    <ProjectCarousel 
                      images={[
                        { src: "/slider2/1.png", alt: "Healthcare Innovation Project 1" },
                        { src: "/slider2/2.png", alt: "Healthcare Innovation Project 2" },
                        { src: "/slider2/3.png", alt: "Healthcare Innovation Project 3" },
                        { src: "/slider2/4.png", alt: "Healthcare Innovation Project 4" },
                      ]}
                      className="rounded-none"
                    />
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    An aesthetic medical clinic needed to stand out in a crowded market while improving operational flow. On-site shadowing revealed key friction points across the patient journey, uncovering opportunities for both differentiation and efficiency.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    The service redesign spanned digital booking, patient communications, staff protocols, and a custom platform integration—delivering a smoother, more cohesive experience for both patients and staff.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 flex-shrink-0" />
                        <strong className="whitespace-nowrap">Scope:</strong>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">Service design</span>
                        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">digital platform</span>
                        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">training</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 flex-shrink-0" />
                        <strong className="whitespace-nowrap">Impact:</strong>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200 whitespace-nowrap">60% time reduction</span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200 whitespace-nowrap">45% satisfaction improvement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">
                {/* Text content - comes first on mobile, stays on left on desktop */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Layers className="w-4 h-4" />
                    <span>Hospitality Design</span>
                  </div>
                  <h3 className="text-3xl font-light text-black mb-6">Luxury Hospitality Customer Experience</h3>
                  
                  {/* Mobile image - only shows on mobile */}
                  <div className="lg:hidden -mx-6 mt-8">
                    <ProjectCarousel 
                      images={[
                        { src: "/slider3/1.png", alt: "Luxury Hotel Experience Strategy Project 1" },
                        { src: "/slider3/2.png", alt: "Luxury Hotel Experience Strategy Project 2" },
                        { src: "/slider3/3.png", alt: "Luxury Hotel Experience Strategy Project 3" },
                        { src: "/slider3/4.png", alt: "Luxury Hotel Experience Strategy Project 4" },
                        { src: "/slider3/5.png", alt: "Luxury Hotel Experience Strategy Project 5" },
                        { src: "/slider3/6.png", alt: "Luxury Hotel Experience Strategy Project 6" },
                      ]}
                      className="rounded-none"
                    />
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Service design for a luxury development in East Asia, focused on crafting a distinctive guest journey in an oversaturated market. The experience strategy was integrated directly into architectural planning, ensuring a cohesive narrative across every guest touchpoint.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    From arrival to departure, the design shaped interactions, environments, and services into a seamless and memorable whole.
                  </p>
                  <div className="space-y-4 text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Target className="w-3.5 h-3.5 flex-shrink-0" />
                        <strong className="whitespace-nowrap text-xs sm:text-sm">Scope:</strong>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="bg-gray-800 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full whitespace-nowrap">Experience strategy</span>
                        <span className="bg-gray-800 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full whitespace-nowrap">spatial planning</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 flex-shrink-0" />
                        <strong className="whitespace-nowrap text-xs sm:text-sm">Impact:</strong>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="bg-gray-100 text-gray-800 text-[10px] sm:text-xs px-2 py-1 rounded-full border border-gray-200 whitespace-nowrap">Secured project against intl. competition</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Desktop image - only shows on desktop */}
                <div className="hidden lg:block order-1 lg:order-2">
                  <ProjectCarousel 
                    images={[
                      { src: "/slider3/1.png", alt: "Luxury Hotel Experience Strategy Project 1" },
                      { src: "/slider3/2.png", alt: "Luxury Hotel Experience Strategy Project 2" },
                      { src: "/slider3/3.png", alt: "Luxury Hotel Experience Strategy Project 3" },
                      { src: "/slider3/4.png", alt: "Luxury Hotel Experience Strategy Project 4" },
                      { src: "/slider3/5.png", alt: "Luxury Hotel Experience Strategy Project 5" },
                      { src: "/slider3/6.png", alt: "Luxury Hotel Experience Strategy Project 6" }
                    ]} 
                    className="h-[400px] w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mt-20 text-left">
              <Link
                href="#contact"
                className="inline-flex items-center px-10 py-5 border-2 border-black/90 rounded-full bg-black hover:bg-gray-800 transition-all duration-300 group text-lg leading-tight"
              >
                <span className="text-xl text-white">Discuss your project</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-16 sm:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="w-full">
            <div className="mb-20 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-8 h-8 text-white" />
                <h2 className="text-xl font-semibold text-white">Methodology</h2>
              </div>
              <p className="text-xl text-gray-200">
                Rigorous yet flexible approach ensuring consistent, high-quality outcomes that create lasting value.
              </p>
            </div>

            {/* Mobile horizontal scroll container */}
            <div className="md:hidden relative w-full pb-8 -mx-6">
              {/* Fade effect on the right side */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10">
                <div className="absolute right-4 bottom-4 flex items-center gap-1 text-white/70 text-xs">
                  <span>Swipe</span>
                  <ArrowRight className="w-3 h-3 animate-bounce-horizontal" />
                </div>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
                <div className="flex gap-6 w-max pl-6">
                  {[
                    {
                      number: '01',
                      icon: <Search className="w-12 h-12 text-white" />,
                      title: 'Discover',
                      description: 'Immersive research using ethnographic methods, data analysis, and systems mapping to uncover insights others miss.',
                      tags: ['Stakeholder interviews', 'Contextual inquiry', 'Competitive analysis']
                    },
                    {
                      number: '02',
                      icon: <Lightbulb className="w-12 h-12 text-white" />,
                      title: 'Define',
                      description: 'Synthesizing research into actionable insights, identifying patterns and creating alignment around clear problem statements.',
                      tags: ['Insight development', 'Opportunity mapping', 'Strategic frameworks']
                    },
                    {
                      number: '03',
                      icon: <PenTool className="w-12 h-12 text-white" />,
                      title: 'Design',
                      description: 'Collaborative creation through iterative cycles, facilitating cross-disciplinary teams to generate and refine concepts.',
                      tags: ['Co-creation workshops', 'Service blueprinting', 'Prototyping']
                    },
                    {
                      number: '04',
                      icon: <Rocket className="w-12 h-12 text-white" />,
                      title: 'Deliver',
                      description: 'Translating concepts into implementable solutions with clear roadmaps and ongoing measurement frameworks.',
                      tags: ['Implementation planning', 'Success metrics', 'Continuous improvement']
                    }
                  ].map((item, index) => (
                    <div key={index} className="w-[85vw] flex-shrink-0 snap-start p-4">
                      <div className="flex flex-col items-start gap-2 mb-4">
                        <div className="text-sm font-thin text-gray-400">{item.number}</div>
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="pt-4 border-t border-gray-700">
                        <div className="flex flex-col items-start gap-2 mt-2">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop grid layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              <div>
                <div className="flex flex-col items-start gap-2 mb-4">
                  <div className="text-sm font-thin text-gray-400">01</div>
                  <Search className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Discover</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-6">
                  Immersive research using ethnographic methods, data analysis, and systems mapping to uncover insights
                  others miss.
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex flex-col items-start gap-4 mt-2">
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Stakeholder interviews</span>
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Contextual inquiry</span>
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Competitive analysis</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col items-start gap-2 mb-4">
                  <div className="text-sm font-thin text-gray-400">02</div>
                  <Lightbulb className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Define</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-6">
                  Synthesizing research into actionable insights, identifying patterns and creating alignment around
                  clear problem statements.
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex flex-col items-start gap-4 mt-2">
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Insight development</span>
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Opportunity mapping</span>
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Strategic frameworks</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col items-start gap-2 mb-4">
                  <div className="text-sm font-thin text-gray-400">03</div>
                  <PenTool className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Design</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-6">
                  Collaborative creation through iterative cycles, facilitating cross-disciplinary teams to generate and
                  refine concepts.
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex flex-col items-start gap-4 mt-2">
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Co-creation workshops</span>
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Service blueprinting</span>
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Prototyping</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col items-start gap-2 mb-4">
                  <div className="text-sm font-thin text-gray-400">04</div>
                  <Rocket className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Deliver</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-6">
                  Translating concepts into implementable solutions with clear roadmaps and ongoing measurement
                  frameworks.
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex flex-col items-start gap-4 mt-2">
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Implementation planning</span>
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Success metrics</span>
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-200">Continuous improvement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-16 sm:py-24 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="w-full">
            <div className="mb-20 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-black" />
                <h2 className="text-xl font-semibold text-black">Design philosophy</h2>
              </div>
              <p className="text-xl text-gray-600">
                Core principles guiding how I approach design, collaboration, and creating meaningful impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 w-full">
              <div>
                <div className="mb-4">
                  <div className="mb-2">
                    <Layers className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-light text-black">Systems thinking over isolated solutions</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Most impactful design addresses entire ecosystems. Understanding interconnections between people,
                  processes, and technologies drives holistic transformation.
                </p>
              </div>

              <div>
                <div className="mb-4">
                  <div className="mb-2">
                    <Target className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-light text-black">Human needs balanced with business realities</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Successful design serves both human needs and business objectives—creating experiences that delight
                  users while delivering measurable impact.
                </p>
              </div>

              <div>
                <div className="mb-4">
                  <div className="mb-2">
                    <Eye className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-light text-black">Clarity through complexity</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Elegant solutions make complex feel simple. Bringing structure to ambiguous challenges helps
                  organizations navigate complexity and align around shared purpose.
                </p>
              </div>

              <div>
                <div className="mb-4">
                  <div className="mb-2">
                    <Users className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-light text-black">Collaborative creation</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Best solutions emerge from diverse perspectives. Facilitating collaborative processes across
                  disciplines creates innovation environments with broad organizational support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 border-t border-gray-200">
          <div className="w-full bg-gray-50 py-16 sm:py-24">
            <div className="container mx-auto px-6">
              <div className="mb-16 max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-8 h-8 text-black" />
                  <h2 className="text-xl font-semibold text-black">Let's collaborate</h2>
                </div>
                <p className="text-xl text-gray-600">
                  Working with forward-thinking organizations ready to embrace strategic design as innovation driver.
                </p>
              </div>

            <div className="grid md:grid-cols-3 gap-8 sm:gap-12 w-full">
              <div className="flex justify-start items-start">
                <div className="relative w-full max-w-[200px] h-[256px] rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/portrait.png" 
                    alt="Sergei Pushkarov" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-8 text-black">Get in touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Email</div>
                      <Link
                        href="mailto:sergei.pushkaryov@gmail.com"
                        className="text-black hover:text-gray-600 transition-colors"
                      >
                        sergei.pushkaryov@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Linkedin className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">LinkedIn</div>
                      <Link
                        href="https://www.linkedin.com/in/pshkrv"
                        target="_blank"
                        className="text-black hover:text-gray-600 transition-colors flex items-center gap-1"
                      >
                        linkedin.com/in/pshkrv
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Location</div>
                      <div className="text-black">Milan, Italy</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-8 text-black">Ideal collaborations</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Organizations that are:</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gray-400" />
                    Navigating business transformation
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gray-400" />
                    Enhancing customer experience
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gray-400" />
                    Integrating digital and physical experiences
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gray-400" />
                    Building design capabilities
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gray-400" />
                    Committed to human-centered approaches
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-gray-200">
              <Link
                href="mailto:sergei@pshkrv.com"
                className="inline-flex items-center px-10 py-5 border-2 border-black/90 rounded-full bg-black hover:bg-gray-800 transition-all duration-300 group text-lg leading-tight"
              >
                <span className="text-xl text-white">Let's Talk</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="font-bold text-lg text-white">pshkrv</div>
              <div className="text-sm text-gray-300">Service & Strategic Design</div>
            </div>
            <div className="text-sm text-gray-300">
              Connecting human needs with business impact
            </div>
            <div className="text-sm text-gray-300">&copy; 2025 All rights reserved</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
