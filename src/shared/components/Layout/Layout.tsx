import styled from '@emotion/styled';
import { styleToken } from '@/shared';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => <Container>{children}</Container>;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${styleToken.color.white};
`;
