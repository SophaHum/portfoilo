import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface Technology {
  name: string;
  color: string;
}

interface Project {
  title: string;
  titleColor: string;
  description: string;
  technologies: Technology[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Password Manager",
    titleColor: "text-purple-500",
    description: "A secure password management application built with TypeScript and modern encryption standards.",
    technologies: [
      { name: "TypeScript", color: "bg-teal-700" },
      { name: "React", color: "bg-teal-700" },
      { name: "Node.js", color: "bg-teal-700" },
      { name: "Encryption", color: "bg-teal-700" }
    ],
    githubUrl: "https://github.com/SophaHum/password-manager"
  },
  {
    title: "Real-Time Chat",
    titleColor: "text-purple-500",
    description: "Real-time chat application with instant messaging capabilities.",
    technologies: [
      { name: "PHP", color: "bg-teal-700" },
      { name: "WebSocket", color: "bg-teal-700" },
      { name: "MySQL", color: "bg-teal-700" },
      { name: "JavaScript", color: "bg-teal-700" }
    ],
    githubUrl: "https://github.com/SophaHum/real-time-chat"
  },
  {
    title: "User Management Application",
    titleColor: "text-purple-500",
    description: "Full-stack user management system built with Golang and Next.js.",
    technologies: [
      { name: "Golang", color: "bg-teal-700" },
      { name: "Next.js", color: "bg-teal-700" },
      { name: "TypeScript", color: "bg-teal-700" },
      { name: "PostgreSQL", color: "bg-teal-700" }
    ],
    githubUrl: "https://github.com/SophaHum/Golang-NextJs_User_Management_Applicationa"
  },
  {
    title: "Learning Hub",
    titleColor: "text-purple-500",
    description: "Educational platform for online learning and course management.",
    technologies: [
      { name: "TypeScript", color: "bg-teal-700" },
      { name: "React", color: "bg-teal-700" },
      { name: "Node.js", color: "bg-teal-700" },
      { name: "MongoDB", color: "bg-teal-700" }
    ],
    githubUrl: "https://github.com/SophaHum/learning-hub"
  },
  {
    title: "Sass Start Kit",
    titleColor: "text-purple-500",
    description: "SaaS Start kit is a SaaS starter kit (boilerplate) that comes packed with all components required to run a modern SaaS software.",
    technologies: [
      { name: "Laravel", color: "bg-teal-700" },
      { name: "Livewire", color: "bg-teal-700" },
      { name: "Tailwind CSS", color: "bg-teal-700" },
      { name: "Postgresql", color: "bg-teal-700" }
    ],
    githubUrl: "https://github.com/SophaHum/saas-start-kit"
  },
  {
    title: "Full Stack DevOps Pipeline",
    titleColor: "text-purple-500",
    description: "A modern, responsive real-time chat application built with a comprehensive DevOps infrastructure, implementing industry best practices for deployment, scaling, and monitoring.",
    technologies: [
      { name: "Nuxt js", color: "bg-teal-700" },
      { name: "Express js", color: "bg-teal-700" },
      { name: "Tailwind css", color: "bg-teal-700" },
      { name: "MongoDB", color: "bg-teal-700" },
      { name: "Docker", color: "bg-teal-700" },
      { name: "Kubernetes", color: "bg-teal-700" },
      { name: "Jenkins", color: "bg-teal-700" },
      { name: "Prometheus", color: "bg-teal-700" },
      { name: "Grafana", color: "bg-teal-700" },
      { name: "Socket.io for WebSocket", color: "bg-teal-700" },
      { name: "Nginx", color: "bg-teal-700" },
      { name: "Github Actions", color: "bg-teal-700" },
      { name:"Redis for caching", color: "bg-teal-700" }
    ],
    githubUrl: "https://github.com/SophaHum/full-stack-ci-cd"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all">
      <h3 className={`text-2xl font-semibold mb-2 ${project.titleColor}`}>
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`${tech.color} px-3 py-1 rounded-full text-sm text-white`}
          >
            {tech.name}
          </span>
        ))}
      </div>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-gray-600 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400 transition-colors"
      >
        <FaGithub className="mr-2" />
        View on GitHub
      </a>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-violet-900">
      <div className="container py-8 md:py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Work
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
