import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, ChevronRight, GraduationCap, Trophy, Users, 
  BookOpen, Star, Facebook, Instagram, CheckCircle2, ChevronDown, 
  ArrowRight, Zap, Heart, Languages, Play, Search, Youtube, Twitter, Linkedin
} from 'lucide-react';
import { useState, useMemo, cloneElement, ReactNode, Fragment, useRef, useEffect } from 'react';
import HERO_NEW from './assets/images/regenerated_image_1779207110842.png';
import CLUB_LOGO_NEW from './assets/images/regenerated_image_1779207245162.png';
import CLUB_IMAGINARIUM_NEW from './assets/images/regenerated_image_1779207827411.png';
import CLUB_RUN_NEW from './assets/images/regenerated_image_1779208385684.jpg';

// Using the provided images
const LOGO_URL = '/logo.png';
const INTRO_VIDEO_URL = '/intro.mp4';
const HERO_IMAGE_URL = '/pic1.png';
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop';

type Language = 'fr' | 'ar' | 'en';

const translations = {
  fr: {
    academy: "Académie",
    accueil: "Accueil",
    aPropos: "À propos",
    nosFormations: "Nos formations",
    nosClubs: "Nos clubs",
    vieEcole: "Vie à l'école",
    actualites: "Actualités",
    contact: "Contact",
    inscription: "INSCRIPTION",
    heroSubtitle: "PLUS QU'UNE ÉCOLE,",
    heroTitle: "UN CENTRE DE FORMATION & DE CULTURE",
    heroDesc: "Un accompagnement complet pour apprendre, progresser et s'épanouir.",
    decouvrirEcole: "DÉCOUVRIR L'ÉCOLE",
    decouvrirPlus: "DÉCOUVRIR PLUS",
    mainPoles: "NOS 4 PÔLES PRINCIPAUX",
    completeFormation: "Une formation complète pour un avenir réussi",
    coursSoutien: "COURS DE SOUTIEN",
    coursSoutienSub: "Primaire & Secondaire",
    coursLangues: "COURS DE LANGUES",
    coursLanguesSub: "6 langues disponibles",
    formationsPro: "FORMATIONS PROFESSIONNELLES",
    formationsProSub: "Professionnelles",
    lifeAtSchool: "VIE À L'ÉCOLE",
    lifeAtSchoolSub: "Activités & accompagnement",
    clubsJoin: "NOS CLUBS À REJOINDRE",
    clubsDesc: "Développer ses talents, partager sa passion",
    voirTousClubs: "VOIR TOUS LES CLUBS",
    statsStudents: "Élèves formés",
    statsTeachers: "Enseignants qualifiés",
    statsLanguages: "Langues enseignées",
    statsFormations: "Formations certifiantes",
    statsCoaching: "Accompagnement personnalisé",
    whyEverestTitle: "Un environnement stimulant pour réussir",
    whyEverestSubtitle: "POURQUOI CHOISIR EVEREST ACADEMY ?",
    testimonialTitle: "Actualités & Événements",
    testimonialSubtitle: "Restez informés de la vie de l'école",
    voirToutesActualites: "VOIR TOUTES LES ACTUALITÉS",
    readyJoin: "Prêt à rejoindre l'aventure ?",
    readyDesc: "Inscrivez-vous dès maintenant et construisons ensemble votre avenir.",
    scanFollow: "Scannez pour nous suivre",
    quickLinks: "LIENS RAPIDES",
    followUs: "SUIVEZ-NOUS",
    newsletter: "NEWSLETTER",
    newsletterDesc: "Recevez nos actualités et événements.",
    yourEmail: "Votre email",
    address: "32 rue tahlaiti othmane, Mostaganem zeghloul",
    open7: "Ouvert 7j/7",
    fullName: "Nom Complet",
    phoneNumber: "Numéro de Téléphone"
  },
  en: {
    academy: "Academy",
    accueil: "Home",
    aPropos: "About",
    nosFormations: "Our Formations",
    nosClubs: "Our Clubs",
    vieEcole: "School Life",
    actualites: "News",
    contact: "Contact",
    inscription: "REGISTRATION",
    heroSubtitle: "MORE THAN A SCHOOL,",
    heroTitle: "A TRAINING & CULTURE CENTER",
    heroDesc: "A complete support to learn, progress and flourish.",
    decouvrirEcole: "DISCOVER THE SCHOOL",
    decouvrirPlus: "DISCOVER MORE",
    mainPoles: "OUR 4 MAIN PILLARS",
    completeFormation: "A complete training for a successful future",
    coursSoutien: "SUPPORT LESSONS",
    coursSoutienSub: "Primary & Secondary",
    coursLangues: "LANGUAGE COURSES",
    coursLanguesSub: "6 languages available",
    formationsPro: "PROFESSIONAL TRAINING",
    formationsProSub: "Professional",
    lifeAtSchool: "LIFE AT SCHOOL",
    lifeAtSchoolSub: "Activities & support",
    clubsJoin: "OUR CLUBS TO JOIN",
    clubsDesc: "Develop your talents, share your passion",
    voirTousClubs: "SEE ALL CLUBS",
    statsStudents: "Trained students",
    statsTeachers: "Qualified teachers",
    statsLanguages: "Languages taught",
    statsFormations: "Certified trainings",
    statsCoaching: "Personalized support",
    whyEverestTitle: "A stimulating environment to succeed",
    whyEverestSubtitle: "WHY CHOOSE EVEREST ACADEMY?",
    testimonialTitle: "News & Events",
    testimonialSubtitle: "Stay informed about school life",
    voirToutesActualites: "SEE ALL NEWS",
    readyJoin: "Ready to join the adventure?",
    readyDesc: "Register now and let's build your future together.",
    scanFollow: "Scan to follow us",
    quickLinks: "QUICK LINKS",
    followUs: "FOLLOW US",
    newsletter: "NEWSLETTER",
    newsletterDesc: "Receive our news and events.",
    yourEmail: "Your email",
    address: "32 rue tahlaiti othmane, Mostaganem zeghloul",
    open7: "Open 7j/7",
    fullName: "Full Name",
    phoneNumber: "Phone Number"
  },
  ar: {
    academy: "الأكاديمية",
    accueil: "الرئيسية",
    aPropos: "عن الأكاديمية",
    nosFormations: "تكويناتنا",
    nosClubs: "نوادينا",
    vieEcole: "الحياة المدرسية",
    actualites: "أخبارنا",
    contact: "اتصل بنا",
    inscription: "التسجيل",
    heroSubtitle: "أكثر من مجرد مدرسة،",
    heroTitle: "مركز تكوين و ثقافة",
    heroDesc: "مرافقة كاملة للتعلم والتقدم والازدهار.",
    decouvrirEcole: "اكتشف المدرسة",
    decouvrirPlus: "اكتشف المزيد",
    mainPoles: "أقطابنا الأربعة الرئيسية",
    completeFormation: "تكوين كامل لمستقبل ناجح",
    coursSoutien: "دروس الدعم",
    coursSoutienSub: "ابتدائي و ثانوي",
    coursLangues: "دروس اللغات",
    coursLanguesSub: "6 لغات متاحة",
    formationsPro: "تكوينات مهنية",
    formationsProSub: "مهنية",
    lifeAtSchool: "الحياة في المدرسة",
    lifeAtSchoolSub: "أنشطة ومرافقة",
    clubsJoin: "نوادينا للانضمام",
    clubsDesc: "تطوير مواهبك، ومشاركة شغفك",
    voirTousClubs: "مشاهدة جميع النوادي",
    statsStudents: "تلميذ مكون",
    statsTeachers: "أستاذ مؤهل",
    statsLanguages: "لغات تدرس",
    statsFormations: "تكوينات معتمدة",
    statsCoaching: "مرافقة شخصية",
    whyEverestTitle: "بيئة محفزة للنجاح",
    whyEverestSubtitle: "لماذا تختار أكاديمية إيفرست؟",
    testimonialTitle: "أخبار و فعاليات",
    testimonialSubtitle: "ابق على اطلاع بحياة المدرسة",
    voirToutesActualites: "مشاهدة جميع الأخبار",
    readyJoin: "هل أنت مستعد للانضمام إلى المغامرة؟",
    readyDesc: "سجل الآن ولنبنِ مستقبلك معاً.",
    scanFollow: "امسح للمتابعة",
    quickLinks: "روابط سريعة",
    followUs: "تابعنا",
    newsletter: "النشرة الإخبارية",
    newsletterDesc: "احصل على أخبارنا وفعالياتنا.",
    yourEmail: "بريدك الإلكتروني",
    address: "حي 32 مسكن، طريق تحليتي عثمان، مستغانم زغلول",
    open7: "مفتوح 7/7",
    fullName: "الاسم الكامل",
    phoneNumber: "رقم الهاتف"
  }
};

