import styled from '@emotion/styled';

type NavigationProps = {
  children: React.ReactNode;
};

export const Navigation = ({ children }: NavigationProps) => <Container>{children}</Container>;

const Container = styled.div`
  width: 220px;
  height: 100vh;
  border: 1px solid blue;
`;
