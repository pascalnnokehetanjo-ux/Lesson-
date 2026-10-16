import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Calendar, Sparkles, FileText, Download, Printer, 
  CheckCircle, Globe, Moon, Sun, Award, Users, Shield, Zap, 
  ArrowRight, Check, RefreshCw, Layers, Cpu, Heart, ChevronDown
} from 'lucide-react';

// Multilingual Dictionary
const t = {
  en: {
    appName: "LessonChip",
    tagline: "Cameroon Primary Lesson Planner",
    heroHeading: "Transform Cameroon Curriculum into Classroom-Ready Lesson Plans in Seconds",
    heroSub: "Empowering nursery and primary teachers across Cameroon (Anglophone & Francophone sub-systems) to effortlessly generate MINEDUB-aligned schemes of work, weekly overviews, and detailed daily lesson notes.",
    getStarted: "Get Started Free",
    explorePlanner: "Open Planner Studio",
    watchDemo: "Learn More",
    featuresTitle: "Designed for Cameroon Educators",
    featuresSub: "Everything you need to move from national curriculum guidelines to engaging classroom lessons without the paperwork headache.",
    pricingTitle: "Simple, Transparent Pricing for Teachers & Schools",
    pricingSub: "Choose the plan that fits your classroom or school staff.",
    freeTier: "Starter Free",
    proTier: "Teacher Pro",
    schoolTier: "School Enterprise",
    monthly: "XAF / month",
    free: "Free",
    selectPlan: "Choose Plan",
    features: "Features",
    pricing: "Pricing",
    testimonials: "Testimonials",
    faq: "FAQ",
    appStudio: "Planner Studio",
    subsystem: "Education Sub-system",
    classLevel: "Class Level",
    term: "Academic Term",
    subject: "Subject",
    weekNumber: "Week Number",
    topicTitle: "Topic / Competency",
    generateAI: "Generate with AI Assistant",
    schemesTab: "Schemes of Work",
    weeklyTab: "Weekly Overview",
    dailyTab: "Daily Lesson Notes",
    aiTab: "AI Assistant",
    savedTab: "Saved Lesson Plans",
    savePlan: "Save Plan",
    printPlan: "Print / Export PDF",
    successSaved: "Lesson plan saved successfully!",
    objective: "Lesson Objectives",
    materials: "Teaching & Learning Materials",
    introduction: "Introduction / Revision",
    stepByStep: "Step-by-Step Learning Activities",
    assessment: "Evaluation & Assessment",
    contentNotes: "Teacher Content Notes",
    competencyApproach: "Competency-Based Approach (APC)",
  },
  fr: {
    appName: "LessonChip",
    tagline: "Planificateur de Leçons Primaire Cameroun",
    heroHeading: "Transformez le Programme Scolaire Camerounais en Leçons Prêtes en Quelques Secondes",
    heroSub: "Permet aux enseignants du préscolaire et primaire du Cameroun (sous-systèmes anglophone et francophone) de générer sans effort des programmes, des aperçus hebdomadaires et des notes de cours conformes au MINEDUB.",
    getStarted: "Commencer Gratuitement",
    explorePlanner: "Ouvrir le Studio de Planification",
    watchDemo: "En Savoir Plus",
    featuresTitle: "Conçu pour les Enseignants Camerounais",
    featuresSub: "Tout ce dont vous avez besoin pour passer des directives nationales du programme à des leçons captivantes sans la corvée administrative.",
    pricingTitle: "Tarifs Simples et Transparents pour Enseignants et Écoles",
    pricingSub: "Choisissez le forfait adapté à votre classe ou à votre établissement.",
    freeTier: "Gratuit",
    proTier: "Enseignant Pro",
    schoolTier: "École Entreprise",
    monthly: "FCFA / mois",
    free: "Gratuit",
    selectPlan: "Choisir le Forfait",
    features: "Fonctionnalités",
    pricing: "Tarifs",
    testimonials: "Témoignages",
    faq: "FAQ",
    appStudio: "Studio de Planification",
    subsystem: "Sous-système d'Éducation",
    classLevel: "Niveau de Classe",
    term: "Trimestre Scolaire",
    subject: "Matière",
    weekNumber: "Semaine",
    topicTitle: "Sujet / Compétence",
    generateAI: "Générer avec l'Assistant IA",
    schemesTab: "Progression (Schemes)",
    weeklyTab: "Aperçu Hebdomadaire",
    dailyTab: "Fiches de Leçons Quotidiennes",
    aiTab: "Assistant IA",
    savedTab: "Leçons Enregistrées",
    savePlan: "Enregistrer la Leçon",
    printPlan: "Imprimer / Exporter PDF",
    successSaved: "Leçon enregistrée avec succès !",
    objective: "Objectifs Pédagogiques",
    materials: "Matériel Didactique",
    introduction: "Introduction / Révision",
    stepByStep: "Activités d'Apprentissage Étape par Étape",
    assessment: "Évaluation et Contrôle",
    contentNotes: "Résumé du Cours pour l'Enseignant",
    competencyApproach: "Approche Par Compétences (APC)",
  },
  ha: {
    appName: "LessonChip",
    tagline: "Mai Tsara Darasi na Firamare a Kamaru",
    heroHeading: "Canja Tsarin Karatu na Kamaru zuwa Shirye-shiryen Darasi cikin Daƙiƙa Kaɗan",
    heroSub: "Taimaka wa malaman makarantun gaba da firamare da firamare a faɗin Kamaru (Turanci da Faransanci) don samar da tsare-tsaren karatu da suka dace da MINEDUB.",
    getStarted: "Fara Kyauta",
    explorePlanner: "Buɗe Dakin Tsara Darasi",
    watchDemo: "Ƙarin Bayani",
    featuresTitle: "An Tsara Shi Don Malaman Kamaru",
    featuresSub: "Duk abin da kuke buƙata don komawa daga littattafan tsara karatu zuwa azuzuwan koyarwa masu jan hankali.",
    pricingTitle: "Sauƙaƙan Farashi ga Malamai da Makarantu",
    pricingSub: "Zaɓi tsarin da ya fi dacewa da ajinku ko makarantarku.",
    freeTier: "Farko Kyauta",
    proTier: "Malami Pro",
    schoolTier: "Makarantar Kasuwanci",
    monthly: "XAF / wata",
    free: "Kyauta",
    selectPlan: "Zaɓi Tsari",
    features: "Abubuwan Amfani",
    pricing: "Farashi",
    testimonials: "Shaidar Malami",
    faq: "Tambayoyi",
    appStudio: "Dakin Tsara Darasi",
    subsystem: "Tsarin Karatu",
    classLevel: "Aji",
    term: "Zangon Karatu (Term)",
    subject: "Masallaci / Darasi",
    weekNumber: "Mako Na",
    topicTitle: "Taken Darasi / Basira",
    generateAI: "Ƙirƙira da Mataimakin AI",
    schemesTab: "Tsarin Aiki (Schemes)",
    weeklyTab: "Bayani na Mako",
    dailyTab: "Bayanan Darasi na Kullum",
    aiTab: "Mataimakin AI",
    savedTab: "Adana Darussa",
    savePlan: "Ajiye Darasi",
    printPlan: "Bugawa / Fitar da PDF",
    successSaved: "An adana darasi cikin nasara!",
    objective: "Manufofin Darasi",
    materials: "Kayayyakin Koyarwa",
    introduction: "Gabatarwa",
    stepByStep: "Matakan Koyarwa",
    assessment: "Tantancewa",
    contentNotes: "Bayanan Malam",
    competencyApproach: "Hanyar Kwarewa (APC)",
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'fr' | 'ha'>('en');
  const [darkMode, setDarkMode] = useState(false);
  const [activeView, setActiveView] = useState<'landing' | 'studio'>('landing');
  const [activeTab, setActiveTab] = useState<'schemes' | 'weekly' | 'daily' | 'ai' | 'saved'>('daily');

  // Planner Form State
  const [subsystem, setSubsystem] = useState('Anglophone Sub-system (Class 1-6)');
  const [classLevel, setClassLevel] = useState('Class 3');
  const [term, setTerm] = useState('Term 1');
  const [subject, setSubject] = useState('Mathematics');
  const [week, setWeek] = useState('Week 4');
  const [topic, setTopic] = useState('Multiplication of 2-Digit Numbers without Regrouping');
  const [isGenerating, setIsGenerating] = useState(false);
  const [savedPlans, setSavedPlans] = useState<any[]>([]);
  const [successMsg, setSuccessMsg] = useState('');

  // Generated Content State
  const [lessonContent, setLessonContent] = useState({
    objective: "By the end of the lesson, pupils should be able to multiply two-digit numbers by single-digit numbers accurately without regrouping.",
    materials: "Counting sticks, Base-10 blocks, Flashcards with numbers 1 to 9, Blackboard ruler.",
    introduction: "Review repeated addition (e.g. 12 + 12 + 12 = 36) through a quick mental math game with the class.",
    stepByStep: "Step 1: Write 24 x 2 on the board.\nStep 2: Demonstrate multiplying the units column first (4 x 2 = 8).\nStep 3: Multiply the tens column next (2 x 2 = 4).\nStep 4: Combine to get 48.\nStep 5: Group pupils in pairs to solve 31 x 3 and 22 x 4 using sticks.",
    assessment: "Give a 3-question short exercise on the chalkboard: 1) 23 x 2, 2) 32 x 3, 3) 41 x 2.",
    contentNotes: "Multiplication is repeated addition. Always start multiplying from the right (units place) moving towards the left (tens place)."
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    setSuccessMsg('');
    setTimeout(() => {
      setLessonContent({
        objective: `Pupils will master core competencies of ${topic} for ${subsystem} (${classLevel} ${subject}), aligned with Cameroon MINEDUB syllabus guidelines.`,
        materials: `Textbooks, locally sourced teaching aids, flashcards, charts for ${subject}.`,
        introduction: `Engage learners with a 5-minute interactive recall session related to ${topic}.`,
        stepByStep: `Step 1: Introduce core vocabulary and concepts for ${topic}.\nStep 2: Guided practice with real-world Cameroon examples.\nStep 3: Group collaborative problem solving.\nStep 4: Individual practice exercises and chalkboard review.`,
        assessment: `Oral questioning and 5 short written problems evaluated in class.`,
        contentNotes: `Key pedagogical note: Emphasize practical application, bilingual understanding, and continuous formative assessment.`
      });
      setIsGenerating(false);
    }, 800);
  };

  const handleSavePlan = () => {
    const newPlan = {
      id: Date.now(),
      subsystem,
      classLevel,
      subject,
      week,
      topic,
      lessonContent,
      date: new Date().toLocaleDateString()
    };
    setSavedPlans([newPlan, ...savedPlans]);
    setSuccessMsg(t[lang].successSaved);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-4 lg:px-12 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveView('landing')}>
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-600/30">
            LC
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              {t[lang].appName}
              <span className="text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold px-2 py-0.5 rounded-full border border-amber-500/20">Cameroon</span>
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block -mt-1 font-medium">Primary Lesson Planner</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600 dark:text-slate-300">
          <button onClick={() => setActiveView('landing')} className="hover:text-emerald-600 transition">{t[lang].features}</button>
          <button onClick={() => setActiveView('landing')} className="hover:text-emerald-600 transition">{t[lang].pricing}</button>
          <button onClick={() => setActiveView('studio')} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1">
            <BookOpen className="w-4 h-4" /> {t[lang].appStudio}
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700">
            <Globe className="w-4 h-4 ml-1.5 text-slate-400" />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as any)}
              className="bg-transparent text-xs font-semibold px-2 py-1 outline-none cursor-pointer text-slate-700 dark:text-slate-200"
            >
              <option value="en" className="dark:bg-slate-900">EN - English</option>
              <option value="fr" className="dark:bg-slate-900">FR - Français</option>
              <option value="ha" className="dark:bg-slate-900">HA - Hausa</option>
            </select>
          </div>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {activeView === 'landing' ? (
            <button 
              onClick={() => setActiveView('studio')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-md shadow-emerald-600/20 transition flex items-center gap-2"
            >
              {t[lang].explorePlanner} <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button 
              onClick={() => setActiveView('landing')}
              className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-semibold text-sm px-4 py-2 rounded-xl transition"
            >
              Home
            </button>
          )}
        </div>
      </header>

      {/* LANDING PAGE */}
      {activeView === 'landing' && (
        <main className="max-w-7xl mx-auto px-4 lg:px-12 py-12">
          
          {/* HERO SECTION (2-Column Design) */}
          <section className="grid lg:grid-cols-2 gap-12 items-center py-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" /> MINEDUB Curriculum Aligned
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                {t[lang].heroHeading}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {t[lang].heroSub}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => setActiveView('studio')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition flex items-center gap-2.5 text-base"
                >
                  {t[lang].getStarted} <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveView('studio')}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold px-6 py-3.5 rounded-xl transition text-base flex items-center gap-2"
                >
                  <Cpu className="w-5 h-5 text-amber-600" /> {t[lang].watchDemo}
                </button>
              </div>
              <div className="flex items-center gap-6 pt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Anglophone & Francophone</div>
                <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Offline Capable</div>
                <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Instant PDF Export</div>
              </div>
            </div>

            {/* Hero Visual Card / Product Preview */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">LessonChip v2.5 - Class 3 Math</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/20">
                    <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Weekly Lesson Plan</div>
                    <div className="font-bold text-slate-900 dark:text-white mt-1">Multiplication & Division Foundations</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Aligned with Cameroon Ministry of Basic Education official scope and sequence.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                      <div className="text-xs text-slate-500">Sub-system</div>
                      <div className="font-bold text-sm">Anglophone Primary</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                      <div className="text-xs text-slate-500">Pedagogy</div>
                      <div className="font-bold text-sm text-amber-600">APC Competency-Based</div>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span className="text-xs font-bold text-amber-800 dark:text-amber-300">AI Generated Content Notes Ready</span>
                    </div>
                    <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded font-bold">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES & BENEFITS SECTION */}
          <section className="py-20 border-t border-slate-200 dark:border-slate-800">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <h2 className="text-3xl font-extrabold tracking-tight">{t[lang].featuresTitle}</h2>
              <p className="text-slate-600 dark:text-slate-400">{t[lang].featuresSub}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Dual Sub-systems</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Full curriculum support for both English-speaking (Class 1-6) and French-speaking (SIL-CM2) primary systems in Cameroon.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-600/10 text-amber-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">AI Lesson Notes</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Instantly generate comprehensive teacher content notes, objectives, and step-by-step pupil activities tailored to each topic.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Print & Export PDF</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Format and print your lesson plans neatly for headteacher inspection and daily classroom teaching folders.
                </p>
              </div>
            </div>
          </section>

          {/* PRICING SECTION */}
          <section className="py-20 border-t border-slate-200 dark:border-slate-800">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <h2 className="text-3xl font-extrabold tracking-tight">{t[lang].pricingTitle}</h2>
              <p className="text-slate-600 dark:text-slate-400">{t[lang].pricingSub}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300">{t[lang].freeTier}</h3>
                  <div className="text-3xl font-extrabold">{t[lang].free}</div>
                  <p className="text-xs text-slate-500">For individual teachers starting out with digital lesson planning.</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 5 AI Lesson generations / mo</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Standard templates</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> English & French support</li>
                  </ul>
                </div>
                <button 
                  onClick={() => setActiveView('studio')}
                  className="mt-8 w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold py-3 rounded-xl transition text-sm"
                >
                  {t[lang].selectPlan}
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-emerald-600 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full">POPULAR</div>
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">{t[lang].proTier}</h3>
                  <div className="text-3xl font-extrabold">1,500 <span className="text-sm font-normal">{t[lang].monthly}</span></div>
                  <p className="text-xs text-emerald-100">For dedicated teachers who want unlimited AI generation & PDF exports.</p>
                  <ul className="space-y-3 text-sm text-emerald-50 pt-4 border-t border-emerald-500/30">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-300" /> Unlimited AI Lesson Plans</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-300" /> All Subjects & Classes (1-6)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-300" /> Hausa, English & French</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-300" /> Priority PDF & Print Formatting</li>
                  </ul>
                </div>
                <button 
                  onClick={() => setActiveView('studio')}
                  className="mt-8 w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-3 rounded-xl transition text-sm shadow-md"
                >
                  {t[lang].selectPlan}
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300">{t[lang].schoolTier}</h3>
                  <div className="text-3xl font-extrabold">15,000 <span className="text-sm font-normal">{t[lang].monthly}</span></div>
                  <p className="text-xs text-slate-500">For primary schools and headteachers managing entire teaching staff.</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Up to 25 Teacher Accounts</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> School Inspection Dashboard</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Custom School Header on PDFs</li>
                  </ul>
                </div>
                <button 
                  onClick={() => setActiveView('studio')}
                  className="mt-8 w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold py-3 rounded-xl transition text-sm"
                >
                  {t[lang].selectPlan}
                </button>
              </div>
            </div>
          </section>

        </main>
      )}

      {/* PLANNER STUDIO APP VIEW */}
      {activeView === 'studio' && (
        <main className="max-w-7xl mx-auto px-4 lg:px-12 py-8 space-y-6">
          
          {/* Top Configuration Bar */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-600" /> Cameroon Curriculum Lesson Generator
              </h2>
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleGenerateAI}
                  disabled={isGenerating}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-sm flex items-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  {t[lang].generateAI}
                </button>
                <button 
                  onClick={handleSavePlan}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-sm flex items-center gap-2 shadow-sm"
                >
                  <CheckCircle className="w-4 h-4" /> {t[lang].savePlan}
                </button>
              </div>
            </div>

            {successMsg && (
              <div className="mb-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 px-4 py-3 rounded-xl text-sm font-semibold">
                {successMsg}
              </div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 block">{t[lang].subsystem}</label>
                <select 
                  value={subsystem} 
                  onChange={(e) => setSubsystem(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-sm font-semibold outline-none"
                >
                  <option>Anglophone Sub-system (Class 1-6)</option>
                  <option>Francophone Sub-system (SIL-CM2)</option>
                  <option>Nursery Education</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 block">{t[lang].classLevel}</label>
                <select 
                  value={classLevel} 
                  onChange={(e) => setClassLevel(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-sm font-semibold outline-none"
                >
                  <option>Nursery 1 & 2</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                  <option>Class 4</option>
                  <option>Class 5</option>
                  <option>Class 6</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 block">{t[lang].term}</label>
                <select 
                  value={term} 
                  onChange={(e) => setTerm(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-sm font-semibold outline-none"
                >
                  <option>Term 1 (First Trimester)</option>
                  <option>Term 2 (Second Trimester)</option>
                  <option>Term 3 (Third Trimester)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 block">{t[lang].subject}</label>
                <select 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-sm font-semibold outline-none"
                >
                  <option>Mathematics</option>
                  <option>English Language</option>
                  <option>French Language</option>
                  <option>Citizenship & Moral Ed.</option>
                  <option>Science & Technology</option>
                  <option>Creative Arts & Craft</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 block">{t[lang].weekNumber}</label>
                <select 
                  value={week} 
                  onChange={(e) => setWeek(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-sm font-semibold outline-none"
                >
                  <option>Week 1</option>
                  <option>Week 2</option>
                  <option>Week 3</option>
                  <option>Week 4</option>
                  <option>Week 5</option>
                  <option>Week 6</option>
                  <option>Week 7</option>
                  <option>Week 8</option>
                  <option>Week 9</option>
                  <option>Week 10</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 block">{t[lang].topicTitle}</label>
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm font-semibold outline-none"
                placeholder="e.g. Fractions, National Symbols, Photosynthesis..."
              />
            </div>
          </div>

          {/* Studio Tabs */}
          <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('daily')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${activeTab === 'daily' ? 'bg-emerald-600 text-white shadow' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'}`}
            >
              <FileText className="w-4 h-4" /> {t[lang].dailyTab}
            </button>
            <button 
              onClick={() => setActiveTab('schemes')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${activeTab === 'schemes' ? 'bg-emerald-600 text-white shadow' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'}`}
            >
              <Calendar className="w-4 h-4" /> {t[lang].schemesTab}
            </button>
            <button 
              onClick={() => setActiveTab('weekly')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${activeTab === 'weekly' ? 'bg-emerald-600 text-white shadow' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'}`}
            >
              <BookOpen className="w-4 h-4" /> {t[lang].weeklyTab}
            </button>
            <button 
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${activeTab === 'saved' ? 'bg-emerald-600 text-white shadow' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'}`}
            >
              <CheckCircle className="w-4 h-4" /> {t[lang].savedTab} ({savedPlans.length})
            </button>
          </div>

          {/* TAB CONTENT: DAILY LESSON NOTES */}
          {activeTab === 'daily' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm space-y-6 print:border-none">
              <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{subsystem} — {classLevel}</div>
                  <h3 className="text-2xl font-extrabold mt-1">{subject}: {topic}</h3>
                  <div className="text-xs text-slate-500 mt-1">{week} | {term}</div>
                </div>
                <button 
                  onClick={() => window.print()}
                  className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" /> {t[lang].printPlan}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400">{t[lang].objective}</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{lessonContent.objective}</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400">{t[lang].materials}</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{lessonContent.materials}</p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400">{t[lang].introduction}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{lessonContent.introduction}</p>
              </div>

              <div className="bg-emerald-50/50 dark:bg-emerald-950/20 p-5 rounded-xl border border-emerald-500/20 space-y-2">
                <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400">{t[lang].stepByStep}</h4>
                <div className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">{lessonContent.stepByStep}</div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <h4 className="font-bold text-sm text-amber-600">{t[lang].assessment}</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{lessonContent.assessment}</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <h4 className="font-bold text-sm text-amber-600">{t[lang].contentNotes}</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{lessonContent.contentNotes}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: SCHEMES OF WORK */}
          {activeTab === 'schemes' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold">MINEDUB Official Schemes of Work — {classLevel} {subject}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Term 1 breakdown aligned with national standards.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800">
                      <th className="p-3 border border-slate-200 dark:border-slate-700">Week</th>
                      <th className="p-3 border border-slate-200 dark:border-slate-700">Topic / Core Competency</th>
                      <th className="p-3 border border-slate-200 dark:border-slate-700">Learning Objectives</th>
                      <th className="p-3 border border-slate-200 dark:border-slate-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold">Week 1</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700">Review of Previous Class Concepts</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700">Assess baseline knowledge</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 text-emerald-600 font-bold">Completed</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold">Week 2-3</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700">Number Operations & Place Value</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700">Read and write numbers up to 10,000</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 text-emerald-600 font-bold">Completed</td>
                    </tr>
                    <tr className="bg-emerald-50/50 dark:bg-emerald-950/20">
                      <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold">Week 4</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold text-emerald-700 dark:text-emerald-300">{topic}</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700">Master multiplication accuracy</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 text-amber-600 font-bold">In Progress</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold">Week 5</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700">Division without Remainder</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700">Share quantities equally</td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-400">Upcoming</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB CONTENT: WEEKLY OVERVIEW */}
          {activeTab === 'weekly' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold">Weekly Teaching Overview — {week} ({subject})</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, idx) => (
                  <div key={day} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="font-extrabold text-emerald-600 text-sm">{day}</div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Session {idx + 1}: {topic}</div>
                    <p className="text-xs text-slate-500">Duration: 40 mins | Practice & Exercises</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT: SAVED LESSON PLANS */}
          {activeTab === 'saved' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold">Saved Lesson Plans ({savedPlans.length})</h3>
              {savedPlans.length === 0 ? (
                <p className="text-sm text-slate-500">No saved lesson plans yet. Click "Save Plan" in the top bar after generating.</p>
              ) : (
                <div className="space-y-4">
                  {savedPlans.map((plan) => (
                    <div key={plan.id} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-sm">{plan.subject}: {plan.topic}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{plan.classLevel} | {plan.week} | Saved on {plan.date}</div>
                      </div>
                      <button 
                        onClick={() => {
                          setSubsystem(plan.subsystem);
                          setClassLevel(plan.classLevel);
                          setSubject(plan.subject);
                          setWeek(plan.week);
                          setTopic(plan.topic);
                          setLessonContent(plan.lessonContent);
                          setActiveTab('daily');
                        }}
                        className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold"
                      >
                        Load Plan
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </main>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-4 text-center text-xs text-slate-500">
        <p>© 2026 LessonChip — Cameroon Primary Lesson Planner. Developed for Cameroon Educators.</p>
      </footer>
    </div>
  );
}
