import React from 'react';
import useScrollIntoView from '../hooks/useScrollIntoView';
import { TelecelLogo } from './icons/TelecelLogo';

const ExperienceCard: React.FC = () => {
    const [targetRef] = useScrollIntoView<HTMLDivElement>();
    return (
        <div ref={targetRef} className="scroll-target floating-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 border border-red-500/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-16 h-16 mr-4 flex items-center justify-center rounded-lg bg-white p-1">
                        <TelecelLogo className="h-10 w-10"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Network Engineer</h3>
                        <p className="text-red-400 font-semibold">Telecel Ghana</p>
                    </div>
                </div>
                <p className="text-gray-400 font-medium">2020 - Present</p>
            </div>
            <div className="font-inter text-gray-300 space-y-3">
                <p>Leading the planning and deployment of 4G/LTE network expansions, increasing coverage by 30% in key regions.</p>
                <p>Responsible for core network routing and switching infrastructure, maintaining 99.99% uptime through proactive monitoring and redundancy planning.</p>
                <p>Implemented advanced network security protocols, significantly reducing vulnerabilities and external threats.</p>
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
  const [targetRef] = useScrollIntoView<HTMLDivElement>();
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-4xl mx-auto">
        <div ref={targetRef} className="text-center mb-16 scroll-target">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Experience</h2>
          <p className="text-gray-300 text-lg">My professional journey in the telecommunications industry.</p>
        </div>
        <ExperienceCard />
      </div>
    </section>
  );
};

export default Experience;