import React from 'react';
import useScrollIntoView from '../hooks/useScrollIntoView';

interface ProjectCardProps {
  title: string;
  description: string;
  details: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, details, imageUrl }) => {
  const [targetRef] = useScrollIntoView<HTMLDivElement>();
  return (
    <div ref={targetRef} className="group flip-card perspective-1000 scroll-target">
      <div className="flip-card-inner relative w-full h-96 rounded-2xl">
        {/* Front of Card */}
        <div className="flip-card-front absolute w-full h-full rounded-2xl overflow-hidden shadow-lg border border-red-500/20">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
        {/* Back of Card */}
        <div className="flip-card-back absolute w-full h-full rounded-2xl p-6 flex flex-col justify-center floating-card">
          <h4 className="text-xl font-bold text-red-400 mb-3">Key Achievements</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {details.map((detail, index) => <li key={index}>{detail}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [targetRef] = useScrollIntoView<HTMLDivElement>();
  const projects: ProjectCardProps[] = [
    {
      title: "National 4G LTE Rollout",
      description: "Expansion of high-speed mobile broadband across Ghana.",
      imageUrl: "https://developingtelecoms.com/images/stories/Features/Satellite_EMEA_600x450.jpg",
      details: [
        "Architected network topology for 200+ new cell sites.",
        "Improved data throughput by 40% on average.",
        "Coordinated with vendors for hardware deployment.",
      ],
    },
    {
      title: "Core Network Modernization",
      description: "Upgrading legacy systems to a virtualized infrastructure.",
      imageUrl: "https://blog.greencloudvps.com/wp-content/uploads/2024/10/network-modernization-1.jpeg",
      details: [
        "Migrated services with zero downtime.",
        "Reduced operational costs by 25%.",
        "Enhanced network scalability for future 5G integration.",
      ],
    },
    {
      title: "Fiber-to-the-Home (FTTH) Initiative",
      description: "Designing and overseeing a major residential fiber project.",
      imageUrl: "https://thetechblock.com/wp-content/uploads/2021/07/gpon_ftth.jpg",
      details: [
        "Designed passive optical network (PON) for 10,000+ homes.",
        "Ensured quality of service for high-speed internet.",
        "Managed contractor teams for civil works and installation.",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div ref={targetRef} className="text-center mb-16 scroll-target">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Featured Projects</h2>
          <p className="text-gray-300 text-lg">A selection of projects that showcase my skills and impact.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
             <div key={index} style={{animationDelay: `${index * 150}ms`}}>
                <ProjectCard {...project} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;