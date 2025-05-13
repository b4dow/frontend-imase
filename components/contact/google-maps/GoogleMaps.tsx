"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export const GoogleMaps = () => {
  const mapRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
        version: "quarterly",
        libraries: ["places"],
      });

      const { Map } = await loader.importLibrary("maps");
      const location = {
        lat: -12.027627424630712,
        lng: -77.04823958517467,
      };

      const options: google.maps.MapOptions = {
        center: location,
        zoom: 15,
        mapId: "map",
        // quitar los controles de map, satellital
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      };

      const map = new Map(mapRef.current as HTMLElement, options);

      // Añadir el marcador
      const { AdvancedMarkerElement } = (await loader.importLibrary(
        "marker",
      )) as google.maps.MarkerLibrary;

      new AdvancedMarkerElement({
        position: location,
        map: map,
        title: "Hello World",
      });
    };

    initMap();
  }, []);

  return (
    <div className="mt-32">
      <h2 className="text-4xl text-center">Nuestra Ubicación</h2>
      <div className="w-full h-96 mt-5 rounded-2xl bg-gray-200"></div>
    </div>
  );
};
