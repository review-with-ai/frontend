import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { http, PATH, styleToken } from '@/shared';
import { BaseButton, HomeContainer, Typography } from '@/shared/components';

export const Main = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate(PATH.LOG_IN);
  };

  const handleClickSginup = () => {
    navigate(PATH.SIGN_UP);
  };

  const handleClickKakaoLogin = () => {
    console.log('kakao');
    http.get('/api/v1/oauth2/authorization/kakao');
  };

  const handleClickNaverLogin = () => {
    console.log('naver');
    http.get('/api/v1/oauth2/authorization/naver');
  };

  return (
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
          theme="gray"
          style={{
            width: '300px',
            height: '40px',
            color: styleToken.color.gray600,
            border: `2px solid ${styleToken.color.gray500}`,
            borderRadius: '46px',
          }}
          onClick={handleClickLogin}
        >
          로그인
        </BaseButton>
        <BaseButton
          type="button"
          theme="gray"
          style={{
            width: '300px',
            height: '40px',
            color: styleToken.color.gray600,
            border: `2px solid ${styleToken.color.gray500}`,
            borderRadius: '46px',
          }}
          onClick={handleClickSginup}
        >
          회원가입
        </BaseButton>
      </Flex>
      <Flex direction="row" justifyContent="center" alignItems="center" gap="20px" marginTop="20px">
        <BaseButton
          type="button"
          theme="gray"
          style={{
            width: '45px',
            height: '45px',
            backgroundColor: styleToken.color.kakao,
            borderRadius: '50%',
          }}
          padding="0"
          border="none"
          img={
            <img
              src="/src/assets/aouth/kakao/kakao_logo.svg"
              alt="kakao_login"
              style={{ width: '20px', height: '20px' }}
            />
          }
          onClick={handleClickKakaoLogin}
        />
        <BaseButton
          type="button"
          theme="gray"
          style={{
            width: '45px',
            height: '45px',
          }}
          padding="0"
          border="none"
          img={
            <img
              src="/src/assets/aouth/naver/btnG_아이콘원형.png"
              alt="naver_login"
              style={{ width: '100%', height: '100%' }}
            />
          }
          onClick={handleClickNaverLogin}
        />
      </Flex>
    </HomeContainer>
  );
};
