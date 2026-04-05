"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/data";
import { SectionEyebrow } from "@/components/global";

export const Gallery = () => {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedGalleryIndex === null) return;
    setSelectedGalleryIndex((selectedGalleryIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selectedGalleryIndex === null) return;
    setSelectedGalleryIndex((selectedGalleryIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
          <div className="bg-accent/10 p-5 rounded-full ring-8 ring-accent/5">
            <Car size={32} className="text-accent" />
          </div>
          <div className="text-center md:text-left">
            <SectionEyebrow>Driving School Photos</SectionEyebrow>
            <h2 className="mt-4 font-headline text-5xl font-bold text-white tracking-tight">Our Gallery</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => setSelectedGalleryIndex(0)}
            className="group relative h-[600px] cursor-pointer overflow-hidden rounded-[3rem] border border-white/10 md:col-span-2 lg:col-span-1 lg:row-span-2"
          >
            <img 
              src={galleryImages[0].src} 
              alt={galleryImages[0].alt} 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 p-10 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
              <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">{galleryImages[0].alt}</p>
              <h3 className="font-headline text-3xl font-bold text-white leading-tight">
                {galleryImages[0].detail}
              </h3>
            </div>
          </motion.div>

          {galleryImages.slice(1, 5).map((image, index) => (
             <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedGalleryIndex(index + 1)}
                className="group relative h-[288px] cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10"
             >
                <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-1">{image.alt}</p>
                    <h3 className="text-lg font-bold text-white">{image.detail}</h3>
                </div>
             </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedGalleryIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-1000 flex items-center justify-center bg-black/95 p-4 lg:p-20 backdrop-blur-2xl"
              onClick={() => setSelectedGalleryIndex(null)}
            >
               <button 
                onClick={(e) => { e.stopPropagation(); setSelectedGalleryIndex(null); }}
                className="absolute right-8 top-8 z-50 text-white/40 transition-colors hover:text-white"
               >
                <X size={40} />
               </button>

               <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-8 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/5 p-4 text-white/40 transition-all shadow-2xl hover:bg-white/10 hover:text-white"
               >
                <ChevronLeft size={32} />
               </button>

               <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-8 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/5 p-4 text-white/40 transition-all shadow-2xl hover:bg-white/10 hover:text-white"
               >
                <ChevronRight size={32} />
               </button>

               <motion.div
                key={selectedGalleryIndex}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="relative max-h-full max-w-6xl overflow-hidden rounded-[3rem] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
               >
                 <img 
                    src={galleryImages[selectedGalleryIndex].src} 
                    className="h-auto max-h-[80vh] w-auto border border-white/10 object-contain shadow-2xl"
                    alt={galleryImages[selectedGalleryIndex].alt} 
                 />
                 <div className="bg-ink/80 p-8 backdrop-blur-md">
                    <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">{galleryImages[selectedGalleryIndex].alt}</p>
                    <h3 className="text-xl font-bold text-white">{galleryImages[selectedGalleryIndex].detail}</h3>
                 </div>
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
