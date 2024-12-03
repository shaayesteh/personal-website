import { ExternalLink, Github } from 'lucide-react';
import drum from '../components/assets/drum.png';
import faal from '../components/assets/faal.png';
import form from '../components/assets/form.png';

const projects = [
  {
    title: 'Drum Machine',
    description: 'A full-featured online drum machine built with React and Bootstrap',
    image: drum,
    tech: ['JavaScript', 'HTML', 'Bootstrap'],
    github: 'https://github.com/shaayesteh/drum-machine',
    live: 'https://drum-machine-sha.netlify.app/'
  },
  {
    title: 'Random Quote Generator',
    description: 'A simple web app that generates random quotes from Hafez poems',
    image: faal,
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/shaayesteh/fal-hafez',
    live: 'https://fal-hafez.netlify.app/'
  },
  {
    title: 'Job Application Form',
    description: 'A job application form designed to collect basic information from job applicants, including their name, email and skills',
    image: form,
    tech: ['Next', 'Tailwind CSS', 'Zustand'],
    github: 'https://github.com/shaayesteh/job-application-form',
    live: 'https://job-application-task.netlify.app/'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}