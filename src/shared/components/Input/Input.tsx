import { HTMLAttributes, PropsWithChildren } from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

type InputProps = {
  placeholder?: string;
  isDisabled?: boolean;
} & HTMLAttributes<HTMLInputElement>;

export const Input = ({ placeholder, isDisabled, ...props }: PropsWithChildren<InputProps & ChakraInputProps>) => (
  <ChakraInput
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
