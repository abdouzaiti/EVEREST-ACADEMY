import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, Clock, MapPin, ChevronRight, GraduationCap, Trophy, Users, 
  BookOpen, Star, Facebook, Instagram, CheckCircle2, ChevronDown, 
  ArrowRight, ShieldCheck, Zap, Heart, Languages
} from 'lucide-react';
import { useState, useMemo } from 'react';

// Using the provided images
const LOGO_URL = '/logo.png';

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
    heroDesc: "Un parcours éducatif sur mesure conçu pour la prochaine génération de leaders mondiaux.",
    slogan: "Enseignement & Formation",
    supportLessons: "Cours de soutien pour tous les niveaux",
    trainingCourses: "Sessions de formation",
    examPrep: "Préparation aux examens",
    languages: "Enseignement des langues étrangères",
    workshops: "Ateliers éducatifs pour enfants",
    primaryStage: "Phase Primaire",
    middleStage: "Phase Moyenne",
    secondaryStage: "Phase Secondaire",
    address: "32 rue tahlaiti othmane, Mostaganem zeghloul",
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
    hoursTitle: "La plus grande école de Mostaganem",
    hoursDesc: "Nous sommes fiers d'être le plus grand établissement d'enseignement de Mostaganem, avec 19 salles de classe équipées pour offrir un environnement d'apprentissage optimal.",
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
    legacyDesc: "Une history de production de diplômés distingués et capables.",
    preschool: "Maternelle",
    primary: "Primaire",
    middle: "Moyen",
    preschoolDesc: "Se concentrer sur le jeu créatif, les liens sociaux et les premières compétences cognitives.",
    primaryDesc: "Renforcer les bases académiques fondamentales en mettant l'accent sur le bilinguisme.",
    middleDesc: "Formation de penseurs critiques et de futurs leaders grâce à l'apprentissage analytique.",
    whyEverest: "Pourquoi choisir Everest ?",
    whyEverestDesc: "Découvrez ce qui fait de notre académie la destination de choix pour l'excellence académique et la croissance personnelle.",
    whereFindUs: "Où pouvez-vous nous trouver ?",
    whereFindUsDesc: "Visitez-nous au cœur de la ville pour découvrir notre environnement d'apprentissage inspirant.",
    openInMaps: "Ouvrir dans Google Maps",
    viewOnMaps: "Voir sur Google Maps",
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
    heroDesc: "A bespoke educational journey designed for the next generation of global leaders.",
    slogan: "Education & Training",
    supportLessons: "Support lessons for all levels",
    trainingCourses: "Training courses",
    examPrep: "Exam preparation",
    languages: "Foreign language teaching",
    workshops: "Educational workshops for children",
    primaryStage: "Primary Stage",
    middleStage: "Middle Stage",
    secondaryStage: "Secondary Stage",
    address: "32 rue tahlaiti othmane, Mostaganem zeghloul",
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
    hoursTitle: "Biggest School in Mostaganem",
    hoursDesc: "We are proud to be the largest educational institution in Mostaganem, featuring 19 classrooms equipped to provide an optimal learning environment.",
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
    whyEverest: "Why choose Everest?",
    whyEverestDesc: "Discover what makes our academy the top destination for academic excellence and personal growth.",
    whereFindUs: "Where can you find us?",
    whereFindUsDesc: "Visit us in the heart of the city to experience our inspiring learning environment.",
    openInMaps: "Open in Google Maps",
    viewOnMaps: "View on Google Maps",
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
    heroDesc: "رحلة تعليمية مصممة خصيصاً للجيل القادم من القادة العالميين.",
    slogan: "للتعليم و التكوين",
    supportLessons: "دروس الدعم لجميع الأطوار",
    trainingCourses: "دورات تدريبية",
    examPrep: "تحضير للإمتحانات",
    languages: "تعليم اللغات الأجنبية",
    workshops: "ورشات تعليمية للأطفال",
    primaryStage: "الطور الابتدائي",
    middleStage: "الطور المتوسط",
    secondaryStage: "الطور الثانوي",
    address: "حي 32 مسكن، طريق تحليتي عثمان، مستغانم زغلول",
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
    hoursTitle: "أكبر مؤسسة في مستغانم",
    hoursDesc: "نحن فخورون بكوننا أكبر مؤسسة تعليمية في مستغانم، حيث نضم 19 قاعة تدريس مجهزة بأحدث الوسائل لضمان بيئة تعليمية مثالية.",
    registration2024: "التسجيل لعام 2024",
    whyEverest: "لماذا تختار إيفرست؟",
    whyEverestDesc: "اكتشف ما يجعل أكاديميتنا الوجهة الأولى للتميز الأكاديمي والنمو الشخصي.",
    whereFindUs: "أين تجدنا؟",
    whereFindUsDesc: "تفضل بزيارتنا في قلب المدينة لتجربة بيئتنا التعليمية الملهمة.",
    openInMaps: "فتح في خرائط جوجل",
    viewOnMaps: "عرض على الخريطة",
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

  const servicePoints = [
    { text: t('supportLessons'), color: 'bg-[#43a2d6]' },
    { text: t('trainingCourses'), color: 'bg-[#f97316]' },
    { text: t('examPrep'), color: 'bg-[#5ccee3]' },
    { text: t('languages'), color: 'bg-[#e53e3e]' },
    { text: t('workshops'), color: 'bg-[#0f172a]' },
  ];

  const levelBadgesList = [
    { text: t('primaryStage'), color: 'bg-[#0f172a]', textColor: 'text-white' },
    { text: t('middleStage'), color: 'bg-[#f97316]', textColor: 'text-white' },
    { text: t('secondaryStage'), color: 'bg-[#0f172a]', textColor: 'text-white' },
  ];

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


      {/* Hero Section - Flyer Style */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Info & Content */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-20"
            >
              {/* Flyer Header Branding */}
              <div className={`flex items-center gap-6 mb-12 ${isRtl ? 'flex-row' : 'flex-row'}`}>
                <img 
                  src={LOGO_URL} 
                  alt="Everest Academy" 
                  className="w-24 h-24 object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <h1 className="text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-none mb-2">
                    Everest Academy
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-bold text-orange-600 leading-tight">
                    {t('slogan')}
                  </h2>
                </div>
              </div>

              {/* Level Badges Row */}
              <div className={`flex flex-wrap gap-3 mb-10 ${isRtl ? 'justify-start' : 'justify-start'}`}>
                {levelBadgesList.map((badge, idx) => (
                  <Badge 
                    key={idx}
                    className={`${badge.color} ${badge.textColor} px-6 py-2 rounded-full text-sm font-bold border-none shadow-sm hover:scale-105 transition-transform uppercase tracking-wider`}
                  >
                    {badge.text}
                  </Badge>
                ))}
              </div>

              {/* Services List with Color Squares */}
              <div className="space-y-6 mb-12">
                {servicePoints.map((point, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className={`flex items-center gap-4 ${isRtl ? 'flex-row' : 'flex-row'}`}
                  >
                    <div className={`w-4 h-4 ${point.color} rounded-sm shrink-0 shadow-sm`} />
                    <span className="text-xl md:text-2xl font-bold text-[#0f172a] tracking-tight">
                      {point.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className={`flex gap-6 ${isRtl ? 'justify-start' : 'justify-start'}`}>
                <button className="px-10 py-4 bg-[#0f172a] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-slate-800 transition-all shadow-xl">
                  {t('register')}
                </button>
              </div>
            </motion.div>

            {/* Right Column: Imagery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative lg:h-[700px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-orange-600/5 blur-[120px] rounded-full" />
              
              {/* Happy Student Image Wrapper */}
              <div className="relative z-10 w-full max-w-lg mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className={`flex items-center gap-3 mb-6 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-xl w-fit ${isRtl ? 'mr-auto' : 'ml-auto'}`}
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">{t('academyHours')}</div>
                    <div className="text-sm font-bold text-[#0f172a]">{contactInfo.hours} • {t('open7')}</div>
                  </div>
                </motion.div>
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
                  alt="Student Success" 
                  className="w-full h-auto object-cover rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-8 border-white"
                  referrerPolicy="no-referrer"
                />
                
                {/* Triangular Accents like the flyer */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#43a2d6] opacity-20 rotate-45 -z-10" />
                <div className="absolute top-10 -right-10 w-32 h-32 border-4 border-orange-600/20 rounded-full -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Video 1: Why Choose Everest */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="space-y-3">
                <div className="w-12 h-1 bg-orange-600 rounded-full" />
                <h3 className="text-xl font-bold text-[#0f172a] uppercase tracking-wider">
                  {t('whyEverest')}
                </h3>
                <p className="text-sm text-slate-500 max-w-md leading-relaxed">
                  {t('whyEverestDesc')}
                </p>
              </div>
              <div className="relative rounded-[24px] shadow-2xl border-4 border-white bg-white overflow-hidden group">
                <video 
                  src="/video1.mp4" 
                  controls
                  playsInline 
                  type="video/mp4"
                  className="w-full h-auto block"
                />
                <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/5 transition-colors pointer-events-none" />
              </div>
            </motion.div>

            {/* Video 2: Where to find us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="space-y-3">
                <div className="w-12 h-1 bg-[#43a2d6] rounded-full" />
                <h3 className="text-xl font-bold text-[#0f172a] uppercase tracking-wider">
                  {t('whereFindUs')}
                </h3>
                <p className="text-sm text-slate-500 max-w-md leading-relaxed">
                  {t('whereFindUsDesc')}
                </p>
              </div>
              
              <div className="relative rounded-[24px] shadow-2xl border-4 border-white bg-white overflow-hidden">
                <video 
                  src="/video2.mp4" 
                  controls
                  playsInline 
                  type="video/mp4"
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          </div>

          {/* Map at the middle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 max-w-3xl mx-auto flex flex-col items-center gap-6"
          >
            <div className="w-full h-80 rounded-[24px] overflow-hidden border-4 border-white shadow-2xl relative group">
              <iframe 
                src="https://maps.google.com/maps?q=35.921987,0.090474&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Everest Academy Location"
              />
              <a 
                href="https://maps.app.goo.gl/Wa99Jn93TQaXLkpp8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <div className="bg-white px-6 py-2 rounded-full shadow-lg font-bold text-orange-600 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span>{t('openInMaps')}</span>
                  <MapPin size={18} />
                </div>
              </a>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/Wa99Jn93TQaXLkpp8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 font-bold hover:underline flex items-center gap-2"
            >
              <MapPin size={20} />
              <span>{t('viewOnMaps')}</span>
            </a>
          </motion.div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#43a2d6] rounded-full blur-[120px] opacity-10 -translate-x-1/2 -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-600 rounded-full blur-[140px] opacity-10 translate-x-1/3 translate-y-1/3 -z-10" />
      </section>

      {/* About Section */}
      <section id="about" className="py-40 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="hidden lg:block lg:relative">
              {/* Image was removed as per user request */}
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
              <div className={`mb-16 ${isRtl ? 'rtl' : ''}`}>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-8 rounded-r-2xl">
                  <h4 className="text-xl font-bold text-[#0f172a] mb-2">{t('hoursTitle')}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{t('hoursDesc')}</p>
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

      {/* Footer Contact Bar - Flyer Style */}
      <footer className="relative bg-[#0f172a] text-white pt-16 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-12 z-10 relative">
          
          {/* Logo & Small Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4">
              <img src={LOGO_URL} className="w-12 h-12 brightness-0 invert" alt="Logo" referrerPolicy="no-referrer" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-widest">EVEREST</span>
                <span className="text-[9px] text-orange-400 tracking-[0.4em] font-bold">{t('academy')}</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 max-w-xs text-center md:text-left uppercase tracking-widest leading-loose">
              {t('heroDesc')}
            </p>
          </div>

          {/* Detailed Contact List matching the Bottom of the Image */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4 text-orange-400 font-bold text-lg md:text-2xl tracking-tighter">
              <Phone className="w-6 h-6" />
              <span>{contactInfo.phones.join('  •  ')}</span>
            </div>
            <div className="flex items-center gap-4 text-white/80 font-medium text-sm md:text-lg italic">
              <MapPin className="w-6 h-6 text-orange-400 shrink-0" />
              <span className="text-center md:text-left">{t('address')}</span>
            </div>
          </div>

          {/* Social / Branding */}
          <div className="flex flex-col items-center md:items-end gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
            <div className={`flex gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <Facebook className="w-6 h-6 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
            <div className="text-[9px] text-slate-500 uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} Everest Academy
            </div>
          </div>
        </div>

        {/* Decorative Background for Footer */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>
      </footer>
    </div>
  );
}
