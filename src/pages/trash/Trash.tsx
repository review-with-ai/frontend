import { useState } from 'react';
import { Button, Checkbox, Flex, Image, Stack, Tag, TagLabel } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Body, NoteList, styleToken, Typography } from '@/shared';
import { Nav } from '@/shared/components/Nav';

export const Trash = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  // https://v2.chakra-ui.com/docs/components/checkbox#indeterminate

  return (
    <>
      <Nav />
      <Body>
        <Container>
          <Flex
            flexDirection="row"
            justify="space-between"
            style={{
              padding: '29px 35px 28px 47px',
            }}
          >
            <Typography variant="h1" fontWeight={400}>
              휴지통
            </Typography>
            <Tag
              size="md"
              borderRadius="full"
              variant="outline"
              colorScheme="blackAlpha"
              style={{
                padding: '4px 10px',
              }}
            >
              <TagLabel>
                <Flex>
                  <Image src="/assets/icon/info.svg" alt="info" width="14px" marginRight="6px" />
                  <Typography variant="subtitle1">
                    휴지통에 저장된 항목은 1달이 지나면 자동으로 완전히 삭제됩니다.
                  </Typography>
                </Flex>
              </TagLabel>
            </Tag>
          </Flex>
          <Flex alignItems="center" margin="0 0 1px 8px">
            <Checkbox
              padding="16px 14px 16px 17px"
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
            />
            <Stack direction="row" spacing={4}>
              <Button
                colorScheme="blackAlpha"
                variant="outline"
                height="32px"
                padding="0 11px"
                borderColor={styleToken.color.gray200}
              >
                <Image src="/assets/icon/share.svg" alt="복원" width="16px" marginRight="6px" />
                <Typography variant="subtitle1">복원</Typography>
              </Button>
              <Button
                colorScheme="blackAlpha"
                variant="outline"
                height="32px"
                padding="0 11px"
                borderColor={styleToken.color.gray200}
              >
                <Image src="/assets/icon/trash.svg" alt="영구 삭제" width="16px" marginRight="6px" />
                <Typography variant="subtitle1">영구 삭제</Typography>
              </Button>
            </Stack>
          </Flex>
          <NoteList noteType="trash" />
        </Container>
      </Body>
    </>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
