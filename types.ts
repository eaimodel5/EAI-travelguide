
export interface Coordinate {
  lat: number;
  lng: number;
}

export interface Activity {
  time: string;
  title: string;
  description: string;
  locationName: string;
  coordinates: Coordinate;
  type: 'sightseeing' | 'food' | 'transport' | 'hotel' | 'culture';
  linkedInsightIds?: string[]; // Manual override for specific unique insights
}

export interface DaySchedule {
  dayId: number;
  date: string;
  title: string;
  theme?: string;
  city: string;
  activities: Activity[];
  dailyTip?: string;
  relatedHistoryChapters?: string[];
}

export type InsightCategory = 'social' | 'food' | 'spiritual' | 'art' | 'history' | 'transport' | 'music';

export interface CulturalInsight {
  id: string;
  category: InsightCategory;
  title: string;
  japaneseTerm?: string;
  content: string;
  keywords: string[]; 
  deepDive: string; 
}

export interface HistoryChapter {
  id: string;
  title: string;
  period: string;
  content: string;
}

export interface UserLocation extends Coordinate {
  timestamp: number;
}
