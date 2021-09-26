import { useTexture } from "@react-three/drei";
import { FC } from "react";
import { SunProps } from "../../../common/sun";
const Sun: FC<{}> = () => {
  const { radius, map, normalMap } = SunProps;
  const [mapTexture, normalMapTexture] = useTexture([map, normalMap]);
  return (
    <mesh>
      <sphereGeometry args={[radius, radius * 10, radius * 10]} />
      <meshStandardMaterial map={mapTexture} normalMap={normalMapTexture}/>
    </mesh>
  );
};

export default Sun;
