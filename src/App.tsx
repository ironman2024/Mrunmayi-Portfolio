import { useState, useEffect } from 'react';
import { Menu, X, Download, MessageCircle, GraduationCap, Award, Briefcase, User, Mail, Phone, MapPin, Linkedin as LinkedIn, Calendar, ExternalLink, ChevronRight, Star, TrendingUp, Users, BookOpen, Code, BarChart3, Brain, ArrowUp } from 'lucide-react';
import profileImage from './DSC_8833.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowScrollTop(currentScrollY > 500);

      const sections = ['hero', 'about', 'education', 'experience', 'skills', 'certifications', 'contact'];
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Star },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="font-lato bg-white text-gray-900 overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className={`font-poppins font-bold text-xl lg:text-2xl transition-all duration-300 ${
              scrollY > 50 
                ? 'text-navy' 
                : 'text-white'
            }`}>
              <span className={scrollY > 50 ? '' : 'gradient-text'}>Mrunmayi Shahane</span>
              <div className={`h-0.5 w-0 bg-gradient-to-r from-gold to-yellow-400 transition-all duration-500 ${
                scrollY > 50 ? 'w-1/2' : ''
              }`}></div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? 'text-gold bg-gold/10 shadow-md'
                        : scrollY > 50
                        ? 'text-gray-600 hover:text-navy hover:bg-gray-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={16} className={activeSection === item.id ? 'animate-pulse-slow' : ''} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors duration-300 ${
                  scrollY > 50 ? 'text-gray-600 hover:text-navy' : 'text-white hover:text-gold'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-100`}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'text-gold bg-gold/10 shadow-md'
                      : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} className={activeSection === item.id ? 'animate-pulse-slow' : ''} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          {/* Additional decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gold/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gold/8 rounded-full blur-2xl animate-float delay-700"></div>
          <div className="hidden lg:block absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-radial from-gold/5 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center">
            {/* Enhanced Profile Image */}
            <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto rounded-full bg-gradient-to-br from-gold via-gold/90 to-gold/70 p-1.5 mb-6 shadow-2xl relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-gold-light before:to-gold before:animate-spin before:opacity-70 before:blur-md before:-z-10">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover object-center shadow-inner-lg"
                />
              </div>
            </div>
            
            {/* Enhanced Typography */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-poppins text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="gradient-text">Mrunmayi Shahane</span>
              </h1>
              
              <p className="font-poppins text-lg sm:text-xl lg:text-2xl font-medium text-gray-100 max-w-3xl mx-auto">
                Digital Marketer and HR Professional
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed px-4">
                Motivated BBA graduate specializing in Human Resource Management with a passion for digital marketing
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 px-4">
              <a 
                href="/Modern_Simple_ATS_Friendly_LateX_CV.pdf" 
                download
                className="btn-primary group px-8 py-4 text-lg font-semibold hover:scale-105 hover:shadow-gold w-full sm:w-auto"
              >
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary group px-8 py-4 text-lg font-semibold hover:scale-105 w-full sm:w-auto"
              >
                <MessageCircle size={20} className="mr-2 group-hover:animate-pulse" />
                <span>Let's Connect</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer" onClick={() => scrollToSection('about')}>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center group hover:border-gold hover:border-opacity-80 transition-colors duration-300">
              <div className="w-1 h-3 bg-white/60 group-hover:bg-gold rounded-full mt-2 animate-pulse-slow"></div>
            </div>
            <ChevronRight className="rotate-90 text-white/60 group-hover:text-gold transition-colors duration-300" size={20} />
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gold to-yellow-400 rounded-full transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Motivated and detail-oriented BBA graduate with a passion for digital marketing
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p className="text-base lg:text-lg leading-relaxed">
                  As a BBA graduate with a specialization in Human Resource Management, I possess a solid foundation in business operations, communication, and team coordination, complemented by growing expertise in digital tools and online marketing trends.
                </p>
                
                <p className="text-base lg:text-lg leading-relaxed">
                  I'm eager to apply creative thinking and analytical skills to build impactful digital marketing strategies. Currently upskilling in areas such as SEO, social media marketing, content creation, and performance analytics.
                </p>
                
                <p className="text-base lg:text-lg leading-relaxed">
                  Looking to kickstart a career in digital marketing with a focus on brand engagement, campaign management, and audience growth while leveraging my background in human resource management.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <TrendingUp className="text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                  <h3 className="font-poppins font-semibold text-lg text-navy mb-2">Digital Marketing</h3>
                  <p className="text-gray-600">Campaign analysis & reporting</p>
                </div>
                <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <Users className="text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                  <h3 className="font-poppins font-semibold text-lg text-navy mb-2">HR Management</h3>
                  <p className="text-gray-600">Team coordination & leadership</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="font-poppins text-2xl font-bold text-navy mb-6">Areas of Expertise</h3>
              <div className="space-y-4">
                {[
                  'Business Administration',
                  'Human Resource Management',
                  'Organizational Behavior',
                  'Communication & Presentation Skills',
                  'Team Leadership & Coordination',
                  'Digital Marketing Fundamentals',
                  'Email & Social Media Marketing',
                  'Marketing Analytics',
                  'E-commerce Management'
                ].map((competency, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-gold to-yellow-400 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="font-medium text-gray-800 group-hover:text-navy transition-colors duration-200">{competency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 relative inline-block">
              Education
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gold to-yellow-400 rounded-full transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-lg lg:text-xl text-gray-600">Academic background and qualifications</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Academic Timeline */}
            <div>
              <div className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-transparent hover:border-gold overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-gold to-yellow-400 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <h3 className="font-poppins text-2xl font-bold text-navy">Academic Journey</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-poppins font-semibold text-xl text-navy mb-2">Bachelor of Business Administration (BBA)</h4>
                      <p className="text-gold font-medium mb-2">Human Resource Management Specialization</p>
                      <p className="text-gray-600 mb-2">Savitribai Phule Pune University | 2020-2025</p>
                      <p className="text-gray-600 mb-2">College: Shree Siddhivinayak Arts & Commerce Mahila Mahavidyalaya, Pune</p>
                      <p className="text-navy font-semibold text-lg">CGPA: 7.03 | Grade: A</p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h5 className="font-medium text-navy mb-3">Relevant Coursework:</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          'Human Resource Management', 
                          'Global HRM', 
                          'Legal Aspects in HR', 
                          'Research Methodology', 
                          'MIS', 
                          'E-Commerce',
                          'CSR',
                          'Data Mining',
                          'Business Project Management',
                          'Personality Development'
                        ].map((course, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                            <span className="text-gray-700 text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Relevant Courses */}
            <div>
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-gold overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-gold to-yellow-400 p-3 rounded-full mr-4">
                      <BookOpen className="text-white" size={24} />
                    </div>
                    <h3 className="font-poppins text-2xl font-bold text-navy">Online Courses & Certifications</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'Foundations of Digital Marketing and E-commerce', issuer: 'Coursera', hours: '12 hours' },
                      { name: 'Attract and Engage Customers with Digital Marketing', issuer: 'Coursera', hours: '14 hours' },
                      { name: 'From Likes to Leads: Interact with Customers Online', issuer: 'Coursera', hours: '21 hours' },
                      { name: 'Think Outside the Inbox: Email Marketing', issuer: 'Coursera', hours: '18 hours' },
                      { name: 'Assess for Success: Marketing Analytics and Measurement', issuer: 'Coursera', hours: '18 hours' },
                      { name: 'Make the Sale: Build, Launch, and Manage E-commerce Stores', issuer: 'Coursera', hours: '15 hours' },
                      { name: 'Satisfaction Guaranteed: Develop Customer Loyalty Online', issuer: 'Coursera', hours: '15 hours' },
                      { name: 'Accelerate Your Job Search with AI', issuer: 'Coursera', hours: '' },
                      { name: 'Person-Centred Counselling Course', issuer: 'Udemy', hours: '' },
                      { name: 'Diploma Training Course in Modern Applied Psychology (DiMAP)', issuer: 'Udemy', hours: '' }
                    ].map((cert, index) => (
                      <div key={index} className="group bg-white border border-gray-100 hover:border-gold/50 p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
                        <h4 className="font-medium text-navy mb-1 group-hover:text-gold transition-colors duration-200 text-sm">{cert.name}</h4>
                        <p className="text-xs text-gray-600">{cert.issuer} {cert.hours && `• ${cert.hours}`}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 relative inline-block">
              Professional Experience
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gold to-yellow-400 rounded-full transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-lg lg:text-xl text-gray-600">Work experience and internships</p>
          </div>
          
          <div className="space-y-8">
            {/* HR Intern */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-gold">
              <div className="p-6 lg:p-8 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-3xl -z-10"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="font-poppins text-xl lg:text-2xl font-bold text-navy mb-2 group-hover:text-gold-dark transition-colors duration-300">HR Intern</h3>
                    <p className="text-gold font-medium">Silver Birch Multispeciality Hospital Pvt. Ltd.</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium shadow-sm group-hover:bg-gold/20 transition-colors duration-300">
                      September 2024 - November 2024
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-3 flex items-center">
                      <div className="w-1 h-6 bg-gold rounded-full mr-3"></div>
                      Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3 pl-2">
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Assisted in day-to-day HR operations including recruitment, employee management, and performance reviews.</p>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Supported administrative HR functions while gaining exposure to healthcare HR practices.</p>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Worked under the guidance of the hospital's gynecologist to understand clinical support functions.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Administration Intern */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-gold">
              <div className="p-6 lg:p-8 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-3xl -z-10"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="font-poppins text-xl lg:text-2xl font-bold text-navy mb-2 group-hover:text-gold-dark transition-colors duration-300">Administration Intern</h3>
                    <p className="text-gold font-medium">Rely On Pharmaceuticals Pvt. Ltd.</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium shadow-sm group-hover:bg-gold/20 transition-colors duration-300">
                      December 2023 - March 2024
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-3 flex items-center">
                      <div className="w-1 h-6 bg-gold rounded-full mr-3"></div>
                      Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3 pl-2">
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Interned in the Administration Department, contributing to daily operational management.</p>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Assisted with coordination between departments, file management, and routine reporting tasks.</p>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Strengthened organizational and communication skills in a corporate environment.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Rights Cell Intern */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-gold">
              <div className="p-6 lg:p-8 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-3xl -z-10"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="font-poppins text-xl lg:text-2xl font-bold text-navy mb-2 group-hover:text-gold-dark transition-colors duration-300">Rights Cell Intern (Volunteer)</h3>
                    <p className="text-gold font-medium">Global Human Welfare Organization</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium shadow-sm group-hover:bg-gold/20 transition-colors duration-300">
                      March 2019 - December 2019
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-3 flex items-center">
                      <div className="w-1 h-6 bg-gold rounded-full mr-3"></div>
                      Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3 pl-2">
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Worked on social justice and human rights advocacy projects under the Shivane Vibhag division.</p>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Collaborated on research related to corruption, bonded labor, child rights, and human rights protection.</p>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Participated in outreach and awareness initiatives across government-linked programs.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 relative inline-block">
              Skills
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gold to-yellow-400 rounded-full transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-lg lg:text-xl text-gray-600">Technical proficiency and soft skills</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Digital Marketing Skills */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-gold to-yellow-400 p-3 rounded-full mr-4">
                  <Code className="text-white" size={28} />
                </div>
                <h3 className="font-poppins text-2xl font-bold text-navy">Digital Marketing</h3>
              </div>
              <div className="space-y-6">
                {[
                  { skill: 'Social Media Optimization', level: 90 },
                  { skill: 'Content Writing', level: 85 },
                  { skill: 'Campaign Analysis', level: 88 },
                  { skill: 'PPC & SEM Strategies', level: 82 },
                  { skill: 'Conversion Rate Optimization', level: 80 },
                  { skill: 'SEO', level: 85 }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-3">
                      <span className="font-medium text-navy group-hover:text-gold transition-colors duration-200">{item.skill}</span>
                      <span className="text-gold font-semibold bg-gold/10 px-2 py-0.5 rounded-md">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-navy via-gold to-yellow-400 h-3 rounded-full transition-all duration-1000 transform origin-left group-hover:scale-105 relative"
                        style={{ width: `${item.level}%` }}
                      >
                        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-30"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Data Visualization Skills */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-gold to-yellow-400 p-3 rounded-full mr-4">
                  <BarChart3 className="text-white" size={28} />
                </div>
                <h3 className="font-poppins text-2xl font-bold text-navy">Data & Tools</h3>
              </div>
              <div className="space-y-6">
                {[
                  { skill: 'Microsoft Power BI', level: 85 },
                  { skill: 'Excel', level: 90 },
                  { skill: 'Google Analytics', level: 82 },
                  { skill: 'SEMrush', level: 78 },
                  { skill: 'WordPress', level: 80 },
                  { skill: 'Adobe Creative Suite', level: 75 }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-3">
                      <span className="font-medium text-navy group-hover:text-gold transition-colors duration-200">{item.skill}</span>
                      <span className="text-gold font-semibold bg-gold/10 px-2 py-0.5 rounded-md">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-navy via-gold to-yellow-400 h-3 rounded-full transition-all duration-1000 transform origin-left group-hover:scale-105 relative"
                        style={{ width: `${item.level}%` }}
                      >
                        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-30"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-gold to-yellow-400 p-3 rounded-full mr-4">
                  <Brain className="text-white" size={28} />
                </div>
                <h3 className="font-poppins text-2xl font-bold text-navy">Soft Skills</h3>
              </div>
              <div className="space-y-6">
                {[
                  { skill: 'Presentation', example: 'Effective communication of ideas and concepts' },
                  { skill: 'Planning', example: 'Strategic organization of tasks and projects' },
                  { skill: 'Creative Problem-Solving', example: 'Innovative approaches to challenges' },
                  { skill: 'Teamwork', example: 'Collaborative work in diverse environments' },
                  { skill: 'Adaptability', example: 'Quick adjustment to changing circumstances' },
                  { skill: 'Analytical Thinking', example: 'Data-driven decision making' }
                ].map((item, index) => (
                  <div key={index} className="group border-l-4 border-gold hover:border-yellow-400 pl-4 py-3 transition-all duration-300 hover:bg-gold/5 rounded-r-lg transform hover:-translate-x-1 hover:shadow-md">
                    <h4 className="font-semibold text-navy mb-2 group-hover:text-gold transition-colors duration-200 flex items-center">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      {item.skill}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* SEO Tools */}
          <div className="mt-12 bg-gradient-to-r from-navy via-navy/95 to-navy p-6 lg:p-8 rounded-3xl text-white shadow-2xl">
            <h3 className="font-poppins text-2xl font-bold mb-8 text-center">SEO & Software Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
              {[
                'Google Search Console', 'Google Analytics', 'Looker Studio', 'Google Trends', 
                'Screaming Frog', 'SEMrush', 'Ahrefs', 'WordPress', 'Project (MSP)', 
                'Adobe PhotoShop', 'Adobe Audition', 'Canva'
              ].map((tool, index) => (
                <div key={index} className="group text-center p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <p className="font-medium text-sm lg:text-base group-hover:text-gold transition-colors duration-200">{tool}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Languages */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { language: 'English', level: 'Fluent', width: '90%' },
              { language: 'Marathi', level: 'Native', width: '100%' },
              { language: 'Hindi', level: 'Native', width: '100%' }
            ].map((lang, index) => (
              <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-gold transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-transparent hover:border-gold">
                <h4 className="font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300 flex items-center">
                  <div className="w-1.5 h-4 bg-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {lang.language}
                </h4>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-gold to-yellow-400 h-3 rounded-full relative"
                    style={{ width: lang.width }}
                  >
                    <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-30"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 relative inline-block">
              Certifications & Courses
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gold to-yellow-400 rounded-full transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-lg lg:text-xl text-gray-600">Continuous learning and professional development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Foundations of Digital Marketing and E-commerce',
                issuer: 'Coursera',
                hours: '12 hours',
                icon: TrendingUp
              },
              {
                name: 'Attract and Engage Customers with Digital Marketing',
                issuer: 'Coursera',
                hours: '14 hours',
                icon: Users
              },
              {
                name: 'From Likes to Leads: Interact with Customers Online',
                issuer: 'Coursera',
                hours: '21 hours',
                icon: TrendingUp
              },
              {
                name: 'Think Outside the Inbox: Email Marketing',
                issuer: 'Coursera',
                hours: '18 hours',
                icon: Mail
              },
              {
                name: 'Assess for Success: Marketing Analytics and Measurement',
                issuer: 'Coursera',
                hours: '18 hours',
                icon: BarChart3
              },
              {
                name: 'Make the Sale: Build, Launch, and Manage E-commerce Stores',
                issuer: 'Coursera',
                hours: '15 hours',
                icon: Briefcase
              },
              {
                name: 'Satisfaction Guaranteed: Develop Customer Loyalty Online',
                issuer: 'Coursera',
                hours: '15 hours',
                icon: Users
              },
              {
                name: 'Accelerate Your Job Search with AI',
                issuer: 'Coursera',
                hours: '',
                icon: TrendingUp
              },
              {
                name: 'Person-Centred Counselling Course',
                issuer: 'Udemy',
                hours: '',
                icon: Users
              },
              {
                name: 'Diploma Training Course in Modern Applied Psychology (DiMAP)',
                issuer: 'Udemy',
                hours: '',
                icon: Brain
              }
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold/20 group-hover:bg-gold/30 p-3 rounded-full transition-colors duration-300 mt-1">
                      <Icon className="text-gold" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-poppins font-semibold text-lg text-navy mb-1 group-hover:text-gold transition-colors duration-200">{cert.name}</h4>
                      <p className="text-gold font-medium mb-1">{cert.issuer}</p>
                      {cert.hours && <p className="text-gray-600 text-sm">{cert.hours}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Skills Summary */}
          <div className="mt-16 bg-gradient-to-br from-white to-gray-50 p-6 lg:p-8 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="font-poppins text-2xl font-bold text-navy mb-8 text-center relative inline-block">
              Key Skills Acquired
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold to-yellow-400 rounded-full"></div>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Digital Marketing Strategy', 'Social Media Marketing', 'Email Marketing', 'Content Creation',
                'SEO Fundamentals', 'Marketing Analytics', 'E-commerce Management', 'Customer Relationship Management',
                'Campaign Planning', 'Performance Tracking', 'Conversion Optimization', 'Brand Development'
              ].map((skill, index) => (
                <div key={index} className="group flex items-center space-x-3 p-3 bg-white hover:bg-gold/10 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-gold/20">
                  <div className="w-2 h-2 bg-gold rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-gray-700 group-hover:text-navy font-medium text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-navy via-navy/95 to-navy/90 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
              Let's Connect
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gold to-yellow-400 rounded-full transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-lg lg:text-xl text-gray-300">Ready to discuss opportunities and collaborations</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg p-6 lg:p-8 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>
              
              <h3 className="font-poppins text-2xl font-bold mb-6 flex items-center">
                <div className="w-1.5 h-6 bg-gold rounded-full mr-3"></div>
                Send a Message
              </h3>
              
              <form className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 group-focus-within:text-gold transition-colors duration-200">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 placeholder-white/60 shadow-inner"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 group-focus-within:text-gold transition-colors duration-200">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 placeholder-white/60 shadow-inner"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-focus-within:text-gold transition-colors duration-200">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 placeholder-white/60 shadow-inner"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-focus-within:text-gold transition-colors duration-200">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 placeholder-white/60 shadow-inner"
                    placeholder="Job Opportunity / Project Collaboration"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-focus-within:text-gold transition-colors duration-200">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 resize-none placeholder-white/60 shadow-inner"
                    placeholder="I'd love to discuss..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="group w-full bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy px-8 py-4 rounded-xl font-poppins font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-gold flex items-center justify-center"
                >
                  <span className="mr-2">Send Message</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
              </form>
            </div>
            
            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-poppins text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-200">
                    <div className="bg-gold/20 p-3 rounded-full group-hover:bg-gold/30 transition-colors duration-200">
                      <Mail className="text-gold" size={20} />
                    </div>
                    <span className="group-hover:text-gold transition-colors duration-200">mrunmayishahane@gmail.com</span>
                  </div>
                  <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-200">
                    <div className="bg-gold/20 p-3 rounded-full group-hover:bg-gold/30 transition-colors duration-200">
                      <Phone className="text-gold" size={20} />
                    </div>
                    <span className="group-hover:text-gold transition-colors duration-200">+91 7775935914</span>
                  </div>
                  <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-200">
                    <div className="bg-gold/20 p-3 rounded-full group-hover:bg-gold/30 transition-colors duration-200">
                      <MapPin className="text-gold" size={20} />
                    </div>
                    <span className="group-hover:text-gold transition-colors duration-200">Pune, India</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-poppins text-xl font-semibold mb-4">Professional Links</h4>
                <div className="space-y-3">
                  <a href="https://linkedin.com/in/mrunmayi-shahane" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 text-gray-300 hover:text-gold transition-all duration-200 p-3 rounded-xl hover:bg-white/10">
                    <LinkedIn size={20} />
                    <span>LinkedIn Profile</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a href="#" className="group flex items-center space-x-3 text-gray-300 hover:text-gold transition-all duration-200 p-3 rounded-xl hover:bg-white/10">
                    <Calendar size={20} />
                    <span>Schedule a Meeting</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a href="/Modern_Simple_ATS_Friendly_LateX_CV.pdf" download className="group flex items-center space-x-3 text-gray-300 hover:text-gold transition-all duration-200 p-3 rounded-xl hover:bg-white/10">
                    <Download size={20} />
                    <span>Download Resume</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h4 className="font-poppins text-lg font-semibold mb-3">Quick Response</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  I typically respond within 24 hours. For urgent matters, please feel free to call directly.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-navy-dark text-gray-400 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="font-poppins font-bold text-2xl mb-4">
              <span className="bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">Mrunmayi Shahane</span>
            </div>
            <p className="mb-6">Digital Marketer and HR Professional</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://linkedin.com/in/mrunmayi-shahane" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full hover:bg-gold/10 transition-all duration-200 hover:scale-110">
                <LinkedIn className="group-hover:text-gold transition-colors duration-200" size={24} />
              </a>
              <a href="mailto:mrunmayishahane@gmail.com" className="group p-3 rounded-full hover:bg-gold/10 transition-all duration-200 hover:scale-110">
                <Mail className="group-hover:text-gold transition-colors duration-200" size={24} />
              </a>
              <a href="tel:+917775935914" className="group p-3 rounded-full hover:bg-gold/10 transition-all duration-200 hover:scale-110">
                <Phone className="group-hover:text-gold transition-colors duration-200" size={24} />
              </a>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto mb-6"></div>
            <p className="text-sm">
              © 2024 Mrunmayi Shahane. All rights reserved. | Digital Marketing & HR Professional
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy p-3 rounded-full shadow-gold hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50 border-2 border-white/30"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="animate-bounce-slow" />
        </button>
      )}
    </div>
  );
}

export default App;