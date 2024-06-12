import { BaseButton, Body, HomeAside, Navigation } from '@/shared';

export const Home = () => (
  <>
    <Navigation>
      logo
      <BaseButton type="button">버튼클릭</BaseButton>
    </Navigation>
    <Body>Note</Body>
    <HomeAside>Home Aside</HomeAside>
  </>
);
