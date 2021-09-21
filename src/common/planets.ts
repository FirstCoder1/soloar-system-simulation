import mercuryMap from "../assets/maps/map/mercuryMap.jpg";
import mercuryBumpMap from "../assets/maps/bump/mercuryBumpMap.jpg";
import venusMap from "../assets/maps/map/venusMap.jpg";
import venusBumMap from "../assets/maps/bump/venusBumMap.jpg";
import earthMap from "../assets/maps/map/earthMap.jpg";
import earthBumpMap from "../assets/maps/bump/earthBumpMap.jpg";
import { PlanetProperties } from "./types";

export const planetList: Array<PlanetProperties> = [
  {
    name: "Mercury",
    radius: 1.516,
    distanceFromSun: 110,
    revolution: 47.9,
    rotation: 58.6,
    map: mercuryMap,
    bumpMap: mercuryBumpMap,
  },
  {
    name: "Venus",
    radius: 3.76,
    distanceFromSun: 121,
    revolution: 224.7,
    rotation: 243,
    map: venusMap,
    bumpMap: venusBumMap,
  },
  {
    name: "Earth",
    radius: 3.959,
    distanceFromSun: 133,
    revolution: 365.26,
    rotation: 1,
    map: earthMap,
    bumpMap: earthBumpMap,
  },
];
