import React from 'react';
import useScrollIntoView from '../hooks/useScrollIntoView';
import { RoutingIcon, SwitchingIcon, FiberIcon, LteIcon } from './icons/SkillIcons';

const SkillCard: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
  <div className="flex flex-col items-center p-6 floating-card rounded-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/10">
    <div className="text-red-500 mb-3">{icon}</div>
    <p className="font-semibold text-lg">{name}</p>
  </div>
);

const TimelineItem: React.FC<{ year: string; title: string; text: string; isLast?: boolean }> = ({ year, title, text, isLast = false }) => {
  const [targetRef] = useScrollIntoView<HTMLDivElement>();
  return (
    <div ref={targetRef} className="relative pl-8 scroll-target">
      {!isLast && <div className="absolute left-0 top-2 h-full w-0.5 bg-gray-700"></div>}
      <div className="absolute left-[-6px] top-2 h-4 w-4 rounded-full bg-red-500 border-2 border-black"></div>
      <p className="text-red-400 font-semibold mb-1">{year}</p>
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-gray-300">{text}</p>
    </div>
  );
};

// Helper component to correctly use the hook inside a map
const AnimatedCardWrapper: React.FC<{ children: React.ReactNode, delay: number }> = ({ children, delay }) => {
    const [ref] = useScrollIntoView<HTMLDivElement>();
    return (
        <div ref={ref} className="scroll-target" style={{animationDelay: `${delay}ms`}}>
            {children}
        </div>
    );
};


const About: React.FC = () => {
  const [targetRef] = useScrollIntoView<HTMLDivElement>();

  const skills = [
    { name: 'Routing', icon: <RoutingIcon /> },
    { name: 'Switching', icon: <SwitchingIcon /> },
    { name: 'Fiber Optics', icon: <FiberIcon /> },
    { name: 'LTE/4G/5G', icon: <LteIcon /> },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div ref={targetRef} className="text-center mb-16 scroll-target">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">About Me</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            A dedicated and results-oriented Network Engineer with extensive experience at Telecel Ghana. Passionate about designing, implementing, and maintaining robust and scalable network infrastructures that drive modern connectivity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
             <AnimatedCardWrapper key={skill.name} delay={index * 150}>
                <SkillCard icon={skill.icon} name={skill.name} />
             </AnimatedCardWrapper>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10">Career Highlights</h3>
            <div className="space-y-12">
                <TimelineItem 
                    year="2020 - Present"
                    title="Network Engineer at Telecel Ghana"
                    text="Lead role in managing and optimizing core network services, ensuring high availability and performance for millions of subscribers."
                />
                <TimelineItem 
                    year="2018 - 2020"
                    title="Network Operations Specialist"
                    text="Managed daily network operations, troubleshooted complex issues, and contributed to major network upgrade projects."
                />
                 <TimelineItem 
                    year="2016"
                    title="Started Journey in Networking"
                    text="Began professional career with a focus on enterprise networking, achieving Cisco CCNA certification and gaining foundational experience."
                    isLast={true}
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
