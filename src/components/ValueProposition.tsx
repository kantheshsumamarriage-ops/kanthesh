import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, MessageSquare, SprayCan, Leaf, Car, ShieldCheck, MapPin, Circle } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: "In-House Training",
    description: "Technicians trained through our proprietary apprenticeship program for unmatched precision and care."
  },
  {
    icon: MessageSquare,
    title: "Transparent Advice",
    description: "Clear, tailored advice for your car and lifestyle with transparent pricing and no pushy sales."
  },
  {
    icon: SprayCan,
    title: "Premium Products",
    description: "Only the best brands in the industry—no off-label or inferior products."
  },
  {
    icon: Leaf,
    title: "Climate-Controlled Shop",
    description: "Flawless, custom-fit application done in our clean, climate-controlled environment."
  },
  {
    icon: Car,
    title: "Complimentary Loaners",
    description: "Easy access to complimentary loaner cars, so your schedule never has to slow down."
  },
  {
    icon: ShieldCheck,
    title: "Solid Guarantee",
    description: "Backed by a guarantee that actually means something. We fix what others won't."
  }
];

export default function ValueProposition() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const wheelRotation = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <section ref={containerRef} className="bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Animated Wheel */}
      <motion.div 
        style={{ rotate: wheelRotation }}
        className="absolute -right-40 top-0 w-[600px] h-[600px] border-[10px] border-zinc-900 rounded-full flex items-center justify-center opacity-20 pointer-events-none"
      >
        <div className="w-full h-[2px] bg-zinc-900 absolute" />
        <div className="w-full h-[2px] bg-zinc-900 absolute rotate-45" />
        <div className="w-full h-[2px] bg-zinc-900 absolute rotate-90" />
        <div className="w-full h-[2px] bg-zinc-900 absolute rotate-[135deg]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-zinc-100">
            Where Craft Meets <span className="text-amber-500 italic">Precision</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mb-8">
            Every masterpiece begins in the right environment. Our flagship studio is the heart of our operations, where we blend passion with professional-grade technology to redefine automotive care.
          </p>
          <div className="flex items-center gap-3 text-amber-500 bg-amber-500/10 px-6 py-4 rounded-2xl border border-amber-500/20 inline-flex">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">9th Main Hongasandra GB Palya Rd, B Block, AECS Layout, Singasandra, Bengaluru</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-3xl overflow-hidden">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-zinc-950 p-10 hover:bg-zinc-900 transition-colors group"
            >
              <feature.icon className="w-8 h-8 text-amber-500 mb-6" />
              <h3 className="text-xl font-medium text-zinc-100 mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
