import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Typography } from '@/shared';

type NavFooterProps = {
  onSetting: () => void;
  onLogout: () => void;
};

export const NavFooter = ({ onSetting, onLogout }: NavFooterProps) => (
  <Container>
    <Flex width="100%" height="auto" flexDirection="column" justifyContent="center" alignItems="flex-start" gap="14px">
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        onClick={onSetting}
        style={{
          cursor: 'pointer',
        }}
      >
        <img src="/src/assets/icon/setting.svg" alt="서비스 설정" width={20} height={20} />
        <Typography
          variant="subtitle1"
          style={{
            marginLeft: '7px',
          }}
        >
          서비스 설정
        </Typography>
      </Flex>
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        onClick={onLogout}
        style={{
          cursor: 'pointer',
        }}
      >
        <img src="/src/assets/icon/signout.png" alt="로그아웃" width={20} height={20} />
        <Typography
          variant="subtitle1"
          style={{
            marginLeft: '7px',
          }}
        >
          로그아웃
        </Typography>
      </Flex>
    </Flex>
  </Container>
);

const Container = styled.div`
  padding: 17px 0 15px 22px;
`;
