import styled from '@emotion/styled';

type HomeAsideProps = {
  children: React.ReactNode;
};

export const HomeAside = ({ children }: HomeAsideProps) => <Container>{children}</Container>;

const Container = styled.div`
  width: 280px;
  height: 100vh;
  border: 1px solid purple;
`;
