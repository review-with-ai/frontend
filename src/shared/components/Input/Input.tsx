import { HTMLAttributes, PropsWithChildren } from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

type InputProps = {
  type: HTMLInputElement['type'];
  placeholder?: string;
  isDisabled?: boolean;
} & HTMLAttributes<HTMLInputElement>;

export const Input = ({
  type,
  placeholder,
  isDisabled,
  ...props
}: PropsWithChildren<InputProps & ChakraInputProps>) => (
  <ChakraInput
    type={type}
    padding="14px 17px 13px"
    borderRadius="6px"
    boxShadow="none"
    textAlign="left"
    resize="none"
    overflow="hidden"
    border="none"
    placeholder={placeholder}
    isDisabled={isDisabled}
    {...props}
  />
);
