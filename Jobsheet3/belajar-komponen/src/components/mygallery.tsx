import MyProfile from './myprofile';

export default function MyGallery() {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl mb-4">Notable Scientists</h1>
      <div className="flex justify-center gap-4">
        <MyProfile />
        <MyProfile />
      </div>
    </div>
  );
}