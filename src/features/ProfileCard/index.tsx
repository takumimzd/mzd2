import { Presentation } from './presentations/presentation';

export const ProfileCard = () => {
  return (
    <Presentation
      image='https://picsum.photos/1200/300'
      avatar='profile.jpg'
      name='かみお'
      job='Frontend Engineer'
    />
  );
};
