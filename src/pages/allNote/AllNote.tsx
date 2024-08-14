import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { BaseButton, Body, Nav, NoteList, PATH, Typography } from '@/shared';

export const AllNote = () => {
  const navigate = useNavigate();

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
