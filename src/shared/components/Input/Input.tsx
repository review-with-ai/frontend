import { forwardRef, HTMLAttributes } from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

type InputProps = {
  type: HTMLInputElement['type'];
  placeholder?: string;
  isDisabled?: boolean;
} & HTMLAttributes<HTMLInputElement> &
  ChakraInputProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ type, placeholder, isDisabled, ...props }, ref) => (
  <ChakraInput
    ref={ref}
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
));
