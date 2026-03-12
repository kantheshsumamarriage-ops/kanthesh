import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const stages = [
  {
    label: "01 PERFORMANCE",
    headline: "Protect What Drives You",
    description: "Paint damage from road debris, scratches, and weather can reduce the beauty of your vehicle.",
  },
  {
    label: "02 CRAFT",
    headline: "Invisible Protection",
    description: "Advanced Paint Protection Film creates a durable shield against scratches and debris.",
  },
  {
    label: "03 INNOVATION",
    headline: "Self-Healing Technology",
    description: "Minor scratches vanish with heat, keeping your vehicle flawless.",
  },
  {
    label: "04 CONFIDENCE",
    headline: "Drive With Confidence",
    description: "Premium protection engineered for luxury vehicles.",
  },
];

const backgroundImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583121274602-3e2820c66888?q=80&w=2070&auto=format&fit=crop",
  null,
];

export default function HeroScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stage1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const stage2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55], [0, 1, 0]);
  const stage3Opacity = useTransform(scrollYProgress, [0.5, 0.65, 0.8], [0, 1, 0]);
  const stage4Opacity = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1]);

  const ppfOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const scratchFilter = useTransform(scrollYProgress, [0.5, 0.7], [100, 0]); // Blur/contrast filter
  const overlayOpacity = 1.0; // Fixed opacity
  
  // Cinematic motion
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const panX = useTransform(scrollYProgress, [0, 1], [0, 50]);
  // Increased rotation range to better simulate wheel movement
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 20]); 

  return (
    <section ref={containerRef} className="h-[400vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-zinc-950">
        {/* Layer 1: Backgrounds */}
        {backgroundImages.map((src, i) => {
          const opacity = useTransform(scrollYProgress, [i * 0.25, i * 0.25 + 0.1, i * 0.25 + 0.15, i * 0.25 + 0.25], [0, 1, 1, 0]);
          if (!src) return <motion.div key={i} className="absolute inset-0 w-full h-full bg-zinc-950" style={{ opacity }} />;
          return (
            <motion.img
              key={i}
              src={src}
              alt={`Background ${i}`}
              style={{ scale, x: panX, opacity }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          );
        })}
        
        {/* Layer 2: Main Object (Car Front) */}
        <motion.img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop"
          alt="Car front"
          style={{ 
            scale, 
            x: panX,
            rotate: rotation,
            filter: useTransform(scratchFilter, (v) => `contrast(${v}%)`) 
          }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Dark Overlay for better text visibility */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 w-full h-full bg-black" 
        />

        {/* Layer 3: Animated PPF Layer */}
        <motion.div
          style={{ opacity: ppfOpacity }}
          className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-[2px]"
        />

        {/* Main Layout Container */}
        <div className="absolute inset-0 flex items-center z-50">
          {/* Progress Indicator Column */}
          <div className="w-1/2 flex flex-col gap-6 pl-24">
            {stages.map((stage, i) => {
              const opacity = useTransform(scrollYProgress, [i * 0.25, i * 0.25 + 0.1, i * 0.25 + 0.2], [0.3, 1, 0.3]);
              return (
                <div key={i} className="flex items-center gap-3">
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-white"
                    style={{ opacity }}
                  />
                  <motion.span 
                    className="text-white text-2xl font-mono tracking-widest uppercase"
                    style={{ opacity }}
                  >
                    {stage.label}
                  </motion.span>
                </div>
              );
            })}
          </div>

          {/* Content Column */}
          <div className="w-1/2 relative h-full flex items-center justify-start p-12">
            {[stage1Opacity, stage2Opacity, stage3Opacity, stage4Opacity].map((opacity, i) => (
              <motion.div key={i} style={{ opacity }} className="absolute inset-0 flex flex-col items-start justify-center p-12">
                <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                  {stages[i].headline}
                </h1>
                <p className="text-zinc-300 text-xl md:text-2xl max-w-2xl">
                  {stages[i].description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
