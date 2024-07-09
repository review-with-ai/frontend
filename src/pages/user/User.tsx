import { Body, Navigation, Typography } from '@/shared';
import { NavButton } from '@/shared/components/NavButton';
import { NavContent } from '@/shared/components/NavContent';
import { NavFooter } from '@/shared/components/NavFooter/NavFooter.tsx';

export const User = () => {
  console.log(1);

  return (
    <>
      <Navigation>
        <Typography variant="h2">Review with Ai</Typography>
        <NavButton />
        <NavContent />
        <NavFooter />
      </Navigation>
      <Body>
        <h1>User</h1>
      </Body>
    </>
  );
};
