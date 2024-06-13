import { Container, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { BaseButton, styleToken, Typography } from '@/shared';

export const Home = () => (
  <HomeContainer>
    <Typography
      variant="h1"
      style={{
        width: '100%',
        margin: '20px 0',
        textAlign: 'center',
      }}
    >
      Review with AI
    </Typography>
    <Flex direction="column" gap="14px">
      <BaseButton
        type="button"
        style={{
          width: '300px',
          height: '40px',
          color: styleToken.color.gray600,
          border: `2px solid ${styleToken.color.gray500}`,
          borderRadius: '46px',
        }}
      >
        로그인
      </BaseButton>
      <BaseButton
        type="button"
        style={{
          width: '300px',
          height: '40px',
          color: styleToken.color.gray600,
          border: `2px solid ${styleToken.color.gray500}`,
          borderRadius: '46px',
        }}
      >
        회원가입
      </BaseButton>
    </Flex>
    <Flex direction="column" justifyContent="center" alignItems="center" gap="12px" margin="20px">
      <button
        type="button"
        style={{
          width: '300px',
          height: '45px',
        }}
      >
        <img src="/src/assets/aouth/kakao/kakao_login_large_wide.png" alt="kakao_login" />
      </button>
      <button
        type="button"
        style={{
          width: '300px',
          height: '45px',
          backgroundColor: styleToken.color.naver,
        }}
      >
        <Flex direction="row" justifyContent="flex-start" alignItems="center">
          <img
            src="/src/assets/aouth/naver/btnG_아이콘사각.png"
            alt="naver_login"
            style={{
              width: '40px',
              height: '40px',
              marginLeft: '4px',
            }}
          />
          <Typography
            variant="subtitle1"
            color={styleToken.color.white}
            style={{
              flex: '1',
            }}
          >
            네이버 로그인
          </Typography>
        </Flex>
      </button>
    </Flex>
  </HomeContainer>
);

const HomeContainer = styled(Container)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  //border: 1px solid #1ea7fd;
`;
