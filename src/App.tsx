import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, Clock, MapPin, ChevronRight, GraduationCap, Trophy, Users, 
  BookOpen, Star, Facebook, Instagram, CheckCircle2, ChevronDown, 
  ArrowRight, ShieldCheck, Zap, Heart, Languages
} from 'lucide-react';
import { useState, useMemo } from 'react';

// Using the provided images
const LOGO_URL = '/logo.png';
const SIGN_URL = 'input_file_0.png';

type Language = 'fr' | 'ar' | 'en';

const translations = {
  fr: {
    academy: "Académie",
    heritage: "Héritage",
    curriculum: "Curriculum",
    admissions: "Admissions",
    inquire: "S'informer",
    register: "S'inscrire",
    excellence: "Établi pour l'excellence",
    aspire: "Aspirez à la",
    greatness: "Grandeur",
    legacy: "L'héritage commence",
    here: "Ici",
    heroDesc: "Un parcours éducatif sur mesure conçu pour la prochaine génération de leaders mondiaux, combinant des normes académiques rigoureuses avec un développement raffiné du caractère.",
    academicTour: "Visite Académique",
    acceptance: "Taux d'acceptation mondial",
    vision: "Héritage et Vision",
    visionTitle: "Cultiver les leaders de demain",
    visionDesc: "EVEREST ACADEMY représente l'intersection de la tradition et de l'innovation. Nous offrons un sanctuaire pour la curiosité intellectuelle et la formation du caractère.",
    yearsHeritage: "Années d'Héritage",
    alumni: "Réseau d'anciens élèves",
    philosophy: "Notre Philosophie",
    path: "Le Parcours Académique",
    studyPrograms: "Programmes d'études curatés",
    level: "Niveau",
    presence: "Présence sur le campus",
    environmentFocus: "Un environnement de concentration",
    clarifications: "Clarifications",
    procedures: "Admissions et Procédures",
    selectionTitle: "Normes de sélection académique",
    selectionDesc: "Les admissions dépendent d'une évaluation d'entrée et d'un entretien familial pour s'assurer que notre environnement correspond aux besoins d'apprentissage et à la trajectoire académique de votre enfant.",
    transportTitle: "Transport Concierge",
    transportDesc: "Nous fournissons des services de transport sécurisés de porte à porte pour tous les étudiants dans les zones résidentielles majeures en utilisant notre flotte privée.",
    hoursTitle: "Heures académiques d'élite",
    hoursDesc: "Les heures académiques de base s'étendent jusqu'à 16h00, avec des clubs de mentorat et de recherche spécialisés disponibles jusqu'à 18h00.",
    registration2024: "Inscription 2024",
    secureLegacy: "Sécurisez votre Héritage",
    directInquiries: "Demandes directes",
    emailRegistry: "Registre d'e-mails",
    academyHours: "Heures de l'Académie",
    open7: "Ouvert 7j/7",
    accommodating: "Toujours à votre service",
    interestForm: "Formulaire de manifestation d'intérêt",
    applicantName: "Nom du candidat",
    contactRef: "Référence de contact",
    academicLevel: "Niveau académique",
    finalize: "Finaliser la soumission",
    integrity: "Intégrité",
    office: "Bureau des Admissions",
    secureCampus: "Campus Sécurisé",
    secureDesc: "Normes de sécurité sans compromis pour une tranquillité d'esprit totale.",
    elitePedagogy: "Pédagogية d'Élite",
    pedagogyDesc: "Méthodes d'enseignement raffinées adaptées à la croissance individuelle.",
    limitedIntake: "Admission Limitée",
    intakeDesc: "Tailles de classes soigneusement curatées pour un engagement maximal.",
    provenLegacy: "Héritage Prouvé",
    legacyDesc: "Une histoire de production de diplômés distingués et capables.",
    preschool: "Maternelle",
    primary: "Primaire",
    middle: "Moyen",
    preschoolDesc: "Se concentrer sur le jeu créatif, les liens sociaux et les premières compétences cognitives.",
    primaryDesc: "Renforcer les bases académiques fondamentales en mettant l'accent sur le bilinguisme.",
    middleDesc: "Former des penseurs critiques et de futurs leaders grâce à l'apprentissage analytique.",
    fullName: "Nom Complet",
    phoneNumber: "Numéro de Téléphone"
  },
  en: {
    academy: "Academy",
    heritage: "Heritage",
    curriculum: "Curriculum",
    admissions: "Admissions",
    inquire: "Inquire",
    register: "Register",
    excellence: "Established for Excellence",
    aspire: "Aspire to",
    greatness: "Greatness",
    legacy: "Legacy Begins",
    here: "Here",
    heroDesc: "A bespoke educational journey designed for the next generation of global leaders, combining rigorous academic standards with refined character development.",
    academicTour: "Academic Tour",
    acceptance: "Global Acceptance Rate",
    vision: "Heritage & Vision",
    visionTitle: "Cultivating the Leaders of Tomorrow",
    visionDesc: "EVEREST ACADEMY represents the intersection of tradition and innovation. We provide a sanctuary for intellectual curiosity and character formation.",
    yearsHeritage: "Years of Heritage",
    alumni: "Global Alumni Network",
    philosophy: "Our Philosophy",
    path: "The Academic Path",
    studyPrograms: "Curated Programs of Study",
    level: "Level",
    presence: "Campus Presence",
    environmentFocus: "An Environment of Focus",
    clarifications: "Clarifications",
    procedures: "Admissions & Procedures",
    selectionTitle: "Academic Selection Standards",
    selectionDesc: "Admissions depend on an entry assessment and a family interview to ensure our environment matches your child's learning needs and academic trajectory.",
    transportTitle: "Concierge Transportation",
    transportDesc: "We provide secure door-to-door transportation services for all students across the major residential areas using our private fleet.",
    hoursTitle: "Elite Academic Hours",
    hoursDesc: "Core academic hours run until 16:00, with specialized mentorship and research clubs available until 18:00.",
    registration2024: "Registration 2024",
    secureLegacy: "Secure Your Legacy",
    directInquiries: "Direct Inquiries",
    emailRegistry: "Email Registry",
    academyHours: "Academy Hours",
    open7: "Open 7j/7",
    accommodating: "Always Accommodating",
    interestForm: "Expression of Interest Form",
    applicantName: "Applicant Name",
    contactRef: "Contact Reference",
    academicLevel: "Academic Level",
    finalize: "Finalize Submission",
    integrity: "Integrity",
    office: "Office of Admissions",
    secureCampus: "Secure Campus",
    secureDesc: "Uncompromising security standards for total peace of mind.",
    elitePedagogy: "Elite Pedagogy",
    pedagogyDesc: "Refined teaching methods tailored for individual growth.",
    limitedIntake: "Limited Intake",
    intakeDesc: "Carefully curated class sizes for maximum engagement.",
    provenLegacy: "Proven Legacy",
    legacyDesc: "A history of producing distinguished and capable graduates.",
    preschool: "Preschool",
    primary: "Primary School",
    middle: "Middle School",
    preschoolDesc: "Focusing on creative play, social bonding, and early cognitive skills.",
    primaryDesc: "Strengthening core academic foundations with an emphasis on bilingualism.",
    middleDesc: "Developing critical thinkers and future leaders through analytical learning.",
    fullName: "Full Name",
    phoneNumber: "Phone Number"
  },
  ar: {
    academy: "الأكاديمية",
    heritage: "التراث",
    curriculum: "المنهج",
    admissions: "القبول",
    inquire: "استفسر",
    register: "سجل الآن",
    excellence: "تأسست للتميز",
    aspire: "تطلع إلى",
    greatness: "العظمة",
    legacy: "الإرث يبدأ",
    here: "هنا",
    heroDesc: "رحلة تعليمية مصممة خصيصاً للجيل القادم من القادة العالميين، تجمع بين المعايير الأكاديمية الصارمة وتنمية الشخصية الراقية.",
    academicTour: "جولة أكاديمية",
    acceptance: "معدل القبول العالمي",
    vision: "التراث والرؤية",
    visionTitle: "صناعة قادة الغد",
    visionDesc: "تمثل أكاديمية إيفرست نقطة التقاء التقاليد والابتكار. نحن نوفر ملاذاً للفضول الفكري وتكوين الشخصية.",
    yearsHeritage: "سنوات من التراث",
    alumni: "شبكة الخريجين العالمية",
    philosophy: "فلسفتنا",
    path: "المسار الأكاديمي",
    studyPrograms: "برامج دراسية منسقة",
    level: "المستوى",
    presence: "حضور الحرم الجامعي",
    environmentFocus: "بيئة من التركيز",
    clarifications: "توضيحات",
    procedures: "القبول والإجراءات",
    selectionTitle: "معايير الاختيار الأكاديمي",
    selectionDesc: "يعتمد القبول على تقييم الدخول ومقابلة عائلية للتأكد من أن بيئتنا تتوافق مع احتياجات طفلك التعليمية ومساره الأكاديمي.",
    transportTitle: "خدمة النقل الخاصة",
    transportDesc: "نحن نوفر خدمات نقل آمنة من الباب إلى الباب لجميع الطلاب عبر المناطق السكنية الرئيسية باستخدام أسطولنا الخاص.",
    hoursTitle: "ساعات أكاديمية متميزة",
    hoursDesc: "تمتد الساعات الأكاديمية الأساسية حتى الساعة 4:00 مساءً، مع توفر نوادي إرشاد وبحث متخصصة حتى الساعة 6:00 مساءً.",
    registration2024: "التسجيل لعام 2024",
    secureLegacy: "أمن مستقبلك",
    directInquiries: "استفسارات مباشرة",
    emailRegistry: "سجل البريد الإلكتروني",
    academyHours: "ساعات الأكاديمية",
    open7: "مفتوح 7/7",
    accommodating: "دائماً في خدمتكم",
    interestForm: "نموذج إبداء الاهتمام",
    applicantName: "اسم المتقدم",
    contactRef: "مرجع الاتصال",
    academicLevel: "المستوى الأكاديمي",
    finalize: "إنهاء التقديم",
    integrity: "النزاهة",
    office: "مكتب القبول",
    secureCampus: "حرم جامعي آمن",
    secureDesc: "معايير أمنية صارمة لراحة بال تامة.",
    elitePedagogy: "بيداغوجيا النخبة",
    pedagogyDesc: "أساليب تدريس راقية مصممة للنمو الفردي.",
    limitedIntake: "قبول محدود",
    intakeDesc: "أحجام فصول منسقة بعناية لأقصى قدر من التفاعل.",
    provenLegacy: "إرث مثبت",
    legacyDesc: "تاريخ من تخريج متميزين وقادرين.",
    preschool: "التحضيري",
    primary: "الابتدائي",
    middle: "المتوسط",
    preschoolDesc: "التركيز على اللعب الإبداعي، والترابط الاجتماعي، والمهارات المعرفية المبكرة.",
    primaryDesc: "تعزيز الأسس الأكاديمية الأساسية مع التركيز على ثنائية اللغة.",
    middleDesc: "تطوير المفكرين الناقدين وقادة المستقبل من خلال التعلم التحليلي.",
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
  const isRtl = lang === 'ar';

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
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1544717297-fa32e8f1b40b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1577891721396-22741c8c0fba?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop',
  ];

  return (
    <div 
      className={`min-h-screen bg-white text-[#0f172a] font-sans selection:bg-orange-100 selection:text-orange-900 ${isRtl ? 'font-serif' : ''}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Top Banner */}
      <div className="bg-[#0f172a] text-white/80 py-3 px-6 text-[10px] uppercase font-bold tracking-[0.2em] border-b border-white/5">
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
            <span className="flex items-center gap-2 text-white/60"><Clock className="w-3 h-3 text-orange-500" /> {contactInfo.hours}</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex justify-between h-28 items-center">
            <div className={`flex items-center gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className={`relative group cursor-pointer flex items-center`}>
                <div className="relative h-20 w-20 flex items-center justify-center rounded-2xl bg-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.08)] border border-slate-100/80 transition-all duration-500 group-hover:shadow-2xl group-hover:border-orange-100 group-hover:-translate-y-1">
                  <img 
                    src={LOGO_URL} 
                    alt="EVEREST ACADEMY" 
                    className="h-16 w-auto object-contain p-2 transition-transform duration-500 group-hover:scale-110" 
                    referrerPolicy="no-referrer" 
                  />
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none" />
                </div>
                <div className={`h-12 w-px bg-slate-100/80 mx-8 hidden lg:block`} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-[0.4em] text-[#0f172a] leading-none uppercase">EVEREST</span>
                <span className="text-[11px] tracking-[0.5em] text-orange-600 uppercase mt-1.5 font-bold">{t('academy')}</span>
              </div>
            </div>
            
            <div className={`hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-400 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <a href="#">
                <Badge variant="primary" appearance="ghost" size="lg" className="hover:text-orange-600 transition-colors uppercase tracking-[0.25em] font-semibold cursor-pointer">
                  {t('academy')}
                </Badge>
              </a>
              <a href="#about">
                <Badge variant="primary" appearance="ghost" size="lg" className="hover:text-orange-600 transition-colors uppercase tracking-[0.25em] font-semibold cursor-pointer">
                  {t('heritage')}
                </Badge>
              </a>
              <a href="#programs">
                <Badge variant="primary" appearance="ghost" size="lg" className="hover:text-orange-600 transition-colors uppercase tracking-[0.25em] font-semibold cursor-pointer">
                  {t('curriculum')}
                </Badge>
              </a>
              <a href="#contact">
                <Badge variant="primary" appearance="ghost" size="lg" className="hover:text-orange-600 transition-colors uppercase tracking-[0.25em] font-semibold cursor-pointer">
                  {t('admissions')}
                </Badge>
              </a>
            </div>

            <div className={`flex items-center gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <a 
                href={`tel:${contactInfo.phones[0]}`}
                className="hidden sm:block"
              >
                <Badge variant="secondary" appearance="ghost" size="lg" className="text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-[#0f172a] transition-colors cursor-pointer">
                  {t('inquire')}
                </Badge>
              </a>
              <a 
                href="#contact"
              >
                <Badge 
                  variant="primary" 
                  size="lg" 
                  className="px-8 py-3 h-auto min-h-[44px] rounded-none border-2 border-orange-600 text-orange-600 bg-transparent text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-orange-600 hover:text-white transition-all shadow-lg shadow-orange-100 cursor-pointer"
                >
                  {t('register')}
                </Badge>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-32 lg:pt-24 lg:pb-48 bg-slate-50/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#0f172a]/5 rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-orange-600/5 rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Colorful Hanging Welcome Badge */}
              <div className="relative mb-12 py-4">
                {/* Visual String Line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-slate-200/60 -translate-y-2 hidden lg:block" />
                
                <div className={`flex items-center gap-3 flex-wrap justify-center lg:justify-start ${isRtl ? 'flex-row-reverse' : ''}`}>
                  {(lang === 'ar' ? 'AHLAN' : 'WELCOME').split('').map((letter, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -20, opacity: 0, rotate: -10 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1, 
                        rotate: [2, -2, 2],
                      }}
                      transition={{ 
                        delay: i * 0.1, 
                        type: "spring", 
                        stiffness: 100,
                        rotate: {
                          repeat: Infinity,
                          duration: 3 + Math.random() * 2,
                          ease: "easeInOut",
                          repeatType: "reverse"
                        }
                      }}
                      className="relative"
                    >
                      {/* String for each letter */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-slate-300 hidden lg:block" />
                      
                      {/* Letter Card */}
                      <div 
                        className={`w-10 h-14 sm:w-12 sm:h-16 rounded-lg flex flex-col items-center justify-center text-white font-black text-xl sm:text-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] border-t-2 border-white/40 border-x border-b border-black/5 ${
                          ['bg-[#43a2d6]', 'bg-[#5eaf4b]', 'bg-[#e53e3e]', 'bg-[#ecc94b]', 'bg-[#d63384]', 'bg-[#2b6cb0]', 'bg-[#6b46c1]'][i % 7]
                        }`}
                      >
                        {/* Hanging Hole Pin */}
                        <div className="w-2 h-2 bg-white/30 rounded-full mt-1.5 mb-auto shadow-inner" />
                        <span className="mb-4">{letter}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="inline-block px-4 py-1.5 bg-orange-50 border border-orange-200 text-orange-600 text-[10px] uppercase tracking-[0.4em] mb-10 font-bold">
                {t('excellence')}
              </div>
              <h1 className={`text-center lg:text-start text-6xl lg:text-[100px] font-serif leading-[0.9] text-[#0f172a] mb-10 tracking-tight`}>
                {t('aspire')} <span className="italic text-orange-600">{t('greatness')}</span>,<br />
                {t('legacy')} <span className="italic text-slate-400">{t('here')}</span>.
              </h1>
              <p className={`text-center lg:text-start text-xl text-slate-500 mb-14 max-w-xl leading-relaxed font-light mx-auto lg:mx-0 ${isRtl ? 'text-lg md:text-2xl' : ''}`}>
                {t('heroDesc')}
              </p>
              <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-10 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <button className="px-12 py-5 bg-[#0f172a] text-white font-bold text-xs uppercase tracking-[0.2em] shadow-2xl shadow-slate-300 hover:bg-slate-800 transition-all">
                  {t('inquire')}
                </button>
                <div className={`flex items-center gap-4 px-6 py-4 bg-white rounded-full shadow-md border border-slate-100 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center ${isRtl ? '-rotate-12' : 'rotate-12'}`}>
                    <span className="text-[8px] font-black leading-tight text-center text-slate-700">Ouvert<br />7j/7</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">{t('accommodating')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(15,23,42,0.15)] border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=1200&auto=format&fit=crop" 
                  alt="Student Excellence" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 to-transparent" />
              </div>
              
              <div className={`absolute -bottom-8 ${isRtl ? '-right-8' : '-left-8'} bg-white border border-slate-100 p-10 rounded-xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.1)] z-20`}>
                <div className="text-4xl font-serif text-orange-600 mb-2">98%</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">{t('acceptance')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Points */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className={`grid md:grid-cols-4 gap-16 ${isRtl ? 'rtl' : ''}`}>
            {[
              { icon: <ShieldCheck className="text-orange-600" />, title: t('secureCampus'), desc: t('secureDesc') },
              { icon: <GraduationCap className="text-orange-600" />, title: t('elitePedagogy'), desc: t('pedagogyDesc') },
              { icon: <Users className="text-orange-600" />, title: t('limitedIntake'), desc: t('intakeDesc') },
              { icon: <Trophy className="text-orange-600" />, title: t('provenLegacy'), desc: t('legacyDesc') },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex flex-col gap-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 border border-slate-100 bg-slate-50 flex items-center justify-center group-hover:border-orange-600 transition-colors duration-500 rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-[#0f172a]">{item.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed tracking-wider font-medium uppercase">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative group">
              <img 
                src={SIGN_URL} 
                alt="EVEREST ACADEMY" 
                className="rounded-lg shadow-[0_30px_60px_-10px_rgba(0,0,0,0.1)] w-full border-8 border-white transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -inset-10 bg-orange-600/5 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
            <div>
              <SectionHeader 
                subtitle={t('vision')} 
                title={t('visionTitle')}
                light={false}
              />
              <p className={`text-lg text-slate-500 mb-12 leading-relaxed font-light ${isRtl ? 'text-xl' : ''}`}>
                {t('visionDesc')}
              </p>
              <div className={`grid grid-cols-2 gap-16 mb-16 ${isRtl ? 'rtl' : ''}`}>
                <div className="space-y-3">
                  <div className="text-4xl font-serif text-orange-600">15+</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">{t('yearsHeritage')}</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-serif text-[#0f172a]">Global</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">{t('alumni')}</div>
                </div>
              </div>
              <button className={`flex items-center space-x-4 text-[10px] uppercase tracking-[0.3em] font-bold group ${isRtl ? 'space-x-reverse' : ''}`}>
                <span className="text-orange-600">{t('philosophy')}</span>
                <ArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform text-[#0f172a] ${isRtl ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum / Programs */}
      <section id="programs" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <SectionHeader 
            subtitle={t('path')} 
            title={t('studyPrograms')}
            light={false}
          />
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((p, i) => (
              <motion.div 
                key={i}
                className="group relative bg-[#fafafa] p-12 border border-slate-100 hover:border-orange-600/40 transition-all duration-700 rounded-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-xs uppercase tracking-[0.4em] text-orange-600 mb-8 font-bold opacity-60">{t('level')} {i + 1}</div>
                <h3 className="text-2xl font-serif mb-6 tracking-wide text-[#0f172a] group-hover:text-orange-600 transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10 font-light italic">"{p.desc}"</p>
                
                <div className="flex flex-col gap-5 border-t border-slate-100 pt-8 mb-10">
                  {['Curricular Depth', 'Creative Insight'].map((item, j) => (
                    <div key={j} className={`flex items-center gap-3 text-[10px] items-center text-[#0f172a] tracking-widest font-bold uppercase ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <div className="w-1 h-1 bg-orange-600 rounded-full" /> {item}
                    </div>
                  ))}
                </div>
                
                <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-orange-600">{p.age}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-40 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center mb-16">
          <SectionHeader 
            subtitle={t('presence')} 
            title={t('environmentFocus')}
            light={false}
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-2xl overflow-hidden shadow-sm border-4 border-white transition-all duration-700"
              >
                <img src={img} alt="Campus" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            subtitle={t('clarifications')} 
            title={t('procedures')}
            light={false}
          />
          <div className="mt-16 space-y-4">
            <AccordionItem 
              title={t('selectionTitle')} 
              content={t('selectionDesc')}
            />
            <AccordionItem 
              title={t('transportTitle')} 
              content={t('transportDesc')}
            />
            <AccordionItem 
              title={t('hoursTitle')} 
              content={t('hoursDesc')}
            />
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="contact" className="py-40 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-orange-500/5 opacity-20 rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-12 xl:col-span-5 text-center lg:text-start">
              <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-orange-400 mb-8">{t('registration2024')}</div>
              <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] text-white">
                {t('secureLegacy').split(' ')[0]} <br />
                <span className="italic text-orange-400">{t('secureLegacy').split(' ').slice(1).join(' ')}</span>
              </h2>
              <div className="flex flex-col gap-12 mt-16 max-w-sm mx-auto lg:mx-0">
                <div className={`flex items-start space-x-6 group ${isRtl ? 'space-x-reverse' : ''}`}>
                  <div className="text-4xl font-serif text-white opacity-30 group-hover:opacity-100 transition-opacity">01</div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-white/90 mb-1">{t('directInquiries')}</h3>
                    <p className="text-[13px] text-white/50 tracking-wider font-medium">{contactInfo.phones.join(' • ')}</p>
                  </div>
                </div>
                <div className={`flex items-start space-x-6 group ${isRtl ? 'space-x-reverse' : ''}`}>
                  <div className="text-4xl font-serif text-white opacity-30 group-hover:opacity-100 transition-opacity">02</div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-white/90 mb-1">{t('emailRegistry')}</h3>
                    <p className="text-[13px] text-white/50 tracking-wider font-medium">{contactInfo.email}</p>
                  </div>
                </div>
                <div className={`flex items-start space-x-6 group ${isRtl ? 'space-x-reverse' : ''}`}>
                  <div className="text-4xl font-serif text-white opacity-30 group-hover:opacity-100 transition-opacity">03</div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-white/90 mb-1">{t('academyHours')}</h3>
                    <p className="text-[13px] text-white/50 tracking-wider font-medium">{contactInfo.hours} • {t('open7')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-12 xl:col-span-7">
              <div className="bg-white p-12 lg:p-20 border border-white/5 shadow-2xl rounded-3xl">
                <div className="text-[10px] text-slate-400 uppercase tracking-[0.3em] mb-12">{t('interestForm')}</div>
                <form className="grid gap-12" onSubmit={e => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="border-b border-slate-100 pb-2">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-[#0f172a] mb-3 block">{t('applicantName')}</label>
                      <input type="text" className="w-full bg-transparent border-none px-0 py-2 focus:ring-0 text-[#0f172a] font-serif text-lg placeholder:text-slate-200" placeholder={t('fullName')} />
                    </div>
                    <div className="border-b border-slate-100 pb-2">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-[#0f172a] mb-3 block">{t('contactRef')}</label>
                      <input type="tel" className="w-full bg-transparent border-none px-0 py-2 focus:ring-0 text-[#0f172a] font-serif text-lg placeholder:text-slate-200" placeholder={t('phoneNumber')} />
                    </div>
                  </div>
                  <div className="border-b border-slate-100 pb-8">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#0f172a] mb-6 block">{t('academicLevel')}</label>
                    <div className={`flex flex-wrap gap-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      {[t('preschool'), t('primary'), t('middle')].map(opt => (
                        <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                          <input type="radio" name="level" className="w-4 h-4 border-[#0f172a] text-orange-600 focus:ring-orange-600" />
                          <span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-orange-600 transition-colors mx-2">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-orange-600 text-white font-bold uppercase tracking-[0.3em] py-6 text-xs hover:bg-orange-700 transition-colors shadow-2xl shadow-orange-200">
                    {t('finalize')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-12 bg-white border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] text-slate-400 uppercase tracking-[0.3em] text-center md:text-left">
          &copy; {new Date().getFullYear()} EVEREST ACADEMY • {t('office')}
        </div>
        <div className={`flex items-center gap-12 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <span className="text-[10px] text-orange-600 font-bold uppercase tracking-[0.5em]">{t('excellence')}</span>
          <span className="text-[10px] text-[#0f172a] uppercase tracking-[0.5em] font-bold">{t('integrity')}</span>
          <span className="text-[10px] text-slate-400 uppercase tracking-[0.5em] font-bold">{t('legacy')}</span>
        </div>
      </footer>
    </div>
  );
}
