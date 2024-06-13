import { HTMLAttributes, PropsWithChildren } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { customTheme, Typography, TypographyVariant } from '@/shared';

type BaseButtonProps = {
  type: 'button' | 'submit' | 'reset';
  font?: TypographyVariant;
  img?: React.ReactNode;
  children?: string;
  onClick?: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export const BaseButton = ({
  type,
  font,
  img,
  children,
  onClick,
  ...props
}: PropsWithChildren<BaseButtonProps & ButtonProps>) => {
  const { border, background, backgroundHover } = customTheme.colors.gray;
  const typographyVariant = font ?? 'h5';

  return (
    <Button
      variant="outline"
      type={type}
      color={background}
      borderColor={border}
      _hover={{ background: backgroundHover }}
      onClick={onClick}
      {...props}
    >
      {img || null}
      {children ? <Typography variant={typographyVariant}>{children}</Typography> : null}
    </Button>
  );
};
