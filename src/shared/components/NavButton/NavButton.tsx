import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styleToken } from '@/shared';

type NavButtonProps = {
  onNote: () => void;
};

export const NavButton = ({ onNote }: NavButtonProps) => (
  <Container>
    <Item>
      <Flex
        width="56px"
        height="56px"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        onClick={onNote}
        style={{
          border: `1px solid ${styleToken.color.gray300}`,
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        <img src="/src/assets/note/add_memo.png" alt="새로운 노트 작성" width={25} height={25} />
      </Flex>
    </Item>
  </Container>
);

const Container = styled.div`
  width: 100%;
  flex-basis: auto;
  padding: 0;
  margin: 19px 0 0 auto;
`;

const Item = styled(Flex)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
