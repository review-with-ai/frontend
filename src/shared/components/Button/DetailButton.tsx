import { HTMLAttributes } from 'react';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styleToken, Typography, TypographyVariant } from '@/shared';

type DetailButtonProps = {
  type: 'button' | 'submit' | 'reset';
  variant?: TypographyVariant;
  theme?: 'solid' | 'highlight';
  children: string;
  onClick?: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export const DetailButton = ({ type, variant, theme, children, onClick }: DetailButtonProps) => {
  const typographyVariant = variant ?? 'subtitle2';

  return (
    <Container>
      <StyledButton variant={theme} theme={Button} type={type} onClick={onClick}>
        <Typography variant={typographyVariant}>{children}</Typography>
      </StyledButton>
    </Container>
  );
};

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
