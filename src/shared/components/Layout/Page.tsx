import { useEffect } from 'react';
import styled from '@emotion/styled';
import { Layout } from '@/shared';

type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <Container>
      <Layout>{children}</Layout>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #747bff;
`;
