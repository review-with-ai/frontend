import { PropsWithChildren } from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

type HomeContainerProps = {
  children: React.ReactNode;
};

export const HomeContainer = ({ children, ...props }: PropsWithChildren<HomeContainerProps & ContainerProps>) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

const StyledContainer = styled(Container)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  //border: 1px solid #1ea7fd;
`;
