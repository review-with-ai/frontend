import { Flex } from '@chakra-ui/react';
import { styleToken } from '@/shared';

export const NavButton = () => (
  <Flex width="100%" flexDirection="row" justifyContent="center" alignItems="center">
    <Flex
      width="56px"
      height="56px"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      style={{
        border: `1px solid ${styleToken.color.gray300}`,
        borderRadius: '50%',
      }}
    >
      <img src="/src/assets/note/add_memo.png" alt="새로운 노트 작성" width={30} height={30} />
    </Flex>
  </Flex>
);
