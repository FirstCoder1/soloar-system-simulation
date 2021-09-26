import mercuryMap from "../assets/maps/map/mercury.jpg";
import mercuryNormalMap from "../assets/maps/normal/mercury.png";
import venusMap from "../assets/maps/map/venus.jpg";
import venusNormalMap from "../assets/maps/normal/venus.png";
import earthMap from "../assets/maps/map/earth.jpg";
import earthNormalMap from "../assets/maps/normal/earth.png";
import marsMap from '../assets/maps/map/mars.jpg'
import marsNormalMap from '../assets/maps/normal/mars.png'
import { PlanetProperties } from "./types";

export const planetList: Array<PlanetProperties> = [
  {
    name: "Mercury",
    radius: 2.440,
    distanceFromSun: 110,
    revolution: 47.9,
    rotation: 58.6,
    map: mercuryMap,
    normalMap: mercuryNormalMap,
  },
  {
    name: "Venus",
    radius: 6.052,
    distanceFromSun: 122,
    revolution: 224.7,
    rotation: 243,
    map: venusMap,
    normalMap: venusNormalMap,
  },
  {
    name: "Earth",
    radius: 6.371,
    distanceFromSun: 139,
    revolution: 365.26,
    rotation: 1,
    map: earthMap,
    normalMap: earthNormalMap,
  },
  {
    name: "Mars",
    radius: 3.930,
    distanceFromSun: 153,
    revolution: 1.88,
    rotation: 1.03,
    map: marsMap,
    normalMap: marsNormalMap,
  },
];
