interface Person {
  imageId: string;
  name: string;
}

export function getImageUrlV2(person: Person, size: string) {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
}