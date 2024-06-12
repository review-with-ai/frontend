import { HTMLAttributes, PropsWithChildren } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { customTheme, Typography, TypographyVariant } from '@/shared';

type BaseButtonProps = {
  type: 'button' | 'submit' | 'reset';
  font?: TypographyVariant;
  width?: string;
  height?: string;
  children: string;
  onClick?: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export const BaseButton = ({
  type,
  font,
  width,
  height,
  children,
  onClick,
  ...props
}: PropsWithChildren<BaseButtonProps & ButtonProps>) => {
  const typographyVariant = font ?? 'h5';
  const { border, background, backgroundHover } = customTheme.colors.gray;

  return (
    <Button
      variant="outline"
      type={type}
      width={width}
      height={height}
      color={background}
      borderColor={border}
      _hover={{ background: backgroundHover }}
      onClick={onClick}
      {...props}
    >
      <Typography variant={typographyVariant}>{children}</Typography>
    </Button>
  );
};
