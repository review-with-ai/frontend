import { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import {
  BaseButton,
  Body,
  handleAxiosError,
  http,
  NavButton,
  NavContent,
  NavFooter,
  Navigation,
  PATH,
  styleToken,
  Typography,
} from '@/shared';

type User = {
  id: number;
  name: string;
  nickname: string;
  email: string;
  status: string;
  hasSubscribed: boolean;
};

export const Setting = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    nickname: '',
    email: '',
    status: '',
    hasSubscribed: false,
  });

  const handleClickSetting = () => {
    console.log('setting');
    navigate(PATH.ACCOUNT);
  };

  const handleClickLogout = () => {
    console.log('logout');
    navigate(PATH.MAIN);
  };

  const getUserInfo = async () => {
    try {
      const responseInfo = await http.get('/api/v1/user/me');
      console.log(responseInfo);
      setUser(responseInfo.data);
    } catch (e) {
      handleAxiosError(e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

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
                  이름
                </Typography>
                <Typography variant="subtitle1">홍길동</Typography>
              </Flex>
              <Flex>
                <Typography
                  variant="h4"
                  style={{
                    width: ' 153px',
                  }}
                >
                  닉네임
                </Typography>
                <Typography variant="subtitle1">별명</Typography>
              </Flex>
              <Flex>
                <Typography
                  variant="h4"
                  style={{
                    width: ' 153px',
                  }}
                >
                  구독 상태
                </Typography>
                <Typography variant="subtitle1">{user.hasSubscribed ? '유료 회원' : '무료 회원'}</Typography>
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
                <Flex alignItems="center">
                  <Typography variant="subtitle1">일반 회원가입</Typography>
                </Flex>
                <Flex alignItems="center">
                  <img
                    src="/src/assets/aouth/naver/btnG_아이콘사각.png"
                    alt="naver_login"
                    style={{ width: '18px', height: '18px' }}
                  />
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginLeft: '6px',
                    }}
                  >
                    NAVER
                  </Typography>
                </Flex>
                <Flex alignItems="center">
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    style={{
                      width: '18px',
                      height: '18px',
                      backgroundColor: styleToken.color.kakao,
                      borderRadius: '2px',
                    }}
                  >
                    <img
                      src="/src/assets/aouth/kakao/kakao_logo.svg"
                      alt="kakao_login"
                      style={{ width: '10px', height: '10px' }}
                    />
                  </Flex>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginLeft: '6px',
                    }}
                  >
                    KAKAO
                  </Typography>
                </Flex>
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
