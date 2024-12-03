import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>
        <div className="flex justify-center gap-8">
          <a 
            href="mailto:schaayesteh@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} />
            Send Email
          </a>
          <a 
            href="https://www.linkedin.com/in/schaayesteh/"
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/shaayesteh" className="text-gray-600 hover:text-gray-900">
            <Github size={24} />
          </a>
          <a href="https://twitter.com/schaayesteh" className="text-gray-600 hover:text-gray-900">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}