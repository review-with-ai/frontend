import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styleToken, Typography } from '@/shared';

type NavContentProps = {
  onHome: () => void;
  onTrash: () => void;
};

export const NavContent = ({ onHome, onTrash }: NavContentProps) => (
  <Container>
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      style={{
        margin: '31px 0 0',
      }}
    >
      <ItemContainer onClick={onHome}>
        <Item>
          <img src="/src/assets/icon/home.svg" alt="홈" width={15} height={15} />
          <Typography
            variant="subtitle1"
            style={{
              padding: '0 10px',
            }}
          >
            홈
          </Typography>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <Item>
          <img src="/src/assets/icon/drop_folder.svg" alt="전체 노트" width={15} height={15} />
          <Typography
            variant="subtitle1"
            fontWeight={600}
            style={{
              padding: '0 10px',
            }}
          >
            전체 노트
          </Typography>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <Item>
          <img src="/src/assets/icon/folder.svg" alt="기본 폴더" width={15} height={15} />
          <Typography
            variant="subtitle1"
            style={{
              padding: '0 10px',
            }}
          >
            기본 폴더
          </Typography>
        </Item>
      </ItemContainer>
      <ItemContainer onClick={onTrash}>
        <Item>
          <img src="/src/assets/icon/trash.svg" alt="휴지통" width={15} height={15} />
          <Typography
            variant="subtitle1"
            style={{
              padding: '0 10px',
            }}
          >
            휴지통
          </Typography>
        </Item>
      </ItemContainer>
    </Flex>
  </Container>
);

const Container = styled(Flex)`
  height: 100%;
  flex-direction: column;
`;

const ItemContainer = styled(Flex)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0 12px 0 22px;
  min-height: 33px;
  cursor: pointer;

  :hover {
    background-color: ${styleToken.color.hover};
  }
`;

const Item = styled(Flex)`
  width: 100%;
  cursor: pointer;
  padding: 2px 2px 2px 0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
