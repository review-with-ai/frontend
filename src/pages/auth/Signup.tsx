import { Flex } from '@chakra-ui/react';
import { BaseButton, ErrorMessage, HomeContainer, Input, styleToken, Typography } from '@/shared';

export const Signup = () => {
  const handleClickSignup = () => {
    console.log('signup');
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
        회원가입
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
            type="email"
            placeholder="이메일"
            style={{
              height: '46px',
            }}
          />
        </Flex>
        <ErrorMessage
          message="입력하신 내용을 다시 확인해주세요."
          style={{ paddingBottom: '10px', marginTop: '-6px' }}
        />
        <Flex
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          width="300px"
          border={`1px solid ${styleToken.color.gray200}`}
          borderRadius="6px"
        >
          <Input
            type="password"
            placeholder="비밀번호"
            style={{
              height: '46px',
            }}
          />
        </Flex>
        <ErrorMessage
          message="입력하신 내용을 다시 확인해주세요."
          style={{ paddingBottom: '10px', marginTop: '-6px' }}
        />
        <Flex
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          width="300px"
          border={`1px solid ${styleToken.color.gray200}`}
          borderRadius="6px"
        >
          <Input
            type="password"
            placeholder="비밀번호 확인"
            style={{
              height: '46px',
            }}
          />
        </Flex>
        <ErrorMessage
          message="입력하신 내용을 다시 확인해주세요."
          style={{ paddingBottom: '10px', marginTop: '-6px' }}
        />
        <Flex
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          width="300px"
          border={`1px solid ${styleToken.color.gray200}`}
          borderRadius="6px"
        >
          <Input
            type="text"
            placeholder="닉네임"
            style={{
              height: '46px',
            }}
          />
        </Flex>
        <ErrorMessage
          message="입력하신 내용을 다시 확인해주세요."
          style={{ paddingBottom: '10px', marginTop: '-6px' }}
        />
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
        onClick={handleClickSignup}
      >
        회원가입
      </BaseButton>
    </HomeContainer>
  );
};
