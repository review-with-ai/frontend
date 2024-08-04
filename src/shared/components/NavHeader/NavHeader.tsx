import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

type NavFooterProps = {
  onBack: () => void;
};

export const NavHeader = ({ onBack }: NavFooterProps) => (
  <Flex width="100%">
    <Item onClick={onBack}>
      <img src="/src/assets/icon/arrowLeft.svg" alt="뒤로가기" width={20} height={20} />
    </Item>
  </Flex>
);

const Item = styled.div`
  padding: 12px;
  cursor: pointer;
`;
