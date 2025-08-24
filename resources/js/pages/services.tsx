import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold font-serif mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive palm oil solutions designed to meet the diverse needs 
              of our global clientele with excellence and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Global Trading</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                International trading services with established networks across major 
                markets, ensuring competitive pricing and reliable delivery worldwide.
              </p>
              <ul className="text-gray-600 text-left space-y-2 mb-6">
                <li>• Spot and contract trading</li>
                <li>• Market analysis and insights</li>
                <li>• Risk management solutions</li>
                <li>• Logistics coordination</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive quality control and assurance programs ensuring 
                all products meet international standards and specifications.
              </p>
              <ul className="text-gray-600 text-left space-y-2 mb-6">
                <li>• RSPO certification</li>
                <li>• Laboratory testing</li>
                <li>• Quality documentation</li>
                <li>• Compliance monitoring</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Processing Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                State-of-the-art processing facilities delivering high-quality 
                crude palm oil and derivatives with optimal efficiency.
              </p>
              <ul className="text-gray-600 text-left space-y-2 mb-6">
                <li>• CPO extraction</li>
                <li>• Refining services</li>
                <li>• Fractionation</li>
                <li>• Custom processing</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Supply Chain Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end supply chain solutions optimizing efficiency from 
                plantation to destination with full traceability.
              </p>
              <ul className="text-gray-600 text-left space-y-2 mb-6">
                <li>• Inventory management</li>
                <li>• Transportation planning</li>
                <li>• Warehousing solutions</li>
                <li>• Supply chain optimization</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Consultation Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert consultation and advisory services helping clients 
                navigate market complexities and optimize their operations.
              </p>
              <ul className="text-gray-600 text-left space-y-2 mb-6">
                <li>• Market intelligence</li>
                <li>• Technical advisory</li>
                <li>• Sustainability guidance</li>
                <li>• Process optimization</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sustainability Programs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive sustainability programs promoting responsible 
                practices and environmental stewardship across operations.
              </p>
              <ul className="text-gray-600 text-left space-y-2 mb-6">
                <li>• RSPO compliance</li>
                <li>• Zero deforestation</li>
                <li>• Community development</li>
                <li>• Environmental monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined approach ensuring exceptional service delivery 
              and customer satisfaction at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h4 className="text-lg font-semibold mb-2">Consultation</h4>
              <p className="text-gray-600">
                Understanding your specific requirements and objectives
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h4 className="text-lg font-semibold mb-2">Planning</h4>
              <p className="text-gray-600">
                Developing customized solutions and implementation strategies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h4 className="text-lg font-semibold mb-2">Execution</h4>
              <p className="text-gray-600">
                Delivering services with precision and quality assurance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h4 className="text-lg font-semibold mb-2">Support</h4>
              <p className="text-gray-600">
                Ongoing support and continuous improvement initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let us help you achieve your goals with our comprehensive 
            palm oil solutions and expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Get Started Today
            </button>
            <a 
              href="/products" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              View Our Products
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}