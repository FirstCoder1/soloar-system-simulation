import mercuryMap from "../assets/maps/map/mercury.jpg";
import mercuryNormalMap from "../assets/maps/normal/mercury.png";
import venusMap from "../assets/maps/map/venus.jpg";
import venusNormalMap from "../assets/maps/normal/venus.png";
import earthMap from "../assets/maps/map/earth.jpg";
import earthNormalMap from "../assets/maps/normal/earth.png";
import marsMap from '../assets/maps/map/mars.jpg'
import marsNormalMap from '../assets/maps/normal/mars.png'
import jupiterMap from '../assets/maps/map/jupiter.jpg'
import jupiterNormalMap from '../assets/maps/normal/jupiter.png'
import saturnMap from '../assets/maps/map/saturn.jpg'
import saturnNormalMap from '../assets/maps/normal/saturn.png'
import uranusMap from '../assets/maps/map/uranus.jpg'
import uranusNormalMap from '../assets/maps/normal/uranus.png'
import neptuneMap from '../assets/maps/map/neptune.jpg'
import neptuneNormalMap from '../assets/maps/normal/neptune.png'
import { PlanetProperties } from "./types";

//revolution and rotation data from https://www.exploratorium.edu/ronh/age/
//planet sizes based on https://solarsystem.nasa.gov/resources/686/solar-system-sizes/
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
  {
    name: "Jupiter",
    radius: 69.911,
    distanceFromSun: 235,
    revolution: 11.86,
    rotation: 0.41,
    map: jupiterMap,
    normalMap: jupiterNormalMap,
  },
  {
    name: "Saturn",
    radius: 58.232,
    distanceFromSun: 371,
    revolution: 0.45,
    rotation: 29.46,
    map: saturnMap,
    normalMap: saturnNormalMap,
  },
  {
    name: "Uranus",
    radius: 25.362,
    distanceFromSun: 462,
    revolution: 0.72,
    rotation: 84.01,
    map: uranusMap,
    normalMap: uranusNormalMap,
  },
  {
    name: "Neptune",
    radius: 24.622,
    distanceFromSun: 519,
    revolution: 0.67,
    rotation: 164.79,
    map: neptuneMap,
    normalMap: neptuneNormalMap,
  },
];
