import React, { createContext } from "react";

interface Location {
  uf: string;
  city: string;
}

const LocationContext = createContext<Location>({} as Location);

export default LocationContext;
