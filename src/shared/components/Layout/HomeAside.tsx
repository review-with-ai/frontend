import styled from '@emotion/styled';

type HomeAsideProps = {
  children: React.ReactNode;
};

export const HomeAside = ({ children }: HomeAsideProps) => <Container>{children}</Container>;

const Container = styled.div`
  width: 300px;
  height: 100vh;
  padding: 20px;
  border: 1px solid purple;
`;
