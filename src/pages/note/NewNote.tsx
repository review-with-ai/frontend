import { Box, Flex, Input, Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { BaseButton, Body, Nav, styleToken, Typography } from '@/shared';

export const NewNote = () => (
  <>
    <Nav />
    <Body>
      <Container>
        <Flex
          flexDirection="column"
          style={{
            padding: '29px 0px 24px',
            paddingTop: '30px',
            paddingBottom: '30px',
          }}
        >
          <Flex flexDirection="row" justifyContent="space-between">
            <Typography variant="subtitle1">노트 정보를 입력해 주세요</Typography>
            <BaseButton
              type="button"
              theme="gray"
              border="unset"
              backgroundColor="unset"
              img={<img src="/src/assets/icon/trash.svg" alt="삭제" style={{ width: '20px', height: '20px' }} />}
            />
          </Flex>
          <Input placeholder="새로운 노트" maxWidth="250px" />
        </Flex>
        <Box>
          <Flex flexDirection="row" justifyContent="flex-start" alignItems="center">
            <Box
              style={{
                minWidth: '78px',
                margin: 0,
              }}
            >
              <Typography variant="subtitle1">폴더</Typography>
            </Box>
            <BaseButton
              theme="gray"
              type="button"
              border="unset"
              style={{
                padding: '8px 12px 7px',
                backgroundColor: styleToken.color.gray100,
              }}
            >
              <Typography variant="subtitle1">전체 노트</Typography>
            </BaseButton>
          </Flex>

          <Flex flexDirection="row" justifyContent="flex-start" alignItems="flex-start" marginTop="22px">
            <Box
              style={{
                minWidth: '78px',
                margin: 0,
              }}
            >
              <Typography variant="subtitle1">학습 기록</Typography>
            </Box>
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              style={{
                flex: '1 1 auto',
                padding: '24px',
                borderRadius: '12px',
                backgroundColor: styleToken.color.gray100,
                overflow: 'hidden',
                maxWidth: '730px',
              }}
            >
              <Typography variant="h4">학습 내용을 업로드해 노트를 만들어 보세요.</Typography>
              <Typography
                variant="subtitle1"
                style={{
                  margin: '6px 0 24px',
                }}
              >
                학습한 텍스트를 직접 끌어다 놓으세요. (글자수 제한: 5,000자)
              </Typography>
            </Flex>
          </Flex>
          <Flex flexDirection="row" justifyContent="flex-start" alignItems="flex-start" marginTop="22px">
            <Box
              style={{
                minWidth: '78px',
                margin: 0,
              }}
            >
              <Typography variant="subtitle1">메모</Typography>
            </Box>
            <Textarea
              placeholder="메모를 작성해 보세요."
              border="none"
              style={{
                resize: 'none',
                padding: 0,
                border: 'none',
              }}
            />
          </Flex>
        </Box>
      </Container>
    </Body>
  </>
);

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1182px;
  padding: 0 35px 0 47px;
`;
