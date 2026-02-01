import { useEffect, useState } from "react";
import doctorImage from "./assets/doctor.jpeg";

export default function DoctorProfile() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "about", label: "About" },
    { id: "expertise", label: "Expertise" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Animated background gradient mesh */}
      <div className="fixed inset-0 opacity-30">
        <div
          className="absolute top-0 -left-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-0 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-40 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-serif text-2xl tracking-tight">
            Sayed <span className="text-cyan-400">AI</span>
          </div>
          <div className="hidden md:flex gap-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
                className={`text-sm tracking-widest uppercase transition-all duration-300 hover:text-cyan-400 ${
                  activeSection === section.id ? "text-cyan-400" : "text-white/60"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-16 items-center w-full">
            {/* Left: Image */}
            <div
              className="relative group"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              <div className="relative">
                {/* Floating accent square */}
                <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-all duration-700 group-hover:scale-110"></div>
                
                {/* Main image container */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent z-10 mix-blend-overlay"></div>
                  <img
                    src={doctorImage}
                    alt="Dr. Sayed Ali Mahdi"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-6 -right-6 bg-black/90 backdrop-blur-xl border border-white/10 p-6 group-hover:border-cyan-400/50 transition-all duration-500">
                  <div className="text-4xl font-light text-cyan-400 mb-1">10+</div>
                  <div className="text-xs tracking-widest uppercase text-white/60">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm tracking-[0.3em] uppercase text-cyan-400 font-light">
                  Medical Professional
                </div>
                <h1 className="text-6xl md:text-7xl font-serif leading-[0.9] tracking-tight">
                  Sayed Ali
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400">
                    Mahdi
                  </span>
                </h1>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  <p className="text-white/70 font-light tracking-wide">
                    MD, Mansoura Manchester Medical Program
                  </p>
                </div>
              </div>

              <p className="text-xl leading-relaxed text-white/80 font-light max-w-xl">
                Pioneering compassionate healthcare through evidence-based medicine,
                patient-centered care, and continuous innovation in clinical practice.
              </p>

              <div className="flex gap-4 pt-4">
                <a
                  href="#contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 tracking-wider uppercase text-sm font-medium">
                    Schedule Consultation
                  </span>
                </a>
                <a
                  href="#expertise"
                  className="px-8 py-4 border border-white/20 hover:border-cyan-400 transition-all duration-300 tracking-wider uppercase text-sm"
                >
                  View Expertise
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="min-h-screen py-32">
          <div className="space-y-20">
            <div className="max-w-2xl">
              <div className="text-sm tracking-[0.3em] uppercase text-cyan-400 mb-4">
                Specialized Expertise
              </div>
              <h2 className="text-5xl font-serif mb-6 leading-tight">
                Clinical Excellence &<br />Advanced Medicine
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Comprehensive medical expertise spanning internal medicine, diagnostics,
                and patient care with a focus on holistic treatment approaches.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Internal Medicine",
                  desc: "Comprehensive diagnosis and treatment of complex medical conditions with evidence-based approaches.",
                  icon: "01",
                },
                {
                  title: "Patient Care",
                  desc: "Personalized treatment plans focused on individual needs, comfort, and long-term wellness.",
                  icon: "02",
                },
                {
                  title: "Clinical Research",
                  desc: "Active participation in medical research and contributing to advancements in healthcare.",
                  icon: "03",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 bg-gradient-to-b from-white/5 to-transparent hover:from-cyan-500/10"
                  style={{
                    animationDelay: `${idx * 0.2}s`,
                  }}
                >
                  <div className="text-6xl font-light text-white/10 group-hover:text-cyan-400/20 transition-colors duration-500 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  
                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen py-32">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <div className="text-sm tracking-[0.3em] uppercase text-cyan-400 mb-4">
                Medical Services
              </div>
              <h2 className="text-5xl font-serif mb-8 leading-tight">
                Comprehensive Healthcare Solutions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  service: "General Health Assessments",
                  detail: "Complete physical examinations and preventive care consultations",
                },
                {
                  service: "Diagnostic Evaluations",
                  detail: "Advanced diagnostic procedures and medical imaging interpretations",
                },
                {
                  service: "Chronic Disease Management",
                  detail: "Ongoing care for diabetes, hypertension, and cardiovascular conditions",
                },
                {
                  service: "Medical Consultations",
                  detail: "Expert second opinions and treatment plan discussions",
                },
                {
                  service: "Wellness Programs",
                  detail: "Personalized health optimization and lifestyle medicine",
                },
                {
                  service: "Research Collaboration",
                  detail: "Clinical trial participation and medical research initiatives",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group border-b border-white/10 hover:border-cyan-400/50 pb-6 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif mb-2 group-hover:text-cyan-400 transition-colors">
                        {item.service}
                      </h3>
                      <p className="text-white/50 group-hover:text-white/70 transition-colors">
                        {item.detail}
                      </p>
                    </div>
                    <div className="text-white/30 group-hover:text-cyan-400 transition-all transform group-hover:translate-x-2">
                      →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-32 flex items-center">
          <div className="w-full">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-6">
                <div className="text-sm tracking-[0.3em] uppercase text-cyan-400">
                  Get In Touch
                </div>
                <h2 className="text-6xl md:text-7xl font-serif leading-tight">
                  Let's Discuss Your
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400">
                    Health Journey
                  </span>
                </h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  Schedule a consultation to explore personalized healthcare solutions
                  tailored to your unique needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:contact@sayedalimahdi.com"
                  className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 tracking-wider uppercase text-sm font-medium flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email Consultation
                  </span>
                </a>
                <a
                  href="tel:+97333310941"
                  className="px-10 py-5 border border-white/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 tracking-wider uppercase text-sm w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </a>
              </div>

              {/* Contact Info Grid */}
              <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-white/10">
                <div className="text-center space-y-2">
                  <div className="text-white/40 uppercase text-xs tracking-widest">Location</div>
                  <div className="text-white/80">Mansoura, Egypt</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-white/40 uppercase text-xs tracking-widest">Email</div>
                  <div className="text-white/80">contact@sayedalimahdi.com</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-white/40 uppercase text-xs tracking-widest">Phone</div>
                  <div className="text-white/80">+973 3331 0941</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <div>© 2026 Dr. Sayed Ali Mahdi. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}