import MyAvatar from '@/components/myavatar';

export default function Home() {
  return (
    <div>
      <h2>Small Avatar (40px)</h2>
      <MyAvatar
        person={{ 
          name: 'Test User',
          imageId: '7vQD0fP'
        }}
        size={40}
      />
      
      <h2>Large Avatar (120px)</h2>
      <MyAvatar
        person={{ 
          name: 'Test User',
          imageId: '7vQD0fP'
        }}
        size={120}
      />
    </div>
  );
}