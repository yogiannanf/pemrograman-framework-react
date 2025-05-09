import Image from 'next/image';

interface Person {
  name: string;
  imageId: string;
}

interface AvatarProps {
  person: Person;
  size: number;
}

export default function MyAvatar({ person, size }: AvatarProps) {
  const imageSize = size < 90 ? 's' : 'b';
  
  return (
    <Image
      className="avatar"
      src={`https://i.imgur.com/${person.imageId}${imageSize}.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}