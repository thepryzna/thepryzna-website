/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  Mail, 
  Phone, 
  ChevronRight, 
  CheckCircle2, 
  Video, 
  Image as ImageIcon, 
  TrendingUp, 
  Users, 
  Zap,
  MonitorSmartphone,
  Layout,
  ShieldCheck
} from "lucide-react";
import { useState, useEffect } from "react";
import Magnetic from "./components/Magnetic";
import FAQ from "./components/FAQ";
import Process from "./components/Process";
import posterVideo from "./components/lv_0_20260309135258.mp4";

const projects = [
  {
    title: "Instagram Reel Editing",
    description: "High-engagement short-form video content with dynamic transitions.",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    video: "/videos/7.mp4",
  },
  {
    title: "Social Media Posters",
    description: "Eye-catching graphic designs tailored for brand identity.",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    video: posterVideo,
  },
  {
    title: "Brand Promotion Video",
    description: "Professional cinematic storytelling to boost brand awareness.",
    category: "Production",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800",
    video: "/videos/4.mp4",
  },
];

const expertise = [
  {
    title: "Performance Optimization",
    description: "Enhancing website speed and efficiency for a seamless user experience and better SEO rankings."
  },
  {
    title: "Responsive Design",
    description: "Crafting websites that look and function perfectly across all devices, from desktops to smartphones."
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning interfaces that prioritize user engagement and satisfaction."
  },
  {
    title: "Security & Maintenance",
    description: "Ensuring your digital assets are protected with robust security measures and regular updates."
  },
  {
    title: "Brand Promotion",
    description: "Strategic marketing campaigns designed to increase brand visibility and reach your target audience."
  },
  {
    title: "Content Creation",
    description: "Producing high-quality, engaging content that tells your brand's story and resonates with your community."
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      setShowSuccess(true);
      // Clean up the URL without refreshing
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
      
      // Hide message after 5 seconds
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.body.style.overflow = 'unset';
        clearTimeout(timer);
      };
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-zinc-900 shrink-0"
          >
            thepryzna<span className="text-orange-600">.</span>
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a 
              href="#"
              className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors"
            >
              Home
            </a>
            <a 
              href="#projects"
              className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#expertise"
              className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors"
            >
              Expertise
            </a>
            <a 
              href="#process"
              className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors"
            >
              Process
            </a>
            <a 
              href="#faq"
              className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#contact"
              className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors"
            >
              Contact
            </a>
            <Magnetic>
              <a 
                href="#contact" 
                className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-all ml-2"
              >
                Start Project
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-zinc-900 z-[101] w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8, backgroundColor: "#000" } : { rotate: 0, y: 0, backgroundColor: "#000" }}
                transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="absolute top-0 left-0 w-full h-0.5 block"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-zinc-900 block"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8, backgroundColor: "#000" } : { rotate: 0, y: 0, backgroundColor: "#000" }}
                transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="absolute bottom-0 left-0 w-full h-0.5 block"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="fixed inset-0 w-screen h-screen bg-white/80 backdrop-blur-2xl z-[100] md:hidden flex flex-col items-center justify-center p-10"
            >
              <div className="flex flex-col items-center gap-10">
                {["Home", "Projects", "Expertise", "Process", "FAQ", "Contact"].map((item, idx) => (
                  <motion.a 
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                    className="text-4xl font-display font-bold text-zinc-900 hover:text-orange-600 transition-colors tracking-tighter"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-50/60 backdrop-blur-[2px] z-10" />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            poster="/po.jpeg"
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/videos/lv_0_20260309160913.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-orange-100 text-orange-700 rounded-full">
              Creative Social Media Agency
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8 text-zinc-900">
              We create powerful content that <span className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent">grows</span> brands.
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-xl leading-relaxed">
              Elevate your online presence with high-impact visuals and strategic content creation designed for the modern social landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Magnetic>
                <a 
                  href="#projects" 
                  className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all group"
                >
                  View Work
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
              <Magnetic>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-semibold hover:border-zinc-900 transition-all"
                >
                  Get in Touch
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4">
                50+ Successful Projects
              </h2>
              <p className="text-zinc-500 max-w-lg">
                A showcase of our best work across various platforms and industries.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-6 py-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="text-2xl font-bold text-zinc-900">50+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Projects</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-zinc-100">
                  {project.video ? (
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="reel-video w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-zinc-900 px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </span>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-zinc-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Video Showcase */}
      <motion.section 
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="py-24 bg-zinc-900 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">Our Work in Action</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Experience the quality and creativity we bring to every frame. Our showcase reel highlights our versatility in storytelling.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
          >
            <video 
              className="w-full h-full object-cover"
              controls
              poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1920"
            >
              <source src="/videos/lv_0_20260309160913.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section 
        id="expertise" 
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="py-24 bg-zinc-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">Our Expertise</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              We offer a comprehensive suite of services to help your brand dominate the social media landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                  {idx === 0 && <Zap size={24} />}
                  {idx === 1 && <MonitorSmartphone size={24} />}
                  {idx === 2 && <Layout size={24} />}
                  {idx === 3 && <ShieldCheck size={24} />}
                  {idx === 4 && <TrendingUp size={24} />}
                  {idx === 5 && <Video size={24} />}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Process />

      <FAQ />

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-none">
                Start Your <span className="text-orange-600 italic">Project</span>
              </h2>
              <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
                Ready to take your social media to the next level? Let's collaborate and create something extraordinary.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Email Us</div>
                    <a href="mailto:thepryzna@gmail.com" className="text-xl font-bold hover:text-orange-600 transition-colors">thepryzna@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Follow Us</div>
                    <a 
                      href="https://www.instagram.com/thepryzna?igsh=MXFtYzRxOWtkcnF5eg==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-bold hover:text-orange-600 transition-colors"
                    >
                      @thepryzna
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 p-8 md:p-12 rounded-[3rem] border border-zinc-100">
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-2xl text-center font-medium"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              <form 
                className="space-y-6" 
                action="https://formsubmit.co/thepryzna.form@gmail.com" 
                method="POST"
              >
                {/* Hidden Fields for FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Project Inquiry - thepryzna" />
                <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/?success=true#contact`} />
                <input type="hidden" name="_timezone" value="Asia/Kolkata" />
                <input 
                  type="hidden" 
                  name="Submitted at" 
                  value={new Intl.DateTimeFormat('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                    timeZone: 'Asia/Kolkata'
                  }).format(new Date()).replace(/,([^,]*)$/, ' –$1') + ' IST (Asia/Kolkata)'} 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="John Doe" 
                      className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Your Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="john@example.com" 
                      className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Contact Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+91 00000 00000" 
                    className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Project Details</label>
                  <textarea 
                    name="message"
                    placeholder="Tell us about your project goals..." 
                    rows={4}
                    className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all resize-none"
                  ></textarea>
                </div>
                <Magnetic className="w-full">
                  <button 
                    type="submit" 
                    className="w-full bg-zinc-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-zinc-900/10 hover:shadow-orange-600/20"
                  >
                    Send Message
                  </button>
                </Magnetic>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-900 text-zinc-500 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-display font-bold tracking-tighter text-white">
            thepryzna<span className="text-orange-600">.</span>
          </div>
          <p className="text-sm tracking-wide">
            © {new Date().getFullYear()} thepryzna. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/thepryzna?igsh=MXFtYzRxOWtkcnF5eg==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:thepryzna@gmail.com" 
              className="hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
