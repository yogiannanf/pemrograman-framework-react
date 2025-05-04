import Image from "next/image";
import Profile from "../components/profile";

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Ilmuwan yang luar biasa</h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
}