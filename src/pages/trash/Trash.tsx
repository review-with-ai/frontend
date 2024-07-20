import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Body, styleToken, Typography } from '@/shared';
import { Nav } from '@/shared/components/Nav';

export const Trash = () => (
  <>
    <Nav />
    <Body>
      <Container>
        <Box
          style={{
            padding: '29px 0 28px',
          }}
        >
          <Typography variant="h1" fontWeight={400}>
            휴지통
          </Typography>
        </Box>
        <Box
          style={{
            margin: 0,
            padding: '33px 0',
            borderBottom: `1px solid ${styleToken.color.gray200}`,
          }}
        >
          <Typography variant="subtitle1">휴지통에 저장된 항목은 1달이 지나면 자동으로 완전히 삭제됩니다.</Typography>
        </Box>
      </Container>
    </Body>
  </>
);

const Container = styled.div`
  padding-right: 44px;
  padding-left: 56px;
  height: 100%;
  width: 100%;
  max-width: 1182px;
`;
