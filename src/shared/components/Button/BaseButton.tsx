import { HTMLAttributes } from 'react';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styleToken, Typography, TypographyVariant } from '@/shared';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  variant?: TypographyVariant;
  theme?: 'solid' | 'highlight';
  children: string;
  onClick?: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export const BaseButton = ({ type, variant, theme, children, onClick }: ButtonProps) => {
  const typographyVariant = variant ?? 'h5';

  return (
    <Container>
      <StyledButton variant={theme} theme={Button} type={type} onClick={onClick}>
        <Typography variant={typographyVariant}>{children}</Typography>
      </StyledButton>
    </Container>
  );
};

const Container = styled.div`
  min-width: 230px;
  margin: 20px 0 22px;
  border-radius: 10px;
  border: 1px solid ${styleToken.color.gray200};
  box-sizing: border-box;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 60px;
  padding: 15px 23px;
  text-align: left;
  color: ${styleToken.color.gray500};
  overflow: hidden;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
