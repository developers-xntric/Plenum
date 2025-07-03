import Image from "next/image";

export default function WorldMap() {
  return (
    <Image src={"/images/service/worldmap.svg"} alt='world map' width={1000} height={1000} className={"w-full"} priority />
  )
}
