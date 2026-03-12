import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { title: "Ceramic Coating", location: "Premium", subtitle: "Ultimate gloss and protection", image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000&auto=format&fit=crop' },
  { title: "Paint Protection", location: "Invisible", subtitle: "Self-healing technology", image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000&auto=format&fit=crop' },
  { title: "Interior Detail", location: "Sanitized", subtitle: "Like new again", image: 'https://images.unsplash.com/photo-1583121274602-3e2820c66888?q=80&w=1000&auto=format&fit=crop' },
  { title: "Window Tinting", location: "Cooling", subtitle: "Heat rejection performance", image: 'https://images.unsplash.com/photo-1552930294-6b19460f2a58?q=80&w=1000&auto=format&fit=crop' },
  { title: "Vinyl Wrap", location: "Custom", subtitle: "Express your style", image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop' },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(2);

  const next = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="gallery" className="bg-zinc-950 overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-6">
        <div className="flex justify-between items-end mb-16 max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-zinc-100">
            Our <span className="text-amber-500 italic">Work.</span>
          </h2>
          <a href="#" className="text-sm font-semibold text-zinc-400 hover:text-amber-500 transition-colors">
            View Instagram &rarr;
          </a>
        </div>

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center w-full">
          {projects.map((project, index) => {
            const offset = (index - activeIndex + projects.length) % projects.length;
            
            let x = "0%";
            let scale = 1;
            let zIndex = 10;
            let opacity = 1;

            if (offset === 0) { // Center
              x = "0%";
              scale = 1;
              zIndex = 30;
              opacity = 1;
            } else if (offset === 1) { // Right 1
              x = "90%";
              scale = 0.85;
              zIndex = 20;
              opacity = 0.6;
            } else if (offset === 2) { // Right 2
              x = "160%";
              scale = 0.7;
              zIndex = 10;
              opacity = 0.3;
            } else if (offset === 3) { // Left 2
              x = "-160%";
              scale = 0.7;
              zIndex = 10;
              opacity = 0.3;
            } else if (offset === 4) { // Left 1
              x = "-90%";
              scale = 0.85;
              zIndex = 20;
              opacity = 0.6;
            }
            
            const isActive = offset === 0;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  x,
                  scale,
                  zIndex,
                  opacity,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="absolute w-[280px] h-[400px] md:w-[400px] md:h-[550px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
                onClick={() => setActiveIndex(index)}
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 hover:opacity-50'}`}>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                    >
                      <h3 className="text-white text-3xl md:text-4xl font-display font-bold tracking-wider uppercase mb-2">
                        {project.title} <br/>
                        <span className="text-amber-500">- {project.location}</span>
                      </h3>
                      <p className="text-zinc-200 text-xs md:text-sm tracking-widest uppercase mt-4">{project.subtitle}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <button onClick={prev} className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:text-amber-500 transition-colors"><ChevronLeft className="w-6 h-6" /></button>
          <button onClick={next} className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:text-amber-500 transition-colors"><ChevronRight className="w-6 h-6" /></button>
        </div>
      </div>
    </section>
  );
}
