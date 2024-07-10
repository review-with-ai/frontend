import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { BaseButton, Body, Navigation, PATH, styleToken, Typography } from '@/shared';
import { NavButton } from '@/shared/components/NavButton';
import { NavContent } from '@/shared/components/NavContent';
import { NavFooter } from '@/shared/components/NavFooter/NavFooter.tsx';

export const User = () => {
  const navigate = useNavigate();

  const handleClickSetting = () => {
    console.log('setting');
    navigate(PATH.ACCOUNT);
  };

  const handleClickLogout = () => {
    console.log('logout');
    navigate(PATH.HOME);
  };

  return (
    <>
      <Navigation>
        <Typography variant="h2">Review with Ai</Typography>
        <NavButton />
        <NavContent />
        <NavFooter onLogout={handleClickLogout} onSetting={handleClickSetting} />
      </Navigation>
      <Body>
        <Container>
          <Box
            style={{
              padding: '29px 0 28px',
            }}
          >
            <Typography variant="h1" fontWeight={400}>
              서비스 설정
            </Typography>
          </Box>
          <Box
            style={{
              paddingBottom: '15px',
              borderBottom: `1px solid ${styleToken.color.gray200}`,
            }}
          >
            <Typography variant="h4">계정</Typography>
          </Box>
          <Box
            style={{
              margin: 0,
              padding: '33px 0',
              borderBottom: `1px solid ${styleToken.color.gray200}`,
            }}
          >
            <Typography variant="subtitle1">사용하는 계정과 로그인 정보를 확인할 수 있어요.</Typography>
          </Box>
          <Flex
            flexDirection="row"
            alignItems="center"
            style={{
              padding: '24px 0',
            }}
          >
            <Flex flexDirection="column" gap="22px" flex="1 1">
              <Flex>
                <Typography
                  variant="h4"
                  style={{
                    width: ' 153px',
                  }}
                >
                  이메일
                </Typography>
                <Typography variant="subtitle1">qwerty123@naver.com</Typography>
              </Flex>
              <Flex>
                <Typography
                  variant="h4"
                  style={{
                    width: ' 153px',
                  }}
                >
                  로그인 정보
                </Typography>
                <Typography variant="subtitle1">NAVER</Typography>
              </Flex>
            </Flex>
            <BaseButton
              type="button"
              theme="alert"
              fontColor={styleToken.color.white}
              border="none"
              onClick={handleClickLogout}
            >
              로그아웃
            </BaseButton>
          </Flex>
        </Container>
      </Body>
    </>
  );
};

const Container = styled.div`
  padding-right: 44px;
  padding-left: 56px;
  height: 100%;
  width: 100%;
  max-width: 1182px;
`;
