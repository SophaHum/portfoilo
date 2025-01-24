import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/sopha-hum/',
    label: 'LinkedIn'
  },
  {
    icon: FaGithub,
    href: 'https://github.com/SophaHum',
    label: 'GitHub'
  },
  {
    icon: FaEnvelope,
    href: 'mailto:contact@sophadev.com',
    label: 'Email'
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-violet-900">
      <div className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            About Me
          </h1>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <div className="space-y-8 text-lg text-gray-200">
              <p className="leading-relaxed">
                As a seasoned Software Engineer with 4+ years of experience at Peth Yoeung Co., Ltd., I&apos;ve successfully
                evolved from an intern to a Web Developer, showcasing both technical excellence and leadership
                capabilities.
              </p>

              <p className="leading-relaxed">
                Throughout my career, I&apos;ve specialized in full-stack web development, focusing on building scalable
                applications and optimizing system performance. My notable achievements include successfully
                implementing secure payment integrations with major banking institutions and architecting robust web
                solutions that drive business growth.
              </p>

              <p className="leading-relaxed">
                I excel in collaborative environments where I can leverage my expertise in mentoring junior developers
                and contributing to team success. My commitment to continuous learning keeps me at the forefront of
                technology trends, ensuring I deliver innovative solutions that meet modern business needs.
              </p>

              <div className="border-t border-gray-700 pt-8">
                <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                  Core Skills
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Full-stack Web Development</li>
                  <li>System Architecture & Design</li>
                  <li>Database Management & Optimization</li>
                  <li>API Integration & Development</li>
                  <li>Team Leadership & Mentoring</li>
                  <li>Agile Development Methodologies</li>
                </ul>
              </div>

              <div className="border-t border-gray-700 pt-8">
                {/* support light mode text */}
                <h2 className="text-2xl font-semibold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500">
                  Connect With Me
                </h2>
                <div className="flex space-x-6">
                  {socialLinks.map((link) => {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-purple-400 transition-colors"
                        aria-label={link.label}
                      >
                        {React.createElement(link.icon, { className: "w-8 h-8" })}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
