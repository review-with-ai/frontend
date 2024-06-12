import { HTMLAttributes } from 'react';
import { Input } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styleToken } from '@/shared';

type SignInputProps = {
  placeholder?: string;
} & HTMLAttributes<HTMLInputElement>;

export const SignInput = ({ placeholder }: SignInputProps) => (
  <Container>
    <StyledInput placeholder={placeholder} />
  </Container>
);

const Container = styled.div`
  border-radius: 6px 6px 0 0;
  box-shadow: none;
`;

const StyledInput = styled(Input)`
  width: 100%;
  height: 100%;
  padding: 14px 17px 13px;
  border-radius: 6px;
  box-shadow: none;
  text-align: left;
  border: 1px solid ${styleToken.color.gray200};
`;
