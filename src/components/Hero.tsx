import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Frontend Developer <br />
              Building Modern Web Experiences
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hi, I'm Sha. I craft responsive and performant web applications 
              with modern technologies and best practices.
            </p>
            <div className="flex gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" 
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}