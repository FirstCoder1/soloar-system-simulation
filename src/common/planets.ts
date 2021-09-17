import mercuryMap from '../assets/maps/map/mercuryMap.jpg'
import mercuryBumpMap from '../assets/maps/bump/mercuryBumpMap.jpg'
import venusMap from '../assets/maps/map/venusMap.jpg'
import venusBumMap from '../assets/maps/bump/venusBumMap.jpg'
import earthMap from '../assets/maps/map/earthMap.jpg'
import earthBumpMap from '../assets/maps/bump/earthBumpMap.jpg'
import { PlanetProperties } from './types'

export const planetList:Array<PlanetProperties> = [{
    name: "Mercury",
    radius: 3,
    distanceFromSun: 50,
    map: mercuryMap,
    bumpMap:mercuryBumpMap
},
{
    name: "Venus",
    radius: 4,
    distanceFromSun: 70,
    map:venusMap,
    bumpMap:venusBumMap
},
{
    name: "Earth",
    radius: 4,
    distanceFromSun: 90,
    map: earthMap,
    bumpMap:earthBumpMap
}]