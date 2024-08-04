import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Typography } from '@/shared';

type NavFooterProps = {
  onSetting: () => void;
  onLogout: () => void;
};

export const NavFooter = ({ onSetting, onLogout }: NavFooterProps) => (
  <Container>
    <Flex width="100%" height="auto" flexDirection="column" justifyContent="center" alignItems="flex-start">
      <ItemContainer onClick={onSetting}>
        <Item>
          <img src="/src/assets/icon/setting.svg" alt="서비스 설정" width={20} height={20} />
          <Typography
            variant="subtitle1"
            style={{
              marginLeft: '7px',
            }}
          >
            서비스 설정
          </Typography>
        </Item>
      </ItemContainer>
      <ItemContainer onClick={onLogout}>
        <Item>
          <img src="/src/assets/icon/signout.png" alt="로그아웃" width={20} height={20} />
          <Typography
            variant="subtitle1"
            style={{
              marginLeft: '7px',
            }}
          >
            로그아웃
          </Typography>
        </Item>
      </ItemContainer>
    </Flex>
  </Container>
);

const Container = styled.div`
  padding: 17px 0 15px 22px;
`;

const ItemContainer = styled(Flex)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 33px;
  cursor: pointer;
`;

const Item = styled(Flex)`
  padding: 2px 2px 2px 0;
`;
