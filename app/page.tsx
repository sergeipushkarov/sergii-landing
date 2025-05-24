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
  Compass,
  Layers,
  Search,
  PenTool,
  Rocket,
  CheckCircle,
  Mail,
  Linkedin,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Abstract Animation and Brand */}
<div className="flex items-center gap-2">
  <div className="relative w-12 h-8 mr-2">
    <div className="absolute inset-0">
      <div className="w-3 h-3 bg-black rounded-full absolute top-0 left-0 animate-pulse"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full absolute top-1 right-2 animate-bounce delay-100"></div>
      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full absolute bottom-1 left-3 animate-pulse delay-200"></div>
      <div className="w-2.5 h-2.5 bg-gray-300 rounded-full absolute bottom-0 right-0 animate-bounce delay-300"></div>
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 32">
        <path
          d="M6 6 L36 12 L18 26 L42 26"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-gray-300 animate-pulse"
          strokeDasharray="2,2"
        />
      </svg>
    </div>
  </div>
  <div>
    <div className="font-bold text-xl text-black">pshkrv</div>
    <div className="text-sm text-gray-500">Strategic Design</div>
  </div>
</div>

          </div>
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
            <Link href="#philosophy" className="text-sm text-gray-700 hover:text-black transition-colors">
              Philosophy
            </Link>
            <Link href="#contact" className="text-sm text-gray-700 hover:text-black transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white" asChild>
            <Link href="#contact">Start a Project</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
<section
  className="py-24 lg:py-32 relative overflow-hidden"
  style={{ background: 'linear-gradient(120deg, #151a2b 60%, #232946 100%)' }}
