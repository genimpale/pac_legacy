import React from 'react';

const Legacy = () => {
  const legacyAreas = [
    {
      title: "Social Justice Advocacy",
      description: "Tupac's unflinching commentary on police brutality, systemic racism, and social inequality continues to resonate with activists and movements worldwide.",
      impact: "His songs like 'Changes' and 'Brenda's Got a Baby' remain anthems for social justice movements, inspiring new generations of activists.",
      icon: "⚖️"
    },
    {
      title: "Literary Influence",
      description: "Beyond music, Tupac was a gifted poet whose written works explore themes of love, struggle, and hope with profound depth and vulnerability.",
      impact: "His poetry collection 'The Rose That Grew from Concrete' is studied in schools and universities, bridging hip-hop culture with academic discourse.",
      icon: "📚"
    },
    {
      title: "Cultural Revolution",
      description: "Tupac helped establish hip-hop as a legitimate form of artistic expression and social commentary, elevating the genre's cultural significance.",
      impact: "He paved the way for conscious rap and demonstrated that hip-hop could be both entertaining and intellectually substantive.",
      icon: "🎵"
    },
    {
      title: "Youth Empowerment",
      description: "His message of self-determination and resilience continues to inspire young people to overcome adversity and pursue their dreams despite obstacles.",
      impact: "Countless artists, entrepreneurs, and leaders cite Tupac's influence as crucial to their personal development and success.",
      icon: "💪"
    }
  ];

  const quotes = [
    {
      text: "I'm not saying I'm gonna change the world, but I guarantee that I will spark the brain that will change the world.",
      context: "On his role as an artist and activist"
    },
    {
      text: "The only way to change things is to shoot men who arrange things.",
      context: "On systemic change and revolution"
    },
    {
      text: "My mama always used to tell me: 'If you can't find somethin' to live for, you best find somethin' to die for.'",
      context: "On finding purpose and meaning"
    }
  ];

  return (
    <section id="legacy-section" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Enduring Legacy</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tupac's influence extends far beyond music, shaping social movements, literature, and cultural discourse decades after his passing
          </p>
        </div>

        {/* Legacy Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {legacyAreas.map((area, index) => (
            <div 
              key={index}
              className="glass-effect rounded-lg p-8 hover:shadow-lg hover:shadow-tupac-gold/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-6">{area.icon}</div>
              <h3 className="text-2xl font-playfair font-bold text-tupac-gold mb-4">
                {area.title}
              </h3>
              <p className="text-foreground mb-6 leading-relaxed">
                {area.description}
              </p>
              <div className="border-l-4 border-tupac-gold pl-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Impact:</strong> {area.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Influential Quotes Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold text-tupac-gold text-center mb-12">
            Words That Changed the World
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="glass-effect rounded-lg p-8 text-center hover:shadow-lg hover:shadow-tupac-gold/10 transition-all duration-300"
              >
                <blockquote className="text-lg italic text-foreground mb-4 min-h-[120px] flex items-center">
                  "{quote.text}"
                </blockquote>
                <cite className="text-sm text-tupac-gold">{quote.context}</cite>
              </div>
            ))}
          </div>
        </div>

        {/* Statistical Impact */}
        <div className="glass-effect rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-playfair font-bold text-tupac-gold text-center mb-12">
            Legacy by Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-tupac-gold mb-2">75M+</div>
              <div className="text-sm text-muted-foreground">Records Sold Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tupac-gold mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years Since Passing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tupac-gold mb-2">6</div>
              <div className="text-sm text-muted-foreground">Posthumous Albums</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tupac-gold mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Lives Touched</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-tupac-gold mb-6">
              Continue the Legacy
            </h3>
            <p className="text-lg text-foreground mb-8">
              Tupac's message lives on through each person who refuses to accept injustice, 
              who speaks truth to power, and who believes in the possibility of change. 
              His legacy is not just in his music, but in the actions we take every day.
            </p>
            <blockquote className="text-xl italic text-tupac-gold">
              "I want to be remembered as someone who was sincere. Even if I made mistakes, 
              they were made in sincerity."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
