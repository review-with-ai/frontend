import { HTMLAttributes } from 'react';
import { Flex } from '@chakra-ui/react';
import { styleToken, Typography } from '@/shared';

type ErrorMessageProps = {
  message: string;
} & HTMLAttributes<HTMLDivElement>;

export const ErrorMessage = ({ message, ...props }: ErrorMessageProps) => (
  <Flex width="300px">
    <Typography variant="body2" color={styleToken.color.error} {...props}>
      {message}
    </Typography>
  </Flex>
);
