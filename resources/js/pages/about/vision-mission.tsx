import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function VisionMission() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold font-serif mb-6">
              Our Vision & Mission
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guided by our commitment to excellence, sustainability, and innovation 
              in the global palm oil industry.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
                Our Vision
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                "To be the global leader in sustainable palm oil production, 
                setting the standard for quality, environmental stewardship, 
                and social responsibility while driving innovation in the industry."
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where palm oil production harmoniously balances 
                economic prosperity with environmental conservation and community welfare. 
                Through continuous innovation and unwavering commitment to excellence, 
                we strive to transform the industry and create lasting positive impact 
                for generations to come.
              </p>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400?text=Vision+Sustainable+Future"
                alt="Sustainable Palm Oil Vision"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">2030</div>
                <div className="text-sm">Vision Goals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                "To deliver exceptional palm oil solutions through sustainable practices, 
                cutting-edge technology, and unwavering commitment to quality, while 
                fostering positive relationships with all stakeholders."
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Produce the highest quality palm oil products through sustainable 
                    and environmentally responsible practices.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Foster innovation and continuous improvement in all aspects of 
                    our operations and services.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Build lasting partnerships with customers, suppliers, communities, 
                    and stakeholders worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:order-1 relative">
              <img
                src="/api/placeholder/600/400?text=Mission+Excellence"
                alt="Mission Excellence"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">Excellence</div>
                <div className="text-sm text-gray-600">In Everything We Do</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide our decisions, shape our culture, 
              and drive our commitment to excellence in every aspect of our business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sustainability */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to protecting the environment and promoting 
                sustainable practices that preserve our planet for future generations.
              </p>
            </div>

            {/* Integrity */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We conduct business with honesty, transparency, and ethical practices, 
                building trust with all our stakeholders through consistent actions.
              </p>
            </div>

            {/* Excellence */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in all our endeavors, continuously improving 
                our processes, products, and services to exceed expectations.
              </p>
            </div>

            {/* Innovation */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace innovation and technology to drive efficiency, quality, 
                and sustainability in our operations and customer solutions.
              </p>
            </div>

            {/* Collaboration */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We foster collaborative partnerships with customers, suppliers, and 
                communities to achieve mutual success and shared prosperity.
              </p>
            </div>

            {/* Responsibility */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Responsibility</h3>
              <p className="text-gray-600 leading-relaxed">
                We take responsibility for our impact on society and the environment, 
                contributing positively to the communities where we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
              Strategic Goals 2024-2030
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our roadmap to achieving our vision through measurable objectives 
              and sustainable growth initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Environmental Goals</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  <span>Achieve 100% RSPO certification for all operations by 2025</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  <span>Reduce carbon emissions by 40% by 2030</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  <span>Zero deforestation across all supply chains</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  <span>Implement circular economy principles</span>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Business Goals</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span>Expand to 25 countries by 2028</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span>Increase processing capacity to 2M tons annually</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span>Develop 10 new product lines</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span>Achieve industry-leading customer satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with us to build a sustainable future for the palm oil industry 
            while creating shared value for all stakeholders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Partner With Us
            </button>
            <a 
              href="/about/leadership" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Meet Our Leadership
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}