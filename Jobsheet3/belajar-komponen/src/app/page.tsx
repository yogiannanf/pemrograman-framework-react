import Image from "next/image";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Ilmuwan yang luar biasa</h1>
      <Gallery />
    </div>
  );
}