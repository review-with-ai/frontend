import { HTMLAttributes, PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { styleToken } from '@/shared';

export const typographyVariantStyle = {
  h1: {
    fontSize: styleToken.fontSize.h1,
    fontWeight: styleToken.fontWeight.bold,
  },
  h2: {
    fontSize: styleToken.fontSize.h2,
    fontWeight: styleToken.fontWeight.bold,
  },
  h3: {
    fontSize: styleToken.fontSize.h3,
    fontWeight: styleToken.fontWeight.bold,
  },
  h4: {
    fontSize: styleToken.fontSize.h4,
    fontWeight: styleToken.fontWeight.bold,
  },
  h5: {
    fontSize: styleToken.fontSize.h5,
    fontWeight: styleToken.fontWeight.bold,
  },
  subtitle1: {
    fontSize: styleToken.fontSize.subtitle1,
    fontWeight: styleToken.fontWeight.medium,
  },
  subtitle2: {
    fontSize: styleToken.fontSize.subtitle2,
    fontWeight: styleToken.fontWeight.medium,
  },
  body1: {
    fontSize: styleToken.fontSize.body1,
    fontWeight: styleToken.fontWeight.regular,
  },
  body2: {
    fontSize: styleToken.fontSize.body2,
    fontWeight: styleToken.fontWeight.regular,
  },
} as const;

export type TypographyVariant = keyof typeof typographyVariantStyle;

type TypographyProps = {
  variant: TypographyVariant;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  fontFamily?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

const getFontFamily = (variant: TypographyVariant) => {
  if (variant.includes('h')) {
    return 'Pretendard-Bold';
  }
  return 'Pretendard-Regular';
};

export const Typography = ({
  variant,
  color,
  fontSize,
  fontWeight,
  children,
  ...props
}: PropsWithChildren<TypographyProps>) => (
  <StyledTypography
    variant={variant}
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    fontFamily={getFontFamily(variant)}
    {...props}
  >
    {children}
  </StyledTypography>
);

const StyledTypography = styled.span<TypographyProps>`
  color: ${styleToken.color.gray500};
  letter-spacing: -0.3px;
  line-height: 1.4;
  white-space: pre-wrap;
  max-width: 100%;

  ${(props) => css`
    ${typographyVariantStyle[props.variant]};
    font-family: ${props.fontFamily}, sans-serif;
    ${props.color && `color: ${props.color}`};
    ${props.fontSize && `font-size: ${props.fontSize}`};
    ${props.fontWeight && `font-weight: ${props.fontWeight}`};
  `};
`;
