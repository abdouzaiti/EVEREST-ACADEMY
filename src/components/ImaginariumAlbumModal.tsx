import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, FolderHeart } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface ImaginariumAlbumModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'fr' | 'en' | 'ar';
}

const ALBUM_TRANSLATIONS = {
  fr: {
    title: "L'Album de l'Imaginarium",
    desc: "Plongez au cœur des ateliers créatifs, d'activités culturelles et des moments magiques de notre Académie.",
    close: "Fermer l'Album",
    backToAlbum: "Retour à l'album",
    of: "sur",
    polaroidLabel: "Souvenirs de l'Everest",
    featuredTitle: "📚✨ Rencontre inspirante à Everest Academy ✨📚",
    featuredParagraphs: [
      "Aujourd’hui, nous avons eu le plaisir d’accueillir Khaled Boudaoui, venu d’Oran pour partager avec nos participants son parcours, son expérience et son livre Laps de Temps.",
      "Une rencontre riche en échanges, en inspiration et en émotions…",
      "Un véritable message d’espoir et une belle leçon de vie pour tous les présents. 🌿",
      "Merci à tous les membres de Everest Imaginarium pour leur présence et leur belle énergie durant cette rencontre exceptionnelle. 🤍"
    ],
    captions: ["", "", "", "", "", "", "", ""]
  },
  en: {
    title: "Imaginarium Photo Album",
    desc: "Discover the vibrant world of creative workshops, cultural activities, and memorable learning moments at our Academy.",
    close: "Close Album",
    backToAlbum: "Back to album",
    of: "of",
    polaroidLabel: "Everest Memories",
    featuredTitle: "📚✨ Inspiring Encounter at Everest Academy ✨📚",
    featuredParagraphs: [
      "Today, we had the immense pleasure of welcoming Khaled Boudaoui, who traveled all the way from Oran to share his journey, experience, and book Laps de Temps with our participants.",
      "A workshop rich in exchange, deep inspiration, and emotional depth…",
      "A true message of hope and a beautiful life lesson for everyone present. 🌿",
      "Thank you to all members of Everest Imaginarium for their presence and beautiful energy during this exceptional encounter. 🤍"
    ],
    captions: ["", "", "", "", "", "", "", ""]
  },
  ar: {
    title: "ألبوم الإيماجيناريوم",
    desc: "تفضلوا بزيارة عالم ورش الإبداع، الأنشطة الثقافية ولحظات التعلم الممتعة في أكاديميتنا.",
    close: "إغلاق الألبوم",
    backToAlbum: "العودة للألبوم",
    of: "من",
    polaroidLabel: "ذكريات سقف إيفرست",
    featuredTitle: "📚✨ لقاء ملهم في أكاديمية إيفرست ✨📚",
    featuredParagraphs: [
      "تشرّفنا اليوم باستضافة الكاتب والملهم خالد بوداوي، القادم من وهران العريقة، ليشارك طلابنا ومشاركينا مسيرته المميزة، خبرته العميقة وكتابه الاستثنائي Laps de Temps.",
      "لقاء مفعم بالتبادل الفكري، الإلهام الصادق والمشاعر النبيلة الحاضرة…",
      "رسالة أمل حقيقية ودرس بليغ في الحياة لكل من كان حاضراً معنا. 🌿",
      "خالص الشكر والتقدير لكل أعضاء إيفرست إيماجيناريوم على حضورهم وتفاعلهم وطاقتهم الراقية خلال هذا اللقاء الاستثنائي. 🤍"
    ],
    captions: ["", "", "", "", "", "", "", ""]
  }
};

const PHOTOS = [
  "/imaginarium/imagin1.png",
  "/imaginarium/imagin2.png",
  "/imaginarium/imagin3.png",
  "/imaginarium/imagin4.png",
  "/imaginarium/imagin5.png",
  "/imaginarium/imagin6.png",
  "/imaginarium/imagin7.png",
  "/imaginarium/imagin8.png"
];

// Aesthetic rotation offsets for the photo stack / polaroid grid to feel real
const ROTATIONS = [
  "-rotate-[3.2deg]",
  "rotate-[1.8deg]",
  "-rotate-[1.5deg]",
  "rotate-[2.5deg]",
  "rotate-[3.4deg]",
  "-rotate-[2.2deg]",
  "rotate-[1.2deg]",
  "-rotate-[2.8deg]"
];

