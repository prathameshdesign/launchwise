import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Clock, 
  Target, 
  Users, 
  Mail, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  FileText,
  Zap,
  BarChart3,
  Calendar,
  DollarSign,
  Activity,
  Eye,
  Gauge,
  Coffee
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let mouseTimer: NodeJS.Timeout;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when not at top of page
      if (currentScrollY > 100) {
        setShowHeader(false);
      } else {
        // At top of page, hide the animated header
        setShowHeader(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Clear any existing timer
      if (mouseTimer) {
        clearTimeout(mouseTimer);
      }
      
      // Show header when cursor is near top of screen (within 50px)
      if (e.clientY <= 50 && window.scrollY > 100) {
        setShowHeader(true);
        
        // Hide header again after 3 seconds if cursor moves away from top
        mouseTimer = setTimeout(() => {
          if (window.scrollY > 100) {
            setShowHeader(false);
          }
        }, 3000);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseTimer) {
        clearTimeout(mouseTimer);
      }
    };
  }, [lastScrollY]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  const scrollToWaitlist = () => {
    const waitlistElement = document.getElementById('waitlist');
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation - Hidden by default, shows on scroll up */}
      <nav className={`bg-white/95 backdrop-blur-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Rocket className="h-7 w-7 text-blue-600" />
              <span className="text-lg font-bold text-gray-900">LaunchWise</span>
            </div>
            <button 
              onClick={scrollToWaitlist}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-sm"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Initial Navigation - Static */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Rocket className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">LaunchWise</span>
            </div>
            <button 
              onClick={scrollToWaitlist}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-40 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Investor Updates
            <span className="block text-blue-600">Made Simple</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Write investor updates in minutes. Get replies in just a few hours.
          </p>
          <form id="waitlist" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-8 py-5 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-full sm:w-96"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-10 py-5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-3 w-full sm:w-auto text-lg"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
          {isSubmitted && (
            <div className="flex items-center justify-center space-x-3 text-green-600 font-medium mb-8 text-lg">
              <CheckCircle className="h-6 w-6" />
              <span>Thanks! We'll be in touch soon.</span>
            </div>
          )}
          <p className="text-base text-gray-500">
            Join 500+ founders already on the waitlist. No spam, ever.
          </p>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* Mobile Layout - Stacked */}
          <div className="block lg:hidden">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-12">
                The Problem Every Founder Faces
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4 text-lg">
                  <div className="bg-red-100 text-red-600 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <span className="text-gray-600 leading-relaxed">
                    Spending 4-6 hours every month writing investor updates
                  </span>
                </div>
                <div className="flex items-start space-x-4 text-lg">
                  <div className="bg-red-100 text-red-600 p-3 rounded-full flex-shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <span className="text-gray-600 leading-relaxed">
                    Not sure what to include or if anyone's reading it?
                  </span>
                </div>
                <div className="flex items-start space-x-4 text-lg">
                  <div className="bg-red-100 text-red-600 p-3 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <span className="text-gray-600 leading-relaxed">
                    Missing opportunities to strengthen investor relationships
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-12">
                Our Solution
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4 text-lg">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full flex-shrink-0">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="text-gray-600 leading-relaxed">
                    AI-powered templates that write updates in minutes, not hours
                  </span>
                </div>
                <div className="flex items-start space-x-4 text-lg">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full flex-shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <span className="text-gray-600 leading-relaxed">
                    Proven frameworks used by successful funded startups
                  </span>
                </div>
                <div className="flex items-start space-x-4 text-lg">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full flex-shrink-0">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <span className="text-gray-600 leading-relaxed">
                    Analytics to track engagement and improve communication
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Row-by-Row Alignment */}
          <div className="hidden lg:block">
            {/* Section Headers */}
            <div className="grid grid-cols-2 gap-24 mb-16">
              <div>
                <h2 className="text-5xl font-bold text-gray-900">
                  The Problem Every Founder Faces
                </h2>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-gray-900">
                  Our Solution
                </h2>
              </div>
            </div>

            {/* Row 1: Time Problem vs AI Solution */}
            <div className="grid grid-cols-2 gap-24 mb-16">
              <div className="flex items-center space-x-4 text-lg">
                <div className="bg-red-100 text-red-600 p-3 rounded-full flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <span className="text-gray-600 leading-relaxed">
                  Spending 4-6 hours every month writing investor updates
                </span>
              </div>
              <div className="flex items-center space-x-4 text-lg">
                <div className="bg-green-100 text-green-600 p-3 rounded-full flex-shrink-0">
                  <Zap className="h-6 w-6" />
                </div>
                <span className="text-gray-600 leading-relaxed">
                  AI-powered templates that write updates in minutes, not hours
                </span>
              </div>
            </div>

            {/* Row 2: Content Problem vs Framework Solution */}
            <div className="grid grid-cols-2 gap-24 mb-16">
              <div className="flex items-center space-x-4 text-lg">
                <div className="bg-red-100 text-red-600 p-3 rounded-full flex-shrink-0">
                  <Target className="h-6 w-6" />
                </div>
                <span className="text-gray-600 leading-relaxed">
                  Not sure what to include or if anyone's reading it?
                </span>
              </div>
              <div className="flex items-center space-x-4 text-lg">
                <div className="bg-green-100 text-green-600 p-3 rounded-full flex-shrink-0">
                  <FileText className="h-6 w-6" />
                </div>
                <span className="text-gray-600 leading-relaxed">
                  Proven frameworks used by successful funded startups
                </span>
              </div>
            </div>

            {/* Row 3: Relationship Problem vs Analytics Solution */}
            <div className="grid grid-cols-2 gap-24">
              <div className="flex items-center space-x-4 text-lg">
                <div className="bg-red-100 text-red-600 p-3 rounded-full flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <span className="text-gray-600 leading-relaxed">
                  Missing opportunities to strengthen investor relationships
                </span>
              </div>
              <div className="flex items-center space-x-4 text-lg">
                <div className="bg-green-100 text-green-600 p-3 rounded-full flex-shrink-0">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <span className="text-gray-600 leading-relaxed">
                  Analytics to track engagement and improve communication
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section - Moved here */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              What It Looks Like in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Here's how LaunchWise helps founders communicate progress clearly.
            </p>
          </div>
          
          {/* Dashboard Mockup */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-16">
            {/* Dashboard Header - Fixed alignment for mobile */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">LaunchWise</span>
                  </div>
                  <div className="text-gray-400 hidden sm:block">|</div>
                  <span className="text-gray-600 text-sm sm:text-base">December 2024 Update</span>
                </div>
                <button className="bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap">
                  Send Update
                </button>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-8">
              {/* Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center justify-between mb-3">
                    <DollarSign className="h-8 w-8 text-blue-600" />
                    <span className="text-green-600 text-sm font-medium">+12%</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">$847K</p>
                  <p className="text-gray-600 text-sm">Monthly Revenue</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <div className="flex items-center justify-between mb-3">
                    <Users className="h-8 w-8 text-green-600" />
                    <span className="text-green-600 text-sm font-medium">+8%</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">12,847</p>
                  <p className="text-gray-600 text-sm">Active Users</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <div className="flex items-center justify-between mb-3">
                    <Activity className="h-8 w-8 text-purple-600" />
                    <span className="text-green-600 text-sm font-medium">+15%</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">94%</p>
                  <p className="text-gray-600 text-sm">Engagement Rate</p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <div className="flex items-center justify-between mb-3">
                    <Calendar className="h-8 w-8 text-orange-600" />
                    <span className="text-gray-500 text-sm font-medium">On Track</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">Q1 2025</p>
                  <p className="text-gray-600 text-sm">Next Milestone</p>
                </div>
              </div>
              
              {/* Chart Area */}
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Growth</h3>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 text-sm">Last 12 months</span>
                  </div>
                </div>
                
                {/* Simplified Chart Representation */}
                <div className="flex items-end space-x-3 h-32">
                  {[40, 55, 35, 70, 45, 80, 60, 90, 75, 95, 85, 100].map((height, index) => (
                    <div
                      key={index}
                      className="bg-blue-500 rounded-t-sm flex-1 transition-all duration-300 hover:bg-blue-600"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                
                {/* Responsive Month Labels - Hidden on mobile, visible on desktop */}
                <div className="hidden md:flex justify-between mt-4 text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>
              
              {/* Update Preview */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Update Preview</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Ready to Send
                  </span>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p className="font-medium text-gray-900">Key Highlights This Month:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Revenue grew 12% to $847K, exceeding our Q4 target</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Signed 3 enterprise clients including Fortune 500 company</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Product team shipped new analytics dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Three Key Features - Fixed mobile alignment and spacing */}
          <div className="space-y-6 sm:space-y-0 sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-gray-700 font-medium text-lg">Visual-first layout</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Gauge className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-gray-700 font-medium text-lg">Growth-focused data</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Coffee className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-gray-700 font-medium text-lg">Built for busy founders</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Everything You Need to Communicate Like a Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built specifically for early-stage founders who want to impress investors 
              and save time on administrative tasks.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center p-12 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
              <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-8">
                <FileText className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Smart Templates</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Pre-built templates based on successful investor updates from funded startups. 
                Just fill in your metrics and we'll handle the rest.
              </p>
            </div>
            
            <div className="text-center p-12 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
              <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-8">
                <TrendingUp className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Progress Tracking</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Visualize your startup's journey with beautiful charts and metrics that 
                tell your growth story clearly and compellingly.
              </p>
            </div>
            
            <div className="text-center p-12 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
              <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-8">
                <Mail className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">One-Click Sending</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Send professionally formatted updates to your entire investor list with 
                one click. Track opens and engagement automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Trusted by Founders Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of founders who've improved their investor relationships
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full mr-6 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                    alt="Sarah Chen" 
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Sarah Chen</p>
                  <p className="text-gray-600">CEO, TechFlow</p>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "LaunchWise transformed how I communicate with investors. What used to take me 
                half a day now takes 30 minutes, and the feedback has been incredible."
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full mr-6 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                    alt="Marcus Rodriguez" 
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Marcus Rodriguez</p>
                  <p className="text-gray-600">Founder, DataSync</p>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "The templates are spot-on. Our investors love the clarity and consistency. 
                It's like having a communications expert on the team."
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full mr-6 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                    alt="Anna Larsson" 
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Anna Larsson</p>
                  <p className="text-gray-600">Co-founder, GreenTech</p>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "Since using LaunchWise, our investor engagement has increased 40%. 
                The analytics help us understand what resonates with our backers."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-8 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Save Hours Every Month. Get Updates That Actually Get Read.
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            LaunchWise helps startup founders write investor updates that build trust, get replies, and take just minutes to send.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-4 text-lg border-0 rounded-lg focus:ring-2 focus:ring-white focus:ring-opacity-50 outline-none w-full sm:w-80"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 w-full sm:w-auto text-lg"
            >
              Get Early Access
            </button>
          </form>
          {isSubmitted && (
            <div className="flex items-center justify-center space-x-3 text-white font-medium mb-6 text-lg">
              <CheckCircle className="h-6 w-6" />
              <span>Thanks! We'll be in touch soon.</span>
            </div>
          )}
          <p className="text-blue-100 text-base">
            No credit card needed · Built for early-stage founders
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2025 Prathamesh • Designed for portfolio use
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;