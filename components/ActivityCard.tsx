
import React from 'react';
import { Activity, CulturalInsight } from '../types';
import { CULTURAL_INSIGHTS } from '../constants';

interface ActivityCardProps {
  activity: Activity;
  isNext?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onShowInsight: (insight: CulturalInsight) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, isNext, onFocus, onShowInsight }) => {
  
  const findRelevantInsights = () => {
    if (!CULTURAL_INSIGHTS) return [];

    // 1. Priority: Explicitly linked insights (Manual curation)
    if (activity.linkedInsightIds && activity.linkedInsightIds.length > 0) {
      return CULTURAL_INSIGHTS.filter(insight => 
        activity.linkedInsightIds!.includes(insight.id)
      );
    }

    // 2. Fallback: Strict keyword matching (Only if no manual links)
    // We reduce the "fuzziness" to avoid repetition.
    return CULTURAL_INSIGHTS.filter(insight => {
      const desc = activity.description?.toLowerCase() || "";
      // Only match on explicit keywords array, not generic titles
      if (insight.keywords && Array.isArray(insight.keywords)) {
        // Require at least one keyword match
        return insight.keywords.some(keyword => {
           // Avoid short generic words matching parts of other words
           return desc.includes(keyword.toLowerCase());
        });
      }
      return false;
    });
  };

  const relevantInsights = findRelevantInsights();

  const getTypeStyles = (type: Activity['type']) => {
    switch (type) {
      case 'food': 
        return 'bg-[#fff8f0] border-orange-100 text-stone-800';
      case 'culture': 
        return 'bg-[#fdfbfc] border-red-100 text-stone-800';
      case 'transport': 
        return 'bg-slate-50 border-slate-200 text-slate-700';
      default: 
        return 'bg-white border-stone-200 text-stone-800';
    }
  };

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${activity.coordinates.lat},${activity.coordinates.lng}&destination_place_id=${encodeURIComponent(activity.title)}`;

  return (
    <div 
      className={`
        relative p-5 mb-4 rounded-lg border transition-all duration-300
        ${isNext ? 'ring-1 ring-red-400 shadow-lg transform scale-[1.01]' : 'hover:shadow-md hover:border-stone-300'}
        ${getTypeStyles(activity.type)}
        cursor-pointer group
      `}
      onClick={onFocus}
    >
      {isNext && (
        <span className="absolute -top-2 -right-2 bg-red-700 text-white text-[10px] font-bold px-2 py-1 rounded-sm shadow-sm tracking-widest">
          NU
        </span>
      )}
      <div className="flex gap-4 items-baseline">
        <div className="min-w-[60px] font-mono text-sm text-stone-400 font-medium pt-0.5">
          {activity.time}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-serif font-bold text-lg leading-tight mb-2 pr-8 text-stone-900">
              {activity.title}
            </h3>
            
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} 
              className="absolute top-5 right-4 text-stone-400 hover:text-red-600 transition-colors p-2 -mr-2 -mt-2 rounded-full active:bg-stone-100"
              title="Navigeer met Google Maps"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </div>
          
          <p className="text-sm text-stone-600 leading-relaxed font-sans">
            {activity.description}
          </p>
          
          {relevantInsights.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {relevantInsights.map(insight => (
                <button 
                  key={insight.id}
                  onClick={(e) => { e.stopPropagation(); onShowInsight(insight); }}
                  className={`
                    text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-full border transition-all flex items-center gap-2
                    bg-white border-stone-200 text-stone-500 hover:border-red-300 hover:text-red-600 hover:shadow-sm
                  `}
                >
                  <span>{insight.title}</span>
                  <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
              ))}
            </div>
          )}

          <div className="mt-3 text-[11px] font-bold text-stone-400 uppercase tracking-widest flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {activity.locationName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
