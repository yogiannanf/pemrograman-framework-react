import Card from './card';
import Image from 'next/image';

export default function MyProfileV2() {
  return (
    <div className="space-y-4">
      <Card title="Foto">
        <Image
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      
      <Card title="Tentang">
        <p>
          Aklilu Lemma adalah seorang ilmuwan terkemuka dari etiopia 
          yang telah menemukan pengobatan alami untuk skistosomiasis.
        </p>
      </Card>
    </div>
  );
}