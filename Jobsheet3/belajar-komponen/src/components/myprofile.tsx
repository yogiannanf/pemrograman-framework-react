import Image from 'next/image';

interface ScientistProfile {
  name: string;
  imageId: string;
  profession: string;
  discovery: string;
}

export default function MyProfile() {
  return (
    <section className="profile">
      <Image
        className="avatar"
        src="https://i.imgur.com/szV5sdG.jpg"
        alt="Maria Skłodowska-Curie"
        width={70}
        height={70}
      />
      <h2>Maria Skłodowska-Curie</h2>
      <ul>
        <li><b>Profesi: </b>Fisikawan dan kimiawan</li>
        <li><b>Penemuan: </b>polonium (unsur kimia)</li>
      </ul>
    </section>
  );
}