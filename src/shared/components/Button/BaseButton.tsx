import { HTMLAttributes, PropsWithChildren } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { customTheme, Typography, TypographyVariant } from '@/shared';

type BaseButtonProps = {
  type: 'button' | 'submit' | 'reset';
  theme: keyof typeof customTheme.colors;
  font?: TypographyVariant;
  img?: React.ReactNode;
  children?: string;
  disabled?: boolean;
  onClick?: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export const BaseButton = ({
  type,
  theme,
  font,
  img,
  children,
  disabled,
  onClick,
  ...props
}: PropsWithChildren<BaseButtonProps & ButtonProps>) => {
  const { border, background, backgroundHover } = customTheme.colors[theme];
  const typographyVariant = font ?? 'h5';

  return (
    <Button
      variant="outline"
      type={type}
      borderColor={border}
      backgroundColor={background}
      _hover={{ background: backgroundHover }}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {img || null}
      {children ? <Typography variant={typographyVariant}>{children}</Typography> : null}
    </Button>
  );
};
