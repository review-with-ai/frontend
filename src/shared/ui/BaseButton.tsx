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
    <Button
      type={type}
      style={{
        width: '100%',
        padding: '15px 23px',
        textAlign: 'left',
        cursor: 'pointer',
        backgroundColor: `${styleToken.color.white}`,
        overflow: 'hidden',
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  </Container>
);

const Container = styled.div`
  min-width: 230px;
  margin: 20px 0 22px;
  border-radius: 10px;
  border: 1px solid ${styleToken.color.gray200};
  box-sizing: border-box;
`;
