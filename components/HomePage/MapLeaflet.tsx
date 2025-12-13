"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
    latitude: number;
    longitude: number;
    zoom?: number;
    popupText?: string;
}

// Fix leaflet's default icon issue with Next.js
const defaultIcon = L.icon({
    iconUrl: "/leaflet/marker-icon.png",
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    shadowSize: [41, 41],
});

export default function MapLeaflet({
    latitude,
    longitude,
    zoom = 13,
    popupText = `Gymnase Auguste Delaune, 19 rue François Mitterrand, 14123 Fleury-sur-Orne `,
}: MapProps) {
    return (
        <div className="w-full md:w-1/2 h-64 md:h80 rounded-lg overflow-hidden shadow-lg border z-0">
            <MapContainer
                center={[latitude, longitude]}
                zoom={zoom}
                scrollWheelZoom={false}
                className="w-full h-full"
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]} icon={defaultIcon}>
                    <Popup className="font-semibold">{popupText}🏀</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

