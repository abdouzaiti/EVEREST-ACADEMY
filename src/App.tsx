import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, ChevronRight, GraduationCap, Trophy, Users, 
  BookOpen, Star, Facebook, Instagram, CheckCircle2, ChevronDown, 
  ArrowRight, Zap, Heart, Languages, Play, Search, Youtube, Twitter, Linkedin,
  Globe, TrendingUp, Rocket, Calendar, Award
} from 'lucide-react';
import { useState, useMemo, cloneElement, ReactNode, Fragment, useRef, useEffect } from 'react';
import HERO_NEW from './assets/images/regenerated_image_1779207110842.png';
import CLUB_LOGO_NEW from './assets/images/regenerated_image_1779207245162.png';
import CLUB_IMAGINARIUM_NEW from './assets/images/regenerated_image_1779207827411.png';
import CLUB_RUN_NEW from './assets/images/regenerated_image_1779208385684.jpg';
import ImaginariumAlbumModal from './components/ImaginariumAlbumModal';

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
    completeFormationSub: "Des parcours adaptés à chaque étape de votre apprentissage, conçus pour développer vos compétences et ouvrir de nouvelles opportunités.",
    coursSoutienHighlight: "Renforcez vos bases et progressez en confiance.",
    coursLanguesHighlight: "Apprenez, pratiquez et communiquez sans limites.",
    formationsProHighlight: "Développez des compétences recherchées par le marché.",
    lifeAtSchoolHighlight: "Évoluez dans un environnement bienveillant et dynamique.",
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
    clubsMainDesc: "Rejoignez nos clubs et vivez des expériences uniques qui enrichissent vos compétences, stimulent votre créativité et créent des souvenirs inoubliables.",
    runClubHighlight: "Rejoignez une communauté dynamique passionnée par la course à pied, le bien-être et les défis sportifs.",
    imaginariumHighlight: "Exprimez votre créativité à travers des ateliers, des projets artistiques et des événements culturels.",
    clubsCTA: "DÉCOUVRIR NOS CLUBS",
    pill1Title: "S'épanouir",
    pill1Desc: "Développez vos talents et votre confiance.",
    pill2Title: "Partager",
    pill2Desc: "Rencontrez, collaborez et créez du lien.",
    pill3Title: "Se dépasser",
    pill3Desc: "Repoussez vos limites et atteignez vos objectifs.",
    aboutSubtitle: "À PROPOS DE L'ACADÉMIE",
    aboutTitle: "Votre passerelle vers l'excellence et l'épanouissement",
    aboutDesc1: "Everest Academy est un établissement innovant de formation et de culture situé à Mostaganem. Notre mission est d'offrir un environnement éducatif d elite où chaque élève peut développer son plein potentiel intellectuel, linguistique, créatif et physique.",
    aboutDesc2: "À travers des méthodes pédagogiques modernes, un encadrement hautement qualifié et une communauté riche en activités, nous préparons les leaders de demain à relever tous les défis scolaires et professionnels.",
    aboutFeature1Title: "Excellence Académique",
    aboutFeature1Desc: "Des programmes conformes aux exigences modernes et un suivi rigoureux pour garantir la réussite.",
    aboutFeature2Title: "Langues & Ouverture",
    aboutFeature2Desc: "Un apprentissage immersif de 6 langues clés pour élargir les horizons culturels et professionnels.",
    aboutFeature3Title: "Développement Personnel",
    aboutFeature3Desc: "Des clubs d'expression, de sport et de culture pour cultiver la confiance et la créativité.",
    discoverPrograms: "Découvrir nos programmes",
    makeAppointment: "Prendre rendez-vous",
    skipIntro: "Passer l'introduction"
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
    completeFormationSub: "Tailored pathways for each step of your learning, designed to build your skills and unlock new opportunities.",
    coursSoutienHighlight: "Strengthen your foundations and progress with confidence.",
    coursLanguesHighlight: "Learn, practice, and communicate without limits.",
    formationsProHighlight: "Develop skills high in demand across the market.",
    lifeAtSchoolHighlight: "Grow in a supportive and active environment.",
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
    clubsMainDesc: "Join our clubs and live unique experiences that enrich your skills, stimulate your creativity and create unforgettable memories.",
    runClubHighlight: "Join a dynamic community passionate about running, well-being and sporting challenges.",
    imaginariumHighlight: "Express your creativity through workshops, artistic projects and cultural events.",
    clubsCTA: "DISCOVER OUR CLUBS",
    pill1Title: "Thrive",
    pill1Desc: "Develop your talents and build self-confidence.",
    pill2Title: "Share",
    pill2Desc: "Connect, collaborate and build meaningful bonds.",
    pill3Title: "Excel",
    pill3Desc: "Exceed your limits and achieve your objectives.",
    aboutSubtitle: "ABOUT THE ACADEMY",
    aboutTitle: "Your Gateway to Excellence and Growth",
    aboutDesc1: "Everest Academy is an innovative training and culture center located in Mostaganem. Our mission is to provide an elite educational environment where every student can develop their full intellectual, linguistic, creative, and physical potential.",
    aboutDesc2: "Through modern pedagogical methods, highly qualified coaching, and a vibrant community rich in activities, we prepare tomorrow's leaders to overcome academic and professional goals.",
    aboutFeature1Title: "Academic Excellence",
    aboutFeature1Desc: "Modern curricula and rigorous follow-up ensuring educational success and peak performance.",
    aboutFeature2Title: "Languages & Culture",
    aboutFeature2Desc: "Immersive learning of 6 key global languages to expand cultural horizons.",
    aboutFeature3Title: "Personal Development",
    aboutFeature3Desc: "A wide variety of activities and clubs to cultivate creativity and leadership skills.",
    discoverPrograms: "Discover our programs",
    makeAppointment: "Book an appointment",
    skipIntro: "Skip Intro"
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
    completeFormationSub: "مسارات مخصصة لكل مرحلة من مراحل تعلمك، مصممة لتطوير مهاراتك وفتح آفاق جديدة.",
    coursSoutienHighlight: "عزز أسسك وتقدم بكل ثقة.",
    coursLanguesHighlight: "تعلم وتدرب وتواصل بلا حدود.",
    formationsProHighlight: "طور مهاراتك الأكثر طلباً في سوق العمل.",
    lifeAtSchoolHighlight: "تطور في بيئة إيجابية وديناميكية.",
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
    clubsMainDesc: "انضم إلى نوادينا وعش تجارب فريدة تثري مهاراتك وتحفز إبداعك وتصنع ذكريات لا تُنسى.",
    runClubHighlight: "انضم إلى مجتمع حيوي شغوف بالجري والصحة والتحديات الرياضية.",
    imaginariumHighlight: "عبر عن إبداعك من خلال الورش الفنية والمشاريع الإبداعية والفعاليات الثقافية.",
    clubsCTA: "اكتشف نوادينا",
    pill1Title: "الازدهار",
    pill1Desc: "طوّر مواهبك وابنِ ثقتك بنفسك.",
    pill2Title: "المشاركة",
    pill2Desc: "التقِ، تعاون وابنِ علاقات حقيقية.",
    pill3Title: "التجاوز",
    pill3Desc: "تجاوز حدودك وحرّك طاقاتك لتحقيق أهدافك.",
    aboutSubtitle: "عن الأكاديمية",
    aboutTitle: "بوابتكم نحو التفوق والتميز الدراسي",
    aboutDesc1: "أكاديمية إيفرست هي مركز تكويني وثقافي مبتكر يقع بمستغانم. تتمثل رسالتنا في توفير بيئة تعليمية راقية وشاملة تتيح لكل تلميذ تطوير كامل إمكاناته الفكرية، اللغوية، الإبداعية والرياضية.",
    aboutDesc2: "من خلال مناهج بيداغوجية حديثة، وتأطير عالي الكفاءة، ومجتمع غني بالأنشطة والنوادي، نقوم بإعداد قادة المستقبل للتفوق ومواجهة التحديات الدراسية والمهنية بكل ثقة.",
    aboutFeature1Title: "التميز الأكاديمي",
    aboutFeature1Desc: "مناهج تعليمية متطورة ومتابعة يومية دقيقة تضمن تحقيق النتائج المثالية والنجاح الباهر.",
    aboutFeature2Title: "اللغات والانفتاح",
    aboutFeature2Desc: "تعليم تفاعلي لـ 6 لغات عالمية لتمكين التلاميذ وتوسيع آفاقهم الثقافية والمهنية.",
    aboutFeature3Title: "تطوير المهارات",
    aboutFeature3Desc: "نوادي رياضية، ثقافية وإبداعية متكاملة لبناء شخصية قوية، واثقة ومبدعة.",
    discoverPrograms: "اكتشف برامجنا",
    makeAppointment: "احجز موعدا",
    skipIntro: "تخطي العرض"
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

