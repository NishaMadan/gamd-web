import React from 'react';

const milestones = [
  { year: '2008', title: 'Business Establishment', progress: 35 },
  { year: '2010', title: 'Becomes Subsidiary of Morgan Tecnica Spa', progress: 45 },
  { year: '2011', title: 'MITC Industrial Training Center', progress: 55 },
  { year: '2015', title: 'Essentials R&D and Manufacturing', progress: 65 },
  { year: '2018', title: 'ISO 9001 Certification', progress: 75 },
  { year: '2019', title: 'Delhi Office Opening', progress: 85 },
  { year: '2020', title: 'BPO / APO Service', progress: 95 },
];

const Milestones = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-grey-800 mb-2 uppercase">The Milestones</h2>
          <p className="text-gray-600">Our journey through the years.</p>
        </div>

        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center space-x-6"
            >
              {/* Year */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 font-bold text-lg">
                {milestone.year}
              </div>

              {/* Progress Bar and Title */}
              <div className="flex-1">
                <div className="relative w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-4 bg-red-600"
                    style={{ width: `${milestone.progress}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-gray-700 font-semibold">{milestone.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
