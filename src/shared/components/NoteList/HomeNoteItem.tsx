import { Flex, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styleToken } from '@/shared';

export const HomeNoteItem = () => (
  <Container>
    <Flex
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      style={{
        width: '100%',
        minHeight: '63px',
        padding: '10px 0',
        wordBreak: 'keep-all',
        overflowWrap: 'break-word',
        cursor: 'pointer',
      }}
    >
      <Image src="/assets/icon/rect.svg" alt="rect" />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        style={{
          paddingLeft: '14px',
          overflow: 'hidden',
          flex: '1 1',
          paddingRight: 'min(7.07%, 36px)',
        }}
      >
        <strong>title</strong>
        <div>description</div>
      </Flex>
      <div
        style={{
          maxWidth: '100px',
          paddingRight: '30px',
        }}
      >
        folder
      </div>
      <span>noteListItemDate</span>
    </Flex>
  </Container>
);

const Container = styled.div`
  width: 100%;

  :hover {
    background-color: ${styleToken.color.gray100};
    border-radius: 6px;
  }
`;
