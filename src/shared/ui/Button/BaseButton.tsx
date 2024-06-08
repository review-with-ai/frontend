import { HTMLAttributes } from 'react';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styleToken } from '@/shared';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  children: string;
  onClick?: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export const BaseButton = ({ type, children, onClick }: ButtonProps) => (
  <Container>
    <StyledButton variant="solid" theme={Button} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  </Container>
);

const Container = styled.div`
  min-width: 230px;
  margin: 20px 0 22px;
  border-radius: 10px;
  border: 1px solid ${styleToken.color.gray200};
  box-sizing: border-box;
  color: ${styleToken.color.gray500};
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 60px;
  padding: 15px 23px;
  text-align: left;
  color: ${styleToken.color.gray500};
  background-color: ${styleToken.color.white};
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  border: none;
`;
