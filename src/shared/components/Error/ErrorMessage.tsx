import { Flex } from '@chakra-ui/react';
import { styleToken, Typography } from '@/shared';

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <Flex marginTop="20px" width="300px">
    <Typography variant="body2" color={styleToken.color.error}>
      {message}
    </Typography>
  </Flex>
);
