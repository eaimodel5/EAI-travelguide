
import React, { useState, useEffect, useRef } from 'react';
import LeafletMap from './components/LeafletMap';
import ActivityCard from './components/ActivityCard';
import { ITINERARY, CULTURAL_INSIGHTS } from './constants';
import { HISTORY_CHAPTERS } from './chapters';
import { UserLocation, HistoryChapter, Activity, CulturalInsight, InsightCategory } from './types';

const App: React.FC = () => {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [selectedDayId, setSelectedDayId] = useState<number>(1);
  const [showMenu, setShowMenu] = useState(false);
  const [activeInsight, setActiveInsight] = useState<CulturalInsight | null>(null);
  const [showHistoryModal, setShowHistoryModal] = useState<HistoryChapter | null>(null);
  const [showDaySelector, setShowDaySelector] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(true);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuSelection, setMenuSelection] = useState<string>('context');
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [focusedActivityIndex, setFocusedActivityIndex] = useState<number | null>(null);

  const activeDay = ITINERARY.find(d => d.dayId === selectedDayId) || ITINERARY[0];

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude, timestamp: pos.timestamp }),
      (err) => console.log("Location access denied", err)
    );
  }, []);

  useEffect(() => {
    setFocusedActivityIndex(null);
    setMenuSelection('context'); 
  }, [selectedDayId]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const scrollPos = scrollContainerRef.current.scrollTop;
      const mapHeight = window.innerHeight * 0.4;
      setIsMapVisible(scrollPos < mapHeight - 100);
    };

    const scrollEl = scrollContainerRef.current;
    scrollEl?.addEventListener('scroll', handleScroll);
    return () => scrollEl?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNextDay = () => {
    if (selectedDayId < ITINERARY.length) setSelectedDayId(prev => prev + 1);
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevDay = () => {
    if (selectedDayId > 1) setSelectedDayId(prev => prev - 1);
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- CONTEXT LOGIC ---

  const dailyHistoryChapters = HISTORY_CHAPTERS.filter(ch => 
    activeDay.relatedHistoryChapters?.includes(ch.id)
  );

  const getDailyInsights = () => {
    // 1. Collect all explicitly linked IDs from today's activities
    const linkedIds = activeDay.activities.flatMap(a => a.linkedInsightIds || []);
    const linkedInsights = CULTURAL_INSIGHTS.filter(i => linkedIds.includes(i.id));

    // 2. Keyword fallback (optional, can be removed if linking is thorough)
    const dayDescriptionText = activeDay.activities.map(a => `${a.title} ${a.description} ${a.type}`).join(' ').toLowerCase();
    const keywordInsights = CULTURAL_INSIGHTS.filter(insight => {
        if (linkedIds.includes(insight.id)) return false; // Already have it
        if (!insight.keywords) return false;
        return insight.keywords.some(k => dayDescriptionText.includes(k.toLowerCase()));
    });

    // Combine unique
    const combined = [...linkedInsights, ...keywordInsights];
    // De-duplicate by ID just in case
    return Array.from(new Map(combined.map(item => [item.id, item])).values());
  };

  const dailyInsights = getDailyInsights();

  // --- FILTER LOGIC FOR LIBRARY MODE ---
  const filteredInsights = menuSelection === 'context' || menuSelection === 'history'
    ? [] 
    : menuSelection === 'all' 
        ? CULTURAL_INSIGHTS 
        : CULTURAL_INSIGHTS.filter(insight => insight.category === menuSelection);

  const categories = [
    { id: 'all', label: 'Bibliotheek: Alles' },
    { id: 'social', label: 'Categorie: Gedrag & Etiquette' },
    { id: 'food', label: 'Categorie: Eten & Drinken' },
    { id: 'music', label: 'Categorie: Muziek & Nachtleven' },
    { id: 'spiritual', label: 'Categorie: Tempels & Religie' },
    { id: 'art', label: 'Categorie: Kunst & Cultuur' },
    { id: 'transport', label: 'Categorie: Vervoer' },
  ];

  const getCurrentSelectionLabel = () => {
    if (menuSelection === 'context') return 'Aanbevolen voor vandaag';
    if (menuSelection === 'history') return 'Historische Tijdlijn';
    const cat = categories.find(c => c.id === menuSelection);
    return cat ? cat.label : 'Selecteer onderwerp';
  };

  const parseHistoryContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={i} className="h-4"></div>;
      if (trimmed.startsWith('Hoofdstuk')) {
        return <h1 key={i} className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mt-16 mb-8 border-b border-stone-200 pb-6">{line}</h1>;
      }
      if (/^\d+\./.test(trimmed)) {
        return <h3 key={i} className="text-xl md:text-2xl font-serif font-bold text-stone-800 mt-10 mb-4">{line}</h3>;
      }
      return <p key={i} className="mb-6 text-lg leading-relaxed text-stone-700 font-serif">{line}</p>;
    });
  };

  return (
    <div className="flex h-screen supports-[height:100dvh]:h-[100dvh] w-full flex-col md:flex-row bg-[#fcfaf7] overflow-hidden text-stone-900">
      
      {/* MOBILE HEADER */}
      <div className="md:hidden glass-header fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 justify-between border-b border-stone-100/50">
        <button onClick={() => setShowDaySelector(!showDaySelector)} className="flex items-center gap-3">
          <div className="bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs">
            {activeDay.dayId}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{activeDay.date}</span>
            <span className="font-serif font-bold text-base flex items-center gap-1">
              {activeDay.city}
              <svg className={`w-3 h-3 transition-transform ${showDaySelector ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </span>
          </div>
        </button>
        
        <button 
          onClick={() => setShowMenu(true)}
          className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-full hover:bg-stone-200 transition-colors"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600">Menu</span>
          <svg className="w-5 h-5 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* MOBILE CONTENT CONTAINER */}
      <div 
        ref={scrollContainerRef}
        className="md:hidden flex-1 overflow-y-auto pt-16 scroll-smooth scrollbar-hide"
      >
        <div className="h-[40vh] w-full relative shrink-0">
          <LeafletMap 
            activities={activeDay.activities}
            userLocation={userLocation}
            focusedActivityIndex={focusedActivityIndex}
            onMarkerClick={(idx) => setFocusedActivityIndex(idx)}
          />
        </div>

        <div className="relative z-10 bg-[#fcfaf7] px-6 py-8 min-h-[60vh]">
          <div className="mb-10 text-center px-4">
            <h2 className="font-serif italic text-2xl text-stone-800 mb-2 leading-tight">
              "{activeDay.theme}"
            </h2>
            {activeDay.dailyTip && (
              <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">
                Tip: {activeDay.dailyTip}
              </p>
            )}
          </div>

          <div className="flex justify-between items-center mb-10 pb-6 border-b border-stone-100">
            <button 
              onClick={handlePrevDay} 
              disabled={selectedDayId === 1}
              className="text-[10px] font-bold uppercase tracking-widest text-stone-400 disabled:opacity-0 flex items-center gap-2"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" /></svg>
              Gisteren
            </button>
            <div className="h-1 w-1 bg-stone-200 rounded-full" />
            <button 
              onClick={handleNextDay} 
              disabled={selectedDayId === ITINERARY.length}
              className="text-[10px] font-bold uppercase tracking-widest text-red-600 disabled:opacity-0 flex items-center gap-2"
            >
              Morgen
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          <div className="space-y-2 pb-24">
            {activeDay.activities.map((act, idx) => (
              <ActivityCard 
                key={idx} 
                activity={act} 
                isNext={idx === 0} 
                onFocus={() => setFocusedActivityIndex(idx)}
                onBlur={() => setFocusedActivityIndex(null)}
                onShowInsight={setActiveInsight}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex flex-1 relative overflow-hidden">
        <div className="w-[450px] bg-white border-r border-stone-100 flex flex-col h-full z-10">
          <div className="p-10 border-b border-stone-50 bg-[#fcfaf7]/50">
            <div className="flex justify-between items-center mb-8">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400">Japan Kompas</span>
              <button 
                onClick={() => setShowMenu(true)} 
                className="text-red-600 hover:text-red-700 font-bold text-[10px] uppercase tracking-widest border-b border-red-200 flex items-center gap-2"
              >
                Menu & Info
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            
            <div className="flex items-center justify-between group">
              <button onClick={handlePrevDay} disabled={selectedDayId === 1} className="p-2 hover:bg-stone-50 rounded-full disabled:opacity-0 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" /></svg>
              </button>
              <div className="text-center">
                <h1 className="text-4xl font-serif font-bold text-stone-900 mb-1">{activeDay.city}</h1>
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{activeDay.date}</span>
              </div>
              <button onClick={handleNextDay} disabled={selectedDayId === ITINERARY.length} className="p-2 hover:bg-stone-50 rounded-full disabled:opacity-0 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-10 space-y-10 scrollbar-hide">
            <div className="space-y-6">
              {activeDay.activities.map((act, idx) => (
                <ActivityCard 
                  key={idx} 
                  activity={act} 
                  isNext={false}
                  onFocus={() => setFocusedActivityIndex(idx)}
                  onBlur={() => setFocusedActivityIndex(null)}
                  onShowInsight={setActiveInsight}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 h-full relative">
          <LeafletMap 
            activities={activeDay.activities}
            userLocation={userLocation}
            focusedActivityIndex={focusedActivityIndex}
            onMarkerClick={(idx) => setFocusedActivityIndex(idx)}
          />
        </div>
      </div>

      {/* FIXED BOTTOM MAP TOGGLE */}
      {!isMapVisible && (
        <div className="md:hidden fixed bottom-6 left-0 right-0 z-[100] flex justify-center pointer-events-none">
          <button 
            onClick={() => scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
            className="pointer-events-auto bg-white/90 backdrop-blur border border-stone-200 text-stone-800 px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 active:scale-95 transition-all hover:bg-stone-50"
          >
            <svg className="w-4 h-4 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            <span className="text-[10px] font-bold uppercase tracking-widest">Terug naar Kaart</span>
          </button>
        </div>
      )}

      {/* UNIFIED MENU DRAWER */}
      {showMenu && (
        <div className="fixed inset-0 z-[2000] flex justify-end animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setShowMenu(false)} />
          <div className="relative w-[90%] md:max-w-[480px] h-full bg-white shadow-2xl animate-in slide-in-from-right duration-500 flex flex-col">
            
            <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-white z-10">
              <h2 className="text-xl font-serif font-bold text-stone-900">Menu & Info</h2>
              <button onClick={() => setShowMenu(false)} className="p-2 text-stone-400 hover:bg-stone-50 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="p-6 border-b border-stone-100 bg-stone-50 relative z-20">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
                Onderwerp
              </label>
              
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white border border-stone-300 text-stone-900 text-sm font-bold rounded-xl py-4 px-4 pr-10 shadow-sm flex items-center justify-between hover:border-red-300 transition-colors"
                >
                  <span className="truncate">{getCurrentSelectionLabel()}</span>
                  <svg className={`w-5 h-5 text-stone-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-stone-100 max-h-[60vh] overflow-y-auto z-30 animate-in fade-in zoom-in-95 duration-100">
                    <div className="py-2">
                      <button 
                        onClick={() => { setMenuSelection('context'); setIsDropdownOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-sm font-bold border-b border-stone-50 ${menuSelection === 'context' ? 'text-red-600 bg-red-50' : 'text-stone-800 hover:bg-stone-50'}`}
                      >
                        Aanbevolen voor vandaag
                      </button>
                      
                      <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-stone-400">Geschiedenis</div>
                      <button 
                        onClick={() => { setMenuSelection('history'); setIsDropdownOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-sm font-bold border-b border-stone-50 ${menuSelection === 'history' ? 'text-red-600 bg-red-50' : 'text-stone-800 hover:bg-stone-50'}`}
                      >
                        Historische Tijdlijn
                      </button>

                      <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-stone-400 mt-2">Bibliotheek</div>
                      {categories.map(cat => (
                         <button 
                           key={cat.id}
                           onClick={() => { setMenuSelection(cat.id); setIsDropdownOpen(false); }}
                           className={`w-full text-left px-4 py-3 text-sm font-bold ${menuSelection === cat.id ? 'text-red-600 bg-red-50' : 'text-stone-800 hover:bg-stone-50'}`}
                         >
                           {cat.label}
                         </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide bg-white">
              
              {/* CONTEXT VIEW */}
              {menuSelection === 'context' && (
                <div className="space-y-10">
                   <div className="border-b border-stone-100 pb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Context</span>
                      <h3 className="font-serif font-bold text-2xl text-stone-900">Vandaag in {activeDay.city}</h3>
                   </div>

                   {dailyHistoryChapters.length > 0 && (
                     <div className="space-y-4">
                       <h4 className="text-xs font-bold uppercase tracking-widest text-red-600">Historische Achtergrond</h4>
                       {dailyHistoryChapters.map(chapter => (
                         <button 
                           key={chapter.id}
                           onClick={() => setShowHistoryModal(chapter)}
                           className="w-full text-left p-5 rounded-xl border border-red-100 bg-red-50/30 hover:bg-red-50 transition-colors"
                         >
                            <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest block mb-1">{chapter.period}</span>
                            <h3 className="font-serif font-bold text-lg text-stone-900">{chapter.title}</h3>
                         </button>
                       ))}
                     </div>
                   )}

                   <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-red-600">Relevante Inzichten</h4>
                      {dailyInsights.length > 0 ? (
                        dailyInsights.map((insight) => (
                          <div key={insight.id} className="group cursor-pointer p-4 border border-stone-200 rounded-xl hover:border-stone-400 transition-colors" onClick={() => setActiveInsight(insight)}>
                             <div className="flex justify-between items-start mb-2">
                               <div className="flex flex-col gap-1">
                                  <h3 className="font-bold text-lg text-stone-900">{insight.title}</h3>
                                 {insight.japaneseTerm && <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">{insight.japaneseTerm}</span>}
                               </div>
                               <svg className="w-5 h-5 text-stone-300 group-hover:text-stone-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                             </div>
                             <p className="text-stone-500 text-sm font-serif line-clamp-2 leading-relaxed">{insight.content}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-stone-400 text-sm italic">Geen specifieke tips voor deze dag. Kijk in de bibliotheek voor algemene info.</p>
                      )}
                   </div>
                </div>
              )}

              {/* HISTORY VIEW */}
              {menuSelection === 'history' && (
                <div className="space-y-4 pb-10">
                  <div className="mb-4">
                    <h3 className="font-serif font-bold text-xl text-stone-900">Tijdlijn van Japan</h3>
                  </div>
                  {HISTORY_CHAPTERS.map(chapter => (
                    <button 
                      key={chapter.id}
                      onClick={() => setShowHistoryModal(chapter)}
                      className={`w-full text-left p-5 rounded-xl border transition-all hover:shadow-md ${dailyHistoryChapters.some(rc => rc.id === chapter.id) ? 'border-red-100 bg-red-50/30' : 'border-stone-100 bg-stone-50/30'}`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">{chapter.period}</span>
                        {dailyHistoryChapters.some(rc => rc.id === chapter.id) && (
                          <span className="text-[9px] font-bold text-red-600 border border-red-100 px-2 py-0.5 rounded-full">Relevant</span>
                        )}
                      </div>
                      <h3 className="font-serif font-bold text-lg text-stone-900">{chapter.title}</h3>
                    </button>
                  ))}
                </div>
              )}

              {/* CATEGORY VIEW */}
              {menuSelection !== 'context' && menuSelection !== 'history' && (
                <div className="space-y-8 pb-10">
                  {filteredInsights.length === 0 ? (
                    <p className="text-center text-stone-400 text-sm mt-10">Geen items gevonden in deze categorie.</p>
                  ) : (
                    filteredInsights.map((insight) => (
                      <div key={insight.id} className="group cursor-pointer p-4 -mx-4 hover:bg-stone-50 rounded-xl transition-colors" onClick={() => setActiveInsight(insight)}>
                         <div className="flex justify-between items-start mb-2">
                           <div className="flex flex-col gap-1">
                             <h3 className="font-bold text-lg text-stone-900 group-hover:text-red-700 transition-colors">{insight.title}</h3>
                             {insight.japaneseTerm && <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">{insight.japaneseTerm}</span>}
                           </div>
                           <svg className="w-5 h-5 text-stone-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                         </div>
                         <p className="text-stone-500 text-sm font-serif line-clamp-2 leading-relaxed pl-1">{insight.content}</p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* INDIVIDUAL INSIGHT DRAWER (REDESIGNED) */}
      {activeInsight && (
        <div className="fixed inset-0 z-[3000] flex justify-end animate-in fade-in duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm pointer-events-auto" onClick={() => setActiveInsight(null)} />
          
          <div className="relative w-[90%] md:max-w-[500px] h-[85vh] md:h-full mt-auto md:mt-0 bg-[#fcfaf7] rounded-t-[32px] md:rounded-l-[32px] md:rounded-tr-none shadow-2xl overflow-hidden animate-in slide-in-from-bottom md:slide-in-from-right duration-500 flex flex-col pointer-events-auto">
            
            {/* Header / Handle */}
            <div className="sticky top-0 bg-[#fcfaf7] z-10 pt-6 px-8 pb-4 border-b border-stone-200/60 shrink-0">
              <div className="w-16 h-1.5 bg-stone-300 rounded-full mx-auto mb-6 md:hidden" />
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.25em] mb-2">Inzicht</span>
                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">{activeInsight.title}</h2>
                   {activeInsight.japaneseTerm && (
                     <span className="text-sm font-mono text-stone-500 mt-2">{activeInsight.japaneseTerm}</span>
                   )}
                </div>
                <button 
                  onClick={() => setActiveInsight(null)} 
                  className="bg-stone-200/50 hover:bg-stone-300/50 p-2 rounded-full transition-colors -mr-2"
                >
                  <svg className="w-6 h-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 pt-6 pb-12 scrollbar-hide">
              <p className="text-xl font-serif italic text-stone-600 leading-relaxed mb-10 border-l-4 border-red-600 pl-6 py-1">
                {activeInsight.content}
              </p>
              
              <div className="prose prose-stone prose-lg max-w-none">
                <h4 className="text-xs font-bold uppercase text-stone-400 tracking-widest mb-4">Verdieping & Context</h4>
                <p className="text-stone-800 leading-8 font-serif whitespace-pre-line">
                  {activeInsight.deepDive}
                </p>
              </div>

              {activeInsight.keywords && activeInsight.keywords.length > 0 && (
                <div className="mt-12 pt-8 border-t border-stone-200 flex flex-wrap gap-2">
                  {activeInsight.keywords.map(k => (
                    <span key={k} className="text-[10px] uppercase font-bold text-stone-400 bg-stone-100 px-3 py-1.5 rounded-full tracking-wider">#{k}</span>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* HISTORY MODAL */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-[4000] bg-white animate-in slide-in-from-bottom duration-500 overflow-y-auto">
          <div className="sticky top-0 bg-white/90 backdrop-blur border-b border-stone-100 px-8 py-6 flex justify-between items-center z-10">
            <div className="flex items-center gap-4">
              <button onClick={() => setShowHistoryModal(null)} className="text-stone-400 hover:text-stone-900">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <div>
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">{showHistoryModal.period}</span>
                <h2 className="text-lg font-bold text-stone-900">{showHistoryModal.title}</h2>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto px-8 py-16">
            <div className="prose prose-stone max-w-none">
              {parseHistoryContent(showHistoryModal.content)}
            </div>
            <div className="mt-20 pt-10 border-t border-stone-100 text-center">
              <button 
                onClick={() => setShowHistoryModal(null)}
                className="bg-stone-900 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-red-700 transition-colors"
              >
                Terug naar Reis
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE DAY SELECTOR DROPDOWN */}
      {showDaySelector && (
        <div className="fixed inset-0 z-[1500] animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-stone-900/20 backdrop-blur-[2px]" onClick={() => setShowDaySelector(false)} />
          <div className="absolute top-16 left-6 right-6 bg-white rounded-2xl shadow-2xl max-h-[70vh] overflow-y-auto border border-stone-100 p-2">
            {ITINERARY.map(day => (
              <button 
                key={day.dayId} 
                onClick={() => { setSelectedDayId(day.dayId); setShowDaySelector(false); scrollContainerRef.current?.scrollTo({ top: 0 }); }}
                className={`w-full text-left p-4 rounded-xl flex items-center justify-between ${day.dayId === selectedDayId ? 'bg-red-50 text-red-700' : 'hover:bg-stone-50'}`}
              >
                <div>
                  <div className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">Dag {day.dayId}</div>
                  <div className="font-serif font-bold text-lg leading-none mt-1">{day.city}</div>
                </div>
                <div className="text-[10px] font-bold opacity-30">{day.date}</div>
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
