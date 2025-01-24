import Image from "next/image";

export default function TechStack() {
  const frontEndTech = [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Vue", icon: "devicon-vuejs-plain colored" },
  ];

  const backEndTech = [
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "Go", icon: "devicon-go-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  ];

  const devOpsTech = [
    { name: "Linux OS", icon: "devicon-linux-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Jenkins", icon: "devicon-jenkins-plain colored" },
    { name: "Ansible", icon: "devicon-ansible-plain colored" },
    { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
    { name: "Grafana", icon: "devicon-grafana-plain colored" },
    { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
    { name: "Vercel", icon: "/vercel.svg", isLocal: true },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-violet-900">
      <div className="container py-8 md:py-12">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Tech Stack
          </h1>

          {/* Front End Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-pink-500 text-center">
              Front End
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {frontEndTech.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors backdrop-blur-sm border border-gray-700"
                >
                  <i className={`${tech.icon} text-4xl mb-2`}></i>
                  <span className="text-sm text-center text-gray-200">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Back End Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-purple-500 text-center">
              Back End
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {backEndTech.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors backdrop-blur-sm border border-gray-700"
                >
                  <i className={`${tech.icon} text-4xl mb-2`}></i>
                  <span className="text-sm text-center text-gray-200">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* DevOps Section */}
          <section className="space-y-6">
            <h2 className="text-center text-2xl font-semibold text-violet-500">
              DevOps
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {devOpsTech.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors backdrop-blur-sm border border-gray-700"
                >
                  {tech.isLocal ? (
                    <Image src={tech.icon} alt={tech.name} width={32} height={32} className="mb-2 invert" />
                  ) : (
                    <i className={`${tech.icon} text-4xl mb-2`}></i>
                  )}
                  <span className="text-sm text-center text-gray-200">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
