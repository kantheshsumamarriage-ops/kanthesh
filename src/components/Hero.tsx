import { ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const stats = [
    { value: '50k+', label: 'VEHICLES PROTECTED' },
    { value: '100%', label: 'CERTIFIED TECHNICIANS' },
    { value: 'Climate', label: 'CONTROLLED STUDIO' },
    { value: 'Premium', label: 'BRANDS ONLY' },
  ];

  return (
    <section className="relative min-h-screen bg-zinc-950 text-white pt-32 pb-20 px-8">
      <div className="max-w-[90rem] mx-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="border-l border-zinc-800 pl-6">
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="mb-24">
          <ArrowRight className="w-12 h-12 text-zinc-700" />
        </div>

        {/* Headline */}
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            Uncompromising <span className="text-amber-500">Protection.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
            We utilize the industry's most advanced materials and techniques to preserve and enhance your vehicle's finish.
          </p>
        </div>
      </div>
    </section>
  );
}
