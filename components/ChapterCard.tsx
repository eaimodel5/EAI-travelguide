import React from 'react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
  isNext?: boolean;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, isNext }) => {
  const getTypeColor = (type: Activity['type']) => {
    switch (type) {
      case 'food': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'culture': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'transport': return 'bg-blue-50 text-blue-800 border-blue-200';
      default: return 'bg-white text-stone-800 border-stone-200';
    }
  };

  return (
    <div className={`
      relative p-4 mb-3 rounded-xl border transition-all duration-300
      ${isNext ? 'ring-2 ring-red-400 shadow-md transform scale-[1.02]' : 'hover:shadow-sm'}
      ${getTypeColor(activity.type)}
    `}>
      {isNext && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">
          VOLGENDE
        </span>
      )}
      <div className="flex gap-3 items-start">
        <div className="min-w-[50px] font-mono text-sm font-bold opacity-70 pt-1">
          {activity.time}
        </div>
        <div>
          <h3 className="font-bold text-base leading-tight mb-1">
            {activity.title}
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            {activity.description}
          </p>
          <div className="mt-2 text-xs font-semibold uppercase tracking-wider opacity-60 flex items-center gap-1">
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
