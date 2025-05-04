import Image from 'next/image';

interface Profile {
  name: string;
  imageId: string;
  profession: string;
  awards: string[];
  discovery: string;
}

export default function MyProfile({ name, imageId, profession, awards, discovery }: Profile) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <Image
        className="avatar"
        src={`https://i.imgur.com/${imageId}.jpg`}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li><b>Profesi: </b>{profession}</li>
        <li><b>Penghargaan: {awards.length}</b> ({awards.join(', ')})</li>
        <li><b>Telah Menemukan: </b>{discovery}</li>
      </ul>
    </section>
  );
}