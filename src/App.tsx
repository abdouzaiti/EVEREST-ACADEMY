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
    phoneNumber: "Numéro de Téléphone",
    coursSoutienFeatures: ["Toutes les matières", "Suivi personnalisé", "Méthodes efficaces", "Préparation aux examens"],
    coursLanguesFeatures: ["Français", "Anglais", "Allemand", "Russe", "Turc", "Espagnol"],
    formationsProFeatures: ["Agent de voyage", "Ressources humaines", "Comptabilité & Fiscalité", "Marketing", "Intelligence artificielle"],
    lifeAtSchoolFeatures: ["Accompagnement", "Événements & ateliers", "Projets collaboratifs", "Réseau & opportunités"],
    whyEverestFeatures: ["Encadrement de qualité", "Pédagogie innovante", "Suivi personnalisés", "Ouverture internationale", "Infrastructure moderne"],
    brandValues: ["APPRENDRE", "PROGRESSER", "S'ÉPANOUIR", "RÉUSSIR"],
    runClubTag: "Sport • Santé • Dépassement de soi",
    imaginariumTag: "Pôle culturel • Créativité • Expression",
    aboutSubtitle: "À PROPOS DE L'ACADÉMIE",
    aboutTitle: "Votre passerelle vers l'excellence et l'épanouissement",
    aboutDesc1: "Everest Academy est un établissement innovant de formation et de culture situé à Mostaganem. Notre mission est d'offrir un environnement éducatif d elite où chaque élève peut développer son plein potentiel intellectuel, linguistique, créatif et physique.",
    aboutDesc2: "À travers des méthodes pédagogiques modernes, un encadrement hautement qualifié et une communauté riche en activités, nous préparons les leaders de demain à relever tous les défis scolaires et professionnels.",
    aboutFeature1Title: "Excellence Académique",
    aboutFeature1Desc: "Des programmes conformes aux exigences modernes et un suivi rigoureux pour garantir la réussite.",
    aboutFeature2Title: "Langues & Ouverture",
    aboutFeature2Desc: "Un apprentissage immersif de 6 langues clés pour élargir les horizons culturels et professionnels.",
    aboutFeature3Title: "Développement Personnel",
    aboutFeature3Desc: "Des clubs d'expression, de sport et de culture pour cultiver la confiance et la créativité."
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
    phoneNumber: "Phone Number",
    coursSoutienFeatures: ["All subjects", "Personalized support", "Effective methods", "Exam preparation"],
    coursLanguesFeatures: ["French", "English", "German", "Russian", "Turkish", "Spanish"],
    formationsProFeatures: ["Travel agent", "Human resources", "Accounting & Tax", "Marketing", "Artificial intelligence"],
    lifeAtSchoolFeatures: ["Support", "Events & workshops", "Collaborative projects", "Network & opportunities"],
    whyEverestFeatures: ["Quality supervision", "Innovative pedagogy", "Personalized follow-up", "International opening", "Modern infrastructure"],
    brandValues: ["LEARN", "PROGRESS", "FLOURISH", "SUCCEED"],
    runClubTag: "Sport • Health • Self-transcendence",
    imaginariumTag: "Cultural Hub • Creativity • Expression",
    aboutSubtitle: "ABOUT THE ACADEMY",
    aboutTitle: "Your Gateway to Excellence and Growth",
    aboutDesc1: "Everest Academy is an innovative training and culture center located in Mostaganem. Our mission is to provide an elite educational environment where every student can develop their full intellectual, linguistic, creative, and physical potential.",
    aboutDesc2: "Through modern pedagogical methods, highly qualified coaching, and a vibrant community rich in activities, we prepare tomorrow's leaders to overcome academic and professional goals.",
    aboutFeature1Title: "Academic Excellence",
    aboutFeature1Desc: "Modern curricula and rigorous follow-up ensuring educational success and peak performance.",
    aboutFeature2Title: "Languages & Culture",
    aboutFeature2Desc: "Immersive learning of 6 key global languages to expand cultural horizons.",
    aboutFeature3Title: "Personal Development",
    aboutFeature3Desc: "A wide variety of activities and clubs to cultivate creativity and leadership skills."
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
    phoneNumber: "رقم الهاتف",
    coursSoutienFeatures: ["جميع المواد", "متابعة شخصية", "طرق فعالة", "التحضير للامتحانات"],
    coursLanguesFeatures: ["الفرنسية", "الإنجليزية", "الألمانية", "الروسية", "التركية", "الإسبانية"],
    formationsProFeatures: ["وكيل سفر", "الموارد البشرية", "المحاسبة والضرائب", "التسويق", "الذكاء الاصطناعي"],
    lifeAtSchoolFeatures: ["مرافقة", "فعاليات وورش عمل", "مشاريع تعاونية", "شبكة علاقات وفرص"],
    whyEverestFeatures: ["تأطير عالي الجودة", "بيداغوجيا مبتكرة", "متابعة شخصية", "انفتاح دولي", "بنية تحتية حديثة"],
    brandValues: ["تعلّم", "تقدّم", "ازدهر", "انجح"],
    runClubTag: "رياضة • صحة • تجاوز الذات",
    imaginariumTag: "قطب ثقافي • إبداع • تعبير",
    aboutSubtitle: "عن الأكاديمية",
    aboutTitle: "بوابتكم نحو التفوق والتميز الدراسي",
    aboutDesc1: "أكاديمية إيفرست هي مركز تكويني وثقافي مبتكر يقع بمستغانم. تتمثل رسالتنا في توفير بيئة تعليمية راقية وشاملة تتيح لكل تلميذ تطوير كامل إمكاناته الفكرية، اللغوية، الإبداعية والرياضية.",
    aboutDesc2: "من خلال مناهج بيداغوجية حديثة، وتأطير عالي الكفاءة، ومجتمع غني بالأنشطة والنوادي، نقوم بإعداد قادة المستقبل للتفوق ومواجهة التحديات الدراسية والمهنية بكل ثقة.",
    aboutFeature1Title: "التميز الأكاديمي",
    aboutFeature1Desc: "مناهج تعليمية متطورة ومتابعة يومية دقيقة تضمن تحقيق النتائج المثالية والنجاح الباهر.",
    aboutFeature2Title: "اللغات والانفتاح",
    aboutFeature2Desc: "تعليم تفاعلي لـ 6 لغات عالمية لتمكين التلاميذ وتوسيع آفاقهم الثقافية والمهنية.",
    aboutFeature3Title: "تطوير المهارات",
    aboutFeature3Desc: "نوادي رياضية، ثقافية وإبداعية متكاملة لبناء شخصية قوية، واثقة ومبدعة."
  }
};

