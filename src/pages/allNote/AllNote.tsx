import { useState } from 'react';
import { Button, Checkbox, Flex, Image, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { BaseButton, Body, Nav, NoteList, PATH, styleToken, Typography } from '@/shared';

export const AllNote = () => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  // https://v2.chakra-ui.com/docs/components/checkbox#indeterminate

  const handleNewNote = () => {
    navigate(PATH.NOTE);
  };

  return (
    <>
      <Nav />
      <Body>
        <Container>
          <Flex
            flexDirection="row"
            justify="space-between"
            align="center"
            width="100%"
            style={{
              padding: '29px 35px 28px 47px',
            }}
          >
            <Typography variant="h1" fontWeight={400}>
              전체 노트
            </Typography>
            <BaseButton type="button" theme="gray" onClick={handleNewNote}>
              <Typography variant="subtitle2">노트 만들기</Typography>
            </BaseButton>
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
                <Image src="/assets/icon/share.svg" alt="노트 이동" width="16px" marginRight="6px" />
                <Typography variant="subtitle1">노트 이동</Typography>
              </Button>
              <Button
                colorScheme="blackAlpha"
                variant="outline"
                height="32px"
                padding="0 11px"
                borderColor={styleToken.color.gray200}
              >
                <Image src="/assets/icon/trash.svg" alt="휴지통으로 이동" width="16px" marginRight="6px" />
                <Typography variant="subtitle1">휴지통으로 이동</Typography>
              </Button>
            </Stack>
          </Flex>
          <NoteList noteType="all" />
        </Container>
      </Body>
    </>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
