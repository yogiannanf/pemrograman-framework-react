import MyAvatar from '@/components/myavatar';
import MyProfileV2 from '@/components/myprofilev2';

export default function Home() {
  const person = {
    name: 'Aklilu Lemma',
    imageId: 'OKS67lh'
  };

  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Avatar Examples</h1>
        <div className="space-y-4">
          <div>
            <h2>Small Avatar (40px)</h2>
            <MyAvatar person={person} size={40} />
          </div>
          
          <div>
            <h2>Large Avatar (120px)</h2>
            <MyAvatar person={person} size={120} />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Profile Card Example</h1>
        <MyProfileV2 />
      </section>
    </div>
  );
}