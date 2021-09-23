import mercuryMap from "../assets/maps/map/mercuryMap.jpg";
import mercuryBumpMap from "../assets/maps/bump/mercuryBumpMap.jpg";
import venusMap from "../assets/maps/map/venusMap.jpg";
import venusBumMap from "../assets/maps/bump/venusBumMap.jpg";
import earthMap from "../assets/maps/map/earthMap.jpg";
import earthBumpMap from "../assets/maps/bump/earthBumpMap.jpg";
import marsMap from '../assets/maps/map/marsMap.jpg'
import marsBumpMap from '../assets/maps/bump/marsBumpMap.jpg'
import { PlanetProperties } from "./types";

export const planetList: Array<PlanetProperties> = [
  {
    name: "Mercury",
    radius: 2.440,
    distanceFromSun: 110,
    revolution: 47.9,
    rotation: 58.6,
    map: mercuryMap,
    bumpMap: mercuryBumpMap,
  },
  {
    name: "Venus",
    radius: 6.052,
    distanceFromSun: 122,
    revolution: 224.7,
    rotation: 243,
    map: venusMap,
    bumpMap: venusBumMap,
  },
  {
    name: "Earth",
    radius: 6.371,
    distanceFromSun: 139,
    revolution: 365.26,
    rotation: 1,
    map: earthMap,
    bumpMap: earthBumpMap,
  },
  {
    name: "Mars",
    radius: 3.930,
    distanceFromSun: 153,
    revolution: 1.88,
    rotation: 1.03,
    map: marsMap,
    bumpMap: marsBumpMap,
  },
];
