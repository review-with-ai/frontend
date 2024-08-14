import { Checkbox, Flex, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styleToken } from '@/shared';

export const TrashNoteItem = () => (
  <Container>
    <Checkbox padding="16px 14px 16px 17px" />
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
      <Image src="/src/assets/icon/rect.svg" alt="rect" />
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
      <div
        style={{
          maxWidth: '100px',
          paddingRight: '30px',
        }}
      >
        folder
      </div>
      <div
        style={{
          maxWidth: '100px',
          paddingRight: '30px',
        }}
      >
        -
      </div>
    </Flex>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  :hover {
    background-color: ${styleToken.color.gray100};
    border-radius: 6px;
  }
`;
