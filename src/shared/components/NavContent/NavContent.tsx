import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Typography } from '@/shared';

export const NavContent = () => (
  <Container>
    <Flex width="100%" height="auto" flexDirection="column" justifyContent="center" alignItems="flex-start" gap="12px">
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        style={{
          cursor: 'pointer',
        }}
      >
        <img src="/src/assets/icon/home.svg" alt="홈" width={20} height={20} />
        <Typography
          variant="subtitle1"
          style={{
            padding: '0 10px',
          }}
        >
          홈
        </Typography>
      </Flex>
    </Flex>
  </Container>
);

const Container = styled.div`
  padding: 17px 0 15px 22px;
  height: auto;
`;
