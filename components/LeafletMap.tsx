
import React, { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { Activity, UserLocation } from '../types';

// Fix for default Leaflet markers
const iconSvg = (color: string, isFocused: boolean) => {
  const size = isFocused ? 48 : 36;
  const stroke = isFocused ? 'stroke="white" stroke-width="2"' : '';
  
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="${size}" height="${size}" ${stroke}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
`};

const getIcon = (type: Activity['type'], isFocused: boolean) => {
  let color = '#dc2626'; // Red default
  if (type === 'food') color = '#f97316'; // Orange
  if (type === 'culture') color = '#9333ea'; // Purple
  if (type === 'transport') color = '#2563eb'; // Blue

  // If focused, the icon is slightly larger and z-index is higher
  return L.divIcon({
    html: iconSvg(color, isFocused),
    className: `custom-marker ${isFocused ? 'z-[1000]' : 'opacity-80'} transition-all duration-300`,
    iconSize: isFocused ? [48, 48] : [36, 36],
    iconAnchor: isFocused ? [24, 48] : [18, 36],
    popupAnchor: [0, isFocused ? -48 : -36]
  });
};

const userIcon = L.divIcon({
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="36" height="36">
      <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" />
      <circle cx="12" cy="12" r="6" fill="#2563eb" />
      <circle cx="12" cy="12" r="12" fill="#2563eb" fill-opacity="0.2" class="animate-ping" />
    </svg>
  `,
  className: 'user-marker',
  iconSize: [36, 36],
  iconAnchor: [18, 18]
});

interface LeafletMapProps {
  activities: Activity[];
  userLocation: UserLocation | null;
  dayCity?: string;
  focusedActivityIndex?: number | null;
  onMarkerClick?: (index: number) => void;
}

const MapController: React.FC<{ 
  validActivities: Activity[], 
  userLocation: UserLocation | null,
  focusedActivity: Activity | null
}> = ({ validActivities, userLocation, focusedActivity }) => {
  const map = useMap();
  
  useEffect(() => {
    // Invalidate size to ensure map renders correctly if container resized
    try {
        map.invalidateSize();
        
        if (focusedActivity && focusedActivity.coordinates && !isNaN(focusedActivity.coordinates.lat) && !isNaN(focusedActivity.coordinates.lng)) {
          // Focus specific activity
          map.flyTo([focusedActivity.coordinates.lat, focusedActivity.coordinates.lng], 15, { duration: 1.5 });
        } else if (validActivities.length > 0) {
          // Fit bounds to all activities
          const points = validActivities.map(a => [a.coordinates.lat, a.coordinates.lng] as [number, number]);
          if (userLocation) {
            points.push([userLocation.lat, userLocation.lng]);
          }
          
          if (points.length > 0) {
            const group = L.latLngBounds(points);
            if (group.isValid()) {
               map.fitBounds(group, { padding: [50, 50], maxZoom: 15 });
            }
          }
        } else if (userLocation) {
          map.flyTo([userLocation.lat, userLocation.lng], 14);
        }
    } catch (e) {
        console.warn("Map update error:", e);
    }
  }, [validActivities, userLocation, focusedActivity, map]);

  return null;
};

const LeafletMap: React.FC<LeafletMapProps> = ({ 
  activities, 
  userLocation,
  focusedActivityIndex,
  onMarkerClick
}) => {
  const defaultCenter: [number, number] = [36.2048, 138.2529];

  // Robust validation for activities
  const validActivities = useMemo(() => {
    if (!activities) return [];
    return activities.filter(a => 
      a && 
      a.coordinates && 
      typeof a.coordinates.lat === 'number' && !isNaN(a.coordinates.lat) &&
      typeof a.coordinates.lng === 'number' && !isNaN(a.coordinates.lng)
    );
  }, [activities]);

  // Robust validation for user location
  const validUserLocation = useMemo(() => {
    if (userLocation && typeof userLocation.lat === 'number' && !isNaN(userLocation.lat) && typeof userLocation.lng === 'number' && !isNaN(userLocation.lng)) {
      return userLocation;
    }
    return null;
  }, [userLocation]);

  const pathCoordinates = validActivities.map(a => [a.coordinates.lat, a.coordinates.lng] as [number, number]);

  // Safety check: Ensure focused index is within bounds of VALID activities (or the original list)
  // We use the original list for indexing to match the sidebar
  const focusedActivity = (focusedActivityIndex !== null && focusedActivityIndex !== undefined && activities && activities[focusedActivityIndex]) 
    ? activities[focusedActivityIndex] 
    : null;

  return (
    <div className="h-full w-full relative z-0 bg-stone-100">
      <MapContainer 
        center={defaultCenter} 
        zoom={5} 
        scrollWheelZoom={false} // Disabled for better scrolling experience on mobile
        className="h-full w-full min-h-[200px]" // Ensure min-height
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        {pathCoordinates.length > 1 && (
           <Polyline 
              positions={pathCoordinates} 
              pathOptions={{ color: '#9ca3af', weight: 3, dashArray: '5, 10', opacity: 0.6 }} 
           />
        )}
        
        {validActivities.map((activity, idx) => {
          // Find original index to match callback
          const originalIndex = activities.indexOf(activity);
          const isFocused = focusedActivity === activity;

          return (
            <Marker 
              key={`${activity.title}-${activity.time}-${idx}`}
              position={[activity.coordinates.lat, activity.coordinates.lng]}
              icon={getIcon(activity.type, isFocused)}
              zIndexOffset={isFocused ? 1000 : 0}
              eventHandlers={{
                click: () => {
                  if (onMarkerClick) onMarkerClick(originalIndex);
                }
              }}
            >
              <Popup>
                <div className="text-center font-sans min-w-[150px]">
                  <strong className="block text-stone-800 text-lg mb-1">{activity.title}</strong>
                  <span className="text-xs text-stone-500 uppercase tracking-wide block mb-3">{activity.locationName}</span>
                  
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${activity.coordinates.lat},${activity.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg w-full transition-colors font-bold"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Navigeer
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {validUserLocation && (
          <Marker 
            position={[validUserLocation.lat, validUserLocation.lng]}
            icon={userIcon}
          >
            <Popup>U bent hier</Popup>
          </Marker>
        )}

        <MapController 
          validActivities={validActivities} 
          userLocation={validUserLocation} 
          focusedActivity={focusedActivity}
        />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
