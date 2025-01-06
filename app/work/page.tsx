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
    githubUrl: "https://github.com/SophaHum/user-management"
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
    title: "Laravel React Integration",
    titleColor: "text-purple-500",
    description: "Full-stack web application showcasing Laravel and React integration.",
    technologies: [
      { name: "PHP", color: "bg-teal-700" },
      { name: "Laravel", color: "bg-teal-700" },
      { name: "React", color: "bg-teal-700" },
      { name: "MySQL", color: "bg-teal-700" }
    ],
    githubUrl: "https://github.com/SophaHum/laravel-react"
  },
  {
    title: "Vue.js CRUD with Supabase",
    titleColor: "text-purple-500",
    description: "CRUD application built with Vue.js and Supabase backend.",
    technologies: [
      { name: "Vue.js", color: "bg-teal-700" },
      { name: "Supabase", color: "bg-teal-700" },
      { name: "JavaScript", color: "bg-teal-700" },
      { name: "SQL", color: "bg-teal-700" }
    ],
    githubUrl: "https://github.com/SophaHum/crud-supabase-vue-js"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-lg hover:bg-gray-700/50 transition-all">
      <h3 className={`text-2xl font-semibold mb-2 ${project.titleColor}`}>
        {project.title}
      </h3>
      <p className="text-gray-200 mb-4">{project.description}</p>
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
        className="inline-flex items-center text-gray-200 hover:text-purple-400 transition-colors"
      >
        <FaGithub className="mr-2" />
        View on GitHub
      </a>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="container py-8 md:py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
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
