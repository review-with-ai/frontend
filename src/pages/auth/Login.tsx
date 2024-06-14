import { Flex } from '@chakra-ui/react';
import { BaseButton, ErrorMessage, HomeContainer, Input, styleToken, Typography } from '@/shared';

export const Login = () => {
  const handleClickLogin = () => {
    console.log('login');
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
        로그인
      </Typography>
      <Flex direction="column" justifyContent="flex-start" alignItems="center" width="100%" gap="14px" margin="20px 0">
        <Flex
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          width="300px"
          border={`1px solid ${styleToken.color.gray200}`}
          borderRadius="6px"
        >
          <Input
            placeholder="이메일"
            style={{
              height: '46px',
            }}
          />
        </Flex>
        <Flex
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          width="300px"
          border={`1px solid ${styleToken.color.gray200}`}
          borderRadius="6px"
        >
          <Input
            placeholder="비밀번호"
            style={{
              height: '46px',
            }}
          />
        </Flex>
      </Flex>
      <BaseButton
        type="button"
        theme="active"
        style={{
          width: '300px',
          height: '40px',
          border: 'none',
          borderRadius: '6px',
        }}
        onClick={handleClickLogin}
      >
        로그인
      </BaseButton>
      <ErrorMessage message={'이메일 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.'} />
    </HomeContainer>
  );
};
