import { HTMLAttributes } from 'react';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styleToken } from '@/shared';

type DetailButtonProps = {
  type: 'button' | 'submit' | 'reset';
  children: string;
  onClick?: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export const DetailButton = ({ type, children, onClick }: DetailButtonProps) => (
  <Container>
    <StyledButton variant="solid" theme={Button} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  </Container>
);

const Container = styled.div`
  height: 100%;
  display: block;
  border: 1px solid ${styleToken.color.gray200};
  word-wrap: break-word;
  word-break: keep-all;
  border-radius: 6px;
`;

const StyledButton = styled(Button)`
  padding: 0 12px;
  line-height: 2.6rem;
  color: ${styleToken.color.gray500};
  background-color: ${styleToken.color.white};
  cursor: pointer;
  height: 26px;
  border-radius: 5px;
  border: none;
`;