>
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-sm text-gray-200 mb-8">
          <Compass className="w-4 h-4 text-gray-100" />
          <span>Strategic Design Consultancy</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-light mb-12 text-white leading-tight tracking-tight">
          Connecting the dots
          <br />
          between human needs
          <br />
          and business impact
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
          15+ years helping organizations transform complex challenges into meaningful experiences that drive
          measurable results.
        </p>
        <div className="flex items-center gap-2 text-gray-300 mb-12">
          <MapPin className="w-4 h-4 text-gray-200" />
          <span className="text-sm">Based in Milan, working globally</span>
        </div>
        <Link
          href="#services"
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors group"
        >
          <span className="text-lg">Discover how we can collaborate</span>
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-gray-100" />
        </Link>
      </div>

            {/* Modern Futuristic Animation */}
            <div className="relative w-full h-[600px] hidden lg:block">
              <div className="absolute inset-0">
                {/* Floating geometric shapes */}
                <div className="absolute top-20 right-20 w-32 h-32 border border-blue-200/40 rotate-45 animate-spin-slow"></div>
                <div className="absolute top-40 right-40 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-40 right-10 w-24 h-24 border-2 border-cyan-100/40 rounded-full animate-bounce-slow"></div>

                {/* Grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 400 600">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#c7d2e5"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Floating nodes with connections */}
                <div className="absolute top-32 right-32">
                  <div className="relative">
                    <div className="w-4 h-4 bg-black rounded-full animate-pulse"></div>
                    <div className="absolute -top-1 -left-1 w-6 h-6 border border-gray-300 rounded-full animate-ping"></div>
                  </div>
                </div>

                <div className="absolute top-60 right-16">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute -top-1 -left-1 w-5 h-5 border border-gray-400 rounded-full animate-ping delay-300"></div>
                  </div>
                </div>

                <div className="absolute bottom-32 right-28">
                  <div className="relative">
                    <div className="w-5 h-5 bg-gray-800 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute -top-1 -left-1 w-7 h-7 border border-gray-200 rounded-full animate-ping delay-500"></div>
                  </div>
                </div>

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600">
                  <defs>
                    <linearGradient id="rainbow-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#7dd3fc" />      {/* Soft blue */}
                      <stop offset="25%" stopColor="#a5b4fc" />     {/* Soft purple */}
                      <stop offset="50%" stopColor="#6ee7b7" />     {/* Soft green */}
                      <stop offset="75%" stopColor="#fcd34d" />     {/* Soft orange/yellow */}
                      <stop offset="100%" stopColor="#fca5a5" />    {/* Soft red */}
                    </linearGradient>
                    <linearGradient id="blue-cyan-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#7dd3fc" />      {/* Soft blue */}
                      <stop offset="100%" stopColor="#a7f3d0" />    {/* Soft aqua/cyan */}
                    </linearGradient>
                  </defs>
                  <path
                    d="M128 128 Q200 200 64 240 T112 320"
                    stroke="url(#rainbow-gradient)"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.9"
                    strokeDasharray="7,7"
                  >
                    <animate attributeName="stroke-dashoffset" values="0;14" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path
                    d="M64 240 Q150 300 112 320"
                    stroke="url(#blue-cyan-gradient)"
                    strokeWidth="2.5"
                    fill="none"
                    opacity="0.7"
                    strokeDasharray="5,5"
                  >
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="3s" repeatCount="indefinite" />
                  </path>
                </svg>

                {/* Floating particles */}
                <div className="absolute top-16 right-12 w-1 h-1 bg-gray-400 rounded-full animate-float"></div>
                <div className="absolute top-80 right-8 w-1.5 h-1.5 bg-gray-500 rounded-full animate-float delay-1000"></div>
                <div className="absolute bottom-20 right-20 w-1 h-1 bg-gray-300 rounded-full animate-float delay-2000"></div>

                {/* Hexagonal wireframe */}
                <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
                  <svg width="80" height="80" viewBox="0 0 80 80" className="animate-spin-reverse">
                    <polygon
                      points="40,10 65,25 65,55 40,70 15,55 15,25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-gray-300 opacity-60"
                    />
                    <polygon
                      points="40,20 55,30 55,50 40,60 25,50 25,30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-gray-400 opacity-40"
                    />
                  </svg>
                </div>

                {/* Data streams */}
                <div className="absolute top-1/3 right-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent animate-pulse"></div>
                <div className="absolute top-2/3 right-8 w-px h-24 bg-gradient-to-b from-transparent via-gray-400 to-transparent animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(-5px) translateX(-5px); }
            75% { transform: translateY(-15px) translateX(3px); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-spin-reverse {
            animation: spin-reverse 15s linear infinite;
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-black" />
                <h2 className="text-4xl font-light text-black">Strategic capabilities</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl">
                Multidisciplinary approach bridging strategic thinking with design execution—creating solutions that
                address immediate needs and long-term goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-black" />
                  <h3 className="text-2xl font-light text-black">Service Design & Innovation</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Reimagining how organizations deliver value through orchestrated experiences spanning digital and
                  physical touchpoints.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    End-to-end customer journey mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Service blueprinting & ecosystem design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Touchpoint optimization & integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Digital service tools & platforms
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-black" />
                  <h3 className="text-2xl font-light text-black">Strategic Design Consulting</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Applying design methodologies to complex business challenges, aligning organizational capabilities
                  with evolving market needs.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Design-led innovation workshops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Business model innovation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Digital transformation strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Cross-functional alignment
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="w-6 h-6 text-black" />
                  <h3 className="text-2xl font-light text-black">Experience Design & Storytelling</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Crafting cohesive brand experiences that resonate emotionally and functionally across all touchpoints.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Brand experience strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Spatial design & storytelling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Digital experience design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Visual communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-black" />
                <h2 className="text-4xl font-light text-black">Selected work</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl">
                Projects demonstrating strategic design thinking and cross-disciplinary collaboration.
              </p>
            </div>

            <div className="space-y-32">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Globe className="w-4 h-4" />
                    <span>Retail Transformation</span>
                  </div>
                  <h3 className="text-3xl font-light mb-6 text-black">Reimagining Technical Retail Experience</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Led comprehensive transformation for major technical retailer facing online competition. Deep
                    ethnographic research resulted in complete brand repositioning and experience redesign.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Solution included new brand identity, redesigned environments, custom digital tools, and integrated
                    online-offline journey.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Target className="w-4 h-4" />
                      <span>
                        <strong>Scope:</strong> Brand strategy, service design, digital tools
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Zap className="w-4 h-4" />
                      <span>
                        <strong>Impact:</strong> 40% engagement increase, 25% conversion improvement
                      </span>
                    </div>
                  </div>
                </div>
                <img src="/project1.png" alt="Technical Retail Experience Project" className="h-[400px] w-full object-cover rounded-sm" />
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <img src="/project2.png" alt="Healthcare Innovation Project" className="h-[400px] w-full object-cover rounded-sm" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Heart className="w-4 h-4" />
                    <span>Healthcare Innovation</span>
                  </div>
                  <h3 className="text-3xl font-light mb-6 text-black">Transforming Patient Experience</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Aesthetic medical clinic sought differentiation while improving efficiency. In-depth shadowing
                    identified critical pain points and enhancement opportunities.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Service redesign included digital booking, patient communications, staff protocols, and custom
                    platform integration.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Target className="w-4 h-4" />
                      <span>
                        <strong>Scope:</strong> Service design, digital platform, training
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Zap className="w-4 h-4" />
                      <span>
                        <strong>Impact:</strong> 60% time reduction, 45% satisfaction improvement
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Layers className="w-4 h-4" />
                    <span>Hospitality Design</span>
                  </div>
                  <h3 className="text-3xl font-light mb-6 text-black">Luxury Hospitality Customer Experience</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Led service design for luxury hospitality development in East Asia. Challenge: create distinctive guest
                    experience in crowded luxury market.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Integrated service design into architectural planning, creating cohesive experience strategy
                    informing all guest touchpoints.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Target className="w-4 h-4" />
                      <span>
                        <strong>Scope:</strong> Experience strategy, spatial planning
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Zap className="w-4 h-4" />
                      <span>
                        <strong>Impact:</strong> Secured project against international competition
                      </span>
                    </div>
                  </div>
                </div>
                <img src="/project3.png" alt="Luxury Hotel Experience Strategy Project" className="h-[400px] w-full object-cover rounded-sm" />
              </div>
            </div>

            <div className="mt-20 text-center">
              <Link
                href="#contact"
                className="inline-flex items-center text-black hover:text-gray-600 transition-colors group"
              >
                <span className="text-lg">Discuss your project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-8 h-8 text-black" />
                <h2 className="text-4xl font-light text-black">Methodology</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl">
                Rigorous yet flexible approach ensuring consistent, high-quality outcomes that create lasting value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-light text-gray-300">01</div>
                  <Search className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-light mb-4 text-black">Discover</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Immersive research using ethnographic methods, data analysis, and systems mapping to uncover insights
                  others miss.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-2">Key activities:</div>
                  <div className="text-xs text-gray-600">
                    Stakeholder interviews, contextual inquiry, competitive analysis
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-light text-gray-300">02</div>
                  <Lightbulb className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-light mb-4 text-black">Define</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Synthesizing research into actionable insights, identifying patterns and creating alignment around
                  clear problem statements.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-2">Key activities:</div>
                  <div className="text-xs text-gray-600">
                    Insight development, opportunity mapping, strategic frameworks
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-light text-gray-300">03</div>
                  <PenTool className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-light mb-4 text-black">Design</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Collaborative creation through iterative cycles, facilitating cross-disciplinary teams to generate and
                  refine concepts.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-2">Key activities:</div>
                  <div className="text-xs text-gray-600">Co-creation workshops, service blueprinting, prototyping</div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-light text-gray-300">04</div>
                  <Rocket className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-light mb-4 text-black">Deliver</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Translating concepts into implementable solutions with clear roadmaps and ongoing measurement
                  frameworks.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-2">Key activities:</div>
                  <div className="text-xs text-gray-600">Implementation planning, documentation, training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-black" />
                <h2 className="text-4xl font-light text-black">Design philosophy</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl">
                Core principles guiding how I approach design, collaboration, and creating meaningful impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-black" />
                  <h3 className="text-2xl font-light text-black">Systems thinking over isolated solutions</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Most impactful design addresses entire ecosystems. Understanding interconnections between people,
                  processes, and technologies drives holistic transformation.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-black" />
                  <h3 className="text-2xl font-light text-black">Human needs balanced with business realities</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Successful design serves both human needs and business objectives—creating experiences that delight
                  users while delivering measurable impact.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-black" />
                  <h3 className="text-2xl font-light text-black">Clarity through complexity</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Elegant solutions make complex feel simple. Bringing structure to ambiguous challenges helps
                  organizations navigate complexity and align around shared purpose.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-black" />
                  <h3 className="text-2xl font-light text-black">Collaborative creation</h3>
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
      <section id="contact" className="py-24 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-black" />
                <h2 className="text-4xl font-light text-black">Let's collaborate</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl">
                Working with forward-thinking organizations ready to embrace strategic design as innovation driver.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xl font-light mb-8 text-black">Get in touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
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
                  <div className="flex items-center gap-3">
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
                  <div className="flex items-center gap-3">
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
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Navigating business transformation
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Enhancing customer experience
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Integrating digital and physical experiences
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Building design capabilities
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Committed to human-centered approaches
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-gray-200">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3" asChild>
                <Link href="mailto:sergei.pushkaryov@gmail.com">
                  Start a conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="font-bold text-lg text-black">pshkrv</div>
              <div className="text-sm text-gray-500">Strategic Design</div>
            </div>
            <div className="text-sm text-gray-500">
              Connecting human needs with business impact through strategic design
            </div>
            <div className="text-sm text-gray-500">&copy; 2024 All rights reserved</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
