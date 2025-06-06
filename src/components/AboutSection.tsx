
import React from 'react';

const AboutSection = () => {
  const timelineEvents = [
    {
      year: "1971",
      title: "Birth in New York",
      description: "Born Lesane Parish Crooks in East Harlem, New York City"
    },
    {
      year: "1988",
      title: "Baltimore School for the Arts",
      description: "Studied acting, poetry, jazz, and ballet. Met Jada Pinkett"
    },
    {
      year: "1990",
      title: "Digital Underground",
      description: "Joined as a backup dancer and rapper"
    },
    {
      year: "1991",
      title: "Solo Career Launch",
      description: "Released debut album '2Pacalypse Now'"
    },
    {
      year: "1995",
      title: "Me Against the World",
      description: "Released while in prison, debuted at #1 on Billboard 200"
    },
    {
      year: "1996",
      title: "All Eyez on Me",
      description: "Double album that became his most successful release"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="section-title">The Man Behind the Legend</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tupac Amaru Shakur was more than a rapper; he was a poet, actor, and revolutionary 
            whose words continue to inspire generations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-3xl font-playfair font-bold text-tupac-gold mb-6">
                A Voice for the Voiceless
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Born into struggle and raised in the crucible of social injustice, 
                Tupac emerged as one of the most influential artists of his generation. 
                His music transcended entertainment, becoming a powerful vehicle for 
                social commentary and change.
              </p>
              <p className="text-lg leading-relaxed">
                From his early days in Baltimore School for the Arts to his meteoric 
                rise in hip-hop, Tupac's journey was marked by artistic brilliance, 
                controversy, and an unwavering commitment to speaking truth to power.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="glass-effect rounded-lg p-8 hover:shadow-xl hover:shadow-tupac-gold/10 transition-all duration-300">
              <div className="w-full h-80 bg-gradient-to-br from-tupac-maroon to-tupac-black rounded-lg flex items-center justify-center">
                <span className="text-tupac-gold text-6xl font-playfair">2PAC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-playfair font-bold text-tupac-gold text-center mb-12">
            Timeline of a Legend
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-tupac-gold to-tupac-maroon"></div>
            
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <div className="glass-effect rounded-lg p-6 hover:shadow-lg hover:shadow-tupac-gold/10 transition-all duration-300">
                    <div className="text-tupac-gold font-bold text-xl mb-2">{event.year}</div>
                    <h4 className="text-xl font-playfair font-semibold mb-3">{event.title}</h4>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-tupac-gold rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
