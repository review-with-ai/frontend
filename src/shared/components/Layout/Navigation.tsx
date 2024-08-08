import styled from '@emotion/styled';

type NavigationProps = {
  children: React.ReactNode;
};

export const Navigation = ({ children }: NavigationProps) => <Container>{children}</Container>;

const Container = styled.div`
  width: 230px;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1200;
  flex-shrink: 0;
  height: 100%;
  min-width: 222px;
  max-width: 400px;
`;
