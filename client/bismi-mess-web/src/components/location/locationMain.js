// LocationPage.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; 
import iconUrl from './location-map-2956.png'; 

function LocationPage() {
  const [placeName, setPlaceName] = useState('');
  const [location, setLocation] = useState(null);
  const [mapCenter, setMapCenter] =useState({ lat: 9.9312, lng: 76.2673 });
  const [zoomLevel, setZoomLevel] = useState(30); // Initial zoom level

  const handleSearchLocation = async () => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${placeName}`);
      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setLocation(`Location found for: ${placeName}`);
        setMapCenter({ lat: parseFloat(lat), lng: parseFloat(lon) });
        setZoomLevel(30); // Set the desired zoom level, e.g., 15
      } else {
        setLocation('Location not found');
      }
    } catch (error) {
      console.error('Error searching location:', error);
      setLocation('Error searching location');
    }
  };

  const customIcon = L.icon({
    iconUrl, // Path to the icon image
    iconSize: [30, 30], // Size of the icon
    iconAnchor: [15, 30], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -30] // Point from which the popup should open relative to the iconAnchor
  });


  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Delivery Live</h1>

      <div className="flex flex-col items-center">
        <input
          type="text"
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
          placeholder="Enter place name"
          className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full max-w-md"
        />
        <button
          onClick={handleSearchLocation}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Delivered
        </button>
      </div>

      {location && (
        <div className="bg-white shadow-md rounded-lg p-6 mt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Delivery status:</h2>
          <p className="text-gray-600">{location}</p>
        </div>
      )}

      <div className="mt-8 mb-2">
        <MapContainer
          center={mapCenter}
          zoom={zoomLevel} // Set the zoom level dynamically
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {mapCenter.lat !== 0 && (
           <Marker position={mapCenter} icon={customIcon}>
              <Popup>{placeName}</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      <div className="bg-white shadow-lg rounded p-6">
        <h2 className="text-lg font-semibold text-black-800 mb-4">Location : Kaloor</h2>
        <p>user : shuhaib</p>
        <p>Total orders : 10</p>
        <p>Due Date : 11/40/24</p>
      </div>
    </div>
  );
}

export default LocationPage;
