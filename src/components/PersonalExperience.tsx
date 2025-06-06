import React from 'react';

const PersonalExperience = () => {
  const journalEntries = [
    {
      date: "First Discovery",
      title: "The Day Everything Changed",
      content: "I was fourteen when I first heard 'Changes' playing from my older brother's room. The raw honesty in Tupac's voice, the way he articulated pain and hope in the same breath – it was unlike anything I had ever experienced. That moment planted a seed that would grow into a lifelong journey of understanding, not just his music, but the man behind it."
    },
    {
      date: "Deeper Understanding",
      title: "Beyond the Surface",
      content: "As I grew older, I began to understand that Tupac wasn't just a rapper – he was a poet, a philosopher, a revolutionary. His words on 'The Rose That Grew from Concrete' taught me that beauty and strength can emerge from the harshest circumstances. His vulnerability in songs like 'Dear Mama' showed me that real strength comes from acknowledging our struggles, not hiding them."
    },
    {
      date: "Personal Reflection",
      title: "Lessons That Shaped Me",
      content: "Tupac's message of staying true to yourself while fighting for what's right has guided me through my darkest moments. When I faced my own struggles with identity and purpose, his words reminded me that our circumstances don't define us – our choices do. 'Reality is wrong. Dreams are for real' became my mantra during times when the world seemed impossible to change."
    },
    {
      date: "Continuing Legacy",
      title: "Carrying the Torch",
      content: "Creating this website isn't just about honoring Tupac's memory – it's about ensuring his message continues to reach new generations. Every quote, every story, every image here represents a piece of a larger puzzle: how one person's truth can illuminate the path for millions. His legacy lives on not just in his music, but in every person who refuses to be silenced in the face of injustice."
    }
  ];

  return (
    <section id="experience-section" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title">My Personal Journey with Tupac</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A digital journal chronicling how Tupac's words and wisdom have shaped my perspective and life journey
          </p>
        </div>

        <div className="space-y-16">
          {journalEntries.map((entry, index) => (
            <div 
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Journal Paper Effect */}
              <div className="glass-effect rounded-lg p-8 md:p-12 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-tupac-gold to-transparent opacity-20"></div>
                
                <div className="relative z-10">
                  {/* Date badge */}
                  <div className="inline-block px-4 py-2 bg-tupac-maroon text-foreground rounded-lg mb-6">
                    <span className="text-sm font-medium">{entry.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl font-playfair font-bold text-tupac-gold mb-6">
                    {entry.title}
                  </h3>
                  
                  {/* Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed text-foreground">
                      {entry.content}
                    </p>
                  </div>
                </div>

                {/* Decorative quote mark */}
                <div className="absolute bottom-4 right-8 text-6xl text-tupac-gold opacity-10 font-playfair">
                  "
                </div>
              </div>

              {/* Connection line (except for last entry) */}
              {index < journalEntries.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-1 h-12 bg-gradient-to-b from-tupac-gold to-tupac-maroon"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Personal Message */}
        <div className="mt-20 text-center">
          <div className="glass-effect rounded-lg p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl font-playfair italic text-tupac-gold mb-6">
              "His music didn't just entertain me – it educated me, inspired me, and ultimately transformed me."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              This website is my tribute to the man whose words continue to guide and inspire me every day. 
              Through these pages, I hope to share not just his story, but the ongoing impact of his legacy on people like me – 
              ordinary individuals who found extraordinary strength in his message.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalExperience;