import { Badge } from '@/components/ui/badge-2';

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="text-center max-w-3xl mx-auto mb-16 px-6">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-4 ${light ? 'text-orange-400' : 'text-orange-600'}`}
    >
      {subtitle}
    </motion.div>
    <h2 className={`text-4xl md:text-6xl font-serif mb-6 tracking-tight ${light ? 'text-white' : 'text-[#0f172a]'}`}>
      {title}
    </h2>
    <div className={`h-[1px] w-24 mx-auto opacity-50 ${light ? 'bg-white' : 'bg-orange-600'}`} />
  </div>
);

const AccordionItem = ({ title, content }: { title: string, content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group gap-4"
      >
        <span className="text-lg font-serif tracking-wide text-[#0f172a] group-hover:text-orange-600 transition-colors">{title}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180 text-orange-600' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-slate-500 leading-relaxed font-light">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [showIntro, setShowIntro] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isRtl = lang === 'ar';

  useEffect(() => {
    if (showIntro && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay with sound is blocked by the browser. We need user interaction.
          setAutoplayBlocked(true);
          console.warn("Autoplay was prevented by the browser. Awaiting user interaction.");
        });
      }
    }
  }, [showIntro]);

  const t = useMemo(() => {
    return (key: keyof typeof translations['fr']) => translations[lang][key] || key;
  }, [lang]);

  const contactInfo = {
    phones: ['0559391211', '0796665045'],
    email: 'everest.academydz@gmail.com',
    hours: '8:00 / 20:00',
  };

  const programs = [
    { 
      title: t('preschool'), 
      desc: t('preschoolDesc'), 
      icon: <Heart className="w-6 h-6" />,
      age: '3-5'
    },
    { 
      title: t('primary'), 
      desc: t('primaryDesc'), 
      icon: <BookOpen className="w-6 h-6" />,
      age: '6-11'
    },
    { 
      title: t('middle'), 
      desc: t('middleDesc'), 
      icon: <GraduationCap className="w-6 h-6" />,
      age: '12-15'
    },
    { 
      title: t('secondary'), 
      desc: t('secondaryDesc'), 
      icon: <Trophy className="w-6 h-6" />,
      age: '16-18'
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop', // Students learning
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop', // Books/Education
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop', // University/School exterior
    'https://images.unsplash.com/photo-1524178232457-3aa2a19ba1df?q=80&w=800&auto=format&fit=crop', // Modern Classroom
  ];

  const servicePoints = [
    { text: t('supportLessons'), color: 'bg-[#43a2d6]' },
    { text: t('trainingCourses'), color: 'bg-[#f97316]' },
    { text: t('examPrep'), color: 'bg-[#5ccee3]' },
    { text: t('languages'), color: 'bg-[#e53e3e]' },
    { text: t('workshops'), color: 'bg-[#0f172a]' },
  ];

  const levelBadgesList = [
    { text: t('primaryStage'), color: 'bg-[#0f172a]', textColor: 'text-white' },
    { text: t('primary'), color: 'bg-[#f97316]', textColor: 'text-white' },
    { text: t('middleStage'), color: 'bg-[#0f172a]', textColor: 'text-white' },
    { text: t('secondaryStage'), color: 'bg-[#f97316]', textColor: 'text-white' },
  ];

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
        {autoplayBlocked && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <button 
              onClick={() => {
                setAutoplayBlocked(false);
                if (videoRef.current) {
                  videoRef.current.play().catch(console.error);
                }
              }}
              className="w-24 h-24 bg-academy-orange/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-[0_0_30px_rgba(245,130,32,0.5)]"
            >
              <Play className="w-10 h-10 text-white fill-white ml-2" />
            </button>
          </div>
        )}
        <video 
          ref={videoRef}
          src={INTRO_VIDEO_URL} 
          className="absolute inset-0 w-full h-full object-contain" 
          autoPlay
          playsInline
          onEnded={() => setVideoEnded(true)}
        />
        <div className="relative z-10 w-full h-full pb-32 flex flex-col items-center justify-end pointer-events-none">
           {videoEnded && (
             <motion.button 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7 }}
               onClick={() => setShowIntro(false)}
               className="pointer-events-auto px-10 py-5 bg-academy-orange text-white text-lg font-bold uppercase tracking-wider rounded-full hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(245,130,32,0.3)] hover:shadow-[0_15px_40px_rgba(245,130,32,0.5)] flex items-center gap-3 group"
             >
               Enter
               <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
             </motion.button>
           )}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen bg-[#fcfcfc] text-[#0f172a] font-sans selection:bg-orange-100 selection:text-orange-900 ${isRtl ? 'font-serif' : ''}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Top Banner */}
      <div className="bg-[#0f172a] text-white/80 py-2 px-6 text-[10px] uppercase font-bold tracking-[0.2em] border-b border-white/5 no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className={`flex items-center gap-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <span className="flex items-center gap-2 hover:text-orange-400 transition-colors cursor-pointer"><Phone className="w-3 h-3 text-orange-500" /> {contactInfo.phones[0]}</span>
            <span className="hidden sm:flex items-center gap-2 hover:text-orange-400 transition-colors cursor-pointer"><Mail className="w-3 h-3 text-orange-500" /> {contactInfo.email}</span>
          </div>
          <div className={`flex items-center gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className="flex bg-white/10 rounded-lg p-0.5 border border-white/10">
              <button 
                onClick={() => setLang('fr')}
                className={`px-3 py-1 rounded text-[9px] transition-all ${lang === 'fr' ? 'bg-orange-600 text-white shadow-lg' : 'text-white/50 hover:text-white'}`}
              >
                FR
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded text-[9px] transition-all ${lang === 'en' ? 'bg-orange-600 text-white shadow-lg' : 'text-white/50 hover:text-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('ar')}
                className={`px-3 py-1 rounded text-[9px] transition-all font-bold ${lang === 'ar' ? 'bg-orange-600 text-white shadow-lg' : 'text-white/50 hover:text-white'}`}
              >
                AR
              </button>
            </div>
            <span className="text-orange-500 border border-orange-500/30 px-2 py-0.5 rounded text-[9px]">Status: Admissions Open</span>
          </div>
        </div>
      </div>


      {/* Header / Nav */}
      <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Everest Academy" className="w-12 h-12 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-black text-academy-navy tracking-tight">EVEREST</span>
              <span className="text-[10px] font-bold text-academy-orange uppercase tracking-[0.3em]">{t('academy')}</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: t('accueil'), href: '#' },
              { label: t('aPropos'), href: '#about' },
              { label: t('nosFormations'), href: '#programs' },
              { label: t('nosClubs'), href: '#clubs' },
              { label: t('vieEcole'), href: '#life' },
              { label: t('actualites'), href: '#news' },
              { label: t('contact'), href: '#contact' },
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-[13px] font-medium text-academy-navy hover:text-academy-orange transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-6 py-2 bg-academy-orange text-white text-[12px] font-bold rounded-lg hover:bg-orange-600 transition-all shadow-md shadow-orange-200">
              {t('inscription')}
            </button>
            <div className="flex bg-slate-100 rounded-lg p-1 border border-slate-200">
              {['fr', 'ar'].map((l) => (
                <button 
                  key={l}
                  onClick={() => setLang(l as Language)}
                  className={`px-3 py-1 rounded text-[10px] font-bold uppercase transition-all ${lang === l ? 'bg-white text-academy-navy shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-[2px] bg-academy-orange" />
              <span className="text-xs font-bold text-academy-orange tracking-widest uppercase">{t('heroSubtitle')}</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-academy-navy leading-[1.1] mb-8 tracking-tight">
              {t('heroTitle').split('&').map((part, i) => (
                <span key={i}>
                  {i === 1 && <span className="text-academy-orange">& </span>}
                  {i === 1 ? <span className="text-academy-orange">{part.trim()}</span> : part.trim()}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-light">
              {t('heroDesc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-academy-orange text-white font-black text-[12px] rounded-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-100">
                {t('decouvrirEcole')}
              </button>
              <button className="px-8 py-4 border-2 border-academy-navy text-academy-navy font-black text-[12px] rounded-lg hover:bg-slate-50 transition-all">
                {t('nosFormations')}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(12,35,74,0.3)] border-4 border-white">
              <img 
                src={HERO_NEW} 
                alt="Academy building" 
                className="w-full h-auto object-cover"
              />
            </div>

          </motion.div>
        </div>
      </section>

      {/* Main Pillars Section (Dark Banner with small icons) */}
      <section className="bg-academy-navy py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <GraduationCap />, title: t('coursSoutien'), sub: t('coursSoutienSub') },
            { icon: <Languages />, title: t('coursLangues'), sub: t('coursLanguesSub') },
            { icon: <Trophy />, title: t('formationsPro'), sub: t('formationsProSub') },
            { icon: <Users />, title: t('lifeAtSchool'), sub: t('lifeAtSchoolSub') },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-white/90">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                {cloneElement(item.icon as any, { className: "w-5 h-5 text-white/60" })}
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight">{item.title}</h3>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Pillars Detailed Cards */}
      <section id="programs" className="py-32 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader subtitle={t('mainPoles')} title={t('completeFormation')} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: t('coursSoutien'), 
                sub: t('coursSoutienSub'), 
                icon: <BookOpen />, 
                features: ["Toutes les matières", "Suivi personnalisé", "Méthodes efficaces", "Préparation aux examens"] 
              },
              { 
                title: t('coursLangues'), 
                sub: t('coursLanguesSub'), 
                icon: <Languages />, 
                features: ["Français", "Anglais", "Allemand", "Russe", "Turc", "Espagnol"],
                isGrid: true
              },
              { 
                title: t('formationsPro'), 
                sub: t('formationsProSub'), 
                icon: <GraduationCap />, 
                features: ["Agent de voyage", "Ressources humaines", "Comptabilité & Fiscalité", "Marketing", "Intelligence artificielle"] 
              },
              { 
                title: t('lifeAtSchool'), 
                sub: t('lifeAtSchoolSub'), 
                icon: <Users />, 
                features: ["Accompagnement", "Événements & ateliers", "Projets collaboratifs", "Réseau & opportunités"] 
              },
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-full bg-academy-orange flex items-center justify-center mb-8 shadow-lg shadow-orange-100 group-hover:scale-110 transition-transform">
                  {cloneElement(p.icon as any, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-lg font-black text-academy-navy mb-1">{p.title}</h3>
                <p className="text-[10px] font-bold text-slate-400 mb-8 uppercase tracking-widest">{p.sub}</p>
                
                <ul className={`space-y-3 mb-8 ${p.isGrid ? 'grid grid-cols-2 gap-x-4 space-y-0' : ''}`}>
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-[12px] text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-academy-orange shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <div className="h-[2px] w-full bg-slate-50 group-hover:bg-academy-orange/20 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section id="clubs" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-[2px] bg-academy-orange" />
              <span className="text-xs font-bold text-academy-orange tracking-widest uppercase">{t('clubsJoin')}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-academy-navy leading-tight mb-8 tracking-tight">
              {t('clubsDesc')}
            </h2>
            <button className="px-8 py-4 border-2 border-slate-200 text-academy-navy font-black text-[12px] rounded-lg hover:border-academy-navy transition-all uppercase tracking-widest">
              {t('voirTousClubs')}
            </button>
          </div>

          <div className="relative grid grid-cols-2 gap-6">
            {[
              { 
                name: "MOSTA RUN CLUB", 
                tag: "Sport • Santé • Dépassement de soi", 
                img: CLUB_RUN_NEW,
                logo: CLUB_LOGO_NEW
              },
              { 
                name: "EVEREST IMAGINARIUM", 
                tag: "Pôle culturel • Créativité • Expression", 
                img: CLUB_IMAGINARIUM_NEW,
                logo: LOGO_URL
              }
            ].map((club, i) => (
              <motion.div 
                key={i} 
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-50 group hover:-translate-y-2 transition-all"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="p-6 flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center p-2 shrink-0 overflow-hidden"
                  >
                    <img 
                      src={club.logo} 
                      className="w-[50px] h-[50px] object-contain" 
                      alt={club.name} 
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-academy-navy">{club.name}</h3>
                  </div>
                </div>
                <div className="px-6 pb-2 text-[8px] font-bold text-slate-400 uppercase tracking-widest">{club.tag}</div>
                <div className="h-40 overflow-hidden mt-4">
                  <img src={club.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={club.name} />
                </div>
              </motion.div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-academy-navy py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-12 text-white">
          {[
            { label: t('statsStudents'), val: "+1200", icon: <Users /> },
            { label: t('statsTeachers'), val: "+30", icon: <Users /> },
            { label: t('statsLanguages'), val: "6", icon: <Languages /> },
            { label: t('statsFormations'), val: "+15", icon: <GraduationCap /> },
            { label: t('statsCoaching'), val: "100%", icon: <CheckCircle2 /> },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-academy-orange">
                {cloneElement(s.icon as any, { className: "w-8 h-8" })}
              </div>
              <div>
                <div className="text-3xl font-black">{s.val}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Everest / Video / Testimonial */}
      <section id="life" className="py-32 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="flex flex-col gap-2 mb-12">
                <span className="text-[10px] font-black text-academy-orange tracking-widest uppercase">{t('whyEverestSubtitle')}</span>
                <h2 className="text-4xl font-black text-academy-navy tracking-tight">{t('whyEverestTitle')}</h2>
              </div>
              <ul className="space-y-4 mb-12">
                {["Encadrement de qualité", "Pédagogie innovante", "Suivi personnalisés", "Ouverture internationale", "Infrastructure moderne"].map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-academy-orange shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="px-10 py-4 border-2 border-slate-200 text-academy-navy font-black text-[12px] rounded-lg hover:border-academy-navy transition-all uppercase tracking-widest mb-12 lg:mb-0">
                {t('decouvrirPlus')}
              </button>
            </div>

            <div className="flex flex-col gap-12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video 
                  src={INTRO_VIDEO_URL} 
                  className="w-full aspect-video object-cover bg-academy-navy" 
                  controls 
                  poster="https://images.unsplash.com/photo-1524178232457-3aa2a19ba1df?q=80&w=800&auto=format&fit=crop"
                >
                  Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
              </div>

              {/* Testimonial Card */}
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative">
                <div className="text-academy-navy/10 absolute top-8 left-8">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor"><path d="M0 30V15C0 6.71573 6.71573 0 15 0H16V8H15C11.134 8 8 11.134 8 15V18H16V30H0ZM24 30V15C24 6.71573 30.7157 0 39 0H40V8H39C35.134 8 32 11.134 32 15V18H40V30H24Z"/></svg>
                </div>
                <div className="relative z-10">
                  <p className="text-lg italic text-slate-700 mb-8 leading-relaxed font-medium">
                    "Everest Academy m'a permis de développer mes compétences et de croire en mon potentiel. Une école qui change vraiment la vie !"
                  </p>
                  <div className="flex items-center gap-4">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover" alt="Sara M." />
                    <div>
                      <div className="text-sm font-black text-academy-navy">Sara M.</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Étudiante</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-8">
                  <div className="w-2 h-2 rounded-full bg-academy-navy/10" />
                  <div className="w-2 h-2 rounded-full bg-academy-orange" />
                  <div className="w-2 h-2 rounded-full bg-academy-navy/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités & Événements */}
      <section id="news" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <span className="text-[10px] font-black text-academy-navy tracking-widest uppercase mb-2 block">{t('testimonialTitle')}</span>
              <h2 className="text-4xl font-black text-academy-navy tracking-tight">{t('testimonialSubtitle')}</h2>
            </div>
            <button className="px-6 py-3 border-2 border-slate-200 text-academy-navy text-[12px] font-bold rounded-lg hover:border-academy-navy transition-all uppercase tracking-widest">
              {t('voirToutesActualites')}
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Journée portes ouvertes Rejoignez-nous !", date: "20 Mai 2024", type: "Actualité", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop" },
              { title: "Atelier Intelligence Artificielle", date: "15 Mai 2024", type: "Événement", img: "https://images.unsplash.com/photo-1591453089816-37bb975b4f4c?q=80&w=600&auto=format&fit=crop" },
              { title: "Sortie Mosta Run Club à la montagne", date: "10 Mai 2024", type: "Club", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&auto=format&fit=crop" },
              { title: "Nouvelle formation Agent de voyage", date: "05 Mai 2024", type: "Formation", img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=600&auto=format&fit=crop" }
            ].map((news, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={news.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={news.title} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-academy-orange text-white text-[8px] font-black uppercase px-3 py-1 rounded-full shadow-lg">{news.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">{news.date}</div>
                  <h3 className="text-sm font-black text-academy-navy mb-4 group-hover:text-academy-orange transition-colors line-clamp-2 h-10">{news.title}</h3>
                  <div className="flex items-center gap-2 text-[10px] font-black text-academy-navy/60 uppercase tracking-widest group-hover:text-academy-orange transition-colors">
                    <span>LIRE PLUS</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready Banner */}
      <section className="bg-academy-navy py-12 px-6 container mx-auto rounded-3xl overflow-hidden relative mb-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0">
               <GraduationCap className="w-10 h-10 text-white/40" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-black text-white mb-2 leading-tight">{t('readyJoin')}</h2>
              <p className="text-sm text-white/60 font-medium">{t('readyDesc')}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 items-center">
            <a 
              href="tel:0796665045" 
              className="flex items-center gap-4 transition-all hover:opacity-80 active:scale-95 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-academy-orange flex items-center justify-center text-academy-orange shrink-0 group-hover:bg-academy-orange group-hover:text-white transition-all">
                 <Phone className="w-5 h-5" />
              </div>
              <div className="text-white">
                <div className="text-xl font-black tracking-tighter">05 59 39 12 11</div>
                <div className="text-xl font-black tracking-tighter">07 96 66 50 45</div>
              </div>
            </a>
            <a 
              href="https://maps.app.goo.gl/sY5SWCL2whD4DfvY9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 transition-all hover:opacity-80 active:scale-95 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-academy-orange flex items-center justify-center text-academy-orange shrink-0 group-hover:bg-academy-orange group-hover:text-white transition-all">
                 <MapPin className="w-5 h-5" />
              </div>
              <div className="text-white text-left">
                <div className="text-sm font-bold leading-tight">Mostaganem, <br/> Zeghloul</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-xl shrink-0">
                 <div className="w-16 h-16 bg-[#000] rounded flex items-center justify-center">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.instagram.com/everest_academy.dz/" className="w-full h-full object-contain" alt="QR Code" />
                 </div>
              </div>
              <div className="text-white text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                {t('scanFollow').split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-20">
           <svg width="400" height="200" viewBox="0 0 400 200" fill="none"><path d="M0 200C100 200 150 100 400 0H0V200Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="200" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0.2"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient></defs></svg>
        </div>
      </section>

      {/* Brand Values Banner */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 md:gap-12">
            <div className="h-[2px] bg-academy-orange flex-grow rounded-full shadow-[0_0_10px_rgba(245,130,32,0.1)]"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-2 md:gap-6 shrink-0"
            >
              {["APPRENDRE", "PROGRESSER", "S'ÉPANOUIR", "RÉUSSIR"].map((word, idx, arr) => (
                <Fragment key={word}>
                  <span className={`text-sm md:text-2xl font-black tracking-[0.2em] transition-colors ${word === "S'ÉPANOUIR" ? "text-academy-orange" : "text-academy-navy"}`}>
                    {word}
                  </span>
                  {idx < arr.length - 1 && (
                    <div className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-academy-orange shadow-[0_0_8px_rgba(245,130,32,0.4)]"></div>
                    </div>
                  )}
                </Fragment>
              ))}
            </motion.div>

            <div className="h-[2px] bg-academy-orange flex-grow rounded-full shadow-[0_0_10px_rgba(245,130,32,0.1)]"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img src={LOGO_URL} alt="Everest Academy" className="w-12 h-12 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black text-academy-navy tracking-tight">EVEREST</span>
                <span className="text-[10px] font-bold text-academy-orange uppercase tracking-[0.3em]">{t('academy')}</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
              PLUS QU'UNE ÉCOLE, <br/> UN CENTRE DE FORMATION & DE CULTURE
            </p>
          </div>

          <div>
             <h3 className="text-xs font-black text-academy-navy uppercase tracking-widest mb-8">{t('quickLinks')}</h3>
             <ul className="space-y-4">
                {[t('accueil'), t('aPropos'), t('nosFormations'), t('vieEcole'), t('nosClubs'), t('contact')].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-[12px] font-medium text-slate-500 hover:text-academy-orange transition-colors">{link}</a>
                  </li>
                ))}
             </ul>
          </div>

          <div>
             <h3 className="text-xs font-black text-academy-navy uppercase tracking-widest mb-8">{t('followUs')}</h3>
             <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://web.facebook.com/profile.php?id=61576762983246&locale=fr_FR" target="_blank" className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-academy-navy hover:bg-academy-orange hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/everest_academy.dz/" target="_blank" className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-academy-navy hover:bg-academy-orange hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" target="_blank" className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-academy-navy hover:bg-academy-orange hover:text-white transition-all">
                  <Youtube size={18} />
                </a>
                <a href="#" target="_blank" className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-academy-navy hover:bg-academy-orange hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
             </div>
             <a 
               href="tel:0796665045" 
               className="mt-8 flex items-center gap-2 justify-center md:justify-start hover:opacity-80 transition-opacity group cursor-pointer"
             >
                <div className="w-5 h-5 text-academy-orange shrink-0 group-hover:scale-110 transition-transform"><Phone size={16}/></div>
                <span className="text-[12px] font-bold text-slate-500 group-hover:text-academy-orange transition-colors">07 96 66 50 45</span>
             </a>
          </div>

          <div>
             <h3 className="text-xs font-black text-academy-navy uppercase tracking-widest mb-8">{t('newsletter')}</h3>
             <p className="text-[12px] text-slate-500 mb-6">{t('newsletterDesc')}</p>
             <div className="flex">
                <input type="email" placeholder={t('yourEmail')} className="bg-white border border-slate-200 px-4 py-3 rounded-l-lg text-[12px] font-medium w-full focus:outline-none focus:border-academy-orange transition-colors" />
                <button className="bg-academy-orange text-white px-4 py-3 rounded-r-lg hover:bg-orange-600 transition-colors">
                  <ArrowRight size={18} />
                </button>
             </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">&copy; {new Date().getFullYear()} Everest Academy. Tous droits réservés.</div>
           <div className="flex gap-8">
              <a href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-academy-navy transition-colors">Mentions légales</a>
              <a href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-academy-navy transition-colors">Confidentialité</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
