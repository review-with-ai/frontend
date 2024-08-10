import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { Body, Nav, Typography } from '@/shared';

export const NewNote = () => (
  <>
    <Nav />
    <Body>
      <Flex
        flexDirection="column"
        style={{
          padding: '29px 0px 24px',
        }}
      >
        <Box
          style={{
            margin: 0,
            paddingBottom: '14px',
          }}
        >
          <Typography variant="subtitle1">노트 정보를 입력해 주세요</Typography>
        </Box>
        <Input placeholder="새로운 노트" maxWidth="250px" />
      </Flex>
      <Box>
        <Flex flexDirection="row" justifyContent="flex-start" alignItems="center">
          <Box
            style={{
              width: '100%',
              margin: 0,
              // paddingBottom: '14px',
              // paddingRight: '30px',
            }}
          >
            <Typography variant="subtitle1">폴더</Typography>
          </Box>
          <Button>전체 노트</Button>
        </Flex>
        <Flex flexDirection="row" justifyContent="flex-start" alignItems="center">
          <Box
            style={{
              width: '100%',
              maxWidth: '100px',
              margin: 0,
              // paddingBottom: '14px',
              // paddingRight: '30px',
            }}
          >
            <Typography variant="subtitle1">메모</Typography>
          </Box>
          <Input placeholder="메모를 작성해 보세요." />
        </Flex>
      </Box>
    </Body>
  </>
);