export default function ImaginariumAlbumModal({ isOpen, onClose, lang }: ImaginariumAlbumModalProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const t = ALBUM_TRANSLATIONS[lang] || ALBUM_TRANSLATIONS.fr;
  const isRtl = lang === 'ar';

  // Handle keyboard navigation for the lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        const nextIndex = isRtl ? (activePhotoIndex - 1 + PHOTOS.length) % PHOTOS.length : (activePhotoIndex + 1) % PHOTOS.length;
        setActivePhotoIndex(nextIndex);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = isRtl ? (activePhotoIndex + 1) % PHOTOS.length : (activePhotoIndex - 1 + PHOTOS.length) % PHOTOS.length;
        setActivePhotoIndex(prevIndex);
      } else if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, isRtl]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navigatePhoto = (direction: 'prev' | 'next', e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;

    if (direction === 'next') {
      setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % PHOTOS.length : 0));
    } else {
      setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + PHOTOS.length) % PHOTOS.length : 0));
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-x-hidden overflow-y-auto">
        {/* Backdrop glass blur */}
        <motion.div
          id="album-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06101f]/95 backdrop-blur-xl z-0"
        />

        {/* Outer Album Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 180 }}
          className="relative w-full max-w-6xl mx-4 my-8 bg-[#0a1626] rounded-[2.5rem] border border-white/[0.08] shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Subtle top decoration */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-sky-500" />

          {/* Modal Header */}
          <div className="p-8 pb-4 flex items-center justify-between border-b border-white/[0.06] shrink-0 relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-[#f25c05] p-0.5 flex items-center justify-center shadow-lg shadow-orange-500/10">
                <div className="w-full h-full rounded-[14px] bg-[#0c1f38] flex items-center justify-center">
                  <FolderHeart className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>
              <div className="text-start">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">{t.title}</h2>
                  <Sparkles className="w-4.5 h-4.5 text-orange-400 animate-spin-slow shrink-0 hidden sm:block" />
                </div>
                <p className="text-xs text-slate-400 mt-1 max-w-xl font-medium leading-relaxed">{t.desc}</p>
              </div>
            </div>

            {/* Elegant close button */}
            <button
              onClick={onClose}
              className="p-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-all duration-200 active:scale-95 border border-white/[0.08] hover:border-white/[0.15] cursor-pointer"
              title={t.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Album content area: Interactive photograph pile / grid */}
          <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
            {/* Featured Event / Inspiring Encounter Card */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#10243d]/80 to-[#0c1f38] border border-orange-500/25 relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20 text-orange-400 shrink-0 self-center md:self-start">
                  <Sparkles className="w-8 h-8 text-orange-400 animate-pulse" />
                </div>
                <div className="flex-1 text-start">
                  <h3 className="text-lg md:text-xl font-black text-white mb-4 tracking-tight border-b border-white/[0.06] pb-3" dir={isRtl ? 'rtl' : 'ltr'}>
                    {t.featuredTitle}
                  </h3>
                  <div className="space-y-3" dir={isRtl ? 'rtl' : 'ltr'}>
                    {t.featuredParagraphs.map((para, pIdx) => (
                      <p 
                        key={pIdx} 
                        className={`text-slate-300 md:text-sm text-xs leading-relaxed font-semibold ${
                          pIdx === t.featuredParagraphs.length - 1 ? 'text-amber-300 font-bold' : ''
                        }`}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PHOTOS.map((src, index) => {
                const rotation = ROTATIONS[index % ROTATIONS.length];
                const caption = t.captions[index] || "";

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, rotate: parseFloat(rotation.replace(/[^-\d.]/g, '')) }}
                    animate={{ opacity: 1, y: 0, rotate: parseFloat(rotation.replace(/[^-\d.]/g, '')) }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 0, 
                      scaleY: 1.05,
                      zIndex: 30,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    onClick={() => setActivePhotoIndex(index)}
                    className={`cursor-pointer group relative p-3 bg-[#faf9f6]/95 hover:bg-[#ffffff] rounded-lg shadow-xl shadow-black/40 border border-slate-200/50 flex flex-col h-full transform transition-shadow duration-300 ${rotation}`}
                  >
                    {/* Simulated semi-transparent tape at the top to look physical and real! */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-5.5 bg-slate-100/50 hover:bg-slate-50/65 backdrop-blur-[1.5px] border border-slate-200/30 rounded shadow-sm transform -rotate-1 pointer-events-none mix-blend-multiply transition-all duration-300 z-20 group-hover:opacity-40" />

                    {/* Photo area */}
                    <div className="relative aspect-square w-full rounded overflow-hidden bg-slate-900 border border-slate-200/30">
                      <img
                        src={src}
                        alt={caption}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Photo overlay on hover */}
                      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="p-2.5 rounded-full bg-white/90 text-[#0c1f38] shadow-md transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Handwriting style polaroid descriptor box */}
                    <div className="pt-3 pb-3 px-1 text-center shrink-0 flex flex-col items-center justify-center min-h-[3rem]">
                      {caption && (
                        <p className="text-xs font-serif italic text-slate-700/90 font-black leading-tight text-center tracking-tight group-hover:text-slate-900 transition-colors mb-1">
                          {caption}
                        </p>
                      )}
                      <span className="text-[10px] font-mono tracking-widest text-[#f25c05]/85 uppercase select-none font-black">
                        {t.polaroidLabel}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Simple design signature at the bottom */}
          <div className="p-4 bg-[#07101d] text-center border-t border-white/[0.04] shrink-0">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Everest Academy • Imaginarium Creative Studio
            </p>
          </div>
        </motion.div>

        {/* Full-Screen Immersive Lightbox Overlay (Sub-Modal) */}
        <AnimatePresence>
          {activePhotoIndex !== null && (
            <div className="fixed inset-0 z-[100000] flex flex-col items-center justify-center">
              {/* Dark dim backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.98 }}
                exit={{ opacity: 0 }}
                onClick={() => setActivePhotoIndex(null)}
                className="absolute inset-0 bg-[#030811] z-0"
              />

              {/* Close Button Top-Right of Lightbox */}
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Main Stage */}
              <div className="relative w-full max-w-5xl px-4 md:px-16 flex flex-col items-center z-10">
                {/* Arrow Left */}
                <button
                  onClick={(e) => navigatePhoto('prev', e)}
                  style={{ touchAction: 'none' }}
                  className="absolute left-4 md:left-2 p-3.5 rounded-full bg-black/60 md:bg-[#0c1f38]/80 hover:bg-[#f25c05] text-white border border-white/10 hover:border-transparent transition-all z-40 active:scale-90 shadow-2xl cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main active image container */}
                <motion.div
                  key={activePhotoIndex}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative p-3.5 bg-[#fbfbf8] rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] max-h-[72vh] md:max-h-[78vh] max-w-full flex flex-col items-center animate-fade-in"
                >
                  <img
                    src={PHOTOS[activePhotoIndex]}
                    alt={t.captions[activePhotoIndex]}
                    className="object-contain max-h-[58vh] md:max-h-[64vh] rounded-md border border-slate-200/40 select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Capture bottom detail paper box */}
                  <div className="pt-4 pb-1 text-center font-serif text-[#0c1f38] select-none">
                    {t.captions[activePhotoIndex] && (
                      <p className="text-sm md:text-base italic font-black text-slate-800">
                        {t.captions[activePhotoIndex]}
                      </p>
                    )}
                    <div className="flex items-center justify-center gap-1.5 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span className="text-[10px] font-mono font-bold text-slate-400 capitalize tracking-wider uppercase">
                        {activePhotoIndex + 1} {t.of} {PHOTOS.length}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow Right */}
                <button
                  onClick={(e) => navigatePhoto('next', e)}
                  style={{ touchAction: 'none' }}
                  className="absolute right-4 md:right-2 p-3.5 rounded-full bg-black/60 md:bg-[#0c1f38]/80 hover:bg-[#f25c05] text-white border border-white/10 hover:border-transparent transition-all z-40 active:scale-90 shadow-2xl cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}
