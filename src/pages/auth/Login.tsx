import { Flex } from '@chakra-ui/react';
import { BaseButton, HomeContainer, Input, styleToken, Typography } from '@/shared';

export const Login = () => {
  const handleClickLogin = () => {
    console.log('login');
  };

  const handleClickReset = () => {
    console.log('reset');
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
          <button type="button" onClick={handleClickReset}>
            <img
              src="src/assets/icon/close.svg"
              alt="delete"
              style={{
                padding: '10px',
              }}
            />
          </button>
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
          <button type="button" onClick={handleClickReset}>
            <img
              src="src/assets/icon/close.svg"
              alt="delete"
              style={{
                padding: '10px',
              }}
            />
          </button>
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
    </HomeContainer>
  );
};
