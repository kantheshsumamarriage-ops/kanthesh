import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const projects = [
  { title: "Ceramic Coating", location: "Premium", subtitle: "Ultimate gloss and protection", image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000&auto=format&fit=crop' },
  { title: "Paint Protection", location: "Invisible", subtitle: "Self-healing technology", image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000&auto=format&fit=crop' },
  { title: "Interior Detail", location: "Sanitized", subtitle: "Like new again", image: 'https://images.unsplash.com/photo-1583121274602-3e2820c66888?q=80&w=1000&auto=format&fit=crop' },
  { title: "Window Tinting", location: "Cooling", subtitle: "Heat rejection performance", image: 'https://images.unsplash.com/photo-1552930294-6b19460f2a58?q=80&w=1000&auto=format&fit=crop' },
  { title: "Vinyl Wrap", location: "Custom", subtitle: "Express your style", image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop' },
];

export default function GalleryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-zinc-950/90 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-white hover:text-amber-500">
          <X className="w-8 h-8" />
        </button>

        <div className="max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setEnlargedImage(project.image)}
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setEnlargedImage(null)}
          >
            <img src={enlargedImage} alt="Enlarged" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