const DotsGrid = ({ className }: { className?: string }) => (
  <motion.svg 
    animate={{ 
      y: [0, -6, 0] 
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={className} 
    width="100" 
    height="80" 
    viewBox="0 0 100 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="30" cy="10" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="50" cy="10" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="70" cy="10" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="90" cy="10" r="2.5" fill="#f97316" fillOpacity="0.25" />
    
    <circle cx="10" cy="30" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="30" cy="30" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="50" cy="30" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="70" cy="30" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="90" cy="30" r="2.5" fill="#f97316" fillOpacity="0.25" />
    
    <circle cx="10" cy="50" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="30" cy="50" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="50" cy="50" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="70" cy="50" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="90" cy="50" r="2.5" fill="#f97316" fillOpacity="0.25" />
    
    <circle cx="10" cy="70" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="30" cy="70" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="50" cy="70" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="70" cy="70" r="2.5" fill="#f97316" fillOpacity="0.25" />
    <circle cx="90" cy="70" r="2.5" fill="#f97316" fillOpacity="0.25" />
  </motion.svg>
);

const PaperAirplaneWithTrail = ({ className }: { className?: string }) => (
  <motion.svg 
    animate={{ 
      y: [0, -8, 0, -4, 0], 
      x: [0, 6, 0, 3, 0],
      rotate: [0, 1.5, -1.5, 0.7, 0]
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={className} 
    width="160" 
    height="90" 
    viewBox="0 0 160 90" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M10 70 C40 75, 55 45, 65 30 C75 15, 95 10, 105 25 C115 40, 100 65, 85 60 C75 55, 78 35, 95 32 C110 30, 125 45, 140 35" 
      stroke="#f97316" 
      strokeWidth="1.5" 
      strokeDasharray="4 4" 
      strokeLinecap="round" 
      fill="none" 
      opacity="0.4"
    />
    <g transform="translate(133, 24) rotate(-10)">
      <path 
        d="M0 10 L18 0 L14 15 L8 12 L0 10 Z" 
        stroke="#f97316" 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path 
        d="M8 12 L18 0 M8 12 L8 15 L11 13" 
        stroke="#f97316" 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        opacity="0.7"
      />
    </g>
  </motion.svg>
);

const Card1Illustration = () => (
  <div className="absolute top-4 right-4 text-orange-200/50 pointer-events-none select-none w-20 h-20 opacity-70">
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <motion.path 
        variants={{
          initial: { y: 0, scale: 1, x: 0 },
          hover: { 
            y: -3, 
            x: -2,
            scale: 1.05, 
            transition: { type: "spring", stiffness: 100, damping: 10 }
          }
        }}
        d="M30 60 C25 50, 40 40, 50 45 C60 30, 80 40, 75 55 C85 65, 70 80, 55 75 C45 80, 25 75, 30 60 Z" 
        fill="#ffedd5" 
        opacity="0.4" 
      />
      <motion.path 
        variants={{
          initial: { scale: 1, rotate: 0 },
          hover: { 
            scale: 1.25, 
            rotate: 45,
            transition: { type: "spring", stiffness: 200, damping: 10 }
          }
        }}
        className="origin-[80px_37px]"
        d="M80 30 L82 35 L87 37 L82 39 L80 44 L78 39 L73 37 L78 35 Z" 
        fill="#f97316" 
        opacity="0.4" 
      />
      <motion.path 
        variants={{
          initial: { scale: 1, opacity: 0.3 },
          hover: { 
            scale: [1, 1.4, 0.9, 1.2, 1],
            opacity: [0.3, 0.8, 0.2, 0.6, 0.3],
            transition: { duration: 1.5, repeat: Infinity }
          }
        }}
        className="origin-[88px_52px]"
        d="M88 48 L89 51 L92 52 L89 53 L88 56 L87 53 L84 52 L87 51 Z" 
        fill="#f97316" 
        opacity="0.3"
      />
    </svg>
  </div>
);

const Card2Illustration = () => (
  <div className="absolute top-4 right-4 text-sky-200/50 pointer-events-none select-none w-20 h-20 opacity-70">
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <motion.g
        variants={{
          initial: { x: 0, y: 0, scale: 1 },
          hover: { 
            x: -4, 
            y: -2, 
            scale: 1.05,
            transition: { type: "spring", stiffness: 120, damping: 12 }
          }
        }}
      >
        <rect x="25" y="25" width="40" height="28" rx="14" fill="#e0f2fe" opacity="0.4" />
        <path d="M50 53 L58 60 L57 52" fill="#e0f2fe" opacity="0.4" />
      </motion.g>
      
      <motion.g
        variants={{
          initial: { x: 0, y: 0, scale: 1 },
          hover: { 
            x: 2, 
            y: 3, 
            scale: 0.95,
            transition: { type: "spring", stiffness: 120, damping: 12 }
          }
        }}
      >
        <rect x="45" y="42" width="36" height="25" rx="12.5" fill="#e0f2fe" opacity="0.3" />
        <path d="M55 42 L52 36 L60 42" fill="#e0f2fe" opacity="0.3" />
      </motion.g>
    </svg>
  </div>
);

const Card3Illustration = () => (
  <div className="absolute top-4 right-4 text-indigo-200/50 pointer-events-none select-none w-20 h-20 opacity-75">
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <motion.g
        variants={{
          initial: { y: 0, scale: 1 },
          hover: { 
            y: -2, 
            scale: 1.02,
            transition: { type: "spring", stiffness: 150, damping: 10 }
          }
        }}
      >
        <rect x="25" y="35" width="42" height="30" rx="6" stroke="#4f46e5" strokeWidth="1.5" opacity="0.15" fill="none" />
        <path d="M40 35 L40 30 C40 28, 42 26, 45 26 L51 26 C54 26, 56 28, 56 30 L56 35" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.15" />
      </motion.g>
      
      <motion.rect 
        variants={{
          initial: { scaleY: 1, originY: 1 },
          hover: { 
            scaleY: 1.25, 
            originY: 1,
            transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.05 } 
          }
        }}
        x="72" y="40" width="6" height="25" rx="2" fill="#4f46e5" opacity="0.2" 
      />
      <motion.rect 
        variants={{
          initial: { scaleY: 1, originY: 1 },
          hover: { 
            scaleY: 1.15, 
            originY: 1,
            transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.1 } 
          }
        }}
        x="80" y="30" width="6" height="35" rx="2" fill="#4f46e5" opacity="0.3" 
      />
      <motion.rect 
        variants={{
          initial: { scaleY: 1, originY: 1 },
          hover: { 
            scaleY: 1.35, 
            originY: 1,
            transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.15 } 
          }
        }}
        x="88" y="20" width="6" height="45" rx="2" fill="#4f46e5" opacity="0.1" 
      />
      
      <motion.path 
        variants={{
          initial: { rotate: 0, scale: 1 },
          hover: { 
            rotate: 90, 
            scale: 1.2,
            transition: { duration: 0.5, ease: "easeOut" }
          }
        }}
        className="origin-[68px_29px]"
        d="M68 25 L70 28 L73 29 L70 30 L68 33 L66 30 L63 29 L66 28 Z" fill="#4f46e5" opacity="0.4" 
      />
    </svg>
  </div>
);

const Card4Illustration = () => (
  <div className="absolute top-4 right-4 text-rose-200/50 pointer-events-none select-none w-20 h-20 opacity-70">
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" stroke="#f43f5e" strokeWidth="1.5">
      <motion.g
        variants={{
          initial: { y: 0 },
          hover: { 
            y: -4,
            transition: { type: "spring", stiffness: 120, damping: 10 }
          }
        }}
      >
        <circle cx="50" cy="40" r="10" fill="#ffe4e6" fillOpacity="0.4" stroke="none" />
        <circle cx="50" cy="40" r="10" opacity="0.15" />
        <path d="M35 65 C35 55, 42 53, 50 53 C58 53, 65 55, 65 65" opacity="0.15" strokeLinecap="round" />
      </motion.g>
      
      <motion.g
        variants={{
          initial: { x: 0, y: 0, rotate: 0 },
          hover: { 
            x: -2,
            y: -1,
            rotate: -5,
            transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.03 }
          }
        }}
        className="origin-[32px_48px]"
      >
        <circle cx="32" cy="48" r="8" fill="#ffe4e6" fillOpacity="0.2" stroke="none" />
        <circle cx="32" cy="48" r="8" opacity="0.1" />
        <path d="M20 68 C20 60, 26 58, 32 58 C38 58, 44 60, 44 68" opacity="0.1" strokeLinecap="round" />
      </motion.g>
      
      <motion.g
        variants={{
          initial: { x: 0, y: 0, rotate: 0 },
          hover: { 
            x: 2,
            y: -1,
            rotate: 5,
            transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.03 }
          }
        }}
        className="origin-[68px_48px]"
      >
        <circle cx="68" cy="48" r="8" fill="#ffe4e6" fillOpacity="0.2" stroke="none" />
        <circle cx="68" cy="48" r="8" opacity="0.1" />
        <path d="M56 68 C56 60, 62 58, 68 58 C74 58, 80 60, 80 68" opacity="0.1" strokeLinecap="round" />
      </motion.g>
    </svg>
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
  const [showIntro, setShowIntro] = useState(false);
  const [showImaginariumAlbum, setShowImaginariumAlbum] = useState(false);
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
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowIntro(false);
          }}
          className={`absolute top-6 ${isRtl ? 'left-6 md:left-10' : 'right-6 md:right-10'} z-[10000] bg-[#0c1f38]/80 hover:bg-[#0c1f38] text-white text-xs font-black px-4.5 py-2.5 rounded-full border border-white/20 transition-all duration-200 flex items-center gap-1.5 shadow-lg select-none active:scale-95`}
        >
          <span>{t('skipIntro')}</span>
          <ChevronRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
        </button>

        <video 
          ref={videoRef}
          src={INTRO_VIDEO_URL} 
          className="absolute inset-0 w-full h-full object-contain" 
          playsInline
          onEnded={() => setShowIntro(false)}
          onError={(e) => {
            console.warn("Video failed to load or has no supported sources. Bypassing intro:", e);
            setShowIntro(false);
          }}
        />
        {isMuted && (
           <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-black/50 text-white/50 px-6 py-2 rounded-full text-xs font-bold tracking-wider pointer-events-none animate-pulse uppercase">
             {lang === 'ar' ? 'انقر لتفعيل الصوت' : lang === 'en' ? 'Click anywhere to unmute' : 'Cliquez de partout pour activer le son'}
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
      <section 
        className="relative pt-8 md:pt-12 pb-12 overflow-hidden bg-cover bg-center bg-no-repeat bg-white"
        style={{ backgroundImage: "url('/back.png')" }}
      >
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
      <section 
        id="programs" 
        className="pb-24 lg:pb-32 pt-16 bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: "url('/back2.png')" }}
      >
        {/* Background Decorative SVGs */}
        <DotsGrid className="absolute top-12 left-6 md:left-12 pointer-events-none opacity-45 hidden sm:block select-none" />
        <PaperAirplaneWithTrail className="absolute top-16 right-8 md:right-20 xl:right-32 pointer-events-none opacity-60 hidden sm:block select-none" />
        <DotsGrid className="absolute bottom-12 left-6 md:left-12 pointer-events-none opacity-25 hidden sm:block select-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Custom elegant header section */}
          <div className="text-center max-w-3xl mx-auto mb-20 px-6">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-[#0c1f38] mb-6 tracking-tight leading-tight select-none">
              {t('completeFormation')}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium select-none">
              {t('completeFormationSub')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: t('coursSoutien'), 
                sub: t('coursSoutienSub'), 
                icon: <BookOpen className="w-6 h-6 text-white" />, 
                illustration: <Card1Illustration />,
                features: t('coursSoutienFeatures') as string[],
                highlight: t('coursSoutienHighlight'),
                highlightIcon: <Star className="w-4 h-4 text-[#f25c05]" fill="currentColor" />,
                themeHoverBorder: "rgba(242,92,5,0.22)",
                themeHoverShadow: "0 30px 60px rgba(242,92,5,0.08)",
                glowColor: "from-orange-50/15 via-transparent to-[#f25c05]/[0.03]",
                iconBg: "bg-[#f25c05]",
                iconShadow: "shadow-orange-500/20",
                iconHoverShadow: "0 10px 25px rgba(242,92,5,0.35)",
                textColor: "#f25c05",
                bulletBg: "bg-orange-50/40 border-orange-200 text-[#f25c05]",
                bannerBgHover: "rgba(254,243,199,0.5)",
                bannerBorderHover: "rgba(242,92,5,0.15)",
                arrowBgHover: "rgba(242,92,5,0.1)"
              },
              { 
                title: t('coursLangues'), 
                sub: t('coursLanguesSub'), 
                icon: <Languages className="w-6 h-6 text-white" />, 
                illustration: <Card2Illustration />,
                features: t('coursLanguesFeatures') as string[],
                isGrid: true,
                highlight: t('coursLanguesHighlight'),
                highlightIcon: <Globe className="w-4 h-4 text-[#0ea5e9]" />,
                themeHoverBorder: "rgba(14,165,233,0.22)",
                themeHoverShadow: "0 30px 60px rgba(14,165,233,0.08)",
                glowColor: "from-sky-50/15 via-transparent to-[#0ea5e9]/[0.03]",
                iconBg: "bg-[#0ea5e9]",
                iconShadow: "shadow-sky-500/20",
                iconHoverShadow: "0 10px 25px rgba(14,165,233,0.35)",
                textColor: "#0ea5e9",
                bulletBg: "bg-sky-50/40 border-sky-200 text-[#0ea5e9]",
                bannerBgHover: "rgba(224,242,254,0.5)",
                bannerBorderHover: "rgba(14,165,233,0.15)",
                arrowBgHover: "rgba(14,165,233,0.1)"
              },
              { 
                title: t('formationsPro'), 
                sub: t('formationsProSub'), 
                icon: <GraduationCap className="w-6 h-6 text-white" />, 
                illustration: <Card3Illustration />,
                features: t('formationsProFeatures') as string[],
                highlight: t('formationsProHighlight'),
                highlightIcon: <TrendingUp className="w-4 h-4 text-[#4f46e5]" />,
                themeHoverBorder: "rgba(79,70,229,0.22)",
                themeHoverShadow: "0 30px 60px rgba(79,70,229,0.08)",
                glowColor: "from-indigo-50/15 via-transparent to-[#4f46e5]/[0.03]",
                iconBg: "bg-[#4f46e5]",
                iconShadow: "shadow-indigo-500/20",
                iconHoverShadow: "0 10px 25px rgba(79,70,229,0.35)",
                textColor: "#4f46e5",
                bulletBg: "bg-indigo-50/40 border-indigo-200 text-[#4f46e5]",
                bannerBgHover: "rgba(238,242,255,0.5)",
                bannerBorderHover: "rgba(79,70,229,0.15)",
                arrowBgHover: "rgba(79,70,229,0.1)"
              },
              { 
                title: t('lifeAtSchool'), 
                sub: t('lifeAtSchoolSub'), 
                icon: <Users className="w-6 h-6 text-white" />, 
                illustration: <Card4Illustration />,
                features: t('lifeAtSchoolFeatures') as string[],
                highlight: t('lifeAtSchoolHighlight'),
                highlightIcon: <Heart className="w-4 h-4 text-[#f43f5e]" fill="currentColor" />,
                themeHoverBorder: "rgba(244,63,94,0.22)",
                themeHoverShadow: "0 30px 60px rgba(244,63,94,0.08)",
                glowColor: "from-rose-50/15 via-transparent to-[#f43f5e]/[0.03]",
                iconBg: "bg-[#f43f5e]",
                iconShadow: "shadow-rose-500/20",
                iconHoverShadow: "0 10px 25px rgba(244,63,94,0.35)",
                textColor: "#f43f5e",
                bulletBg: "bg-rose-50/40 border-rose-200 text-[#f43f5e]",
                bannerBgHover: "rgba(255,228,230,0.5)",
                bannerBorderHover: "rgba(244,63,94,0.15)",
                arrowBgHover: "rgba(244,63,94,0.1)"
              },
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-10%" }}
                variants={{
                  initial: { opacity: 0, y: 40 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.12,
                    }
                  },
                  hover: {
                    y: -12,
                    scale: 1.025,
                    boxShadow: p.themeHoverShadow,
                    borderColor: p.themeHoverBorder,
                    transition: {
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }
                }}
                className="relative bg-white rounded-[2.2rem] p-7 md:p-8 border border-slate-100 transition-colors duration-500 group flex flex-col h-full overflow-hidden"
              >
                {/* Visual glow on hover */}
                <motion.div 
                  variants={{
                    initial: { opacity: 0, scale: 0.8 },
                    hover: { opacity: 1, scale: 1.15 }
                  }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 bg-gradient-to-tr ${p.glowColor} pointer-events-none`}
                />

                {/* Decorative Illustration absolute backdrops */}
                {p.illustration}
                
                {/* Top icon and shape */}
                <div className="relative mb-7">
                  <motion.div 
                    variants={{
                      initial: { scale: 1, rotate: 0 },
                      hover: { 
                        scale: 1.15, 
                        rotate: 8, 
                        boxShadow: p.iconHoverShadow,
                        transition: { type: "spring", stiffness: 300, damping: 15 }
                      }
                    }}
                    className={`w-14 h-14 rounded-full ${p.iconBg} flex items-center justify-center shadow-lg ${p.iconShadow}`}
                  >
                    {p.icon}
                  </motion.div>
                </div>

                {/* Content Block */}
                <div className="flex flex-col flex-grow relative z-10">
                  <motion.h3 
                    variants={{
                      initial: { color: "#0c1f38" },
                      hover: { color: p.textColor, transition: { duration: 0.3 } }
                    }}
                    className="text-[17px] font-black tracking-tight leading-snug"
                  >
                    {p.title}
                  </motion.h3>
                  <p className="text-[10px] font-bold text-slate-400 mt-1 mb-6 uppercase tracking-widest">
                    {p.sub}
                  </p>
                  
                  {/* Features List */}
                  <ul className={`mb-8 flex-grow ${p.isGrid ? 'grid grid-cols-2 gap-x-2 space-y-0 gap-y-4' : 'space-y-4'}`}>
                    {p.features.map((f, j) => (
                      <motion.li 
                        variants={{
                          initial: { opacity: 0, x: -10 },
                          animate: { opacity: 1, x: 0 },
                          hover: { x: 4 }
                        }}
                        transition={{
                          initial: { type: "spring", stiffness: 150, damping: 15 },
                          hover: { type: "spring", stiffness: 300, damping: 15 }
                        }}
                        key={j} 
                        className="flex items-start gap-2.5 text-xs text-slate-600 font-medium group/item animate-none"
                      >
                        {/* Custom identity bullet */}
                        <motion.div 
                          variants={{
                            initial: { scale: 1 },
                            hover: { 
                              scale: 1.15,
                              backgroundColor: p.arrowBgHover,
                              borderColor: p.textColor
                            }
                          }}
                          transition={{ duration: 0.3 }}
                          className={`w-5 h-5 flex items-center justify-center rounded-full border shrink-0 mt-0.5 shadow-sm transition-colors ${p.bulletBg}`}
                        >
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" stroke={p.textColor} />
                          </svg>
                        </motion.div>
                        <motion.span 
                          variants={{
                            initial: { color: "#475569" },
                            hover: { color: p.textColor }
                          }}
                          className="leading-snug select-none text-slate-600 transition-colors duration-200"
                        >
                          {f}
                        </motion.span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Highlight banner block */}
                  <motion.div 
                    variants={{
                      initial: { scale: 1, backgroundColor: "rgba(248,250,252,0.65)", borderColor: "rgba(241,245,249,0.5)" },
                      hover: { 
                        scale: 1.015,
                        backgroundColor: p.bannerBgHover,
                        borderColor: p.bannerBorderHover,
                        transition: { duration: 0.3 }
                      }
                    }}
                    className="border rounded-2xl p-3.5 px-4 flex items-center gap-3.5 mb-6 shadow-sm mr-auto w-full transition-all duration-300"
                  >
                    <motion.div 
                      variants={{
                        initial: { scale: 1 },
                        hover: { 
                          scale: 1.15,
                          rotate: [0, -10, 10, -5, 5, 0],
                          transition: { duration: 0.5, ease: "easeInOut" }
                        }
                      }}
                      className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center border border-slate-50 shrink-0"
                    >
                      {p.highlightIcon}
                    </motion.div>
                    <p className="text-[11px] text-slate-500 font-bold leading-normal text-start select-none">
                      {p.highlight}
                    </p>
                  </motion.div>

                  {/* Bottom details action trigger */}
                  <div className="pt-2 flex items-center justify-between cursor-pointer">
                    <motion.span 
                      variants={{
                        initial: { color: "#0c1f38" },
                        hover: { color: p.textColor, transition: { duration: 0.3 } }
                      }}
                      className="text-[11px] font-extrabold uppercase tracking-widest"
                    >
                      En savoir plus
                    </motion.span>
                    <motion.div 
                      variants={{
                        initial: { x: 0, backgroundColor: "#f8fafc", scale: 1, color: "#94a3b8" },
                        hover: { 
                          x: 6, 
                          backgroundColor: p.arrowBgHover, 
                          color: p.textColor,
                          scale: 1.1,
                          transition: { type: "spring", stiffness: 300, damping: 15 }
                        }
                      }}
                      className="w-6 h-6 flex items-center justify-center rounded-full"
                    >
                      <svg className="w-3 h-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" stroke={p.textColor} />
                      </svg>
                    </motion.div>
                  </div>
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

      {/* Clubs Section */}
      <section id="clubs" className="py-12 lg:py-20 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="relative">
            {/* Dots background elements for the design */}
            <div className="absolute -left-8 -top-8 w-16 h-16 grid grid-cols-5 gap-1.5 opacity-20 pointer-events-none">
              {Array.from({ length: 25 }).map((_, idx) => (
                <div key={idx} className="w-1.5 h-1.5 rounded-full bg-[#f25c05]" />
              ))}
            </div>

            {/* Title tagline with left short bar */}
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-8 h-[2px] bg-[#f25c05]" />
              <span className="text-[11px] font-black text-[#f25c05] tracking-widest uppercase select-none">{t('clubsJoin')}</span>
            </div>

            {/* Catchy head line */}
            <h2 className="text-[36px] lg:text-[45px] font-black text-[#0c1f38] leading-[1.12] mb-6 tracking-tight">
              {t('clubsDesc')}
            </h2>

            {/* Description intro */}
            <p className="text-slate-500 text-[13.5px] leading-relaxed mb-10 max-w-xl font-medium">
              {t('clubsMainDesc')}
            </p>

            {/* Values / Pillars row with split vertical borders */}
            <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-t border-slate-100 relative">
              {/* Pillar 1 */}
              <div className="relative pr-4 border-r border-slate-100/80 flex flex-col items-center sm:items-start text-center sm:text-left group">
                <div className="relative w-12 h-12 rounded-full bg-orange-50/50 flex items-center justify-center text-[#f25c05] mb-4 shadow-[0_4px_12px_rgba(242,92,5,0.06)]">
                  <Trophy className="w-5 h-5 stroke-[2]" />
                  {/* Subtle sparkle shapes inside the design */}
                  <span className="absolute -top-1 -right-1.5 text-[9px] text-[#f25c05]/80 select-none animate-pulse">✨</span>
                  <span className="absolute -bottom-1 -left-1.5 text-[7px] text-[#f25c05]/80 select-none opacity-60">✦</span>
                </div>
                <h4 className="text-[13px] font-black text-[#0c1f38] mb-1 tracking-tight">{t('pill1Title')}</h4>
                <p className="text-[10.5px] text-slate-500 font-bold leading-normal">{t('pill1Desc')}</p>
              </div>

              {/* Pillar 2 */}
              <div className="relative px-2 pr-4 border-r border-[#f1f5f9] flex flex-col items-center sm:items-start text-center sm:text-left group">
                <div className="relative w-12 h-12 rounded-full bg-orange-50/50 flex items-center justify-center text-[#f25c05] mb-4 shadow-[0_4px_12px_rgba(242,92,5,0.06)]">
                  <Users className="w-5 h-5 stroke-[2]" />
                  <span className="absolute -top-1 -right-1.5 text-[9px] text-orange-400 select-none animate-pulse">✨</span>
                  <span className="absolute -bottom-1 -left-1.5 text-[7px] text-orange-400 select-none opacity-60">✦</span>
                </div>
                <h4 className="text-[13px] font-black text-[#0c1f38] mb-1 tracking-tight">{t('pill2Title')}</h4>
                <p className="text-[10.5px] text-slate-500 font-bold leading-normal">{t('pill2Desc')}</p>
              </div>

              {/* Pillar 3 */}
              <div className="relative px-2 flex flex-col items-center sm:items-start text-center sm:text-left group">
                <div className="relative w-12 h-12 rounded-full bg-orange-50/50 flex items-center justify-center text-[#f25c05] mb-4 shadow-[0_4px_12px_rgba(242,92,5,0.06)]">
                  <Rocket className="w-5 h-5 stroke-[2]" />
                  <span className="absolute -top-1 -right-1.5 text-[9px] text-orange-400 select-none animate-pulse">✨</span>
                  <span className="absolute -bottom-1 -left-1.5 text-[7px] text-orange-400 select-none opacity-60">✦</span>
                </div>
                <h4 className="text-[13px] font-black text-[#0c1f38] mb-1 tracking-tight">{t('pill3Title')}</h4>
                <p className="text-[10.5px] text-slate-500 font-bold leading-normal">{t('pill3Desc')}</p>
              </div>
            </div>

            {/* Hand-drawn curly orange guide arrow pointing to the cards */}
            <div className="absolute -right-8 top-12 w-28 h-16 pointer-events-none hidden xl:block text-[#f25c05] select-none">
              <svg viewBox="0 0 100 60" fill="none" className="w-full h-full stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10,20 C40,-15 50,45 35,45 C22,45 40,15 85,25" />
                <path d="M74,18 L85,25 L75,32" />
                <path d="M92,8 L94,11 L98,12 L94,13 L92,16 L90,13 L86,12 L90,11 Z" fill="#f25c05" stroke="none" />
                <path d="M15,4 L16,6 L18,7 L16,8 L15,10 L14,8 L12,7 L14,6 Z" fill="#f25c05" stroke="none" />
              </svg>
            </div>

            {/* Call To Action button matched precisely to styling */}
            <motion.button
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(242,92,5,0.25)",
                y: -1 
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-[#f25c05] text-white font-extrabold text-[11px] tracking-wider rounded-full shadow-lg shadow-orange-500/10 flex items-center gap-2 transition-all cursor-pointer select-none uppercase"
            >
              {t('clubsCTA')} <ArrowRight className="w-4 h-4 stroke-[3]" />
            </motion.button>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {[
              { 
                name: "MOSTA RUN CLUB", 
                tag: t('runClubTag'), 
                img: CLUB_RUN_NEW,
                logo: CLUB_LOGO_NEW,
                highlight: t('runClubHighlight'),
                highlightIcon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                    <path d="M18.8 13.2l2.3-2.3c.4-.4.4-1 0-1.4l-1.8-1.8c-.4-.4-1-.4-1.4 0l-1.3 1.3" />
                    <path d="M15 10.7l-4.5 4.5" />
                    <path d="M10.7 15l-1.5-1.5" />
                    <path d="M3.5 17.5h16c.4 0 .7-.2.8-.6l1-3.4c.1-.4-.1-.8-.5-.9L11 9.8c-.8-.2-1.7.2-2.1 1l-1.1 2.2c-.3.6-.9 1-1.6 1H3.5a1 1 0 00-1 1v1.5a1 1 0 001 1z" />
                    <path d="M6 14v1.5" />
                    <path d="M8.5 14v1.5" />
                  </svg>
                ),
                highlightBg: "bg-[#f0f6ff]/75 border-[#e1f0fe]/80 text-[#0ea5e9]",
                textColor: "text-[#0ea5e9]",
                hoverBorder: "rgba(14,165,233,0.18)",
                hoverShadow: "0 25px 50px rgba(14,165,233,0.06)",
                glowColor: "from-sky-50/15 via-transparent to-[#0ea5e9]/[0.02]"
              },
              { 
                name: "EVEREST IMAGINARIUM", 
                tag: t('imaginariumTag'), 
                img: CLUB_IMAGINARIUM_NEW,
                logo: LOGO_URL,
                highlight: t('imaginariumHighlight'),
                highlightIcon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 9.5 20.5 7.5 18.5 6.5C18.5 5 17 3.5 15.5 3.5C14.5 3.5 13.5 4 13 4.5C12.5 4 11.5 3.5 10.5 3.5C9.5 3.5 7.5 5 7.5 6.5C5.5 7.5 4 9.5 4 12C4 17.5228 8.47715 22 12 22Z" />
                    <circle cx="7.5" cy="10.5" r="1.5" fill="#ea580c" />
                    <circle cx="11.5" cy="7.5" r="1.5" fill="#ea580c" />
                    <circle cx="16.5" cy="9.5" r="1.5" fill="#ea580c" />
                    <circle cx="15.5" cy="14.5" r="1.5" fill="#ea580c" />
                  </svg>
                ),
                highlightBg: "bg-[#fff8f5]/90 border-[#ffe7db] text-[#f25c05]",
                textColor: "text-[#f25c05]",
                hoverBorder: "rgba(242,92,5,0.18)",
                hoverShadow: "0 25px 50px rgba(242,92,5,0.06)",
                glowColor: "from-orange-50/15 via-transparent to-[#f25c05]/[0.02]"
              }
            ].map((club, i) => (
              <motion.div 
                key={i} 
                onClick={() => {
                  if (club.name === "EVEREST IMAGINARIUM") {
                    setShowImaginariumAlbum(true);
                  }
                }}
                className={`relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 flex flex-col h-full group transition-all duration-500 ${club.name === "EVEREST IMAGINARIUM" ? 'cursor-pointer select-none' : ''}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                variants={{
                  hover: {
                    y: -10,
                    scale: 1.02,
                    boxShadow: club.hoverShadow,
                    borderColor: club.hoverBorder,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
              >
                {/* Visual hover ambient gradient */}
                <motion.div 
                  variants={{
                    initial: { opacity: 0, scale: 0.8 },
                    hover: { opacity: 1, scale: 1.15 }
                  }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 bg-gradient-to-tr ${club.glowColor} pointer-events-none`}
                />

                {/* Card Header Content */}
                <div className="p-6 pb-2 flex items-center gap-4 relative z-10">
                  <div 
                    className="w-14 h-14 rounded-full bg-white border border-slate-100 flex items-center justify-center p-2.5 shrink-0 overflow-hidden shadow-sm"
                  >
                    <img 
                      src={club.logo} 
                      className="w-full h-full object-contain" 
                      alt={club.name} 
                    />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-black text-[#0c1f38] uppercase tracking-wide">{club.name}</h3>
                    <div className="w-8 h-[2px] bg-[#f25c05] mt-1.5" />
                  </div>
                </div>

                {/* Sub-tag / Categories */}
                <div className="px-6 pb-4 text-[10px] font-black text-slate-400 capitalize tracking-wider relative z-10 leading-relaxed uppercase">
                  {club.tag}
                </div>

                {/* Image Section */}
                <div className="h-44 overflow-hidden relative w-full z-10 mt-auto">
                  <img src={club.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={club.name} />
                </div>

                {/* Bottom interactive section */}
                <div className="p-6 flex flex-col justify-between gap-5 relative z-10 bg-white">
                  {/* Highlight box */}
                  <motion.div 
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.01, transition: { duration: 0.3 } }
                    }}
                    className={`border rounded-2xl p-3.5 px-4 flex items-center gap-3.5 shadow-sm ${club.highlightBg} transition-all duration-300 w-full min-h-[72px]`}
                  >
                    {club.highlightIcon}
                    <p className="text-[11px] text-slate-500 font-bold leading-normal text-start select-none">
                      {club.highlight}
                    </p>
                  </motion.div>

                  {/* Trigger Detail footer */}
                  <div className="pt-1 flex items-center justify-between cursor-pointer">
                    <span className={`text-[11px] font-extrabold uppercase tracking-widest ${club.textColor}`}>
                      En savoir plus
                    </span>
                    <motion.div 
                      variants={{
                        initial: { x: 0, scale: 1 },
                        hover: { 
                          x: 4, 
                          scale: 1.1,
                          transition: { type: "spring", stiffness: 300, damping: 15 }
                        }
                      }}
                      className={`text-sm font-black ${club.textColor}`}
                    >
                      ➔
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified About & Why Everest Section */}
      <section 
        id="about" 
        className="pt-20 lg:pt-28 pb-12 lg:pb-20 bg-cover bg-center bg-[#fafafc]/45 bg-no-repeat border-b border-slate-100 overflow-hidden relative"
        style={{ backgroundImage: "url('/back4.png')" }}
      >
        <div id="life" className="absolute -top-24" />
        
        {/* Floating decorations matching the user mockup */}
        {/* Left Floating mortarboard/graduation cap */}
        <div className="absolute left-[3%] lg:left-[5%] top-[14%] hidden lg:flex flex-col items-center select-none pointer-events-none z-10">
          <div className="relative w-20 h-20 rounded-full border border-dashed border-orange-400/50 flex items-center justify-center bg-white shadow-[0_8px_30px_rgb(249,115,22,0.06)]">
            <GraduationCap className="w-10 h-10 text-orange-500 stroke-[1.25]" />
          </div>
          <svg className="w-16 h-20 text-slate-300 opacity-60 mt-1" viewBox="0 0 100 100" fill="none">
            <path d="M50 0 C30 30 10 60 40 100" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" strokeLinecap="round" />
          </svg>
        </div>

        {/* Right Floating trophy */}
        <div className="absolute right-[3%] lg:right-[5%] top-[16%] hidden lg:flex flex-col items-center select-none pointer-events-none z-10">
          <div className="relative w-20 h-20 rounded-full border border-dashed border-slate-300 flex items-center justify-center bg-white shadow-[0_8px_30px_rgb(15,23,42,0.04)]">
            <Trophy className="w-10 h-10 text-academy-navy stroke-[1.25]" />
          </div>
          <svg className="w-16 h-20 text-slate-300 opacity-60 mt-1" viewBox="0 0 100 100" fill="none">
            <path d="M50 0 C70 30 90 60 60 100" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" strokeLinecap="round" />
          </svg>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute -right-16 top-1/3 w-96 h-96 bg-academy-orange/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center">
            
            {/* Tagline with orange line delimiters */}
            <div className="flex items-center gap-3.5 justify-center mb-4">
              <div className="w-9 h-[1.5px] bg-[#f25c05]/80" />
              <span className="text-[11px] font-black text-[#f25c05] tracking-[0.25em] uppercase">{t('aboutSubtitle')}</span>
              <div className="w-9 h-[1.5px] bg-[#f25c05]/80" />
            </div>

            {/* Split Header Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0c1f38] leading-[1.15] mb-5 tracking-tight text-center max-w-4xl select-none">
              {lang === 'ar' ? (
                t('aboutTitle')
              ) : (
                <>
                  Votre passerelle vers l'excellence <br />
                  <span className="text-[#f25c05]">et l'épanouissement</span>
                </>
              )}
            </h2>

            {/* Orange Divider */}
            <div className="w-14 h-[2px] bg-[#f25c05] mx-auto mb-8" />

            {/* Centered Body Paragraphs */}
            <div className="space-y-5 text-slate-500 text-sm sm:text-[14.5px] leading-relaxed font-medium mb-11 text-center max-w-4xl">
              <p className="px-4">{t('aboutDesc1')}</p>
              <p className="px-4">{t('aboutDesc2')}</p>
            </div>

            {/* Features Row - Checked labels */}
            <div className="flex flex-wrap items-center justify-center mb-12 py-5 border-t border-b border-slate-100 w-full max-w-5xl mx-auto select-none gap-y-4 md:gap-y-0">
              {((t('whyEverestFeatures') as string[]) || []).map((f, i) => (
                <div key={i} className="flex items-center gap-3.5 px-4 lg:px-6 py-1.5 border-r border-slate-100 last:border-none">
                  <div className="w-8 h-8 rounded-full bg-orange-50/70 border border-orange-100/50 flex items-center justify-center text-[#f25c05] shrink-0 shadow-[0_2px_8px_rgba(242,92,5,0.04)]">
                    <CheckCircle2 className="w-4.5 h-4.5 stroke-[2.5]" />
                  </div>
                  <span className="text-[#0c1f38] font-extrabold text-[12.5px] lg:text-[13px] tracking-tight">{f}</span>
                </div>
              ))}
            </div>



            {/* Custom Bottom Cards matching the vector layouts from the user illustration */}
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl mt-4">
              
              {/* Card 1: Excellence Académique */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-7 px-8 rounded-3xl border border-[#e1f0fe]/70 bg-[#f0f6ff]/45 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-start select-none min-h-[290px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-blue-100/50 mb-6">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-extrabold text-[#0c1f38] text-base mb-2.5 tracking-tight">{t('aboutFeature1Title')}</h4>
                  <p className="text-[12.5px] text-slate-500 font-medium leading-relaxed max-w-[195px] relative z-10">
                    {t('aboutFeature1Desc')}
                  </p>
                </div>
                
                {/* En savoir plus ➔ button */}
                <a href="#programs" className="text-blue-600 font-black text-[11px] uppercase tracking-widest mt-6 flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                  <span>En savoir plus</span>
                  <span className="text-sm">➔</span>
                </a>

                {/* Inline styled high fidelity vector drawing of stack of books and graduation cap */}
                <svg className="absolute -bottom-2 -right-3 w-36 h-36 text-blue-400 pointer-events-none opacity-40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Graduation cap */}
                  <path d="M50,15 L85,25 L50,35 L15,25 Z" />
                  <path d="M25,28 L25,44 C25,51 35,54 50,54 C65,54 75,51 75,44 L75,28" />
                  <path d="M80,26 L80,48 L82,48 L82,27" />
                  <circle cx="81" cy="49" r="1.5" fill="currentColor" />
                  {/* Book 1 */}
                  <path d="M20,62 L80,62 L80,70 C80,74 70,76 50,76 C30,76 20,74 20,70 Z" />
                  <path d="M20,70 L20,78 L80,78 L80,70" />
                  {/* Book 2 */}
                  <path d="M22,50 L78,50 L78,58 C78,60 68,62 50,62 C32,62 22,60 22,58 Z" strokeDasharray="2 2" />
                  <path d="M22,58 L22,64 L78,64 L78,58" strokeDasharray="2 2" />
                </svg>
              </motion.div>

              {/* Card 2: Langues & Ouverture */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-7 px-8 rounded-3xl border border-[#dcfce7]/70 bg-[#f0fdf4]/45 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-start select-none min-h-[290px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-emerald-100/50 mb-6">
                    <Languages className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-extrabold text-[#0c1f38] text-base mb-2.5 tracking-tight">{t('aboutFeature2Title')}</h4>
                  <p className="text-[12.5px] text-slate-500 font-medium leading-relaxed max-w-[210px] relative z-10">
                    {t('aboutFeature2Desc')}
                  </p>
                </div>
                
                {/* En savoir plus ➔ button */}
                <a href="#programs" className="text-emerald-600 font-black text-[11px] uppercase tracking-widest mt-6 flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                  <span>En savoir plus</span>
                  <span className="text-sm">➔</span>
                </a>

                {/* Inline styled globe + speaking cloud bubbles saying different welcome phrases */}
                <svg className="absolute -bottom-4 -right-2 w-[150px] h-[150px] text-emerald-400 pointer-events-none opacity-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Globe circle and orbits */}
                  <circle cx="55" cy="58" r="22" />
                  <path d="M33,58 C45,58 55,62 55,80" />
                  <path d="M77,58 C65,58 55,62 55,80" strokeDasharray="1.5 1.5" />
                  <path d="M55,36 C55,42 40,58 40,58" />
                  <path d="M55,36 C55,42 70,58 70,58" strokeDasharray="1.5 1.5" />
                  <path d="M38,44 Q42,32 50,30" />
                  
                  {/* Speech bubble: مرحبا */}
                  <path d="M22,34 C22,28 34,28 34,34 C34,38 30,40 28,42 L25,45 L26,40 C22,40 22,37 22,34 Z" fill="white" stroke="currentColor" strokeWidth="0.8" />
                  <text x="25" y="35" className="text-[4px] font-extrabold" fill="currentColor" stroke="none">مرحبا</text>
                  
                  {/* Speech bubble: Hello */}
                  <path d="M68,36 C68,30 80,30 80,36 C80,40 76,42 74,44 L72,46 L73,42 C68,42 68,39 68,36 Z" fill="white" stroke="currentColor" strokeWidth="0.8" />
                  <text x="71" y="37" className="text-[3px] font-extrabold" fill="currentColor" stroke="none">Hello</text>
                  
                  {/* Speech bubble: Hola */}
                  <path d="M48,76 C48,70 60,70 60,76 C60,80 57,82 55,84 L53,86 L54,82 C48,82 48,79 48,76 Z" fill="white" stroke="currentColor" strokeWidth="0.8" />
                  <text x="51" y="77" className="text-[3.5px] font-extrabold" fill="currentColor" stroke="none">Hola</text>
                </svg>
              </motion.div>

              {/* Card 3: Développement Personnel */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-7 px-8 rounded-3xl border border-[#ffe7db]/70 bg-[#fff5f0]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-start select-none min-h-[290px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-orange-100/50 mb-6">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-extrabold text-[#0c1f38] text-base mb-2.5 tracking-tight">{t('aboutFeature3Title')}</h4>
                  <p className="text-[12.5px] text-slate-500 font-medium leading-relaxed max-w-[200px] relative z-10">
                    {t('aboutFeature3Desc')}
                  </p>
                </div>
                
                {/* En savoir plus ➔ button */}
                <a href="#clubs" className="text-orange-600 font-black text-[11px] uppercase tracking-widest mt-6 flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                  <span>En savoir plus</span>
                  <span className="text-sm">➔</span>
                </a>

                {/* Overlapping music notes, sports balls, & art palette with line rendering in orange outlines */}
                <svg className="absolute -bottom-2 -right-2 w-36 h-36 text-orange-400 pointer-events-none opacity-40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Sports ball */}
                  <circle cx="30" cy="72" r="13" />
                  <path d="M19,65 C24,70 26,75 27,84" />
                  <path d="M41,65 C36,70 34,75 33,84" />
                  <path d="M18,75 Q30,71 42,75" strokeDasharray="2 2" />
                  
                  {/* Another sports ball */}
                  <circle cx="56" cy="78" r="11" />
                  <path d="M49,71 L63,85" />
                  <path d="M63,71 L49,85" />
                  
                  {/* Art palette */}
                  <path d="M74,62 C82,62 86,52 82,44 C78,36 68,36 60,44 C52,52 66,62 74,62 Z" />
                  <circle cx="65" cy="46" r="1" fill="currentColor" />
                  <circle cx="71" cy="43" r="1" fill="currentColor" />
                  <circle cx="76" cy="48" r="1.2" fill="currentColor" stroke="none" />
                  
                  {/* Paintbrush extending out */}
                  <line x1="56" y1="52" x2="84" y2="24" />
                  <path d="M84,24 L86,21 C87,20 88,20 89,21 C90,22 90,23 89,24 L86,26 Z" fill="currentColor" />
                  
                  {/* Music Notes */}
                  <path d="M54,23 L54,12 L70,16 L70,27" />
                  <circle cx="50" cy="23" r="3.5" fill="currentColor" />
                  <circle cx="66" cy="27" r="3.5" fill="currentColor" />
                </svg>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Ready Banner is now merged directly inside the parent background section! */}
        <div className="bg-academy-navy py-12 px-6 lg:px-12 max-w-7xl mx-4 lg:mx-auto rounded-3xl overflow-hidden relative mt-20 mb-10 z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
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
                <div className="w-12 h-12 rounded-full border border-academy-orange flex items-center justify-center text-[#f25c05] shrink-0 group-hover:bg-[#f25c05] group-hover:text-white transition-all">
                   <MapPin className="w-5 h-5" />
                </div>
                <div className="text-white text-left">
                  <div className="text-sm font-bold leading-tight">Mostaganem, <br/> Zeghloul</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="relative bg-cover bg-center bg-no-repeat border-t border-slate-100 pt-20 pb-10"
        style={{ backgroundImage: "url('/back3.png')" }}
      >
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

      <ImaginariumAlbumModal 
        isOpen={showImaginariumAlbum} 
        onClose={() => setShowImaginariumAlbum(false)} 
        lang={lang} 
      />
    </div>
  );
}