import { Badge } from '@/components/ui/badge-2';

const SectionHeader = ({ title, light = false }: { title: string, light?: boolean }) => (
  <div className="text-center max-w-3xl mx-auto mb-16 px-6">
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

import { CircularTestimonials } from './components/CircularTestimonials';

const getTestimonials = (lang: Language) => {
  if (lang === 'fr') {
    return [
      {
        quote: "Un environnement d'apprentissage amusant et stimulant pour les 4 à 17 ans. Le programme se concentre sur le développement des compétences de demain avec des ateliers de technologie et codage, développement de la logique, perfectionnement des langues (Anglais, Français, Espagnol), et activités de lecture et écriture.",
        name: "SUMMER CAMP 2026",
        designation: "",
        src: "/ac1.jpg"
      },
      {
        quote: "Un espace créatif dédié au développement des talents des enfants et à la découverte de leurs passions. Le programme propose des ateliers variés et amusants incluant le théâtre, le cinéma, le dessin, la sculpture, la robotique, la cuisine saine, et les travaux manuels, pour avancer vers un bel avenir.",
        name: "Programme Mes Loisirs",
        designation: "Découvrez... Expérimentez... Créez !",
        src: "/ac2.jpg"
      },
      {
        quote: "Un programme complet de divertissement et d'apprentissage pour les jeunes sous le thème \"Apprendre, s'amuser, grandir ensemble\". Offre une expérience riche avec des ateliers de robotique, codage, activités sportives (natation, tennis), soutien en langues et Coran, et arts, dans un environnement sécurisé.",
        name: "Camp d'été exceptionnel",
        designation: "SUMMER CAMP 2026",
        src: "/ac3.jpg"
      },
      {
        quote: "Un programme sportif dynamique et amusant pour les 4 à 17 ans dans le cadre du camp d'été. Vise à révéler l'énergie des enfants et créer de nouvelles amitiés à travers diverses activités sportives (natation, football, tennis) dans un environnement sûr et stimulant.",
        name: "Activités Sportives d'Été",
        designation: "Activité . Amitié . Plaisir",
        src: "/ac4.jpg"
      },
      {
        quote: "Cours dédiés à l'apprentissage de la langue allemande pour développer les compétences en communication de manière simple et rapide. Deux niveaux: Débutant (A1-A2) et Intermédiaire (B1-B2) de 3 mois chacun, avec un mois gratuit de conversation. Accent sur la pratique, l'écoute, et un accompagnement personnalisé.",
        name: "Cours de Langue Allemande",
        designation: "Apprenez avec confiance... parlez au monde !",
        src: "/ac5.jpg"
      },
      {
        quote: "Un cours intensif pour développer les compétences en communication en français en 3 mois seulement. Conçu pour vous aider à parler couramment dans diverses situations. L'accent est mis sur l'expression orale, l'enrichissement du vocabulaire, avec des suivis personnalisés et des horaires flexibles.",
        name: "Cours de Langue Française",
        designation: "Parlons français... que le monde vous écoute !",
        src: "/ac6.jpg"
      },
      {
        quote: "Cours intégrés pour apprendre l'allemand et l'espagnol, et développer les compétences de communication rapidement. Deux niveaux pour chaque langue (A1-A2 et B1-B2) sur 3 mois, avec un mois gratuit de conversation. Le cours inclut des ateliers pratiques, écoute, et simulations de scénarios réels.",
        name: "Cours Allemand et Espagnol",
        designation: "Un programme... deux langues !",
        src: "/ac7.jpg"
      }
    ];
  }

  if (lang === 'en') {
    return [
      {
        quote: "A fun and stimulating learning environment for ages 4 to 17. The program focuses on developing future skills through tech and coding workshops, logic development, language improvement (English, French, Spanish), alongside reading and writing activities.",
        name: "SUMMER CAMP 2026",
        designation: "",
        src: "/ac1.jpg"
      },
      {
        quote: "A creative space dedicated to developing children's talents and discovering their passions. The program features diverse and fun workshops including theater, cinema, drawing, sculpture, robotics, healthy cooking, and crafts, for steady steps towards a better future.",
        name: "My Hobbies Program",
        designation: "Discover... Experiment... Create!",
        src: "/ac2.jpg"
      },
      {
        quote: "A comprehensive recreational and educational summer program for kids and youth under the motto \"Learn.. Have fun.. Grow together\". Offers a rich experience with robotics, coding, sports (swimming, tennis), languages, Quran support, and arts, in a safe environment.",
        name: "Exceptional Summer Camp",
        designation: "SUMMER CAMP 2026",
        src: "/ac3.jpg"
      },
      {
        quote: "A vibrant and fun sports program for ages 4 to 17 as part of the summer camp. Aims to discover kids' energy and build new friendships through various sports activities including swimming, football, tennis, in a safe and stimulating environment.",
        name: "Summer Sports Activities",
        designation: "Activity . Friendship . Fun",
        src: "/ac4.jpg"
      },
      {
        quote: "Dedicated courses to learn German and develop communication skills simply, fast, and effectively. Two levels: Beginner (A1-A2) and Intermediate (B1-B2) lasting 3 months each, with a free conversation month. Focus on practical conversations, listening, and personalized support.",
        name: "German Language Courses",
        designation: "Learn with confidence... speak to the world!",
        src: "/ac5.jpg"
      },
      {
        quote: "An intensive course to develop French communication skills in just 3 months. Designed to help you speak fluently in various daily and professional situations. Focuses on oral expression, vocabulary enrichment, with personalized tracking and flexible study times.",
        name: "French Language Courses",
        designation: "Speak French... let the world hear you!",
        src: "/ac6.jpg"
      },
      {
        quote: "Integrated courses to learn German and Spanish, developing communication skills quickly and effectively. Two levels per language (A1-A2 and B1-B2) over 3 months, with a free conversation month. Includes practical workshops, listening practice, and real-life scenario simulations.",
        name: "German and Spanish Courses",
        designation: "One program... two different languages!",
        src: "/ac7.jpg"
      }
    ];
  }

  return [
    {
      quote: "بيئة تعليمية ممتعة ومحفزة للأعمار بين 4 و17 سنة. يركز البرنامج على تطوير مهارات المستقبل من خلال ورشات التكنولوجيا والبرمجة، تنمية التفكير والمنطق، تحسين اللغات (الإنجليزية، الفرنسية، والإسبانية)، بالإضافة إلى أنشطة القراءة والكتابة.",
      name: "SUMMER CAMP 2026",
      designation: "",
      src: "/ac1.jpg"
    },
    {
      quote: "مساحة إبداعية مخصصة لتنمية مواهب الأطفال واكتشاف شغفهم. يتضمن البرنامج ورشات متنوعة وممتعة تشمل المسرح، السينما، الرسم، النحت وصناعة المجسمات، الروبوتيك والبرمجة، الطبخ الصحي، والأشغال اليدوية، لخطوات ثابتة نحو مستقبل أفضل.",
      name: "برنامج هوايتي للأطفال",
      designation: "اكتشف... جرّب... أبدع!",
      src: "/ac2.jpg"
    },
    {
      quote: 'برنامج صيفي ترفيهي وتعليمي متكامل للأطفال والشباب تحت شعار "نتعلم.. نمرح.. ننمو معاً". يقدم تجربة غنية تشمل ورشات الروبوتيك والبرمجة، الأنشطة الرياضية (كالسباحة والتنس)، دعم اللغات والقرآن الكريم، بالإضافة إلى برنامج الهوايات والفنون، في بيئة آمنة تضمن المتعة والفائدة.',
      name: "مَخيم صَيفي استثنائي",
      designation: "SUMMER CAMP 2026",
      src: "/ac3.jpg"
    },
    {
      quote: "برنامج رياضي حيوي وممتع مخصص للأعمار من 4 إلى 17 سنة ضمن المخيم الصيفي. يهدف البرنامج إلى اكتشاف طاقات الأطفال وبناء صداقات جديدة من خلال نشاطات رياضية متنوعة تشمل السباحة، كرة القدم، التنس، ومجموعة من الرياضات المسلية في بيئة آمنة ومحفزة.",
      name: "الأنشطة الرياضية الصيفية",
      designation: "نشاط . صداقة . متعة",
      src: "/ac4.jpg"
    },
    {
      quote: "دورات مخصصة لتعليم اللغة الألمانية وتطوير مهارات التواصل بطريقة بسيطة، سريعة، وفعالة. يضمن البرنامج مستويين متوافقين مع وتيرة تقدمك: المستوى الأول للمبتدئين (A1 · A2) والمستوى الثاني المتوسط (B1 · B2) بمدة 3 أشهر لكل منهما، مع الاستفادة من شهر مجاني خاص بالمحادثة. تركز الدورة على المحادثات التطبيقية، الاستماع، والمتابعة الشخصية مع مرونة في أوقات الدراسة وطرق الدفع.",
      name: "دورات اللغة الألمانية",
      designation: "تَعلم بثقة.. وتَحدث مع العالم!",
      src: "/ac5.jpg"
    },
    {
      quote: "دورة مكثفة مخصصة لتطوير مهارات التواصل باللغة الفرنسية خلال 3 أشهر فقط. تم تصميم البرنامج لمساعدتك على التحدث بثقة وسلاسة في مختلف مواقف الحياة اليومية والمهنية، من خلال التركيز على التعبير الشفهي، إثراء الرصيد اللغوي، والمحادثات التطبيقية. تضمن الدورة متابعة شخصية وفعالة مع مرونة في أوقات الدراسة (صباحاً/مساءً) لنتائج ملموسة منذ الأسابيع الأولى.",
      name: "دورات اللغة الفرنسية",
      designation: "تَحدث الفرنسية.. لِيستمع إليك العالم!",
      src: "/ac6.jpg"
    },
    {
      quote: "دورات متكاملة لتعلم اللغتين الألمانية والإسبانية وتطوير مهارات التواصل بأسلوب سريع وفعال. يرتكز البرنامج على مستويين لكل لغة: المستوى الأول للمبتدئين (A1 · A2) والمستوى الثاني المتوسط (B1 · B2) ممتدة على مدار 3 أشهر، مع الاستفادة من شهر مجاني خاص بالمحادثة. تشمل الدورة ورشات تطبيقية، تدريبات استماع، ومحاكاة لمواقف واقعية لضمان التطور السريع.",
      name: "دورات اللغتين الألمانية والإسبانية",
      designation: "برنامج واحد.. لغتان مختلفتان!",
      src: "/ac7.jpg"
    }
  ];
};

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isRtl = lang === 'ar';

  useEffect(() => {
    if (showIntro && videoRef.current) {
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          // Si le navigateur bloque l'autoplay avec son, on passe en muet
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(console.error);
          }
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
      <div 
        className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center cursor-pointer"
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.muted = false;
            setIsMuted(false);
            videoRef.current.play().catch(console.error);
          }
        }}
      >
        <video 
          ref={videoRef}
          src={INTRO_VIDEO_URL} 
          className="absolute inset-0 w-full h-full object-contain" 
          playsInline
          onEnded={() => setShowIntro(false)}
        />
        {isMuted && (
           <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-black/50 text-white/80 px-6 py-2 rounded-full text-sm font-medium tracking-wide pointer-events-none animate-pulse">
             Cliquez n'importe où pour activer le son
           </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen overflow-x-hidden bg-[#fcfcfc] text-[#0f172a] font-sans selection:bg-orange-100 selection:text-orange-900 ${isRtl ? 'font-serif' : ''}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Top Banner */}
      <div className="bg-[#0f172a] text-white/80 py-2 px-6 text-[10px] uppercase font-bold tracking-[0.2em] border-b border-white/5 no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className={`flex items-center gap-4 sm:gap-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <span className="flex items-center gap-2 hover:text-orange-400 transition-colors cursor-pointer"><Mail className="w-3 h-3 text-orange-500" /> {contactInfo.email}</span>
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
              {['fr', 'ar', 'en'].map((l) => (
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
      <section className="relative pt-8 md:pt-12 pb-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:-mt-32"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-[2px] bg-academy-orange" />
              <span className="text-xs font-bold text-academy-orange tracking-widest uppercase">{t('heroSubtitle')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-academy-navy leading-[1.1] mb-8 tracking-tight">
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
            className="relative lg:-mr-12"
          >
            <CircularTestimonials 
              testimonials={getTestimonials(lang)} 
              colors={{
                name: "#0f172a",
                designation: "#f58220",
                testimony: "#64748b",
                arrowBackground: "#ffffff",
                arrowForeground: "#0f172a",
                arrowHoverBackground: "#f58220",
              }}
              fontSizes={{
                name: "1.25rem",
                designation: "0.875rem",
                quote: "1rem",
              }}
            />
          </motion.div>
        </div>
      </section>



      {/* Main Pillars Section (Dark Banner with small icons) */}
      <section className="bg-academy-navy py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <GraduationCap />, title: t('coursSoutien'), sub: t('coursSoutienSub') },
            { icon: <Languages />, title: t('coursLangues'), sub: t('coursLanguesSub') },
            { icon: <Trophy />, title: t('formationsPro'), sub: t('formationsProSub') },
            { icon: <Users />, title: t('lifeAtSchool'), sub: t('lifeAtSchoolSub') },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center sm:items-start lg:items-center gap-4 text-white/90">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-1 lg:mt-0">
                {cloneElement(item.icon as any, { className: "w-5 h-5 text-white/60" })}
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight mb-1">{item.title}</h3>
                <p className="text-[10px] text-white/40 uppercase tracking-widest leading-snug">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Pillars Detailed Cards */}
      <section id="programs" className="pb-20 lg:pb-24 pt-8 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title={t('completeFormation')} />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: t('coursSoutien'), 
                sub: t('coursSoutienSub'), 
                icon: <BookOpen />, 
                features: t('coursSoutienFeatures') as string[]
              },
              { 
                title: t('coursLangues'), 
                sub: t('coursLanguesSub'), 
                icon: <Languages />, 
                features: t('coursLanguesFeatures') as string[],
                isGrid: true
              },
              { 
                title: t('formationsPro'), 
                sub: t('formationsProSub'), 
                icon: <GraduationCap />, 
                features: t('formationsProFeatures') as string[]
              },
              { 
                title: t('lifeAtSchool'), 
                sub: t('lifeAtSchoolSub'), 
                icon: <Users />, 
                features: t('lifeAtSchoolFeatures') as string[]
              },
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-academy-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute top-0 left-0 w-32 h-32 bg-academy-orange/10 rounded-full blur-3xl transform -translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-700 pointer-events-none" />
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-academy-orange/30 scale-[0.98] group-hover:scale-100 transition-all duration-500 pointer-events-none" />

                <div className="w-16 h-16 rounded-full bg-academy-orange flex items-center justify-center mb-8 shadow-lg shadow-orange-100 group-hover:scale-110 transition-transform relative z-10">
                  {cloneElement(p.icon as any, { className: "w-8 h-8 text-white relative z-10 group-hover:-rotate-12 transition-transform duration-500" })}
                </div>
                <div className="flex flex-col flex-grow relative z-10">
                  <h3 className="text-lg font-black text-academy-navy mb-1 group-hover:text-academy-orange transition-colors">{p.title}</h3>
                  <p className="text-[10px] font-bold text-slate-400 mb-8 uppercase tracking-widest">{p.sub}</p>
                  
                  <ul className={`space-y-3 mb-8 flex-grow ${p.isGrid ? 'grid grid-cols-2 gap-x-2 space-y-0 gap-y-3' : ''}`}>
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-[12px] text-slate-600 font-medium">
                        <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-academy-orange group-hover:shadow-md transition-all duration-300">
                          <CheckCircle2 className="w-3 h-3 text-academy-orange group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-academy-navy uppercase tracking-widest group-hover:text-academy-orange transition-colors">En savoir plus</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-academy-orange group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section id="clubs" className="py-12 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-[2px] bg-academy-orange" />
              <span className="text-xs font-bold text-academy-orange tracking-widest uppercase">{t('clubsJoin')}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-academy-navy leading-tight mb-8 tracking-tight">
              {t('clubsDesc')}
            </h2>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { 
                name: "MOSTA RUN CLUB", 
                tag: t('runClubTag'), 
                img: CLUB_RUN_NEW,
                logo: CLUB_LOGO_NEW
              },
              { 
                name: "EVEREST IMAGINARIUM", 
                tag: t('imaginariumTag'), 
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
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-white justify-items-center sm:justify-items-start">
          {[
            { label: t('statsStudents'), val: "+1200", icon: <Users /> },
            { label: t('statsTeachers'), val: "+30", icon: <Users /> },
            { label: t('statsLanguages'), val: "6", icon: <Languages /> },
            { label: t('statsFormations'), val: "+15", icon: <GraduationCap /> },
            { label: t('statsCoaching'), val: "100%", icon: <CheckCircle2 /> },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
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

      {/* Unified About & Why Everest Section */}
      <section id="about" className="py-20 lg:py-28 bg-[#fdfdfd] border-b border-slate-100 overflow-hidden relative">
        <div id="life" className="absolute -top-24" />
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute -right-16 top-1/3 w-96 h-96 bg-academy-orange/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="flex flex-col items-center">
            
            {/* About & Advantages text content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col items-center"
            >
              <div className="flex items-center gap-2 mb-6 justify-center">
                <div className="w-10 h-[2px] bg-academy-orange" />
                <span className="text-xs font-black text-academy-orange tracking-widest uppercase">{t('aboutSubtitle')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-academy-navy leading-[1.2] mb-8 tracking-tight text-center">
                {t('aboutTitle')}
              </h2>
              <div className="space-y-6 text-slate-500 text-sm sm:text-base leading-relaxed font-light mb-8 text-center max-w-2xl">
                <p>{t('aboutDesc1')}</p>
                <p>{t('aboutDesc2')}</p>
              </div>

              {/* Checklist advantages derived from the merged Why Everest elements */}
              <div className="mb-10 border-t border-b border-slate-100/80 py-6 w-full max-w-2xl">
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {(t('whyEverestFeatures') as string[]).map((f, i) => (
                    <li key={i} className="flex items-center justify-center sm:justify-start gap-3 text-sm text-start">
                      <CheckCircle2 className="w-5 h-5 text-academy-orange shrink-0" />
                      <span className="text-slate-700 font-semibold leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillars list (micro cards) */}
              <div className="grid sm:grid-cols-3 gap-6 w-full">
                {[
                  {
                    title: t('aboutFeature1Title'),
                    desc: t('aboutFeature1Desc'),
                    icon: <BookOpen className="w-5 h-5 text-academy-orange" />,
                    bg: "bg-orange-50/40 hover:bg-orange-50"
                  },
                  {
                    title: t('aboutFeature2Title'),
                    desc: t('aboutFeature2Desc'),
                    icon: <Languages className="w-5 h-5 text-academy-navy" />,
                    bg: "bg-slate-50 hover:bg-slate-100/80"
                  },
                  {
                    title: t('aboutFeature3Title'),
                    desc: t('aboutFeature3Desc'),
                    icon: <Heart className="w-5 h-5 text-academy-orange" />,
                    bg: "bg-orange-50/40 hover:bg-orange-50"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className={`p-5 rounded-2xl border border-slate-100/80 transition-all duration-300 flex flex-col gap-4 text-start ${item.bg}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100/50">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-academy-navy text-sm mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ready Banner */}
      <section className="bg-academy-navy py-12 px-6 lg:px-12 max-w-7xl mx-4 lg:mx-auto rounded-3xl overflow-hidden relative mb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
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
              <div className="text-white text-left" dir="ltr">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20 text-center md:text-left">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img src={LOGO_URL} alt="Everest Academy" className="w-12 h-12 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black text-academy-navy tracking-tight">EVEREST</span>
                <span className="text-[10px] font-bold text-academy-orange uppercase tracking-[0.3em]">{t('academy')}</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
              {t('heroSubtitle')} <br/> {t('heroTitle')}
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
             </div>
             <a 
               href="tel:0796665045" 
               className="mt-8 flex items-center gap-2 justify-center md:justify-start hover:opacity-80 transition-opacity group cursor-pointer"
             >
                <div className="w-5 h-5 text-academy-orange shrink-0 group-hover:scale-110 transition-transform"><Phone size={16}/></div>
                <span className="text-[12px] font-bold text-slate-500 group-hover:text-academy-orange transition-colors inline-block" dir="ltr">07 96 66 50 45</span>
             </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">&copy; {new Date().getFullYear()} Everest Academy. Tous droits réservés.</div>
        </div>
      </footer>
    </div>
  );
}
